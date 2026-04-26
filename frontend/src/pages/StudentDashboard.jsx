import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import MyCourses from "../components/dashboard/MyCourses";
import Profile from "../components/dashboard/Profile";

export default function StudentDashboard() {
  const [active, setActive] = useState("courses");

  const renderContent = () => {
    switch (active) {
      case "profile":
        return <Profile />;
      case "courses":
        return <MyCourses />;
      default:
        return <MyCourses />;
    }
  };

  return (
    <div className="bg-[#0f172a] text-white min-h-screen">

      {/* 🔥 SIDEBAR */}
      <Sidebar active={active} setActive={setActive} />

      {/* 🔥 MAIN CONTENT */}
      <div className="md:ml-64 p-6 pt-20 md:pt-6">
        {renderContent()}
      </div>

    </div>
  );
}