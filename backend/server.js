// ----------------------------------------------------
// ENV
// ----------------------------------------------------

import "./config/env.js";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { mountFrontend } from "./config/frontend.js";

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

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://jayproinfratech.com",
  "https://www.jayproinfratech.com",
];

const corsOptions = {
  origin: function (origin, callback) {

    // Allow requests without Origin header
    // Example: Postman, curl, server-to-server
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.log("Blocked by CORS:", origin);

    return callback(
      new Error("Not allowed by CORS")
    );
  },

  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
  ],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
  ],

  credentials: true,

  optionsSuccessStatus: 204,
};


// ----------------------------------------------------
// HANDLE CORS
// ----------------------------------------------------

// Apply CORS to all requests
app.use(cors(corsOptions));

// Handle OPTIONS / preflight
app.options("*", cors(corsOptions));


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
// CORS TEST ROUTE
// ----------------------------------------------------

app.get("/api/cors-test", (req, res) => {

  res.json({
    success: true,
    message: "CORS is working correctly",
    origin: req.headers.origin || null,
  });

});


// ----------------------------------------------------
// SIMPLE API TEST ROUTE
// ----------------------------------------------------

app.get("/api/test", (req, res) => {

  res.json({
    success: true,
    message: "API working",
  });

});


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

// Available routes:
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
//
// POST /api/leads
//
// Protected routes are handled inside leadRoutes.js.


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
// IMPORTANT:
// Frontend/static/client-side routes must stay
// AFTER all /api routes.
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
    error.code ||
    error.name ||
    error.message
  );


  // --------------------------------------------------
  // CORS ERROR
  // --------------------------------------------------

  if (error.message === "Not allowed by CORS") {

    return res.status(403).json({
      success: false,
      message: "Origin is not allowed.",
    });

  }


  // --------------------------------------------------
  // OTHER ERRORS
  // --------------------------------------------------

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

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  "0.0.0.0",
  () => {

    console.log(
      `Jaypro Backend API running on port ${PORT}`
    );

  }
);