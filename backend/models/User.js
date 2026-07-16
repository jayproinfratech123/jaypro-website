import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, minlength: 6, select: false },
    phone: { type: String, trim: true },
    avatar: { type: String, default: "" },
    role: {
      type: String,
      enum: ["customer", "architect", "engineer", "interior_designer", "site_supervisor", "admin"],
      default: "customer",
    },
    authProvider: { type: String, enum: ["local", "google"], default: "local" },
    isVerified: { type: Boolean, default: false },
    otp: { type: String, select: false },
    otpExpires: { type: Date, select: false },
    refreshToken: { type: String, select: false },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  if (!this.password) return false;
  return bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", userSchema);
