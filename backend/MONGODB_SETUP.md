# MongoDB setup

The website pages and API routes are unchanged. Accounts, sessions, leads,
assignments and verified payments now use MongoDB through the native Node driver.

1. Start a local MongoDB server, or create a MongoDB Atlas database and database user.
2. Set these values in backend/.env for local development, or in your backend
   hosting environment for production:

   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017
   MONGODB_DB_NAME=jayproinfratech
   ```

   For Atlas, replace MONGODB_URI with your mongodb+srv connection string.
   URL-encode special characters in the username/password. Allow the backend
   host's outbound IP in Atlas Network Access. Keep the URI private.
3. From backend, run `npm ci`, then `npm run db:setup`.
4. For a new database, set ADMIN_EMAIL, ADMIN_NAME and ADMIN_PASSWORD, run
   `npm run admin:create`, then remove ADMIN_PASSWORD from the environment.
5. Run `npm start`. Startup verifies connectivity and creates required indexes.

Keep existing JWT_SECRET, CLIENT_URL and Razorpay settings. MySQL DB_* settings
are no longer used. Production reads hosting environment variables, not .env.

Lead IDs retain the L001 format for administrators and numeric IDs for employees.
Assignments are stored in each lead document. Unique indexes prevent duplicate
emails, payment IDs and order IDs; expired refresh sessions have a TTL index.

## Existing records

Switching the connection does not copy old MySQL records. Before a production
cutover, export and import existing records if needed. Preserve user UUIDs and
password_hash values. Map lead follow_up/payment_id/order_id to
followUp/paymentId/orderId; use YYYY-MM-DD strings for date/followUp, numbers for
id/amount, BSON dates for created_at/updated_at and session expires_at. Embed each
assignment as employeeId on its lead. Set counters document {_id: 'leads', value:
<highest imported numeric lead ID>} before accepting new submissions. Resolve
duplicate non-null payment/order IDs before creating unique indexes. Keep the
original database backup until the imported records have been verified.

## Tests

`npm test` uses an isolated temporary MongoDB server, never the configured app
database. The first run downloads a MongoDB test binary and requires network
access. MongoDB compound updates follow the [native driver documentation](https://www.mongodb.com/docs/drivers/node/current/crud/compound-operations/).
