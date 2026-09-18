import db, { nextLeadId } from '../config/db.js';
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
const leads = () => db.collection('crm_leads');
const databaseId = id => /^L\d+$/.test(id) ? Number(id.slice(1)) : 0;
async function serialize(lead) {
  if (!lead) return undefined;
  const employee = lead.employeeId ? await db.collection('crm_users').findOne({ id: lead.employeeId }) : null;
  return { id: 'L' + String(lead.id).padStart(3, '0'), customer: lead.customer, phone: lead.phone,
    city: lead.city, service: lead.service, source: lead.source, date: lead.date, status: lead.status,
    followUp: lead.followUp || '', notes: lead.notes, paymentId: lead.paymentId ?? null,
    orderId: lead.orderId ?? null, amount: lead.amount ?? null, assignedEmployeeName: employee?.name ?? null };
}
export async function listLeads() {
  return Promise.all((await leads().find({}).sort({ created_at: -1, id: -1 }).toArray()).map(serialize));
}
export async function getLead(id) { return serialize(await leads().findOne({ id: databaseId(id) })); }
export async function createLead(lead) {
  const id = await nextLeadId();
  await leads().insertOne({ ...lead, id, created_at: new Date(), updated_at: new Date() });
  return getLead('L' + id);
}
export async function updateLead(id, lead) {
  await leads().updateOne({ id: databaseId(id) }, { $set: { ...lead, updated_at: new Date() } });
  return getLead(id);
}
function paymentLead(order) {
  return { customer: order.notes?.customer_name || '', phone: order.notes?.mobile || '', city: order.notes?.location || '',
    service: order.notes?.service || '', date: new Date().toISOString().slice(0, 10), followUp: null,
    orderId: order.id, amount: Number(order.amount) / 100 };
}
export async function savePendingSiteVisit(order) {
  await createLead({ ...paymentLead(order), source: 'Engineer Site Visit', status: 'New', notes: '' });
}
export async function saveVerifiedPayment({ order, paymentId }) {
  if (order.notes?.source === 'Engineer Site Visit') {
    const result = await leads().updateOne({ orderId: order.id, source: 'Engineer Site Visit' }, [{ $set: {
      status: { $cond: [{ $eq: [{ $ifNull: ['$paymentId', null] }, null] }, 'Converted', '$status'] },
      paymentId: { $literal: paymentId }, updated_at: '$$NOW',
    } }]);
    if (!result.matchedCount) throw new Error('Site visit booking was not found.');
    return;
  }
  const document = { ...paymentLead(order), id: await nextLeadId(), source: 'Payment', status: 'Converted',
    notes: 'Verified payment: ' + paymentId, created_at: new Date() };
  const filter = { orderId: order.id };
  try {
    await leads().updateOne(filter, { $setOnInsert: document, $set: { paymentId, updated_at: new Date() } }, { upsert: true });
  } catch (error) {
    if (error.code !== 11000 || !await leads().findOne(filter)) throw error;
    await leads().updateOne(filter, { $set: { paymentId, updated_at: new Date() } });
  }
}
