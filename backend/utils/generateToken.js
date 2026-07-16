import jwt from "jsonwebtoken";

export const generateAccessToken = (id, role) =>
  jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });

export const generateRefreshToken = (id) =>
  jwt.sign({ id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE || "30d",
  });
