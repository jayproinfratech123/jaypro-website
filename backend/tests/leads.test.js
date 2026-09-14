import test from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import pool from '../config/db.js';
import leadRoutes from '../routes/leadRoutes.js';
import authRoutes from '../routes/authRoutes.js';
import { normalizeLead, saveVerifiedPayment } from '../services/leadService.js';

const fields = { fullName: 'Test Enquiry', mobile: '9876543210', city: 'Patna', purpose: 'Architecture Design' };
test('validation rejects bad phones, dates and statuses and ignores public admin-only fields', () => {
  const publicLead = normalizeLead({ ...fields, status: 'Converted', notes: 'forged', source: 'Payment', followUp: '2030-01-01' });
  assert.equal(publicLead.status, 'New');
  assert.equal(publicLead.source, 'Website');
  assert.equal(publicLead.notes, '');
  assert.equal(publicLead.followUp, null);
  assert.throws(() => normalizeLead({ ...fields, mobile: 'invalid' }), /phone/);
  assert.throws(() => normalizeLead({ ...fields, fullName: {} }), /valid lead/);
  assert.throws(() => normalizeLead({ ...fields, status: 'Paid' }, true), /status/);
  assert.throws(() => normalizeLead({ ...fields, date: '2026-02-30' }, true), /date/);
});

