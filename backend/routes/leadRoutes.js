import express from 'express';
import { requireAuth, requireAdmin } from '../middleware/auth.js';
import { normalizeLead, createLead, listLeads, getLead, updateLead } from '../services/leadService.js';
const router = express.Router();
const run = fn => (req, res, next) => Promise.resolve(fn(req, res)).catch(next);
router.post('/', run(async (req, res) => {
  const lead = await createLead(normalizeLead(req.body));
  res.status(201).json({ success: true, id: lead.id });
}));
router.use(requireAuth, requireAdmin);
router.get('/', run(async (req, res) => res.json({ success: true, leads: await listLeads() })));
router.post('/admin', run(async (req, res) => res.status(201).json({ success: true, lead: await createLead(normalizeLead(req.body, true)) })));
router.get('/:id', run(async (req, res) => {
  const lead = await getLead(req.params.id);
  res.status(lead ? 200 : 404).json(lead ? { success: true, lead } : { message: 'Lead not found.' });
}));
router.put('/:id', run(async (req, res) => {
  const lead = await updateLead(req.params.id, normalizeLead(req.body, true));
  res.status(lead ? 200 : 404).json(lead ? { success: true, lead } : { message: 'Lead not found.' });
}));
export default router;
