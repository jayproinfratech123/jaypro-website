# GoDaddy backend deployment

## Node module format and startup

Keep `"type": "module"` in `backend/package.json`: `backend/server.js` uses
ES module imports (option B). Do not replace those imports with `require()`.

For a backend-only deployment, set the app root to `backend/`, install with
`npm ci`, and start with `npm start`. If the host runs from the repository
root, use `npm --prefix backend ci` and `npm --prefix backend start` instead.
Verify the deployed server with `GET /api/test`; the current entry point returns
`{"message":"API working"}`. The root `/` returns HTTP 200 for platform health
checks. Authentication, leads, employees and payment routes are mounted under
`/api/auth`, `/api/leads`, `/api/employees` and `/api/payments`.

The GitHub Actions workflow deploys only the frontend. To redeploy this backend,
update the Node app preview from the latest GitHub commit and publish it in the
hosting dashboard. Verify `/api/test` on the backend app URL after publishing.

## Environment and full API configuration

In the app dashboard, open Settings → Secrets → Publish. Set each variable
once, using real values privately in the dashboard. Never commit secrets.

| Variable | Value |
| --- | --- |
| NODE_ENV | production |
| JWT_SECRET | A private randomly generated secret |
| MONGODB_URI | MongoDB Atlas connection URI (or local MongoDB URI) |
| MONGODB_DB_NAME | jayproinfratech |
| CLIENT_URL | https://jayproinfratech.com, or the exact frontend origin if different |
| RAZORPAY_KEY_ID | Razorpay key ID, required for payments |
| RAZORPAY_KEY_SECRET | Matching Razorpay secret, required for payments |

The platform supplies PORT. The backend uses MongoDB. Allow the Node host outbound
IP in Atlas Network Access and configure a database user with read/write access.
Run `npm run db:setup` and `npm run admin:create` from backend for a new database.

Generate JWT_SECRET locally with:

```powershell
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Keep an existing valid secret stable across deployments. Replacing it invalidates
existing login tokens. Do not put JWT secrets or database credentials in frontend
variables or uploaded frontend files.

Click Save Secrets. Push code changes to the deployment repository, update the
preview from GitHub, and publish the updated app to live. Preview has separate
secrets; configure them too when testing preview. Production and maintenance
scripts use dashboard environment variables when NODE_ENV=production and do not
load .env. Local development retains .env support.

From the repository root, use `node --check backend/server.js` to check syntax
and `npm --prefix backend start` to start the backend. Check runtime logs for
startup errors. `/` and `/api/test` do not check the database; separately verify
form submission, login and payments after deployment.

## Moving from Vercel

Deploy the latest backend code to the GoDaddy Node.js app before removing Vercel.
Use branch `main`, app directory `backend`, install `npm ci`, start `npm start`,
and health-check path `/`. Copy the existing production environment values
privately into the GoDaddy app's secrets. Let the platform supply `PORT`.

Configure MongoDB Atlas Network Access for the Node host outbound IPs.

Connect `api.jayproinfratech.com` to the GoDaddy app using the DNS records shown
by that app. The frontend production API URL is `https://api.jayproinfratech.com`.
Deploy a rebuilt frontend, verify the API and database flows on the live domain,
then remove the old Vercel project if it is no longer needed.

For a manually uploaded frontend, build in frontend with npm run build and upload
the contents of frontend/dist to the website document root. The public backend
origin is configured by VITE_API_BASE_URL at build time.
