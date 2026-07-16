import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    rating: { type: Number, min: 1, max: 5, required: true },
    review: { type: String, required: true },
    photos: [String],
    videos: [String],
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);
