import "dotenv/config";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Existing payment routes
import paymentRoutes from "./routes/paymentRoutes.js";

// CRM routes
import authRoutes from "./routes/authRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import testRoutes from "./routes/testRoutes.js";
// ----------------------------------------------------
// ENV VALIDATION
// ----------------------------------------------------

const requiredEnv = [
  "RAZORPAY_KEY_ID",
  "RAZORPAY_KEY_SECRET",
  "GOOGLE_SHEET_URL",

  // CRM
  "GOOGLE_SHEET_ID",
  "GOOGLE_CLIENT_EMAIL",
  "GOOGLE_PRIVATE_KEY",
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
    "Please check backend/.env and add all required values."
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

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

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

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    service: "Jaypro Backend API",
    modules: {
      payments: true,
      crm: true,
      authentication: true,
      googleSheets: true,
    },
  });
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
app.use("/api/test", testRoutes);
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
  console.error("Backend Error:", error);

  res.status(error.statusCode || 500).json({
    success: false,
    message:
      error.message ||
      "Internal server error.",
  });
});

// ----------------------------------------------------
// SERVER
// ----------------------------------------------------

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(
    `Jaypro Backend API running on http://localhost:${PORT}`
  );
});