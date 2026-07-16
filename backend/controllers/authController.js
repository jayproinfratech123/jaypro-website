import User from "../models/User.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";

// @desc  Register new user
// @route POST /api/auth/register
export const registerUser = async (req, res) => {
  const { name, email, password, phone, role } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already registered" });

    const user = await User.create({
      name,
      email,
      password,
      phone,
      role: ["customer", "architect", "engineer", "interior_designer", "site_supervisor"].includes(role)
        ? role
        : "customer",
    });

    const accessToken = generateAccessToken(user._id, user.role);
    const refreshToken = generateRefreshToken(user._id);
    user.refreshToken = refreshToken;
    await user.save();

    res.status(201).json({
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      accessToken,
      refreshToken,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Login user
// @route POST /api/auth/login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const accessToken = generateAccessToken(user._id, user.role);
    const refreshToken = generateRefreshToken(user._id);
    user.refreshToken = refreshToken;
    await user.save();

    res.json({
      user: { id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar },
      accessToken,
      refreshToken,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Refresh access token
// @route POST /api/auth/refresh
export const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ message: "No refresh token" });
  try {
    const jwt = (await import("jsonwebtoken")).default;
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.id).select("+refreshToken");
    if (!user || user.refreshToken !== refreshToken) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }
    const accessToken = generateAccessToken(user._id, user.role);
    res.json({ accessToken });
  } catch (err) {
    res.status(401).json({ message: "Refresh token expired or invalid" });
  }
};

// @desc  Get logged in user profile
// @route GET /api/auth/me
export const getMe = async (req, res) => {
  res.json(req.user);
};

// @desc  Logout
// @route POST /api/auth/logout
export const logoutUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.refreshToken = null;
    await user.save();
    res.json({ message: "Logged out" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
