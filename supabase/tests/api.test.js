import test from 'node:test';
import assert from 'node:assert/strict';
import { createHandler } from '../functions/api/handler.js';
import { normalizeLead } from '../functions/api/validation.js';

const ids = { admin: '00000000-0000-4000-8000-000000000001', employee: '00000000-0000-4000-8000-000000000002', other: '00000000-0000-4000-8000-000000000003', customer: '00000000-0000-4000-8000-000000000004' };
const fields = { fullName: "O'Brien", mobile: '9876543210', city: 'Patna', purpose: 'Architecture' };
const env = { SUPABASE_URL: 'https://project.supabase.co', SUPABASE_ANON_KEY: 'public-test-key', SUPABASE_SERVICE_ROLE_KEY: 'private-test-key', CLIENT_URL: 'https://jayproinfratech.com', RAZORPAY_KEY_ID: 'test-key', RAZORPAY_KEY_SECRET: 'test-secret' };
function fixture() {
  const state = {
    jaypro_profiles: Object.entries(ids).map(([role, id]) => ({ id, name: role, email: `${role}@example.test`, role: role === 'other' ? 'employee' : role })),
    jaypro_leads: [], jaypro_messages: [], authCalls: [], databaseCalls: [], orders: new Map(), payments: new Map(),
    rpcCalls: 0, failDatabase: false, confirmed: false,
  };
  const json = (body, status = 200) => new Response(JSON.stringify(body), { status });
  const fetchImpl = async (input, options = {}) => {
    const url = new URL(input), path = url.pathname, method = options.method || 'GET';
    const body = options.body ? JSON.parse(options.body) : undefined;
    if (url.hostname === 'api.razorpay.com') {
      if (method === 'POST') {
        const order = { ...body, id: `order_${state.orders.size + 1}` };
        state.orders.set(order.id, order); return json(order);
      }
      const id = path.split('/').pop();
      return json(path.includes('/orders/') ? state.orders.get(id) : state.payments.get(id));
    }
    if (path.startsWith('/auth/')) {
      state.authCalls.push({ path, method, body, authorization: options.headers.Authorization });
      if (path.endsWith('/user')) {
        const role = options.headers.Authorization?.replace('Bearer ', '');
        return ids[role] ? json({ id: ids[role] }) : json({ message: 'Invalid JWT' }, 401);
      }
      if (path.endsWith('/logout')) return new Response(null, { status: 204 });
      if (path.endsWith('/signup')) {
        assert.equal(options.headers.apikey, env.SUPABASE_ANON_KEY);
        return state.confirmed ? json({ access_token: 'customer', refresh_token: 'refresh-new', user: { id: ids.customer } }) : json({ user: { id: ids.customer } });
      }
      if (path.endsWith('/token')) {
        assert.equal(options.headers.apikey, env.SUPABASE_ANON_KEY);
        if (body.password === 'wrong' || body.refresh_token === 'expired') return json({ error_code: 'invalid_grant' }, 400);
        return json({ access_token: 'customer', refresh_token: 'rotated-refresh', user: { id: ids.customer } });
      }
      if (path.endsWith('/admin/users')) {
        assert.equal(options.headers.apikey, env.SUPABASE_SERVICE_ROLE_KEY);
        const id = '00000000-0000-4000-8000-000000000099';
        state.jaypro_profiles.push({ id, email: body.email, name: body.user_metadata.name, role: 'customer' });
        return json({ id });
      }
    }
    if (path.startsWith('/rest/')) {
      assert.equal(options.headers.apikey, env.SUPABASE_SERVICE_ROLE_KEY);
      state.databaseCalls.push({ path, method, body, params: url.searchParams });
      if (state.failDatabase) return json({ message: 'Secret internal database error', code: 'XX000' }, 500);
      if (path.endsWith('/rpc/jaypro_verify_payment')) {
        state.rpcCalls++;
        const lead = state.jaypro_leads.find(row => row.orderId === body.p_order_id);
        if (!lead || (lead.paymentId && lead.paymentId !== body.p_payment_id)) return json(false);
        if (!lead.paymentId) lead.status = 'Converted';
        lead.paymentId = body.p_payment_id;
        return json(true);
      }
      const table = path.split('/').pop(), rows = state[table];
      assert.ok(Array.isArray(rows), `Unexpected table ${table}`);
      const matches = row => [...url.searchParams].every(([key, value]) => !value.startsWith('eq.') || String(row[key]) === value.slice(3));
      if (method === 'POST') {
        const row = { id: rows.length + 1, ...body };
        rows.push(row); return json([row]);
      }
      if (method === 'PATCH') {
        const matched = rows.filter(matches); matched.forEach(row => Object.assign(row, body)); return json(matched);
      }
      const selected = rows.filter(matches);
      const offset = Number(url.searchParams.get('offset') || 0), limit = Number(url.searchParams.get('limit') || 1000);
      return json(selected.slice(offset, offset + limit));
    }
    throw new Error(`Unexpected upstream request ${path}`);
  };
  const handler = createHandler({ env, fetchImpl });
  const call = (path, { method = 'GET', body, role, origin } = {}) => handler(new Request(`https://project.supabase.co/functions/v1/api${path}`, {
    method, headers: { ...(role ? { Authorization: `Bearer ${role}` } : {}), ...(origin ? { Origin: origin } : {}) },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  }));
  return { state, call, handler };
}

