import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    room: { type: String, required: true },
    text: String,
    attachments: [String],
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
