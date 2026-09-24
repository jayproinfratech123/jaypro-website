import axios from 'axios';
import { API_URL, requireSupabaseConfig } from './config';

const api = axios.create({ baseURL: API_URL, headers: { 'Content-Type': 'application/json' } });
let refreshInFlight;
api.interceptors.request.use(config => {
  requireSupabaseConfig();
  const token = localStorage.getItem('bcp_access_token');
  if (token && token !== 'undefined' && token !== 'null') config.headers.Authorization = `Bearer ${token}`;
  else delete config.headers.Authorization;
  return config;
});
api.interceptors.response.use(response => response, async error => {
  const original = error.config;
  if (error.response?.status !== 401 || !original || original._retry || ['/auth/login', '/auth/register', '/auth/refresh'].includes(original.url)) throw error;
  original._retry = true;
  try {
    // Share refresh work: Supabase rotates refresh tokens on each refresh.
    if (!refreshInFlight) {
      refreshInFlight = (async () => {
        const refreshToken = localStorage.getItem('bcp_refresh_token');
        if (!refreshToken) throw new Error('Please sign in again.');
        const { data } = await axios.post(`${API_URL}/auth/refresh`, { refreshToken });
        if (!data.accessToken || !data.refreshToken) throw new Error('Invalid session.');
        // A logout or another login must not be overwritten by an older refresh.
        if (localStorage.getItem('bcp_refresh_token') !== refreshToken) throw new Error('Session changed.');
        localStorage.setItem('bcp_access_token', data.accessToken);
        localStorage.setItem('bcp_refresh_token', data.refreshToken);
        return data.accessToken;
      })().finally(() => { refreshInFlight = undefined; });
    }
    const token = await refreshInFlight;
    original.headers.Authorization = `Bearer ${token}`;
    return api(original);
  } catch (refreshError) {
    localStorage.removeItem('bcp_access_token');
    localStorage.removeItem('bcp_refresh_token');
    if (window.location.pathname !== '/admin/preview-login' && window.location.pathname !== '/employee/login') window.location.href = '/login';
    throw refreshError;
  }
});
export default api;
