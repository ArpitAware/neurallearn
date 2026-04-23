import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();

  // detect auth pages
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      <Navbar />

      {/* CONDITIONAL SPACING */}
      <div className={isAuthPage ? "" : "pt-[70px]"}>
        <Outlet />
      </div>
    </>
  );
}