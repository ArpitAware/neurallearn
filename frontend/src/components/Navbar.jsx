import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import API from "../config/api"

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [categories, setCategories] = useState([]);

  const dropdownRef = useRef();
  const navigate = useNavigate();

  const { user } = useAuth();
  const { cart } = useCart();

  // FETCH CATEGORIES
  useEffect(() => {
    axios
      .get(`${API}/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  // CLOSE DROPDOWN
  useEffect(() => {
    const handleClick = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="fixed w-full z-50 bg-[#0b0f19]/80 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* 🔥 LEFT: MOBILE MENU ICON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenu(true)}
        >
          <FiMenu />
        </button>

        {/* 🔥 LOGO (CENTER ON MOBILE) */}
        <Link to="/" className="text-xl font-bold mx-auto md:mx-0">
          NeuralLearn
        </Link>

        {/* 🔥 DESKTOP NAV */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-yellow-400">Home</Link>

          {/* DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="px-3 py-1 rounded-lg border border-white/10 hover:bg-white/10 transition"
            >
              Courses ▾
            </button>

            {open && (
              <div className="absolute top-12 left-0 bg-[#111827] border border-white/10 rounded-xl p-3 w-56 shadow-xl z-50">

                <div
                  onClick={() => {
                    navigate("/courses");
                    setOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer"
                >
                  All Courses
                </div>

                <div className="border-t border-white/10 my-2"></div>

                {categories.map((cat) => (
                  <div
                    key={cat._id}
                    onClick={() => {
                      navigate(`/courses/${cat.slug}`);
                      setOpen(false);
                    }}
                    className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer"
                  >
                    {cat.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* 🔥 RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {user && (
            <>
              <Link to="/wishlist">
                <FaHeart className="text-xl text-pink-500" />
              </Link>

              <Link to="/cart" className="relative mr-2">
                <FaShoppingCart className="text-xl" />

                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-[1px] rounded-full">
                    {cart.length}
                  </span>
                )}
              </Link>
            </>
          )}

          {!user ? (
            <>
              <Link to="/login" className="hidden md:block border px-3 py-1 rounded-lg">
                Login
              </Link>
              <Link to="/signup" className="hidden md:block border px-3 py-1 rounded-lg">
                Signup
              </Link>
            </>
          ) : (
            <>
              {user.role === "student" && (
                <Link to="/student" className="border px-3 py-1 rounded-lg text-sm">
                  Dashboard
                </Link>
              )}

              {user.role === "instructor" && (
                <Link to="/instructor" className="border px-3 py-1 rounded-lg text-sm">
                  Instructor
                </Link>
              )}
            </>
          )}
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col p-6">

          {/* CLOSE */}
          <button
            className="self-end text-2xl"
            onClick={() => setMobileMenu(false)}
          >
            <FiX />
          </button>

          {/* LINKS */}
          <div className="mt-10 flex flex-col gap-6 text-lg">

            <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
            <Link to="/courses" onClick={() => setMobileMenu(false)}>Courses</Link>
            <Link to="/about" onClick={() => setMobileMenu(false)}>About</Link>
            <Link to="/contact" onClick={() => setMobileMenu(false)}>Contact</Link>

            {user && (
              <>
                <Link to="/wishlist" onClick={() => setMobileMenu(false)}>Wishlist</Link>
                <Link to="/cart" onClick={() => setMobileMenu(false)}>Cart</Link>
              </>
            )}

            {!user ? (
              <>
                <Link to="/login" onClick={() => setMobileMenu(false)}>Login</Link>
                <Link to="/signup" onClick={() => setMobileMenu(false)}>Signup</Link>
              </>
            ) : (
              <>
                <Link to="/student" onClick={() => setMobileMenu(false)}>Dashboard</Link>
              </>
            )}

          </div>
        </div>
      )}
    </div>
  );
}