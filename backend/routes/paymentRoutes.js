import express from "express";
import { createPayment, getMyPayments, getAllPayments, updatePaymentStatus } from "../controllers/paymentController.js";
import { protect } from "../middleware/auth.js";
import { authorize } from "../middleware/role.js";

const router = express.Router();

router.post("/", protect, createPayment);
router.get("/my", protect, getMyPayments);
router.get("/", protect, authorize("admin"), getAllPayments);
router.put("/:id/status", protect, authorize("admin"), updatePaymentStatus);

export default router;
