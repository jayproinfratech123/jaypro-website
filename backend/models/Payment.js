import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    method: { type: String, enum: ["razorpay", "stripe", "upi", "card", "netbanking", "wallet", "emi"], required: true },
    status: { type: String, enum: ["pending", "success", "failed", "refunded"], default: "pending" },
    transactionId: String,
    invoiceUrl: String,
    milestone: { type: String, default: "advance" },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
