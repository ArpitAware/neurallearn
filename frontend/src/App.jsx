import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import CategoryCourses from "./pages/CategoryCourses";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist"; // 🔥 NEW

import StudentDashboard from "./pages/StudentDashboard";
import LearningPage from "./pages/LearningPage";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// INSTRUCTOR
import InstructorLayout from "./layouts/InstructorLayout";
import CreateCourse from "./pages/instructor/CreateCourse";
import MyCourses from "./pages/instructor/MyCourses";
import EditCourse from "./pages/instructor/EditCourse";
import Earnings from "./pages/instructor/Earnings";
import InstructorHome from "./pages/instructor/InstructorHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          {/* PUBLIC */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:categoryId" element={<CategoryCourses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/cart" element={<Cart />} />

          {/* 🔥 WISHLIST */}
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute role="student">
                <Wishlist />
              </ProtectedRoute>
            }
          />

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

          {/* LEARNING */}
          <Route
            path="/learn/:courseId"
            element={
              <ProtectedRoute role="student">
                <LearningPage />
              </ProtectedRoute>
            }
          />

          {/* REDIRECT */}
          <Route path="/dashboard" element={<Navigate to="/student" />} />

          {/* INSTRUCTOR */}
          <Route
            path="/instructor"
            element={
              <ProtectedRoute role="instructor">
                <InstructorLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<InstructorHome />} />
            <Route path="create" element={<CreateCourse />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="edit/:id" element={<EditCourse />} />
          </Route>

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}