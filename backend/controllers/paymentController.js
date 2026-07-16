import Payment from "../models/Payment.js";

// @desc  Create a payment record (integrate Razorpay/Stripe order creation here)
// @route POST /api/payments
export const createPayment = async (req, res) => {
  try {
    const payment = await Payment.create({ ...req.body, customer: req.user._id });
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Get my payments
// @route GET /api/payments/my
export const getMyPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ customer: req.user._id }).populate("project", "title").sort({ createdAt: -1 });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Get all payments (admin)
// @route GET /api/payments
export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate("customer", "name email").populate("project", "title").sort({ createdAt: -1 });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Webhook / status update after gateway confirms payment
// @route PUT /api/payments/:id/status
export const updatePaymentStatus = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status, transactionId: req.body.transactionId },
      { new: true }
    );
    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
