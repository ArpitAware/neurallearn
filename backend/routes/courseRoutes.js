import express from "express";
import { protect } from "../middleware/authMiddleware.js";

import {
  getCourses,
  createCourse,
  getCourseById,
  getMyCourses,
  deleteCourse,
  updateCourse,
} from "../controllers/courseController.js";

const router = express.Router();

// PUBLIC
router.get("/", getCourses);

// PROTECTED (NO AUTHORIZE FOR NOW)
router.get("/my", protect, getMyCourses);
router.post("/", protect, createCourse);
router.put("/:id", protect, updateCourse);
router.delete("/:id", protect, deleteCourse);

// LAST (IMPORTANT)
router.get("/:id", getCourseById);

export default router;