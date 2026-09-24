import { HttpError, field } from './validation.js';

export async function paymentRoute(path, body, { env, db, fetchImpl }) {
  if (!env.RAZORPAY_KEY_ID || !env.RAZORPAY_KEY_SECRET) throw new HttpError(503, 'Payments are not configured.');
  async function razorpay(resource, payload) {
    const response = await fetchImpl(`https://api.razorpay.com/v1/${resource}`, {
      method: payload ? 'POST' : 'GET',
      headers: { Authorization: `Basic ${btoa(`${env.RAZORPAY_KEY_ID}:${env.RAZORPAY_KEY_SECRET}`)}`, 'Content-Type': 'application/json' },
      ...(payload ? { body: JSON.stringify(payload) } : {}),
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new HttpError(502, 'Unable to contact the payment provider. Please try again.');
    return response.json();
  }
  const paymentLead = order => ({
    customer: order.notes.customer_name, phone: order.notes.mobile, city: order.notes.location,
    service: order.notes.service, date: new Date().toISOString().slice(0, 10),
    orderId: order.id, amount: Number(order.amount) / 100,
  });
  if (path === '/payments/create-order') {
    if (body.serviceId !== 'custom-payment') throw new HttpError(400, 'Invalid payment request.');
    const fullName = field(body.customer?.fullName, 150);
    const mobile = field(body.customer?.mobile, 10);
    if (!/^[6-9]\d{9}$/.test(mobile)) throw new HttpError(400, 'Please enter a valid mobile number.');
    const isSiteVisit = body.source === 'Engineer Site Visit';
    const location = field(body.customer?.location ?? '', 150, isSiteVisit);
    const service = field(body.serviceName, 255);
    const amount = Number(body.amount);
    if (!Number.isFinite(amount) || amount < 1 || amount > 10000000) throw new HttpError(400, 'Enter a valid payment amount.');
    const localOrderId = `JAYPRO-${crypto.randomUUID().slice(0, 28)}`;
    const order = await razorpay('orders', {
      amount: Math.round(amount * 100), currency: 'INR', receipt: localOrderId,
      notes: { customer_name: fullName, mobile, location, service, ...(isSiteVisit ? { source: 'Engineer Site Visit' } : {}) },
    });
    // Save every order before displaying checkout, so verification can only update a known booking.
    try {
      await db.insert('jaypro_leads', { ...paymentLead(order), source: isSiteVisit ? 'Engineer Site Visit' : 'Payment', status: 'New', notes: '' });
    } catch {
      throw new HttpError(503, 'Unable to save the booking. Payment has not been started. Please try again.');
    }
    return { success: true, key: env.RAZORPAY_KEY_ID, localOrderId, orderId: order.id, amount: order.amount, currency: order.currency, serviceName: service };
  }
  const orderId = field(body.razorpay_order_id, 100);
  const paymentId = field(body.razorpay_payment_id, 100);
  const receipt = field(body.localOrderId, 100);
  const signature = field(body.razorpay_signature, 64);
  if (!/^order_[a-zA-Z0-9]+$/.test(orderId) || !/^pay_[a-zA-Z0-9]+$/.test(paymentId) || !/^[a-fA-F0-9]{64}$/.test(signature)) throw new HttpError(400, 'Invalid payment verification details.');
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', encoder.encode(env.RAZORPAY_KEY_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
  const bytes = Uint8Array.from(signature.match(/../g), pair => parseInt(pair, 16));
  if (!await crypto.subtle.verify('HMAC', key, bytes, encoder.encode(`${orderId}|${paymentId}`))) throw new HttpError(400, 'Payment signature verification failed.');
  const [order, payment] = await Promise.all([razorpay(`orders/${orderId}`), razorpay(`payments/${paymentId}`)]);
  if (order.receipt !== receipt || payment.order_id !== orderId || payment.amount !== order.amount || payment.currency !== 'INR' || order.currency !== 'INR') throw new HttpError(400, 'Payment order does not match.');
  if (payment.status !== 'captured') throw new HttpError(409, 'Payment capture is pending. Please contact support with your payment ID; do not pay again.');
  try {
    const saved = await db.rpc('jaypro_verify_payment', { p_order_id: orderId, p_payment_id: paymentId });
    if (!saved) throw new Error('Booking not found');
  } catch {
    throw new HttpError(503, 'Payment verified, but the record could not be saved. Contact support with your payment ID; do not pay again.');
  }
  return { success: true, databaseSaved: true, message: 'Payment verified and saved.', payment: { localOrderId: order.receipt, razorpayOrderId: order.id, razorpayPaymentId: paymentId, amount: Number(order.amount) / 100, currency: order.currency, serviceName: order.notes?.service || '', status: 'paid' } };
}
