# Backend-only deployment on Render

The frontend stays on its existing hosting. MongoDB stays in Atlas.
The repository-root render.yaml creates only a backend Web Service.

## Create the service

Push the backend and render.yaml to your GitHub repository. Do not commit .env.
The existing GitHub Actions workflow deploys the frontend to GoDaddy on pushes
to main; use a separate deployment branch if you do not want that triggered.

In Render, select New > Blueprint, connect the repository and deployment branch,
and select render.yaml. Fill the secret values from your working backend/.env.
Alternatively, select New > Web Service and enter these settings manually:

| Setting | Value |
| --- | --- |
| Runtime | Node |
| Root Directory | backend |
| Build Command | npm ci --omit=dev |
| Start Command | npm start |
| Health Check Path | /api/test |
| NODE_VERSION | 24 |
| NODE_ENV | production |
| MONGODB_URI | Your working, URL-encoded Atlas URI |
| MONGODB_DB_NAME | jayproinfratech |
| JWT_SECRET | Your existing JWT secret |
| CLIENT_URL | https://jayproinfratech.com,https://www.jayproinfratech.com |
| RAZORPAY_KEY_ID | Your existing payment key |
| RAZORPAY_KEY_SECRET | Your existing payment secret |

Render provides PORT automatically. Production does not load the local .env.
Keep MongoDB and Razorpay secrets out of frontend variables. The existing admin
account remains available when using the same Atlas database; do not recreate it.

The Blueprint selects the free instance for initial deployment. Free web services
sleep after 15 minutes without inbound traffic, so the first request can be slow.
Choose a paid instance in Render for an always-running production backend, and
update the Blueprint's plan to match before a future sync.

## Allow Atlas access

Find the service's outbound IP ranges in Render (Connect > Outbound), and add all
the listed ranges to your Atlas project's Network Access IP access list. The
service can use any address in those ranges. If the first deployment timed out
while connecting to MongoDB, redeploy after updating the access list.

## Keep the existing frontend API address

The frontend production build currently calls https://api.jayproinfratech.com.
Add api.jayproinfratech.com under the Render service's Settings > Custom Domains.
In your DNS provider, apply the DNS record Render displays for the api subdomain,
replacing any conflicting record for that subdomain only. Verify the domain in
Render and wait for HTTPS to become active. Leave the main website and www DNS
records pointing to the existing frontend host.

First verify https://YOUR-SERVICE.onrender.com/api/test, then
https://api.jayproinfratech.com/api/test. Both should return
{"message":"API working"}. Test admin login and lead submission on your actual
website after the custom domain is ready. Payment verification should also be
checked using the appropriate Razorpay environment.

If you choose to use the onrender.com URL directly instead, change the frontend
VITE_API_BASE_URL to that URL, rebuild the frontend and upload the new dist files.
No frontend rebuild is needed if you retain the existing api custom domain.

## Official references

- https://render.com/docs/blueprint-spec
- https://render.com/docs/outbound-ip-addresses
- https://render.com/docs/custom-domains
- https://render.com/docs/free