test('HTTP flow: public submission, protected admin listing/editing, login, refresh, logout and database failures', async t => {
  process.env.JWT_SECRET = 'isolated-test-secret-that-is-not-a-production-secret';
  const leads = new Map();
  const sessions = new Map();
  const users = new Map([
    ['admin-id', { id: 'admin-id', name: 'Test Admin', email: 'admin@example.test', role: 'admin', password_hash: await bcrypt.hash('test-password-123', 4) }],
    ['customer-id', { id: 'customer-id', name: 'Customer', role: 'customer' }],
  ]);
  let failWrites = false;
  t.mock.method(pool, 'execute', async (sql, values) => {
    if (sql.startsWith('SELECT * FROM crm_users')) return [[...users.values()].filter(u => u.email === values[0])];
    if (sql.startsWith('SELECT id, name, email, role')) return [[users.get(values[0])].filter(Boolean)];
    if (sql.startsWith('INSERT INTO crm_sessions')) { sessions.set(values[0], values[1]); return [{}]; }
    if (sql.startsWith('SELECT u.id')) return [sessions.has(values[0]) ? [{ id: sessions.get(values[0]) }] : []];
    if (sql.startsWith('DELETE FROM crm_sessions')) { sessions.delete(values[0]); return [{}]; }
    if (sql.startsWith('INSERT INTO crm_users')) {
      const [id, name, email, password_hash, role] = values;
      users.set(id, { id, name, email, password_hash, role }); return [{}];
    }
    if (sql.startsWith('INSERT INTO crm_leads')) {
      if (failWrites) throw new Error('Database unavailable');
      const [customer, phone, city, service, source, date, status, followUp, notes] = values;
      const insertId = leads.size + 1;
      const id = `L${String(insertId).padStart(3, '0')}`;
      leads.set(id, { id, customer, phone, city, service, source, date, status, followUp: followUp || '', notes });
      return [{ affectedRows: 1, insertId }];
    }
    if (sql.startsWith('UPDATE crm_leads')) {
      if (failWrites) throw new Error('Database unavailable');
      const [customer, phone, city, service, source, date, status, followUp, notes, rawId] = values;
      const id = `L${String(Number(rawId)).padStart(3, '0')}`;
      if (leads.has(id)) leads.set(id, { id, customer, phone, city, service, source, date, status, followUp: followUp || '', notes });
      return [{}];
    }
    if (sql.includes('FROM crm_leads WHERE id')) return [[leads.get(`L${String(Number(values[0])).padStart(3, '0')}`)].filter(Boolean)];
    throw new Error(`Unexpected test query: ${sql}`);
  });
  t.mock.method(pool, 'query', async () => [[...leads.values()]]);
  const app = express();
  app.use(express.json());
  app.use('/api/leads', leadRoutes);
  app.use('/api/auth', authRoutes);
  app.use((error, req, res, next) => res.status(error.statusCode || 500).json({ success: false }));
  const server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  t.after(async () => { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); });
  const base = `http://127.0.0.1:${server.address().port}/api`;
  const call = (path, { method = 'GET', body, token } = {}) => fetch(`${base}${path}`, {
    method, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const token = role => jwt.sign({ type: 'access' }, process.env.JWT_SECRET, { subject: `${role}-id`, expiresIn: '5m' });
  assert.equal((await call('/leads')).status, 401);
  assert.equal((await call('/leads', { token: token('customer') })).status, 403);
  assert.equal((await call('/leads/admin', { method: 'POST', body: fields })).status, 401);
  assert.equal((await call('/leads', { method: 'POST', body: { ...fields, mobile: 'bad' } })).status, 400);
  const submitted = await call('/leads', { method: 'POST', body: fields });
  assert.equal(submitted.status, 201);
  const { id } = await submitted.json();
  const result = await (await call('/leads', { token: token('admin') })).json();
  assert.equal(result.leads.length, 1);
  assert.equal(result.leads[0].customer, fields.fullName);
  const edited = { ...result.leads[0], status: 'Follow Up', followUp: '2027-01-15', notes: "Customer's revised requirements" };
  assert.equal((await call(`/leads/${id}`, { method: 'PUT', body: edited, token: token('customer') })).status, 403);
  assert.equal((await call(`/leads/${id}`, { method: 'PUT', body: edited, token: token('admin') })).status, 200);
  const reread = await (await call(`/leads/${id}`, { token: token('admin') })).json();
  assert.equal(reread.lead.followUp, edited.followUp);
  assert.equal(reread.lead.notes, edited.notes);
  assert.equal((await call('/leads/missing', { token: token('admin') })).status, 404);
  assert.equal((await call('/leads/admin', { method: 'POST', body: edited, token: token('admin') })).status, 201);
  failWrites = true;
  assert.equal((await call('/leads', { method: 'POST', body: fields })).status, 500);
  assert.equal((await call(`/leads/${id}`, { method: 'PUT', body: edited, token: token('admin') })).status, 500);
  assert.equal((await call('/auth/login', { method: 'POST', body: { email: 'admin@example.test', password: 'wrong' } })).status, 401);
  const login = await (await call('/auth/login', { method: 'POST', body: { email: 'admin@example.test', password: 'test-password-123' } })).json();
  assert.equal(login.user.role, 'admin');
  assert.equal(login.user.password_hash, undefined);
  assert.equal((await call('/auth/me', { token: login.accessToken })).status, 200);
  assert.equal((await call('/auth/refresh', { method: 'POST', body: { refreshToken: login.refreshToken } })).status, 200);
  await call('/auth/logout', { method: 'POST', body: { refreshToken: login.refreshToken } });
  assert.equal((await call('/auth/refresh', { method: 'POST', body: { refreshToken: login.refreshToken } })).status, 401);
  const registration = await (await call('/auth/register', { method: 'POST', body: { name: 'Customer', email: 'customer@example.test', password: 'test-password-456', role: 'admin' } })).json();
  assert.equal(registration.user.role, 'customer');
  assert.equal((await call('/leads', { token: registration.accessToken })).status, 403);
});

test('payment persistence uses provider metadata and a duplicate-safe parameterized query', async t => {
  const execute = t.mock.method(pool, 'execute', async () => [{}]);
  await saveVerifiedPayment({ order: { id: 'order_test', amount: 12500, notes: { customer_name: "O'Brien", mobile: '9876543210', location: 'Patna', service: 'Design' } }, paymentId: 'pay_test' });
  const [sql, values] = execute.mock.calls[0].arguments;
  assert.match(sql, /ON DUPLICATE KEY UPDATE/);
  assert.ok(!sql.includes("O'Brien"));
  assert.equal(values[0], "O'Brien");
  assert.equal(values.at(-1), 125);
});
