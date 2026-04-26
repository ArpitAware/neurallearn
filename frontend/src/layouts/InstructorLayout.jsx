import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function InstructorLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { label: "Dashboard", path: "/instructor" },
    { label: "Create Course", path: "/instructor/create" },
    { label: "My Courses", path: "/instructor/my-courses" },
    { label: "Earnings", path: "/instructor/earnings" },
  ];

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <div className="w-64 h-screen bg-[#020617] p-6 border-r border-white/10 flex flex-col">

        <h2 className="text-2xl font-bold mb-10">👨‍🏫 Instructor</h2>

        <div className="space-y-3">
          {menu.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-blue-500"
                  : "hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 🔥 LOGOUT */}
        <div className="pt-6">
          <button
            onClick={logout}
            className="w-full bg-red-500 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>

    </div>
  );
}