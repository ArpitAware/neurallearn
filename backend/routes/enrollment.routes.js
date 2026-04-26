import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import Enrollment from "../models/Enrollment.js";

const router = express.Router();

/**
 * ✅ CHECK IF USER IS ENROLLED
 */
router.get("/check/:courseId", protect, async (req, res) => {
  try {
    const exists = await Enrollment.findOne({
      user: req.user._id,
      course: req.params.courseId,
    });

    res.json({ enrolled: !!exists });

  } catch (err) {
    console.error("Check error:", err);
    res.status(500).json({ message: "Check failed" });
  }
});

/**
 * 📚 GET MY COURSES
 */
router.get("/my-courses", protect, async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      user: req.user._id,
    }).populate("course");

    const courses = enrollments.map((e) => e.course);

    res.json(courses);

  } catch (err) {
    console.error("Fetch enrolled courses error:", err);
    res.status(500).json({ message: "Failed to fetch courses" });
  }
});

export default router;