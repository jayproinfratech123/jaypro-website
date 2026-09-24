import { createServices } from './services.js';
import { HttpError, field, email, password, normalizeLead, leadUpdate, leadId, uuid } from './validation.js';
import { paymentRoute } from './payments.js';

const leadFields = 'id,customer,phone,city,service,source,date,status,followUp,notes,paymentId,orderId,amount,employeeId';
const userFields = 'id,name,email,role';
const serialize = (lead, names = new Map()) => ({ ...lead, id: 'L' + String(lead.id).padStart(3, '0'), followUp: lead.followUp || '', assignedEmployeeName: names.get(lead.employeeId) || null });

export function createHandler({ env, fetchImpl = fetch }) {
  const origins = (env.CLIENT_URL || 'http://localhost:5173').split(',').map(value => value.trim()).filter(Boolean);
  return async request => {
    const origin = request.headers.get('Origin');
    const allowed = !origin || origins.includes(origin);
    const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', Vary: 'Origin',
      ...(origin && allowed ? { 'Access-Control-Allow-Origin': origin } : {}),
      'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
    };
    const respond = (body, status = 200) => new Response(JSON.stringify(body), { status, headers });
    if (!allowed) return respond({ message: 'Origin not allowed.' }, 403);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
    try {
      const path = new URL(request.url).pathname.replace(/^\/functions\/v1/, '').replace(/^\/api(?=\/|$)/, '').replace(/\/$/, '') || '/';
      const method = request.method;
      if (method === 'GET' && ['/', '/health', '/test'].includes(path)) return respond({ success: true, message: 'Jaypro Supabase API is running', database: 'Supabase PostgreSQL' });
      let body = {};
      if (['POST', 'PUT'].includes(method)) {
        const raw = await request.text();
        if (raw.length > 32768) throw new HttpError(413, 'Request is too large.');
        try { body = JSON.parse(raw); } catch { throw new HttpError(400, 'Invalid JSON request.'); }
        if (!body || Array.isArray(body) || typeof body !== 'object') throw new HttpError(400, 'Invalid request.');
      }
      const { db, auth, adminAuth } = createServices(env, fetchImpl);
      async function profile(id) {
        const [user] = await db.select('jaypro_profiles', { id }, { select: userFields, limit: 1 });
        if (!user) throw new HttpError(403, 'Account profile not found. Contact support.');
        return user;
      }
      async function session(data) {
        if (!data.access_token || !data.refresh_token || !data.user?.id) throw new HttpError(401, 'Invalid session.');
        return { user: await profile(data.user.id), accessToken: data.access_token, refreshToken: data.refresh_token };
      }
      if (method === 'POST' && path === '/auth/login') {
        const address = email(body.email);
        if (typeof body.password !== 'string' || !body.password || body.password.length > 256) throw new HttpError(400, 'Invalid login details.');
        const credential = body.password;
        let data;
        try { data = await auth('token?grant_type=password', 'POST', { email: address, password: credential }); }
        catch (error) {
          if ([400, 401, 422].includes(error.status)) throw new HttpError(401, error.code === 'email_not_confirmed' ? 'Confirm your email before signing in.' : 'Invalid email or password.');
          throw error;
        }
        return respond(await session(data));
      }
      if (method === 'POST' && path === '/auth/register') {
        const data = await auth('signup', 'POST', { email: email(body.email), password: password(body.password), data: { name: field(body.name, 150) } });
        if (!data.access_token) return respond({ confirmationRequired: true, message: 'Check your email to confirm your account, then sign in.' }, 201);
        return respond(await session(data), 201);
      }
      if (method === 'POST' && path === '/auth/refresh') {
        let data;
        try { data = await auth('token?grant_type=refresh_token', 'POST', { refresh_token: field(body.refreshToken, 4096) }); }
        catch (error) { if ([400, 401, 422].includes(error.status)) throw new HttpError(401, 'Session expired. Please sign in.'); throw error; }
        return respond(await session(data));
      }
      if (method === 'POST' && path === '/leads') {
        const [lead] = await db.insert('jaypro_leads', normalizeLead(body));
        return respond({ success: true, id: serialize(lead).id }, 201);
      }
      if (method === 'POST' && ['/payments/create-order', '/payments/verify'].includes(path)) {
        return respond(await paymentRoute(path, body, { env, db, fetchImpl }), path.endsWith('create-order') ? 201 : 200);
      }
      if (!['/auth/me', '/auth/logout', '/chat/messages', '/employees', '/employees/my-leads', '/leads', '/leads/admin'].includes(path)
          && !/^\/employees\/(?:my-leads\/\d+|assignments\/L\d+)$/.test(path)
          && !/^\/leads\/L\d+$/.test(path)) throw new HttpError(404, 'Route not found.');
      const token = request.headers.get('Authorization')?.match(/^Bearer (.+)$/i)?.[1];
      if (!token) throw new HttpError(401, 'Please sign in.');
      let identity;
      try { identity = await auth('user', 'GET', undefined, token); }
      catch (error) { if ([400, 401, 403].includes(error.status)) throw new HttpError(401, 'Session expired. Please sign in.'); throw error; }
      const user = await profile(identity.id);
      if (method === 'GET' && path === '/auth/me') return respond(user);
      if (method === 'POST' && path === '/auth/logout') {
        await auth('logout?scope=local', 'POST', undefined, token);
        return respond({ success: true });
      }
      if (path === '/chat/messages') {
        if (method === 'GET') return respond({ messages: await db.all('jaypro_messages', { user_id: user.id }, { select: 'id,text,sender,created_at', order: 'created_at.asc,id.asc' }) });
        if (method === 'POST') {
          const [message] = await db.insert('jaypro_messages', { user_id: user.id, text: field(body.text, 4000), sender: user.name });
          return respond({ message }, 201);
        }
      }
      if (path === '/employees/my-leads' || /^\/employees\/my-leads\/\d+$/.test(path)) {
        if (user.role !== 'employee') throw new HttpError(403, 'Employee access required.');
        if (method === 'GET' && path === '/employees/my-leads') {
          const leads = await db.all('jaypro_leads', { employeeId: user.id }, { select: 'id,customer,phone,city,service,status,notes,followUp', order: 'created_at.desc,id.desc' });
          return respond({ leads: leads.map(lead => ({ ...lead, followUp: lead.followUp || '' })) });
        }
        if (method === 'PUT') {
          const leads = await db.update('jaypro_leads', { id: leadId(path.split('/').pop(), false), employeeId: user.id }, { ...leadUpdate(body), updated_at: new Date().toISOString() });
          if (!leads.length) throw new HttpError(404, 'Assigned lead not found.');
          return respond({ success: true });
        }
      }
      if (user.role !== 'admin') throw new HttpError(403, 'Administrator access required.');
      if (path === '/employees' && method === 'GET') {
        const employees = await db.all('jaypro_profiles', { role: 'employee' }, { select: 'id,name,email', order: 'name.asc,id.asc' });
        return respond({ employees: employees.map(({ id, name, email }) => ({ id, name, loginId: email })) });
      }
      if (path === '/employees' && method === 'POST') {
        const name = field(body.name, 150), address = email(body.loginId);
        const credential = body.password ? password(body.password) : crypto.randomUUID() + '!';
        let created;
        try { created = await adminAuth('users', 'POST', { email: address, password: credential, email_confirm: true, user_metadata: { name } }); }
        catch (error) { if (['email_exists', 'user_already_exists'].includes(error.code)) throw new HttpError(409, 'That email is already in use.'); throw error; }
        const id = created.id || created.user?.id;
        try {
          const updated = await db.update('jaypro_profiles', { id }, { role: 'employee', name, email: address });
          if (!updated.length) throw new Error('Missing profile');
        } catch (error) {
          await adminAuth(`users/${id}`, 'DELETE').catch(() => {});
          throw error;
        }
        return respond({ employee: { id, name, loginId: address }, password: credential }, 201);
      }
      const assignment = path.match(/^\/employees\/assignments\/(L\d+)$/);
      if (assignment && ['GET', 'PUT'].includes(method)) {
        const id = leadId(assignment[1]);
        const [lead] = await db.select('jaypro_leads', { id }, { select: 'id,employeeId', limit: 1 });
        if (!lead) throw new HttpError(404, 'Lead not found.');
        if (method === 'GET') return respond({ employeeId: lead.employeeId || '' });
        const employeeId = body.employeeId === '' ? null : uuid(body.employeeId);
        if (employeeId) {
          const [employee] = await db.select('jaypro_profiles', { id: employeeId, role: 'employee' }, { select: 'id', limit: 1 });
          if (!employee) throw new HttpError(400, 'Employee not found.');
        }
        await db.update('jaypro_leads', { id }, { employeeId, updated_at: new Date().toISOString() });
        return respond({ success: true });
      }
      if (method === 'GET' && path === '/leads') {
        const [leads, employees] = await Promise.all([
          db.all('jaypro_leads', {}, { select: leadFields, order: 'created_at.desc,id.desc' }),
          db.all('jaypro_profiles', { role: 'employee' }, { select: 'id,name', order: 'id.asc' }),
        ]);
        const names = new Map(employees.map(employee => [employee.id, employee.name]));
        return respond({ success: true, leads: leads.map(lead => serialize(lead, names)) });
      }
      if (method === 'POST' && path === '/leads/admin') {
        const [lead] = await db.insert('jaypro_leads', normalizeLead(body, true));
        return respond({ success: true, lead: serialize(lead) }, 201);
      }
      const detail = path.match(/^\/leads\/(L\d+)$/);
      if (detail && ['GET', 'PUT'].includes(method)) {
        const id = leadId(detail[1]);
        const [lead] = method === 'GET'
          ? await db.select('jaypro_leads', { id }, { select: leadFields, limit: 1 })
          : await db.update('jaypro_leads', { id }, { ...normalizeLead(body, true), updated_at: new Date().toISOString() });
        if (!lead) throw new HttpError(404, 'Lead not found.');
        const employee = lead.employeeId ? await profile(lead.employeeId) : null;
        return respond({ success: true, lead: serialize(lead, employee ? new Map([[employee.id, employee.name]]) : undefined) });
      }
      throw new HttpError(404, 'Route not found.');
    } catch (error) {
      const status = error instanceof HttpError ? error.status : 500;
      if (status >= 500) console.error('API request failed:', error.code || error.name);
      return respond({ success: false, message: error instanceof HttpError ? error.message : 'Unable to process your request. Please try again.' }, status);
    }
  };
}
