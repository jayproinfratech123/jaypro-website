import pool from '../config/db.js';
export const statuses = ['New', 'Contacted', 'Follow Up', 'Interested', 'Not Interested', 'Converted'];
export function normalizeLead(body, admin = false) {
  const field = (value, max, required = true) => {
    if (typeof value !== 'string' || value.trim().length > max || (required && !value.trim())) {
      throw Object.assign(new Error('Please enter valid lead details.'), { statusCode: 400 });
    }
    return value.trim();
  };
  const date = (value, optional = false) => {
    if (!value && optional) return null;
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(Date.parse(value)) || new Date(value).toISOString().slice(0, 10) !== value) {
      throw Object.assign(new Error('Invalid date.'), { statusCode: 400 });
    }
    return value;
  };
  const phone = field(body.phone ?? body.mobile, 20);
  if (!/^\d{10}$/.test(phone)) throw Object.assign(new Error('Enter a valid 10-digit phone number.'), { statusCode: 400 });
  const status = admin ? (body.status ?? 'New') : 'New';
  if (!statuses.includes(status)) throw Object.assign(new Error('Invalid lead status.'), { statusCode: 400 });
  return {
    customer: field(body.customer ?? body.fullName, 150), phone,
    city: field(body.city ?? body.location, 150), service: field(body.service ?? body.purpose, 255),
    source: admin ? field(body.source ?? 'Website', 255) : 'Website',
    date: admin ? date(body.date ?? new Date().toISOString().slice(0, 10)) : new Date().toISOString().slice(0, 10),
    status, followUp: admin ? date(body.followUp, true) : null,
    notes: admin ? field(body.notes ?? '', 10000, false) : '',
  };
}
const columns = "CONCAT('L', LPAD(id, GREATEST(3, CHAR_LENGTH(id)), '0')) AS id, customer, phone, city, service, source, DATE_FORMAT(date, '%Y-%m-%d') AS date, status, COALESCE(DATE_FORMAT(follow_up, '%Y-%m-%d'), '') AS followUp, notes, payment_id AS paymentId, order_id AS orderId, amount, (SELECT u.name FROM crm_lead_assignments a JOIN crm_users u ON u.id=a.employee_id WHERE a.lead_id=crm_leads.id) AS assignedEmployeeName";
const databaseId = id => /^L\d+$/.test(id) ? id.slice(1) : '0';
export async function listLeads() {
  const [rows] = await pool.query(`SELECT ${columns} FROM crm_leads ORDER BY created_at DESC, id DESC`);
  return rows;
}
export async function getLead(id) {
  const [rows] = await pool.execute(`SELECT ${columns} FROM crm_leads WHERE id = ?`, [databaseId(id)]);
  return rows[0];
}
export async function createLead(lead) {
  const [result] = await pool.execute('INSERT INTO crm_leads (customer, phone, city, service, source, date, status, follow_up, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [lead.customer, lead.phone, lead.city, lead.service, lead.source, lead.date, lead.status, lead.followUp, lead.notes]);
  return getLead(`L${result.insertId}`);
}
export async function updateLead(id, lead) {
  await pool.execute('UPDATE crm_leads SET customer=?, phone=?, city=?, service=?, source=?, date=?, status=?, follow_up=?, notes=? WHERE id=?',
    [lead.customer, lead.phone, lead.city, lead.service, lead.source, lead.date, lead.status, lead.followUp, lead.notes, databaseId(id)]);
  return getLead(id);
}
export async function savePendingSiteVisit(order) {
  await pool.execute(`INSERT INTO crm_leads
    (customer, phone, city, service, source, date, status, notes, order_id, amount)
    VALUES (?, ?, ?, ?, 'Engineer Site Visit', UTC_DATE(), 'New', '', ?, ?)`,
    [order.notes.customer_name, order.notes.mobile, order.notes.location,
      order.notes.service, order.id, Number(order.amount) / 100]);
}
export async function saveVerifiedPayment({ order, paymentId }) {
  if (order.notes?.source === 'Engineer Site Visit') {
    const [result] = await pool.execute(`UPDATE crm_leads
      SET status = CASE WHEN payment_id IS NULL THEN 'Converted' ELSE status END, payment_id = ?
      WHERE order_id = ? AND source = 'Engineer Site Visit'`, [paymentId, order.id]);
    if (!result.affectedRows) throw new Error('Site visit booking was not found.');
    return;
  }
  await pool.execute(`INSERT INTO crm_leads
    (customer, phone, city, service, source, date, status, notes, payment_id, order_id, amount)
    VALUES (?, ?, ?, ?, 'Payment', UTC_DATE(), 'Converted', ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE payment_id=VALUES(payment_id)`,
    [order.notes?.customer_name || '', order.notes?.mobile || '', order.notes?.location || '',
      order.notes?.service || '', `Verified payment: ${paymentId}`, paymentId, order.id, Number(order.amount) / 100]);
}
