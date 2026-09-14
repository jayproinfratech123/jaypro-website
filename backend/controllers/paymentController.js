import Razorpay from "razorpay";
import crypto from "crypto";
import { savePendingSiteVisit, saveVerifiedPayment } from '../services/leadService.js';

const razorpay = process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET ? new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
}) : null;

const clean = (value) => String(value ?? "").trim();

export const createPaymentOrder = async (req, res) => {
  try {
    if (!razorpay) return res.status(503).json({ success: false, message: 'Payments are not configured.' });
    const { serviceId, serviceName, amount, customer, source } = req.body;
    const isSiteVisit = source === 'Engineer Site Visit';
    const fullName = clean(customer?.fullName);
    const mobile = clean(customer?.mobile);
    const location = clean(customer?.location);
    const finalServiceName = clean(serviceName);
    const paymentAmount = Number(amount);

    if (isSiteVisit && (!location || fullName.length > 150 || location.length > 150 || finalServiceName.length > 255)) {
      return res.status(400).json({ success: false, message: 'Enter a name and location up to 150 characters and a service up to 255 characters.' });
    }

    if (serviceId !== "custom-payment") {
      return res.status(400).json({ success: false, message: "Invalid payment request." });
    }
    if (!fullName) {
      return res.status(400).json({ success: false, message: "Customer name is required." });
    }
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return res.status(400).json({ success: false, message: "Please enter a valid mobile number." });
    }
    if (!finalServiceName) {
      return res.status(400).json({ success: false, message: "Service is required." });
    }
    if (!Number.isFinite(paymentAmount) || paymentAmount < 1 || paymentAmount > 10000000) {
      return res.status(400).json({ success: false, message: "Enter a valid payment amount." });
    }

    const localOrderId = `JAYPRO-${Date.now()}-${crypto.randomInt(1000, 10000)}`;
    const order = await razorpay.orders.create({
      amount: Math.round(paymentAmount * 100),
      currency: "INR",
      receipt: localOrderId,
      notes: {
        customer_name: fullName,
        mobile,
        location,
        service: finalServiceName,
        ...(isSiteVisit ? { source: 'Engineer Site Visit' } : {}),
      },
    });

    if (isSiteVisit) {
      try {
        await savePendingSiteVisit(order);
      } catch (databaseError) {
        console.error('Site visit database error:', databaseError.code);
        return res.status(503).json({ success: false, message: 'Unable to save your booking. Please try again. Payment has not been started.' });
      }
    }

    return res.status(201).json({
      success: true,
      key: process.env.RAZORPAY_KEY_ID,
      localOrderId,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      serviceName: finalServiceName,
    });
  } catch (error) {
    console.error("Create payment order error:", error);
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error?.error?.description || error.message || "Unable to create payment order.",
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    if (!razorpay) return res.status(503).json({ success: false, message: 'Payments are not configured.' });
    const {
      localOrderId,
      razorpay_payment_id: paymentId,
      razorpay_order_id: orderId,
      razorpay_signature: signature,
    } = req.body;

    if (!localOrderId || !paymentId || !orderId || !signature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification information is incomplete.",
      });
    }

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    const expectedBuffer = Buffer.from(expectedSignature, "hex");
    const actualBuffer = Buffer.from(clean(signature), "hex");
    const signatureValid =
      expectedBuffer.length === actualBuffer.length &&
      crypto.timingSafeEqual(expectedBuffer, actualBuffer);

    if (!signatureValid) {
      return res.status(400).json({ success: false, message: "Payment signature verification failed." });
    }

    const order = await razorpay.orders.fetch(orderId);
    if (clean(order.receipt) !== clean(localOrderId)) {
      return res.status(400).json({ success: false, message: "Payment order does not match." });
    }

    try {
      await saveVerifiedPayment({ order, paymentId });
    } catch (databaseError) {
      console.error('Verified payment database error:', databaseError.code);
      return res.status(503).json({ success: false, databaseSaved: false, message: 'Payment signature verified, but the record could not be saved. Please contact support with your payment ID; do not pay again.' });
    }

    return res.json({
      success: true,
      message: "Payment verified and saved.",
      databaseSaved: true,
      payment: {
        localOrderId: order.receipt,
        razorpayOrderId: order.id,
        razorpayPaymentId: paymentId,
        amount: Number(order.amount) / 100,
        currency: order.currency,
        serviceName: order.notes?.service || "",
        status: "paid",
      },
    });
  } catch (error) {
    console.error("Verify payment error:", error);
    return res.status(500).json({ success: false, message: "Unable to verify payment." });
  }
};
