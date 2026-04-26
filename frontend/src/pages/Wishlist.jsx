import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Wishlist() {
  const { token } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  const fetchWishlist = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/user/wishlist",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setWishlist(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleWishlist = async (courseId) => {
    try {
      await axios.post(
        `http://localhost:5000/api/user/wishlist/${courseId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      fetchWishlist();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) fetchWishlist();
  }, [token]);

  return (
    <div className="pt-24 max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-400">No wishlist items</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {wishlist.map((course) => (
            <div
              key={course._id}
              className="bg-white/5 p-4 rounded-xl"
            >
              <img
                src={course.thumbnail}
                className="w-full h-40 object-cover rounded mb-3"
              />

              <h3 className="font-semibold">
                {course.title}
              </h3>

              <p className="text-gray-400 text-sm">
                ₹{course.price}
              </p>

              <button
                onClick={() => toggleWishlist(course._id)}
                className="mt-3 w-full bg-red-500 py-2 rounded"
              >
                Remove ❤️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}