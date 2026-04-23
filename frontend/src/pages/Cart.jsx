import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { token } = useAuth();
  const { cart, fetchCart } = useCart();

  // 🔥 LOAD CART FROM CONTEXT
  useEffect(() => {
    fetchCart();
  }, [token]);

  // ❌ REMOVE ITEM
  const removeFromCart = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/user/cart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchCart(); // 🔥 auto refresh UI
    } catch (err) {
      console.log(err);
    }
  };

  // 💰 TOTAL
  const total = cart.reduce(
    (acc, item) => acc + item.course.price,
    0
  );

  return (
    <div className="pt-24 max-w-6xl mx-auto px-6">

      <h1 className="text-3xl font-bold mb-8">
        Your Cart
      </h1>

      {/* 🧠 EMPTY STATE */}
      {cart.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-xl mb-4">Your cart is empty 🛒</p>
          <button
            onClick={() => window.location.href = "/courses"}
            className="bg-blue-500 px-6 py-2 rounded-lg"
          >
            Browse Courses
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-4">

            {cart.map((item) => (
              <div
                key={item._id}
                className="flex gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition"
              >
                {/* IMAGE */}
                <img
                  src={item.course.thumbnail}
                  alt={item.course.title}
                  className="w-28 h-20 object-cover rounded"
                />

                {/* INFO */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.course.title}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      ₹{item.course.price}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(item.course._id)
                    }
                    className="text-red-400 text-sm hover:underline mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white/5 p-6 rounded-xl h-fit sticky top-24">

            <h2 className="text-xl font-semibold mb-4">
              Summary
            </h2>

            <div className="flex justify-between mb-3">
              <span>Total</span>
              <span className="font-semibold">₹{total}</span>
            </div>

            <button className="w-full bg-blue-500 py-3 rounded-xl hover:bg-blue-600 transition">
              Buy Now
            </button>

          </div>

        </div>
      )}
    </div>
  );
}