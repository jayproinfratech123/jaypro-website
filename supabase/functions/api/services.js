import { HttpError } from './validation.js';

// Only this server-side module receives the service-role secret.
export function createServices(env, fetchImpl = fetch) {
  const url = env.SUPABASE_URL?.replace(/\/+$/, '');
  if (!url || !env.SUPABASE_ANON_KEY || !env.SUPABASE_SERVICE_ROLE_KEY) throw new HttpError(503, 'Supabase is not configured.');
  async function request(path, { method = 'GET', body, token, admin = false, prefer } = {}) {
    const key = admin ? env.SUPABASE_SERVICE_ROLE_KEY : env.SUPABASE_ANON_KEY;
    const response = await fetchImpl(`${url}${path}`, {
      method,
      headers: { apikey: key, Authorization: `Bearer ${token || key}`, 'Content-Type': 'application/json', ...(prefer ? { Prefer: prefer } : {}) },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
      signal: AbortSignal.timeout(15000),
    });
    const text = await response.text();
    let data;
    try { data = text ? JSON.parse(text) : null; } catch { throw new HttpError(502, 'Supabase returned an invalid response.'); }
    if (!response.ok) {
      const code = data?.code || data?.error_code;
      const status = code === '23505' ? 409 : response.status;
      // Never expose database details, account records or provider secrets.
      throw new HttpError(status, status === 429 ? 'Too many requests. Please try again later.' : 'Unable to complete the request.', code);
    }
    return data;
  }
  function query(filters = {}, options = {}) {
    const params = new URLSearchParams({ select: options.select || '*' });
    for (const [key, value] of Object.entries(filters)) params.set(key, `eq.${value}`);
    if (options.order) params.set('order', options.order);
    if (options.limit) params.set('limit', String(options.limit));
    if (options.offset) params.set('offset', String(options.offset));
    return params.toString();
  }
  const db = {
    select: (table, filters, options) => request(`/rest/v1/${table}?${query(filters, options)}`, { admin: true }),
    insert: (table, body) => request(`/rest/v1/${table}`, { method: 'POST', body, admin: true, prefer: 'return=representation' }),
    update: (table, filters, body) => request(`/rest/v1/${table}?${query(filters)}`, { method: 'PATCH', body, admin: true, prefer: 'return=representation' }),
    rpc: (name, body) => request(`/rest/v1/rpc/${name}`, { method: 'POST', body, admin: true }),
    async all(table, filters = {}, options = {}) {
      const rows = [];
      // Stay below PostgREST's default row limit while preserving complete lists.
      for (let offset = 0; ; offset += 500) {
        const batch = await db.select(table, filters, { ...options, limit: 500, offset });
        rows.push(...batch);
        if (batch.length < 500) return rows;
      }
    },
  };
  return {
    db,
    auth: (path, method, body, token) => request(`/auth/v1/${path}`, { method, body, token }),
    adminAuth: (path, method, body) => request(`/auth/v1/admin/${path}`, { method, body, admin: true }),
  };
}
