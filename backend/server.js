import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

// ROUTES
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import enrollmentRoutes from "./routes/enrollment.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import progressRoutes from "./routes/progress.routes.js";

dotenv.config();

const app = express();

// ✅ CORS CONFIG (UPDATED)
app.use(cors({
  origin: [
    "http://localhost:5173",              // local dev
    "https://your-app.vercel.app"         // 🔥 replace after frontend deploy
  ],
  credentials: true
}));

// BODY PARSER
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
app.use("/api/user", userRoutes);
app.use("/api/enrollment", enrollmentRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/progress", progressRoutes);

// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});