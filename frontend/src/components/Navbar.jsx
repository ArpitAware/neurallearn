import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Search, ShoppingCart } from "lucide-react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const dropdownRef = useRef();
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const { cart } = useCart(); // ✅ GLOBAL CART

  // ✅ FETCH CATEGORIES
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ✅ CLOSE DROPDOWN
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
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold">
          NeuralLearn
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-yellow-400">
            Home
          </Link>

          {/* COURSES DROPDOWN */}
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

          <Link to="/about" className="hover:text-blue-400">
            About Us
          </Link>

          <Link to="/contact" className="hover:text-blue-400">
            Contact Us
          </Link>
        </div>

        {/* SEARCH */}
        <div className="hidden md:flex items-center bg-white/10 px-3 py-1 rounded-lg">
          <input
            placeholder="Search"
            className="bg-transparent outline-none text-sm"
          />
          <Search size={16} />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-3 items-center">

          {/* 🛒 CART ICON */}
          {user && (
            <Link to="/cart" className="relative">
              <ShoppingCart size={22} />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-[1px] rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          )}

          {!user ? (
            <>
              <Link to="/login" className="border px-4 py-1 rounded-lg">
                Login
              </Link>
              <Link to="/signup" className="border px-4 py-1 rounded-lg">
                Signup
              </Link>
            </>
          ) : (
            <>
              {user.role === "student" && (
                <Link
                  to="/student"
                  className="border px-4 py-1 rounded-lg hover:bg-white/10 transition"
                >
                  Dashboard
                </Link>
              )}

              {user.role === "instructor" && (
                <Link
                  to="/instructor"
                  className="border px-4 py-1 rounded-lg hover:bg-white/10 transition"
                >
                  Instructor Panel
                </Link>
              )}

              <button
                onClick={logout}
                className="border px-4 py-1 rounded-lg text-red-400 hover:bg-red-500/10 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}