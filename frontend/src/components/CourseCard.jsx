import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function CourseCard({ course }) {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { cart, fetchCart } = useCart();

  const [isWishlisted, setIsWishlisted] = useState(false);

  // ❤️ WISHLIST CHECK
  useEffect(() => {
    const fetchWishlist = async () => {
      if (!token) return;

      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/wishlist",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const exists = res.data.find(
          (item) => item._id === course._id
        );

        setIsWishlisted(!!exists);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWishlist();
  }, [token, course._id]);

  // ✅ DERIVED STATE FROM CONTEXT (NO LOCAL STATE)
  const isInCart = cart.some(
    (item) => item.course._id === course._id
  );

  // ❤️ TOGGLE WISHLIST
  const toggleWishlist = async (e) => {
    e.stopPropagation();

    if (!token) return navigate("/login");

    try {
      await axios.post(
        `http://localhost:5000/api/user/wishlist/${course._id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setIsWishlisted((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  // 🛒 ADD TO CART
  const addToCart = async (e) => {
    e.stopPropagation();

    if (!token) return navigate("/login");

    try {
      await axios.post(
        `http://localhost:5000/api/user/cart/${course._id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      fetchCart(); // 🔥 GLOBAL UPDATE
    } catch (err) {
      console.log(err);
    }
  };

  // 💰 BUY NOW
  const handleBuy = async (e) => {
    e.stopPropagation();

    if (!token) return navigate("/login");

    try {
      await axios.post(
        `http://localhost:5000/api/user/cart/${course._id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      fetchCart(); // 🔥 sync
      navigate("/cart");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl w-[300px]"
    >
      {/* ❤️ HEART */}
      <button
        onClick={toggleWishlist}
        className="absolute top-3 right-3 z-10 text-xl"
      >
        {isWishlisted ? "❤️" : "🤍"}
      </button>

      {/* CONTENT */}
      <Link to={`/course/${course._id}`}>
        <div className="h-44 w-full overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>

        <div className="p-5 flex flex-col justify-between h-[150px]">
          <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-blue-400 transition">
            {course.title}
          </h3>

          <p className="text-gray-400 text-sm">
            {course.instructorName || "Instructor"}
          </p>

          <div className="flex justify-between items-center text-sm mt-2">
            <span className="text-yellow-400">
              ⭐ {course.rating || 4.5}
            </span>
            <span className="text-blue-400 font-semibold">
              ₹{course.price}
            </span>
          </div>
        </div>
      </Link>

      {/* BUTTONS */}
      <div className="flex gap-2 p-3">
        <button
          onClick={addToCart}
          className={`px-3 py-1 rounded w-full transition ${
            isInCart ? "bg-green-500" : "bg-yellow-500"
          }`}
        >
          {isInCart ? "Added ✔" : "Add to Cart"}
        </button>

        <button
          onClick={handleBuy}
          className="bg-blue-500 px-3 py-1 rounded w-full"
        >
          Buy
        </button>
      </div>
    </motion.div>
  );
}