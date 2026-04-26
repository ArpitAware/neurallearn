import Enrollment from "../models/Enrollment.js";

// 🔥 ENROLL COURSES (CHECKOUT)
export const enrollCourses = async (req, res) => {
  try {
    const userId = req.user._id;
    const { courses } = req.body;

    if (!courses || courses.length === 0) {
      return res.status(400).json({ message: "No courses provided" });
    }

    const enrollments = [];

    for (const courseId of courses) {
      const exists = await Enrollment.findOne({
        user: userId,
        course: courseId,
      });

      if (!exists) {
        const enrollment = await Enrollment.create({
          user: userId,
          course: courseId,
        });

        enrollments.push(enrollment);
      }
    }

    res.status(201).json({
      message: "Enrollment successful",
      enrollments,
    });

  } catch (err) {
    console.error("Enroll error:", err);
    res.status(500).json({ message: "Enrollment failed" });
  }
};


// 🔥 CHECK IF USER IS ENROLLED
export const checkEnrollment = async (req, res) => {
  try {
    const userId = req.user._id;
    const { courseId } = req.params;

    const exists = await Enrollment.findOne({
      user: userId,
      course: courseId,
    });

    res.json({ enrolled: !!exists });

  } catch (err) {
    console.error("Check enrollment error:", err);
    res.status(500).json({ message: "Check failed" });
  }
};


// 🔥 GET MY COURSES
export const getMyCourses = async (req, res) => {
  try {
    const userId = req.user._id;

    const enrollments = await Enrollment.find({ user: userId })
      .populate("course");

    const courses = enrollments.map((e) => e.course);

    res.json(courses);

  } catch (err) {
    console.error("Get courses error:", err);
    res.status(500).json({ message: "Failed to fetch courses" });
  }
};