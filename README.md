# Jaypro Infratech

React website with Supabase PostgreSQL, Supabase Auth, and Supabase Edge Functions.
The API runs on Supabase's Deno runtime. There is no Express server, MongoDB,
custom JWT server, Socket.IO server, or Render backend to deploy.

- `frontend/`: React + Vite website. Node/npm are used only for frontend builds and local tests.
- `supabase/functions/api/`: API routing, authorization, lead/employee management,
  support messages and server-side Razorpay verification.
- `supabase/migrations/`: PostgreSQL tables, Auth profile trigger and payment RPC.
- `supabase/tests/`: API tests with mocked upstream Supabase and Razorpay requests.

Start with [DEPLOYMENT.md](DEPLOYMENT.md). Configure the Supabase project before publishing the frontend.

```bash
npm --prefix frontend ci
npm run dev
npm test
npm run build
```

The frontend needs `VITE_SUPABASE_URL`. The function needs the secrets in
`supabase/functions/.env.example`. Hosted functions receive Supabase's project
URL and API keys automatically. Never expose the service-role key or Razorpay
secret in a `VITE_` variable.

The original project/blog/document/dashboard scaffolds remain in the UI, but
those modules did not have working APIs in the previous backend and are not
implemented by this migration. Lead management, employee access, authentication,
Razorpay payments, and support-message persistence are implemented.
