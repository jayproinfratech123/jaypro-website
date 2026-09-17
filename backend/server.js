// ----------------------------------------------------
// ENV
// ----------------------------------------------------

import "./config/env.js";

import express from "express";
import { mountFrontend } from "./config/frontend.js";
import { createCorsMiddleware } from "./config/cors.js";
import cookieParser from "cookie-parser";

// Existing payment routes
import paymentRoutes from "./routes/paymentRoutes.js";

// CRM routes
import authRoutes from "./routes/authRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";

// Database
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
// CORS CONFIGURATION
// ----------------------------------------------------

const corsMiddleware = createCorsMiddleware();

// Handle OPTIONS/preflight before authentication/routes
app.options("*", corsMiddleware);

// Apply CORS to all requests
app.use(corsMiddleware);


// ----------------------------------------------------
// TEMPORARY CORS TEST ROUTE
// ----------------------------------------------------
//
// Use this route to confirm:
// 1. New backend deployment is actually running.
// 2. Browser Origin reaches Express.
// 3. CORS headers are being returned.
//
// Remove this route after CORS debugging is complete.
//

app.get("/api/cors-test", (req, res) => {
  res.json({
    success: true,
    originReceived: req.headers.origin || null,
    nodeEnv: process.env.NODE_ENV || null,
    message: "NEW CORS TEST VERSION 1",
  });
});


// ----------------------------------------------------
// BODY / COOKIE MIDDLEWARE
// ----------------------------------------------------

app.use(
  express.json({
    limit: "1mb",
  })
);

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
    await pool.query(
      "SELECT 1 FROM crm_leads LIMIT 1"
    );

    res.json({
      success: true,
      service: "Jaypro Backend API",

      modules: {
        payments: Boolean(
          process.env.RAZORPAY_KEY_ID &&
          process.env.RAZORPAY_KEY_SECRET
        ),

        crm: true,
        authentication: true,
        mysql: true,
      },
    });

  } catch (error) {
    next(error);
  }
});


// ----------------------------------------------------
// ROOT API ROUTE
// ----------------------------------------------------

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Jaypro Infratech API is running",
  });
});


// ----------------------------------------------------
// PAYMENT ROUTES
// ----------------------------------------------------

app.use(
  "/api/payments",
  paymentRoutes
);


// ----------------------------------------------------
// CRM AUTH ROUTES
// ----------------------------------------------------

app.use(
  "/api/auth",
  authRoutes
);

// Routes:
//
// POST /api/auth/login
// POST /api/auth/logout
// GET  /api/auth/me


// ----------------------------------------------------
// LEAD ROUTES
// ----------------------------------------------------

app.use(
  "/api/leads",
  leadRoutes
);

// Public:
// POST /api/leads
//
// Protected routes are controlled inside leadRoutes.js


// ----------------------------------------------------
// EMPLOYEE ROUTES
// ----------------------------------------------------

app.use(
  "/api/employees",
  employeeRoutes
);


// ----------------------------------------------------
// FRONTEND
// ----------------------------------------------------
//
// Frontend files/client-side routes must remain AFTER
// all API routes.
//

mountFrontend(app);


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

  console.error(
    "Backend Error:",
    error.code || error.name || error.message
  );

  // CORS error
  if (error.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "Origin is not allowed.",
    });
  }

  res.status(
    error.statusCode || 500
  ).json({
    success: false,

    message:
      error.statusCode &&
      error.statusCode < 500
        ? error.message
        : "Unable to complete the request. Please try again.",
  });
});


// ----------------------------------------------------
// SERVER
// ----------------------------------------------------

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  "0.0.0.0",
  () => {
    console.log(
      `Jaypro Backend API running on port ${PORT}`
    );
  }
);