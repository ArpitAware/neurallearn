import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import CategoryCourses from "./pages/CategoryCourses";

import StudentDashboard from "./pages/StudentDashboard";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// 🔥 NEW IMPORTS
import InstructorLayout from "./layouts/InstructorLayout";
import CreateCourse from "./pages/instructor/CreateCourse";
import MyCourses from "./pages/instructor/MyCourses";
import EditCourse from "./pages/instructor/EditCourse";
import Earnings from "./pages/instructor/Earnings";
import InstructorHome from "./pages/instructor/InstructorHome";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* GLOBAL LAYOUT */}
        <Route element={<MainLayout />}>

          {/* PUBLIC */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:categoryId" element={<CategoryCourses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/cart" element={<Cart />} />
          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* STUDENT */}
          <Route
            path="/student"
            element={
              <ProtectedRoute role="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          {/* 🔥 INSTRUCTOR PANEL (NESTED ROUTES) */}
          <Route
  path="/instructor"
  element={
    <ProtectedRoute role="instructor">
      <InstructorLayout />
    </ProtectedRoute>
  }
>
  {/* 👇 DEFAULT PAGE */}
  <Route index element={<InstructorHome />} />

  <Route path="create" element={<CreateCourse />} />
  <Route path="my-courses" element={<MyCourses />} />
  <Route path="earnings" element={<Earnings />} />
  <Route path="edit/:id" element={<EditCourse />} />
</Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}