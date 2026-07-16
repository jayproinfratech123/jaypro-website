import express from "express";
import {
  createProject,
  getMyProjects,
  getProjectById,
  getAllProjects,
  updateProject,
  addDailyUpdate,
  estimateCost,
} from "../controllers/projectController.js";
import { protect } from "../middleware/auth.js";
import { authorize } from "../middleware/role.js";

const router = express.Router();

router.post("/estimate", estimateCost); // public cost calculator
router.get("/my", protect, getMyProjects);
router.get("/", protect, authorize("admin"), getAllProjects);
router.post("/", protect, createProject);
router.get("/:id", protect, getProjectById);
router.put("/:id", protect, authorize("admin", "engineer", "architect"), updateProject);
router.post("/:id/updates", protect, authorize("admin", "engineer", "site_supervisor"), addDailyUpdate);

export default router;
