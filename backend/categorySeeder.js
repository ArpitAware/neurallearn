import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./models/Category.js";
import { categories } from "./data/categories.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Category.deleteMany();

const formatted = categories.map((c) => ({
  name: c.name,
  slug: c.name.toLowerCase().replace(/\s+/g, "-"),
}));

await Category.insertMany(formatted);

console.log("Categories Seeded");

process.exit();