test('CORS permits the website and blocks other browser origins', async () => {
  const { call } = fixture();
  const preflight = await call('/leads', { method: 'OPTIONS', origin: env.CLIENT_URL });
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get('Access-Control-Allow-Origin'), env.CLIENT_URL);
  assert.equal((await call('/leads', { method: 'POST', origin: 'https://evil.test', body: fields })).status, 403);
});
test('public enquiries strip privileged fields and validate inputs', async () => {
  const { call, state } = fixture();
  const response = await call('/leads', { method: 'POST', body: { ...fields, status: 'Converted', employeeId: ids.employee, paymentId: 'fake', role: 'admin' } });
  assert.equal(response.status, 201);
  assert.equal((await response.json()).id, 'L001');
  assert.equal(state.jaypro_leads[0].status, 'New');
  assert.equal(state.jaypro_leads[0].employeeId, undefined);
  assert.equal(state.jaypro_leads[0].paymentId, undefined);
  assert.equal((await call('/leads', { method: 'POST', body: { ...fields, mobile: 'bad' } })).status, 400);
  assert.throws(() => normalizeLead({ ...fields, date: '2026-02-30' }, true), /date/);
});
test('protected routes verify identity and authoritative database roles', async () => {
  const { call, state } = fixture();
  for (const role of [undefined, 'forged']) assert.equal((await call('/leads', { role })).status, 401);
  assert.equal(state.databaseCalls.length, 0);
  for (const role of ['customer', 'employee']) assert.equal((await call('/leads', { role })).status, 403);
  assert.equal((await call('/leads', { role: 'admin' })).status, 200);
  assert.equal((await call('/not-implemented')).status, 404);
});
test('employee updates cannot modify another employee lead or assignment', async () => {
  const { call, state } = fixture();
  state.jaypro_leads.push({ id: 1, ...normalizeLead(fields), employeeId: ids.employee });
  const body = { status: 'Contacted', notes: 'Called', followUp: '2027-01-01', employeeId: ids.other, paymentId: 'fake' };
  assert.equal((await call('/employees/my-leads/1', { role: 'other', method: 'PUT', body })).status, 404);
  assert.equal((await call('/employees/my-leads/1', { role: 'employee', method: 'PUT', body })).status, 200);
  assert.equal(state.jaypro_leads[0].employeeId, ids.employee);
  assert.equal(state.jaypro_leads[0].paymentId, undefined);
  assert.equal((await call('/employees/assignments/L001', { role: 'employee', method: 'PUT', body: { employeeId: ids.other } })).status, 403);
  assert.equal((await call('/employees/assignments/L001', { role: 'admin', method: 'PUT', body: { employeeId: ids.customer } })).status, 400);
  assert.equal((await call('/employees/assignments/L001', { role: 'admin', method: 'PUT', body: { employeeId: '' } })).status, 200);
  assert.equal(state.jaypro_leads[0].employeeId, null);
});
test('signup supports confirmation and never forwards privileged metadata', async () => {
  const { call, state } = fixture();
  const body = { name: 'Customer', email: 'customer@example.test', password: 'long-password-123', role: 'admin', app_metadata: { role: 'admin' } };
  const response = await call('/auth/register', { method: 'POST', body });
  assert.equal(response.status, 201);
  assert.equal((await response.json()).confirmationRequired, true);
  assert.deepEqual(state.authCalls[0].body.data, { name: 'Customer' });
  assert.equal(state.authCalls[0].body.app_metadata, undefined);
  state.confirmed = true;
  assert.equal((await (await call('/auth/register', { method: 'POST', body })).json()).user.role, 'customer');
});
test('login, rotating refresh tokens, and logout use Supabase Auth', async () => {
  const { call, state } = fixture();
  assert.equal((await call('/auth/login', { method: 'POST', body: { email: 'customer@example.test', password: 'wrong' } })).status, 401);
  const login = await (await call('/auth/login', { method: 'POST', body: { email: 'customer@example.test', password: 'correct-password' } })).json();
  assert.equal(login.user.id, ids.customer);
  const refresh = await (await call('/auth/refresh', { method: 'POST', body: { refreshToken: 'old-refresh' } })).json();
  assert.equal(refresh.refreshToken, 'rotated-refresh');
  assert.equal((await call('/auth/refresh', { method: 'POST', body: { refreshToken: 'expired' } })).status, 401);
  assert.equal((await call('/auth/logout', { method: 'POST', role: 'customer', body: {} })).status, 200);
  assert.equal(state.authCalls.at(-1).authorization, 'Bearer customer');
});
test('only admins can create Supabase employee accounts', async () => {
  const { call, state } = fixture();
  const body = { name: 'New employee', loginId: 'employee2@example.test' };
  assert.equal((await call('/employees', { role: 'customer', method: 'POST', body })).status, 403);
  const response = await call('/employees', { role: 'admin', method: 'POST', body });
  assert.equal(response.status, 201);
  const data = await response.json();
  assert.ok(data.password.length >= 12);
  assert.equal(state.jaypro_profiles.at(-1).role, 'employee');
  assert.equal(state.authCalls.find(call => call.path.endsWith('/admin/users')).body.email_confirm, true);
});
test('lists paginate past the PostgREST row limit', async () => {
  const { call, state } = fixture();
  state.jaypro_leads = Array.from({ length: 1001 }, (_, i) => ({ id: i + 1, ...normalizeLead(fields) }));
  const response = await call('/leads', { role: 'admin' });
  assert.equal((await response.json()).leads.length, 1001);
});
test('chat requests are scoped to the authenticated user', async () => {
  const { call, state } = fixture();
  await call('/chat/messages', { role: 'customer', method: 'POST', body: { text: 'Hello', user_id: ids.admin, sender: 'Admin' } });
  assert.equal(state.jaypro_messages[0].user_id, ids.customer);
  assert.equal(state.jaypro_messages[0].sender, 'customer');
  assert.equal((await (await call('/chat/messages', { role: 'other' })).json()).messages.length, 0);
});
test('database failures do not report success or leak internal messages', async () => {
  const { call, state } = fixture();
  state.failDatabase = true;
  const response = await call('/leads', { method: 'POST', body: fields });
  assert.equal(response.status, 500);
  assert.doesNotMatch(await response.text(), /Secret internal/);
});
async function signedPayment(state, order) {
  const paymentId = 'pay_test1';
  state.payments.set(paymentId, { id: paymentId, order_id: order.orderId, amount: order.amount, currency: 'INR', status: 'captured' });
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(env.RAZORPAY_KEY_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const signature = new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${order.orderId}|${paymentId}`)));
  return { localOrderId: order.localOrderId, razorpay_order_id: order.orderId, razorpay_payment_id: paymentId, razorpay_signature: [...signature].map(byte => byte.toString(16).padStart(2, '0')).join('') };
}
const orderBody = { serviceId: 'custom-payment', serviceName: 'Inspection', amount: 1500.5, source: 'Engineer Site Visit', customer: { fullName: 'Test Customer', mobile: '9876543210', location: 'Patna' } };
test('Razorpay verification rejects tampering, validates capture, and preserves repeated verification', async () => {
  const { call, state } = fixture();
  const orderResponse = await call('/payments/create-order', { method: 'POST', body: orderBody });
  assert.equal(orderResponse.status, 201);
  const order = await orderResponse.json();
  assert.equal(state.jaypro_leads[0].status, 'New');
  const body = await signedPayment(state, order);
  assert.equal((await call('/payments/verify', { method: 'POST', body: { ...body, razorpay_signature: '0'.repeat(64) } })).status, 400);
  assert.equal(state.rpcCalls, 0);
  state.payments.get(body.razorpay_payment_id).status = 'authorized';
  assert.equal((await call('/payments/verify', { method: 'POST', body })).status, 409);
  assert.equal(state.rpcCalls, 0);
  state.payments.get(body.razorpay_payment_id).status = 'captured';
  assert.equal((await call('/payments/verify', { method: 'POST', body })).status, 200);
  assert.equal(state.jaypro_leads[0].status, 'Converted');
  state.jaypro_leads[0].status = 'Contacted';
  const retries = await Promise.all(Array.from({ length: 5 }, () => call('/payments/verify', { method: 'POST', body })));
  assert.ok(retries.every(response => response.status === 200));
  assert.equal(state.jaypro_leads.length, 1);
  assert.equal(state.jaypro_leads[0].status, 'Contacted');
});
test('checkout is not started when saving the pending order fails', async () => {
  const { call, state } = fixture(); state.failDatabase = true;
  assert.equal((await call('/payments/create-order', { method: 'POST', body: orderBody })).status, 503);
});
