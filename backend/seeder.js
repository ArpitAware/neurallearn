import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Course from "./models/Course.js";

// 🔥 IMPORT YOUR REAL DATA
import { courses } from "./data/coursesData.js";

dotenv.config();

const seedCourses = async () => {
  try {
    await connectDB();

    // ❌ clear old data
    await Course.deleteMany();

    // ✅ transform your data (IMPORTANT STEP)
    const formattedCourses = courses.map((course) => ({
  title: course.title,
  description: course.description,
  price: course.price,
  thumbnail: course.thumbnail,

  instructor: null,
  instructorName: course.instructor, // ✅ ADD THIS

  category: course.category,
  rating: course.rating,
  students: course.students,
  sections: course.sections,
}));

    // ✅ insert into DB
    await Course.insertMany(formattedCourses);

    console.log("🔥 Courses Seeded Successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedCourses();