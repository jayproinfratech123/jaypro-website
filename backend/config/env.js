import dotenv from "dotenv";

// Production receives its environment from the hosting dashboard.
// Keep .env support only for local development.
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
