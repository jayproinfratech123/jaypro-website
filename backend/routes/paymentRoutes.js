import express from "express";

import {
  createPaymentOrder,
  verifyPayment,
} from "../controllers/paymentController.js";

// =====================================================
// ROUTER
// =====================================================

const router =
  express.Router();

// =====================================================
// CREATE PAYMENT ORDER
// =====================================================

router.post(
  "/create-order",
  createPaymentOrder
);

// =====================================================
// VERIFY PAYMENT
// =====================================================

router.post(
  "/verify",
  verifyPayment
);

// =====================================================
// EXPORT
// =====================================================

export default router;