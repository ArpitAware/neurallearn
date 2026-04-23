import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addToWishlist,
  getWishlist,
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/wishlist/:id", protect, addToWishlist);
router.get("/wishlist", protect, getWishlist);

router.post("/cart/:id", protect, addToCart);
router.get("/cart", protect, getCart);
router.delete("/cart/:id", protect, removeFromCart);

export default router;