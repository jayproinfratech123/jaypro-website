# MySQL lead storage and admin setup

Website enquiries now POST to the backend, which stores them in `crm_leads`.
The existing admin screen reads and updates those records through authenticated endpoints.
It refreshes every 30 seconds and when the window regains focus. Layouts and form fields are preserved;
the admin storage labels now describe database storage. Google Sheets is no longer used.

## Configure the database

In `backend/.env`, replace the placeholders for `DB_HOST`, `DB_PORT`, `DB_USER`,
`DB_PASSWORD`, and `DB_NAME` with your GoDaddy database details. Set `JWT_SECRET` to
a long random secret and `CLIENT_URL` to the exact frontend origin (including HTTPS).
Use `DB_SSL=true` when your MySQL server supports a trusted TLS certificate.
Keep these values on the server, never in frontend environment variables.

The backend must run on a host that supports Node.js. If it runs outside the database
host, allow that server's outbound IP in GoDaddy's Remote MySQL settings.
See [GoDaddy's remote MySQL instructions](https://www.godaddy.com/en-au/help/connect-remotely-to-a-mysql-database-in-my-web-hosting-cpanel-account-16103).
Use the database host/IP shown in your hosting account; `localhost` only refers to
the machine running the backend. Hosting placement must be confirmed before deployment.

From `backend`:

```sh
npm ci
node test-db.js
npm run db:setup
```

Alternatively, import `db/schema.sql` into the selected database using phpMyAdmin.
The script only creates missing `crm_*` tables; it does not delete existing tables or data.
The database user needs CREATE/REFERENCES permission for setup and SELECT/INSERT/UPDATE/DELETE
for normal operation. Existing tables with different schemas are not altered.

## Create the admin account

Temporarily set `ADMIN_EMAIL`, `ADMIN_NAME`, and `ADMIN_PASSWORD` in the backend environment.
Use at least 12 password characters (at most 72 UTF-8 bytes), then run:

```sh
npm run admin:create
npm start
```

Remove `ADMIN_PASSWORD` from the environment after creation. The script refuses to overwrite
an existing email address. Open `/admin/preview-login` and sign in; successful admin login opens `/admin`.
Public registration always creates a customer account, never an administrator.
The admin sign-in page requires a real administrator account; demo credentials do not grant access.

## Frontend and verification

For separate frontend/backend hosts, set `VITE_API_BASE_URL` to the HTTPS backend origin
(without `/api`) before building. For same-origin hosting, leave it empty and configure
the server to proxy `/api` to the Node process. Vite already proxies `/api` locally.
SPA hosting must serve `index.html` for `/admin/preview-login` and `/admin` routes.

```sh
# backend
npm test
# frontend
npm run build
```

After deployment, check `/api/health`, submit an enquiry, and confirm it appears in `/admin`.
Edit its status, notes and follow-up date, refresh the browser, and confirm the changes persist.
Without admin login, GET `/api/leads` must return 401.

The automated tests use an isolated database double; they do not establish GoDaddy connectivity.
Run the live checks above after supplying real credentials. Existing Google Sheet records and
old browser sample records are not automatically imported. A separately mapped import is needed
if historical Sheet records must be retained in MySQL.

Payment records now use MySQL too. Set both Razorpay keys to enable payments; CRM can run without them.
Repeated verification of the same payment ID stores only one lead. If storage fails after signature
verification, the API returns an error and asks the customer to contact support rather than pay again.
