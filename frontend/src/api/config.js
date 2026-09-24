// All API routes run in the Supabase Edge Function named "api".
export const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL || '').trim().replace(/\/+$/, '');
export const API_URL = `${SUPABASE_URL}/functions/v1/api`;
export function requireSupabaseConfig() {
  if (!SUPABASE_URL) throw new Error('Set VITE_SUPABASE_URL in the frontend environment, then rebuild.');
}
