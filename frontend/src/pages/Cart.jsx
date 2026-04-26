import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { token } = useAuth();
  const { cart, fetchCart, clearCart } = useCart();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) fetchCart();
  }, [token]);

  const removeFromCart = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/user/cart/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchCart();
    } catch (err) {
      console.log("Remove error:", err);
    }
  };

  const total = cart.reduce(
    (acc, item) => acc + item.course.price,
    0
  );

  // 🔥 FINAL PAYMENT FLOW
  const handlePayment = async () => {
    if (!cart.length) return;

    try {
      setLoading(true);

      // 1️⃣ Create order
      const { data: order } = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        { amount: total }
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // ✅ from .env
        amount: order.amount,
        currency: order.currency,
        name: "NeuralLearn",
        description: "Course Purchase",
        order_id: order.id,

        // 🔥 AFTER PAYMENT SUCCESS
        handler: async function (response) {
          try {
            const courseIds = cart.map(
              (item) => item.course._id
            );

            await axios.post(
              "http://localhost:5000/api/payment/verify",
              {
                ...response,
                courses: courseIds,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            await clearCart();

            alert("🎉 Payment successful & courses unlocked!");

          } catch (err) {
            console.log("Verification error:", err);
            alert("Payment verification failed");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.log("Payment error:", err);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-5 max-w-6xl mx-auto px-6">

      <h1 className="text-3xl font-bold mb-8">
        Your Cart
      </h1>

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

          {/* LEFT */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex gap-4 p-4 bg-white/5 rounded-xl"
              >
                <img
                  src={item.course.thumbnail}
                  className="w-28 h-20 object-cover rounded"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">
                    {item.course.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    ₹{item.course.price}
                  </p>

                  <button
                    onClick={() =>
                      removeFromCart(item.course._id)
                    }
                    className="text-red-400 text-sm mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 p-6 rounded-xl h-fit sticky top-24">

            <h2 className="text-xl font-semibold mb-4">
              Summary
            </h2>

            <div className="flex justify-between mb-3">
              <span>Total</span>
              <span className="font-semibold">₹{total}</span>
            </div>

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-blue-500 py-3 rounded-xl"
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>

          </div>

        </div>
      )}
    </div>
  );
}