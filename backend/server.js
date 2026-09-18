import express from "express";
import "./config/env.js";
import { createCorsMiddleware } from "./config/cors.js";
import authRoutes from "./routes/authRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();

app.use(createCorsMiddleware());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API working" });
});

app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/payments", paymentRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

app.use((error, req, res, next) => {
  const status = error.statusCode || error.status || 500;
  console.error("API error:", error.code || error.name);
  res.status(status).json({
    success: false,
    message: status >= 500 ? "Unable to process your request. Please try again." : error.message,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on ${PORT}`);
});
