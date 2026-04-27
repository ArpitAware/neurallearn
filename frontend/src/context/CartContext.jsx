import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import API from "../config/api"

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🔄 FETCH CART (FINAL FIX)
  const fetchCart = async () => {
    try {
      const storedToken = localStorage.getItem("token");

      if (!storedToken) return;

      const res = await axios.get(
        `${API}/user/cart`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      setCart(res.data);
    } catch (err) {
      console.log("Fetch cart error:", err.response?.data || err.message);
    }
  };

  // ➕ ADD TO CART
  const addToCart = async (course) => {
    try {
      const storedToken = localStorage.getItem("token");

      await axios.post(
        `${API}/user/cart/${course._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      fetchCart();
    } catch (err) {
      console.log("Add to cart error:", err);
    }
  };

  // ❌ REMOVE
  const removeFromCart = async (courseId) => {
    try {
      const storedToken = localStorage.getItem("token");

      await axios.delete(
        `${API}/user/cart/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      fetchCart();
    } catch (err) {
      console.log("Remove error:", err);
    }
  };

  // 🔥 CLEAR CART
  const clearCart = async () => {
    try {
      const storedToken = localStorage.getItem("token");

      await axios.delete(
        `${API}/user/cart/clear`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      setCart([]);
    } catch (err) {
      console.log("Clear cart error:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        fetchCart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);