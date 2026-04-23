import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

// ROUTES
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // ✅ ADD THIS

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// DB CONNECTION
connectDB();

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("API running...");
});

// API ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/categories", categoryRoutes);

// ✅ USER ROUTES (WISHLIST + CART)
app.use("/api/user", userRoutes);

// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});