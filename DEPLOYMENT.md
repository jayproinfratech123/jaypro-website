# Deploy with Supabase

Local setup helper: fill the real `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
in the ignored `supabase/.env` file, along with `ADMIN_EMAIL`, `ADMIN_PASSWORD`
and `ADMIN_NAME` (see `supabase/.env.example`). Apply the SQL migration below,
then run `npm run setup` from the repository root. This configures the frontend
project URL and creates/promotes the administrator. Existing passwords are
preserved. The helper does not apply SQL or deploy Edge Functions; complete
those steps below. Never commit `supabase/.env`.

The backend and database run on Supabase. Deploy the built React website to your
existing static host. No Render service, Node backend, Express, MongoDB,
DATABASE_URL, or custom JWT_SECRET is needed.

## 1. Create the Supabase database

Create a Supabase project. Open the SQL Editor and execute the contents of
`supabase/migrations/20260919000100_jaypro.sql` once. It creates:

- `jaypro_profiles`, linked to Supabase Auth users;
- `jaypro_leads`, for enquiries, assignments and payment records;
- `jaypro_messages`, for customer support messages;
- an Auth trigger that always assigns new users the customer role;
- an atomic payment verification function.

Row-level security is enabled. Browser roles cannot read or modify these tables
directly; the Edge Function checks identities and permissions before using the
private service-role connection. This migration does not delete existing tables.

Alternatively, with the Supabase CLI installed, run from the repository root:

```bash
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase db push
```

Choose either SQL Editor or CLI migrations for the initial setup. If you already
applied the SQL manually, mark it applied before a later CLI push:
`supabase migration repair 20260919000100 --status applied`.

## 2. Configure Auth and create the first administrator

In Supabase Authentication, enable email/password login and configure Site URL
to `https://jayproinfratech.com/login`. Add local development/preview redirect
URLs if needed. Configure SMTP for production confirmation emails. Public
registration supports email confirmation; users confirm their email and then
sign in at `/login`.

After applying the migration, use Authentication > Users > Add user to create
an administrator with a confirmed email and strong password. Promote only that
user by running this in the SQL Editor, replacing the email:

```sql
update public.jaypro_profiles
set role = 'admin'
where id = (select id from auth.users where email = 'YOUR_ADMIN_EMAIL');
```

Sign in at `/admin/preview-login`. Admins create employee accounts from the
Employees page; employees now use an email address and sign in at
`/employee/login`. Role changes are controlled by the database, not user-editable
Auth metadata. Existing custom JWT tokens are invalid after migration.

## 3. Set Edge Function secrets and deploy the API

Copy `supabase/functions/.env.example` to `supabase/functions/.env` if it does not
already exist. Set CLIENT_URL to your exact frontend origins (comma-separated),
and set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET. Existing local payment/CORS
settings were moved from the old backend environment when available.

Supabase automatically supplies SUPABASE_URL, SUPABASE_ANON_KEY and
SUPABASE_SERVICE_ROLE_KEY to hosted functions. Do not copy those private keys
into the frontend. Upload the custom secrets and deploy from the repository root:

```bash
supabase secrets set --env-file supabase/functions/.env
supabase functions deploy api
```

`supabase/config.toml` sets `verify_jwt = false` because the API includes public
login, registration, enquiries and signed payment verification. Protected routes
explicitly validate the access token with Supabase Auth and check database roles.
If deploying through the dashboard instead of the CLI, disable gateway JWT
verification for `api` and include all files from `supabase/functions/api/`.

Check `https://YOUR_PROJECT_REF.supabase.co/functions/v1/api/health`.
The health endpoint checks function availability; use a test enquiry and login
to verify the database and authentication integration.

Configure Razorpay automatic capture. Verification checks the HMAC signature,
order receipt, payment/order association, amount, currency and captured status.
Do not mark uncaptured payments as paid. Both ordinary payments and site visits
create a pending lead before checkout. Verification retries update the existing
row and preserve CRM status changes. No payment webhook is configured; if a
customer closes checkout before its callback completes, reconcile using the
Razorpay dashboard and the pending lead's order ID.

## 4. Configure and publish the frontend

In `frontend/.env.production`, set the public project URL:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
```

For local development, put the same URL in `frontend/.env.local` and include
`http://localhost:5173` in the function's CLIENT_URL secret. The old
VITE_API_BASE_URL is no longer used. No frontend publishable key is required:
the browser calls the Edge Function, which handles Supabase Auth and data access.

```bash
npm --prefix frontend ci
npm run build
```

Upload `frontend/dist` to the static website host. Keep its SPA fallback so
`/login`, `/admin/*`, `/employee/*` and `/dashboard/*` serve `index.html`.
The GitHub deployment workflow reads the repository variable VITE_SUPABASE_URL;
set it under Settings > Secrets and variables > Actions > Variables before
pushing to main. It deploys only the frontend; deploy the Edge Function separately.

## 5. Verify before switching production

Run `npm test` locally. These tests mock Supabase and Razorpay; they do not verify
live SQL execution, database grants, Supabase Auth settings, or provider access.
The frontend build also needs its public project URL.

On the deployed project, verify public enquiry submission, email confirmation,
customer/admin login, employee creation and assignments, employee-only updates,
logout, and a Razorpay test payment. Confirm the browser cannot read tables
with the anon key. Verify stored leads in Supabase Table Editor.

Support messages are stored in `jaypro_messages` and refreshed every ten seconds.
Staff can read and reply through the Supabase Table Editor by inserting a reply
with the customer's `user_id` and a staff `sender` name. There is no separate
staff chat inbox UI yet.

## Existing data

Old MongoDB records and prior `crm_*` PostgreSQL tables are not migrated or
deleted automatically. Preserve those databases until needed records are moved.
Existing users need Supabase Auth accounts; old bcrypt/JWT credentials do not
become Supabase Auth accounts automatically. Map employee assignments to the new
Auth UUIDs when importing leads. Reset the identity sequence after importing IDs:

```sql
select setval(pg_get_serial_sequence('public.jaypro_leads', 'id'),
  coalesce((select max(id) from public.jaypro_leads), 0) + 1, false);
```

After the new API passes verification, the old Render backend can be retired.
The repository cleanup does not delete any remote service or database.

The previous backend source, environment, and Render configuration are retained
locally in the git-ignored `.migration-backup/` directory. They are not part of
the Supabase deployment. This preserves local settings and uncommitted work.

Official documentation: [Edge Function authentication](https://supabase.com/docs/guides/functions/auth),
[Auth user data](https://supabase.com/docs/guides/auth/managing-user-data).
