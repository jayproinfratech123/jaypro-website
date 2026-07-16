import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { createServer } from "http";
import { Server } from "socket.io";

import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import { registerSocketHandlers } from "./socket/socket.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import leadRoutes from "./routes/leadRoutes.js"; // <-- Added

dotenv.config();
connectDB();

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  },
});

app.set("io", io);
registerSocketHandlers(io);

// Security
app.use(helmet());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);

// Body Parser
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
});

app.use("/api", limiter);

// Health Check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "BuildCraft Pro API",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/blogs", blogRoutes);

// Lead Route
app.use("/api/leads", leadRoutes);

// Error Handler
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`🚀 BuildCraft Pro API running on port ${PORT}`);
});