import Course from "../models/Course.js";

// GET ALL COURSES
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name email");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET SINGLE COURSE
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate(
      "instructor",
      "name email"
    );

    if (!course)
      return res.status(404).json({ message: "Course not found" });

    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE COURSE (IMPORTANT CHANGE HERE)
export const createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      ...req.body,
      instructor: req.user.id,
      instructorName: req.user.name, // 🔥 ADD THIS
    });

    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET MY COURSES (ONLY INSTRUCTOR)
export const getMyCourses = async (req, res) => {
  try {
    const courses = await Course.find({
      instructor: req.user.id,
    });

    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete API
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // only owner can delete
    if (course.instructor.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await course.deleteOne();

    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE COURSE
export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // only owner can update
    if (course.instructor.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedCourse);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};