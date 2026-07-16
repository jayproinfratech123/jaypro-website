import express from "express";
import { getBlogs, getBlogBySlug, createBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";
import { protect } from "../middleware/auth.js";
import { authorize } from "../middleware/role.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);
router.post("/", protect, authorize("admin"), createBlog);
router.put("/:id", protect, authorize("admin"), updateBlog);
router.delete("/:id", protect, authorize("admin"), deleteBlog);

export default router;
