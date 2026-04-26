import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import Progress from "../models/Progress.js";

const router = express.Router();

/**
 * ✅ MARK LECTURE COMPLETE
 */
router.post("/mark", protect, async (req, res) => {
  try {
    const { courseId, lectureId } = req.body;

    let progress = await Progress.findOne({
      user: req.user._id,
      course: courseId,
    });

    if (!progress) {
      progress = await Progress.create({
        user: req.user._id,
        course: courseId,
        completedLectures: [lectureId],
      });
    } else {
      if (!progress.completedLectures.includes(lectureId)) {
        progress.completedLectures.push(lectureId);
        await progress.save();
      }
    }

    res.json(progress);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Progress update failed" });
  }
});

/**
 * ✅ GET PROGRESS
 */
router.get("/:courseId", protect, async (req, res) => {
  try {
    const progress = await Progress.findOne({
      user: req.user._id,
      course: req.params.courseId,
    });

    res.json(progress || { completedLectures: [] });
  } catch (err) {
    res.status(500).json({ message: "Fetch progress failed" });
  }
});

export default router;