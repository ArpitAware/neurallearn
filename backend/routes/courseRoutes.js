import express from "express";
import { protect, authorize } from "../middleware/authMiddleware.js";
import { updateCourse } from "../controllers/courseController.js";

import {
  getCourses,
  createCourse,
  getCourseById,
  getMyCourses,
  deleteCourse,
} from "../controllers/courseController.js";

const router = express.Router();

// PUBLIC
router.get("/", getCourses);

// 🔥 MOVE THIS UP
router.get("/my", protect, authorize("instructor"), getMyCourses);

// PROTECTED
router.post("/", protect, authorize("instructor"), createCourse);
// Update
router.put("/:id", protect, authorize("instructor"), updateCourse);
// DELETE
router.delete("/:id", protect, authorize("instructor"), deleteCourse);

// LAST (IMPORTANT)
router.get("/:id", getCourseById);

export default router;

