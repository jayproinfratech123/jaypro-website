import express from 'express';
import bcrypt from 'bcryptjs';
import { randomBytes, randomUUID } from 'node:crypto';
import pool from '../config/db.js';
import { requireAuth, requireAdmin } from '../middleware/auth.js';
import { statuses } from '../services/leadService.js';
const router = express.Router();
const run = fn => (req, res, next) => Promise.resolve(fn(req, res)).catch(next);
router.use(requireAuth);
const employeeOnly = (req, res, next) => req.user.role === 'employee' ? next() : res.status(403).json({ message: 'Employee access required.' });
router.get('/my-leads', employeeOnly, run(async (req, res) => {
  const [leads] = await pool.execute(`SELECT l.id, l.customer, l.phone, l.city, l.service, l.status, l.notes,
    COALESCE(DATE_FORMAT(l.follow_up, '%Y-%m-%d'), '') AS followUp
    FROM crm_leads l JOIN crm_lead_assignments a ON a.lead_id=l.id WHERE a.employee_id=? ORDER BY l.created_at DESC`, [req.user.id]);
  res.json({ leads });
}));
router.put('/my-leads/:id', employeeOnly, run(async (req, res) => {
  const { status, notes, followUp } = req.body;
  if (!/^\d+$/.test(req.params.id) || !statuses.includes(status) || typeof notes !== 'string' || notes.length > 10000 ||
      (followUp && (typeof followUp !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(followUp) || !Number.isFinite(Date.parse(followUp)) || new Date(followUp).toISOString().slice(0,10) !== followUp))) {
    return res.status(400).json({ message: 'Enter valid status, notes and follow-up date.' });
  }
  const [result] = await pool.execute(`UPDATE crm_leads l JOIN crm_lead_assignments a ON a.lead_id=l.id
    SET l.status=?, l.notes=?, l.follow_up=? WHERE l.id=? AND a.employee_id=?`, [status, notes, followUp || null, req.params.id, req.user.id]);
  res.status(result.affectedRows ? 200 : 404).json(result.affectedRows ? { success: true } : { message: 'Assigned lead not found.' });
}));
router.use(requireAdmin);
router.get('/assignments/:id', run(async (req, res) => {
  const [rows] = await pool.execute('SELECT employee_id AS employeeId FROM crm_lead_assignments WHERE lead_id=?', [/^L\d+$/.test(req.params.id) ? req.params.id.slice(1) : '0']);
  res.json({ employeeId: rows[0]?.employeeId || '' });
}));
router.put('/assignments/:id', run(async (req, res) => {
  if (!/^L\d+$/.test(req.params.id) || typeof req.body.employeeId !== 'string') return res.status(400).json({ message: 'Invalid assignment.' });
  const leadId = req.params.id.slice(1);
  const [leads] = await pool.execute('SELECT id FROM crm_leads WHERE id=?', [leadId]);
  if (!leads.length) return res.status(404).json({ message: 'Lead not found.' });
  if (!req.body.employeeId) {
    await pool.execute('DELETE FROM crm_lead_assignments WHERE lead_id=?', [leadId]);
  } else {
    const [employees] = await pool.execute("SELECT id FROM crm_users WHERE id=? AND role='employee'", [req.body.employeeId]);
    if (!employees.length) return res.status(400).json({ message: 'Employee not found.' });
    await pool.execute('INSERT INTO crm_lead_assignments (lead_id, employee_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE employee_id=VALUES(employee_id)', [leadId, req.body.employeeId]);
  }
  res.json({ success: true });
}));
router.get('/', run(async (req, res) => {
  const [employees] = await pool.execute("SELECT id, name, email AS loginId FROM crm_users WHERE role='employee' ORDER BY name");
  res.json({ employees });
}));
router.post('/', run(async (req, res) => {
  const { name, loginId, password } = req.body;
  if (typeof name !== 'string' || !name.trim() || name.trim().length > 150 ||
      typeof loginId !== 'string' || !/^[a-zA-Z0-9][a-zA-Z0-9._@-]{2,253}$/.test(loginId) ||
      (password !== undefined && password !== '' && (typeof password !== 'string' || password.length < 12 || Buffer.byteLength(password) > 72))) {
    return res.status(400).json({ message: 'Enter a name, valid login ID (3-254 characters), and password of at least 12 characters (maximum 72 bytes), or leave the password blank to generate it.' });
  }
  const credential = password || randomBytes(18).toString('base64url');
  const employee = { id: randomUUID(), name: name.trim(), loginId: loginId.toLowerCase() };
  try {
    await pool.execute('INSERT INTO crm_users (id, name, email, password_hash, role) VALUES (?, ?, ?, ?, ?)',
      [employee.id, employee.name, employee.loginId, await bcrypt.hash(credential, 12), 'employee']);
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') return res.status(409).json({ message: 'That login ID is already in use.' });
    throw error;
  }
  res.set('Cache-Control', 'no-store').status(201).json({ employee, password: credential });
}));
export default router;
