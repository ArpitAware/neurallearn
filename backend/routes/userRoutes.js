import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addToWishlist,
  getWishlist,
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/userController.js";
import User from "../models/User.js";

const router = express.Router();

// TEST
router.get("/test", (req, res) => {
  res.send("User route working");
});

// WISHLIST
router.post("/wishlist/:id", protect, addToWishlist);
router.get("/wishlist", protect, getWishlist);

// CART
router.post("/cart/:id", protect, addToCart);
router.get("/cart", protect, getCart);
router.delete("/cart/:id", protect, removeFromCart);

// CLEAR CART
router.delete("/cart/clear", protect, async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.user._id },
      { $set: { cart: [] } }
    );

    const updatedUser = await User.findById(req.user._id);

    res.json({
      message: "Cart cleared",
      cart: updatedUser.cart
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to clear cart" });
  }
});

export default router;