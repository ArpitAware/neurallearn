import User from "../models/User.js";

// ❤️ WISHLIST TOGGLE
export const addToWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const index = user.wishlist.indexOf(req.params.id);

    if (index === -1) {
      user.wishlist.push(req.params.id);
    } else {
      user.wishlist.splice(index, 1);
    }

    await user.save();

    res.json(user.wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ❤️ GET WISHLIST
export const getWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("wishlist");
    res.json(user.wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🛒 ADD TO CART
export const addToCart = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const exists = user.cart.find(
      (item) => item.course.toString() === req.params.id
    );

    if (!exists) {
      user.cart.push({ course: req.params.id });
      await user.save();
    }

    res.json(user.cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🛒 GET CART
export const getCart = async (req, res) => {
  try {
    console.log("REQ.USER:", req.user); // 🔍 debug

    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const user = await User.findById(req.user._id)
      .populate("cart.course");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.cart);

  } catch (err) {
    console.error("❌ GET CART ERROR:", err);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
};

// ❌ REMOVE FROM CART
export const removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    user.cart = user.cart.filter(
      (item) => item.course.toString() !== req.params.id
    );

    await user.save();

    res.json(user.cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};