import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const projectUrl = process.env.VITE_SUPABASE_URL || loadEnv(mode, process.cwd(), '').VITE_SUPABASE_URL;
  if (command === 'build' && (!projectUrl || projectUrl.includes('YOUR_PROJECT_REF') || !/^https:\/\/[^/]+\.supabase\.co\/?$/.test(projectUrl))) {
    throw new Error('Set VITE_SUPABASE_URL to your Supabase project URL before building. See DEPLOYMENT.md.');
  }
  return { plugins: [react()], server: { port: 5173 } };
});
