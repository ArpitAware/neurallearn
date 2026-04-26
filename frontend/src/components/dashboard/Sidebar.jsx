import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Sidebar({ active, setActive }) {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  const menu = [
    { key: "courses", label: "My Courses" },
    { key: "profile", label: "Profile" },
    { key: "progress", label: "Progress" },
    { key: "certificates", label: "Certificates" },
  ];

  return (
    <>
      {/* 🔥 MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#020617] border-b border-white/10 z-50 flex items-center justify-between px-4 py-3">

        {/* LEFT (MENU + HOME) */}
        <div className="flex items-center gap-4">
          <button onClick={() => setOpen(true)} className="text-2xl">
            <FiMenu />
          </button>

          <Link to="/" className="font-semibold">
            Home
          </Link>
        </div>

        {/* RIGHT (OPTIONAL TITLE) */}
        <h2 className="font-bold">Dashboard</h2>
      </div>

      {/* 🔥 SIDEBAR (OVERLAY ON MOBILE) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#020617] p-6 border-r border-white/10 z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* CLOSE BUTTON (MOBILE ONLY) */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>

        {/* DESKTOP TITLE */}
        <h2 className="text-2xl font-bold mb-10 hidden md:block">
          🎓 LMS
        </h2>

        {/* MENU ITEMS */}
        <div className="space-y-3">
          {menu.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActive(item.key);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                active === item.key
                  ? "bg-blue-500"
                  : "hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* LOGOUT BUTTON */}
        <div className="mt-10">
          <button
            onClick={logout}
            className="w-full bg-red-500 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* 🔥 BACKDROP (CLICK TO CLOSE) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}