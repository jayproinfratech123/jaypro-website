import test from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { testDatabase } from './database-helper.js';
import leadRoutes from '../routes/leadRoutes.js';
import authRoutes from '../routes/authRoutes.js';
import { normalizeLead, savePendingSiteVisit, saveVerifiedPayment } from '../services/leadService.js';

const fields = { fullName: 'Test Enquiry', mobile: '9876543210', city: 'Patna', purpose: 'Architecture Design' };
test('site visit verification updates one booking and preserves subsequent status changes', async t => {
  const db = await testDatabase(t);
  const order = { id: 'order_visit', amount: 150050, notes: { source: 'Engineer Site Visit', customer_name: "O'Brien", mobile: '9876543210', location: 'Other city', service: 'Custom inspection' } };
  await savePendingSiteVisit(order);
  let lead = await db.collection('crm_leads').findOne({ orderId: order.id });
  assert.equal(lead.customer, "O'Brien"); assert.equal(lead.amount, 1500.5); assert.equal(lead.status, 'New');
  await saveVerifiedPayment({ order, paymentId: 'pay_visit' });
  lead = await db.collection('crm_leads').findOne({ orderId: order.id });
  assert.equal(lead.status, 'Converted');
  await db.collection('crm_leads').updateOne({ id: lead.id }, { $set: { status: 'Contacted' } });
  await saveVerifiedPayment({ order, paymentId: 'pay_visit' });
  assert.equal(await db.collection('crm_leads').countDocuments(), 1);
  assert.equal((await db.collection('crm_leads').findOne({ id: lead.id })).status, 'Contacted');
  await assert.rejects(saveVerifiedPayment({ order: { ...order, id: 'missing' }, paymentId: 'missing' }), /not found/);
});
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
  const db = await testDatabase(t);
  await db.collection('crm_users').insertMany([
    { id: 'admin-id', name: 'Test Admin', email: 'admin@example.test', role: 'admin', password_hash: await bcrypt.hash('test-password-123', 4) },
    { id: 'customer-id', name: 'Customer', email: 'other@example.test', role: 'customer' },
  ]);
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
  const failingCollection = db.collection('crm_leads');
  const originalCollection = db.collection.bind(db);
  t.mock.method(failingCollection, 'insertOne', async () => { throw new Error('Database unavailable'); });
  t.mock.method(failingCollection, 'updateOne', async () => { throw new Error('Database unavailable'); });
  t.mock.method(db, 'collection', name => name === 'crm_leads' ? failingCollection : originalCollection(name));
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

test('payment persistence is duplicate-safe under concurrent verification', async t => {
  const db = await testDatabase(t);
  const input = { order: { id: 'order_test', amount: 12500, notes: { customer_name: "O'Brien", mobile: '9876543210', location: 'Patna', service: 'Design' } }, paymentId: 'pay_test' };
  await Promise.all(Array.from({ length: 5 }, () => saveVerifiedPayment(input)));
  const leads = await db.collection('crm_leads').find({}).toArray();
  assert.equal(leads.length, 1); assert.equal(leads[0].customer, "O'Brien");
  assert.equal(leads[0].amount, 125); assert.equal(leads[0].paymentId, 'pay_test');
});
