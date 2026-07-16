import express from "express";
import User from "../models/User.js";
import { protect } from "../middleware/auth.js";
import { authorize } from "../middleware/role.js";

const router = express.Router();

// Admin: list all users, optionally by role
router.get("/", protect, authorize("admin"), async (req, res) => {
  const { role } = req.query;
  const filter = role ? { role } : {};
  const users = await User.find(filter).select("-password -refreshToken");
  res.json(users);
});

// Update own profile
router.put("/me", protect, async (req, res) => {
  const { name, phone, avatar } = req.body;
  const user = await User.findByIdAndUpdate(req.user._id, { name, phone, avatar }, { new: true }).select(
    "-password -refreshToken"
  );
  res.json(user);
});

export default router;
