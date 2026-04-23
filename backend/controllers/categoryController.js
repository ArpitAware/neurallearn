import Category from "../models/Category.js";

// GET ALL
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE (ADMIN LATER)
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const slug = name
  .toLowerCase()
  .trim()
  .replace(/[^\w\s]/g, "")
  .replace(/\s+/g, "-");

    const category = await Category.create({ name, slug });

    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};