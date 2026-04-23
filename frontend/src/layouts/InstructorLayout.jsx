import { Outlet, Link, useLocation } from "react-router-dom";

export default function InstructorLayout() {
  const location = useLocation();

  const linkStyle = (path) =>
    `block px-4 py-2 rounded-lg ${
      location.pathname === path
        ? "bg-blue-500"
        : "hover:bg-white/10"
    }`;

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <div className="w-64 min-h-screen border-r border-white/10 p-4 space-y-4">

        <h2 className="text-xl font-bold mb-6">Instructor</h2>
        <Link to="/instructor" className={linkStyle("/instructor")}>
  Dashboard
</Link>

        <Link to="/instructor/create" className={linkStyle("/instructor/create")}>
          Create Course
        </Link>

        <Link to="/instructor/my-courses" className={linkStyle("/instructor/my-courses")}>
          My Courses
        </Link>

        <Link to="/instructor/earnings" className={linkStyle("/instructor/earnings")}>
          Earnings
        </Link>

      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>

    </div>
  );
}