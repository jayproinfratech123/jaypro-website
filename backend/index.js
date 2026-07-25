import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Check if MongoDB URI exists
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env");
  process.exit(1);
}

// Connect Database
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Backend is working successfully!");
});

// Register Auth Routes
app.use("/api/auth", authRoutes);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 BuildCraft Pro API running on port ${PORT}`);
});