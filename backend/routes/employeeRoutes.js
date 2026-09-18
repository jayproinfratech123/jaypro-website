import express from 'express';
import bcrypt from 'bcryptjs';
import { randomBytes, randomUUID } from 'node:crypto';
import db from '../config/db.js';
import { requireAuth, requireAdmin } from '../middleware/auth.js';
import { statuses } from '../services/leadService.js';
const router = express.Router();
const run = fn => (req, res, next) => Promise.resolve(fn(req, res)).catch(next);
router.use(requireAuth);
const employeeOnly = (req, res, next) => req.user.role === 'employee' ? next() : res.status(403).json({ message: 'Employee access required.' });
router.get('/my-leads', employeeOnly, run(async (req, res) => {
  const leads = (await db.collection('crm_leads').find({ employeeId: req.user.id }, { projection: { _id: 0, id: 1, customer: 1, phone: 1, city: 1, service: 1, status: 1, notes: 1, followUp: 1 } }).sort({ created_at: -1 }).toArray()).map(lead => ({ ...lead, followUp: lead.followUp || '' }));
  res.json({ leads });
}));
router.put('/my-leads/:id', employeeOnly, run(async (req, res) => {
  const { status, notes, followUp } = req.body;
  if (!/^\d+$/.test(req.params.id) || !statuses.includes(status) || typeof notes !== 'string' || notes.length > 10000 ||
      (followUp && (typeof followUp !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(followUp) || !Number.isFinite(Date.parse(followUp)) || new Date(followUp).toISOString().slice(0,10) !== followUp))) {
    return res.status(400).json({ message: 'Enter valid status, notes and follow-up date.' });
  }
  const result = await db.collection('crm_leads').updateOne({ id: Number(req.params.id), employeeId: req.user.id }, { $set: { status, notes, followUp: followUp || null, updated_at: new Date() } });
  res.status(result.matchedCount ? 200 : 404).json(result.matchedCount ? { success: true } : { message: 'Assigned lead not found.' });
}));
router.use(requireAdmin);
router.get('/assignments/:id', run(async (req, res) => {
  const lead = await db.collection('crm_leads').findOne({ id: /^L\d+$/.test(req.params.id) ? Number(req.params.id.slice(1)) : 0 });
  res.json({ employeeId: lead?.employeeId || '' });
}));
router.put('/assignments/:id', run(async (req, res) => {
  if (!/^L\d+$/.test(req.params.id) || typeof req.body.employeeId !== 'string') return res.status(400).json({ message: 'Invalid assignment.' });
  const leadId = Number(req.params.id.slice(1));
  const lead = await db.collection('crm_leads').findOne({ id: leadId });
  if (!lead) return res.status(404).json({ message: 'Lead not found.' });
  if (!req.body.employeeId) {
    await db.collection('crm_leads').updateOne({ id: leadId }, { $unset: { employeeId: '' } });
  } else {
    const employee = await db.collection('crm_users').findOne({ id: req.body.employeeId, role: 'employee' });
    if (!employee) return res.status(400).json({ message: 'Employee not found.' });
    await db.collection('crm_leads').updateOne({ id: leadId }, { $set: { employeeId: req.body.employeeId } });
  }
  res.json({ success: true });
}));
router.get('/', run(async (req, res) => {
  const employees = (await db.collection('crm_users').find({ role: 'employee' }, { projection: { _id: 0, id: 1, name: 1, email: 1 } }).sort({ name: 1 }).toArray()).map(({ id, name, email }) => ({ id, name, loginId: email }));
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
    await db.collection('crm_users').insertOne({ id: employee.id, name: employee.name, email: employee.loginId, password_hash: await bcrypt.hash(credential, 12), role: 'employee' });
  } catch (error) {
    if (error.code === 11000) return res.status(409).json({ message: 'That login ID is already in use.' });
    throw error;
  }
  res.set('Cache-Control', 'no-store').status(201).json({ employee, password: credential });
}));
export default router;
