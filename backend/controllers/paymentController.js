import Razorpay from "razorpay";
import crypto from "crypto";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const clean = (value) => String(value ?? "").trim();

const saveVerifiedPaymentToSheet = async ({ order, paymentId }) => {
  const body = new URLSearchParams({
    formType: "paymentLead",
    type: "paymentLead",
    fullName: clean(order.notes?.customer_name),
    mobile: clean(order.notes?.mobile),
    service: clean(order.notes?.service),
    location: clean(order.notes?.location),
    amount: String(Number(order.amount) / 100),
    localOrderId: clean(order.receipt),
    orderId: clean(order.id),
    paymentId: clean(paymentId),
    status: "Paid",
    paymentDate: new Date().toISOString(),
  });

  const response = await fetch(process.env.GOOGLE_SHEET_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: body.toString(),
    redirect: "follow",
  });

  if (!response.ok) {
    throw new Error(`Google Sheet returned HTTP ${response.status}.`);
  }
};

export const createPaymentOrder = async (req, res) => {
  try {
    const { serviceId, serviceName, amount, customer } = req.body;
    const fullName = clean(customer?.fullName);
    const mobile = clean(customer?.mobile);
    const location = clean(customer?.location);
    const finalServiceName = clean(serviceName);
    const paymentAmount = Number(amount);

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
      },
    });

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

    let sheetSaved = true;
    try {
      await saveVerifiedPaymentToSheet({ order, paymentId });
    } catch (sheetError) {
      sheetSaved = false;
      console.error("Verified payment Google Sheet error:", sheetError);
    }

    return res.json({
      success: true,
      message: sheetSaved
        ? "Payment verified and saved to Google Sheet."
        : "Payment verified, but Google Sheet logging failed.",
      sheetSaved,
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