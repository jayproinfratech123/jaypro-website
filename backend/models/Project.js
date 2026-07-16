import mongoose from "mongoose";

const stageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: String, enum: ["pending", "in_progress", "completed"], default: "pending" },
    completionPercent: { type: Number, default: 0 },
    updatedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const updateSchema = new mongoose.Schema(
  {
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    note: String,
    photos: [String],
    videos: [String],
    materialsUsed: String,
    workerCount: Number,
    gpsLocation: { lat: Number, lng: Number },
    weather: String,
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    serviceType: {
      type: String,
      enum: [
        "house_construction",
        "house_design",
        "interior_design",
        "exterior_design",
        "architecture_planning",
        "structural_drawing",
        "vastu_consultation",
        "3d_elevation",
        "renovation",
        "commercial_building",
      ],
      required: true,
    },
    plotSize: Number,
    floors: Number,
    location: String,
    packageTier: { type: String, enum: ["basic", "standard", "premium", "luxury"], default: "standard" },
    estimatedCost: Number,
    quotedCost: Number,
    status: {
      type: String,
      enum: [
        "submitted",
        "reviewed",
        "estimated",
        "quoted",
        "payment_pending",
        "design",
        "approved",
        "construction",
        "inspection",
        "completed",
        "warranty",
      ],
      default: "submitted",
    },
    assignedArchitect: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    assignedEngineer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    assignedSupervisor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    stages: {
      type: [stageSchema],
      default: () => [
        { name: "Foundation" },
        { name: "Columns" },
        { name: "Roof" },
        { name: "Brick Work" },
        { name: "Plaster" },
        { name: "Painting" },
        { name: "Interior" },
        { name: "Final Delivery" },
      ],
    },
    dailyUpdates: [updateSchema],
    documents: [{ name: String, url: String, type: String, uploadedAt: { type: Date, default: Date.now } }],
    drawings: [{ name: String, url: String, uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, uploadedAt: { type: Date, default: Date.now } }],
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
