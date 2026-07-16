import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: String,
    coverImage: String,
    category: { type: String, enum: ["construction_tips", "house_design", "modern_homes", "vastu", "budget_planning"], default: "construction_tips" },
    tags: [String],
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    metaTitle: String,
    metaDescription: String,
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
