import mongoose from "mongoose";
import dotenv from "dotenv";
import Course from "./models/Course.js";

dotenv.config();
await mongoose.connect(process.env.MONGO_URI);

// 🔥 COMPLETE FIX
const map = {
  web: "web-development",
  "web-dev": "web-development",

  app: "app-development",
  "app-dev": "app-development",

  ai: "ai-ml",
  "ai-/-ml": "ai-ml",
  "data-science": "ai-ml",

  design: "design",
  "ui-ux": "design",

  devops: "devops",
};

const courses = await Course.find();

for (let course of courses) {
  if (map[course.category]) {
    course.category = map[course.category];
    await course.save();
  }
}

console.log("✅ ALL categories fixed properly");
process.exit();