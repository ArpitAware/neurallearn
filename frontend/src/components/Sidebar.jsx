import { Home, Book, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `flex items-center gap-2 p-2 rounded-lg cursor-pointer transition ${
      pathname === path
        ? "bg-white/10 text-blue-400"
        : "hover:text-blue-400"
    }`;

  return (
    <div className="w-64 h-screen bg-black/40 backdrop-blur-xl p-5">
      <h1 className="text-xl font-bold mb-10">NeuralLearn</h1>

      <nav className="space-y-3">
        <Link to="/" className={linkClass("/")}>
          <Home size={18} /> Dashboard
        </Link>

        <Link to="/courses" className={linkClass("/courses")}>
          <Book size={18} /> Courses
        </Link>

        <Link to="/profile" className={linkClass("/profile")}>
          <User size={18} /> Profile
        </Link>
      </nav>
    </div>
  );
}