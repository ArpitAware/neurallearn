import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";

import { protect } from "../middleware/authMiddleware.js";
import User from "../models/User.js";
import Enrollment from "../models/Enrollment.js";

dotenv.config();

const router = express.Router();

// 🔥 Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/**
 * 🧾 CREATE ORDER
 */
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // ₹ → paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json(order);
  } catch (err) {
    console.error("Order error:", err);
    res.status(500).json({ message: "Order creation failed" });
  }
});

/**
 * 🔐 VERIFY PAYMENT + SAFE ENROLLMENT
 */
router.post("/verify", protect, async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      courses
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    console.log("➡️ VERIFY API HIT");
    console.log("Courses:", courses);
    console.log("User:", req.user._id);

    // ❌ Invalid payment
    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        message: "Payment verification failed"
      });
    }

    // ✅ SAFE ENROLLMENT (NO DUPLICATES)
    const createdEnrollments = [];

    for (const courseId of courses) {
      const exists = await Enrollment.findOne({
        user: req.user._id,
        course: courseId
      });

      if (!exists) {
        const enrollment = await Enrollment.create({
          user: req.user._id,
          course: courseId,
          paymentId: razorpay_payment_id
        });

        createdEnrollments.push(enrollment);
      }
    }

    // 🧹 Clear cart
    await User.findByIdAndUpdate(req.user._id, {
      $set: { cart: [] }
    });

    console.log("✅ PAYMENT VERIFIED & STORED");

    res.json({
      message: "Payment verified & courses unlocked",
      enrolledCount: createdEnrollments.length
    });

  } catch (err) {
    console.error("VERIFY ERROR:", err);

    // 🔥 HANDLE DUPLICATE ERROR (EXTRA SAFETY)
    if (err.code === 11000) {
      return res.status(400).json({
        message: "Already enrolled in this course"
      });
    }

    res.status(500).json({ message: "Verification failed" });
  }
});

export default router;