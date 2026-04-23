import User from "../models/User.js";


// ❤️ ADD / REMOVE WISHLIST (TOGGLE)
export const addToWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const index = user.wishlist.indexOf(req.params.id);

    if (index === -1) {
      // ADD
      user.wishlist.push(req.params.id);
    } else {
      // REMOVE
      user.wishlist.splice(index, 1);
    }

    await user.save(); // 🔥 IMPORTANT FIX

    res.json(user.wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ❤️ GET WISHLIST
export const getWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("wishlist");
    res.json(user.wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// 🛒 ADD TO CART
export const addToCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

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
    const user = await User.findById(req.user.id).populate("cart.course");
    res.json(user.cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ❌ REMOVE FROM CART
export const removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    user.cart = user.cart.filter(
      (item) => item.course.toString() !== req.params.id
    );

    await user.save();

    res.json(user.cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};