import "./config/env.js";

import express from "express";
import { createCorsMiddleware } from "./config/cors.js";
import cookieParser from "cookie-parser";

// Existing payment routes
import paymentRoutes from "./routes/paymentRoutes.js";

// CRM routes
import authRoutes from "./routes/authRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import pool from "./config/db.js";
// ----------------------------------------------------
// ENV VALIDATION
// ----------------------------------------------------

const requiredEnv = [
  "DB_HOST",
  "DB_USER",
  "DB_PASSWORD",
  "DB_NAME",
  "JWT_SECRET",
];

const isPlaceholder = (value = "") =>
  !value ||
  value.includes("your_") ||
  value.includes("YOUR_");

const missingEnv = requiredEnv.filter((name) =>
  isPlaceholder(process.env[name])
);

if (missingEnv.length > 0) {
  console.error(
    `Missing backend environment values: ${missingEnv.join(", ")}`
  );

  console.error(
    "Set the required environment variables in your hosting dashboard before starting the backend."
  );

  process.exit(1);
}

// ----------------------------------------------------
// APP INITIALIZATION
// ----------------------------------------------------

const app = express();

// ----------------------------------------------------
// CORS
// ----------------------------------------------------

// Handle browser preflight before authentication and API routes.
app.use(createCorsMiddleware());

// ----------------------------------------------------
// MIDDLEWARE
// ----------------------------------------------------

app.use(express.json({ limit: "1mb" }));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

// ----------------------------------------------------
// HEALTH CHECK
// ----------------------------------------------------

app.get("/api/health", async (req, res, next) => {
  try {
  await pool.query("SELECT 1 FROM crm_leads LIMIT 1");
  res.json({
    success: true,
    service: "Jaypro Backend API",
    modules: {
      payments: Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET),
      crm: true,
      authentication: true,
      mysql: true,
    },
  });
  } catch (error) { next(error); }
});

// ----------------------------------------------------
// ROOT API ROUTE
// ----------------------------------------------------

// The hosting platform probes the site root to check that the server is running.
app.get(["/", "/api"], (req, res) => {
  res.json({
    success: true,
    message: "Jaypro Infratech API is running",
  });
});

// ----------------------------------------------------
// PAYMENT ROUTES
// ----------------------------------------------------

app.use("/api/payments", paymentRoutes);

// ----------------------------------------------------
// CRM AUTH ROUTES
// ----------------------------------------------------

app.use("/api/auth", authRoutes);

// Examples:
//
// POST /api/auth/login
// POST /api/auth/logout
// GET  /api/auth/me

// ----------------------------------------------------
// LEAD ROUTES
// ----------------------------------------------------

app.use("/api/leads", leadRoutes);

// Examples:
//
// GET /api/leads
//
// GET /api/leads/my-leads
//
// GET /api/leads/:leadId
//
// PUT /api/leads/:leadId/assign
//
// PUT /api/leads/:leadId/status
//
// PUT /api/leads/:leadId/notes
//
// PUT /api/leads/:leadId/follow-up

// ----------------------------------------------------
// EMPLOYEE ROUTES
// ----------------------------------------------------

app.use("/api/employees", employeeRoutes);

// Examples:
//
// GET    /api/employees
// POST   /api/employees
// GET    /api/employees/:employeeId
// PUT    /api/employees/:employeeId
// DELETE /api/employees/:employeeId

// ----------------------------------------------------
// 404 ROUTE
// ----------------------------------------------------
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found.",
  });
});

// ----------------------------------------------------
// GLOBAL ERROR HANDLER
// ----------------------------------------------------

app.use((error, req, res, next) => {
  console.error("Backend Error:", error.code || error.name);

  res.status(error.statusCode || 500).json({
    success: false,
    message:
      error.statusCode && error.statusCode < 500
        ? error.message
        : "Unable to complete the request. Please try again.",
  });
});

// ----------------------------------------------------
// SERVER
// ----------------------------------------------------

app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log(
    `Jaypro Backend API running on http://0.0.0.0:${process.env.PORT || 3000}`
  );
});
