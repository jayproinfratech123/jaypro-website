import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const file = name => new URL(name, root);
try {
  process.loadEnvFile(fileURLToPath(file('supabase/.env')));
  const url = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(url) || /YOUR_|PROJECT_REF/.test(url) || !key || /YOUR_|SERVICE_ROLE_KEY/.test(key)) {
    throw new Error('Replace SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in supabase/.env with real project values. Do not share the secret key in chat.');
  }
  if (!email || !/^\S+@\S+\.\S+$/.test(email) || !password) throw new Error('Set ADMIN_EMAIL and ADMIN_PASSWORD in supabase/.env.');

  // Update only this setting; preserve other local frontend configuration.
  for (const name of ['frontend/.env.local', 'frontend/.env.production']) {
    let content = await fs.readFile(file(name), 'utf8').catch(error => { if (error.code === 'ENOENT') return ''; throw error; });
    const setting = `VITE_SUPABASE_URL=${url}`;
    content = /^VITE_SUPABASE_URL=.*$/m.test(content) ? content.replace(/^VITE_SUPABASE_URL=.*$/m, setting) : `${content}\n${setting}\n`;
    await fs.writeFile(file(name), content);
  }
  console.log('Frontend project URL configured.');

  async function request(path, method = 'GET', body) {
    const response = await fetch(`${url}${path}`, {
      method, headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'return=representation' },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }), signal: AbortSignal.timeout(15000),
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) throw new Error('Supabase rejected the service-role key. Check the project URL and key.');
      if (data?.code === 'PGRST205' || data?.code === '42P01') throw new Error('Apply supabase/migrations/20260919000100_jaypro.sql in the Supabase SQL Editor, then run npm run setup again.');
      throw new Error(`Supabase request failed (HTTP ${response.status}, code ${data?.code || data?.error_code || 'unknown'}). Check the migration and Auth settings.`);
    }
    return data;
  }
  const params = new URLSearchParams({ select: 'id,email,role', email: `eq.${email}` });
  // Check that the migration exists before creating an Auth account.
  const profiles = await request(`/rest/v1/jaypro_profiles?${params}`);
  let id = profiles[0]?.id;
  const existing = Boolean(id);
  if (existing) {
    const user = await request(`/auth/v1/admin/users/${encodeURIComponent(id)}`);
    if ((user.email || user.user?.email)?.toLowerCase() !== email) throw new Error('The existing profile does not match its Auth account. No changes made.');
  } else {
    const user = await request('/auth/v1/admin/users', 'POST', {
      email, password, email_confirm: true, user_metadata: { name: process.env.ADMIN_NAME || 'Jaypro Administrator' },
    });
    id = user.id || user.user?.id;
    if (!id) throw new Error('Supabase did not return an account ID.');
  }
  const promoted = await request(`/rest/v1/jaypro_profiles?id=eq.${encodeURIComponent(id)}`, 'PATCH', { role: 'admin' });
  if (!promoted?.length) throw new Error('The account exists but its profile is missing. Check the Auth profile trigger before retrying.');
  console.log(`Administrator ready: ${email}`);
  console.log(existing ? 'Existing account password was preserved.' : 'Use the password from supabase/.env to sign in.');
  console.log('Remove ADMIN_PASSWORD from supabase/.env after verifying login.');
  const health = await fetch(`${url}/functions/v1/api/health`, { signal: AbortSignal.timeout(15000) }).catch(() => null);
  if (!health?.ok) console.log('The API is not reachable yet. Deploy it using the steps in DEPLOYMENT.md.');
  else console.log('Supabase API is reachable. Start the frontend with npm run dev and open /admin/preview-login.');
} catch (error) {
  console.error('Setup incomplete:', error.message);
  process.exitCode = 1;
}
