



import express from "express";
import {
  registerUser,
  loginUser,
  refreshToken,
  getMe,
  logoutUser,
} from "../controllers/authController.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh", refreshToken);

// Protected Routes
router.get("/me", protect, getMe);
router.post("/logout", protect, logoutUser);

export default router;
