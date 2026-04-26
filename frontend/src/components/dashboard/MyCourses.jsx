import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MyCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); // 🔥 IMPORTANT

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/enrollment/my-courses",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCourses(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>

      {courses.length === 0 ? (
        <p className="text-gray-400">No courses enrolled yet</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition"
            >
              <img
                src={course.thumbnail}
                className="w-full h-40 object-cover rounded mb-3"
              />

              <h3 className="font-semibold text-lg">
                {course.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {course.description?.slice(0, 60)}...
              </p>

              {/* 🔥 FIXED BUTTON */}
              <button
                onClick={() => navigate(`/learn/${course._id}`)}
                className="mt-3 w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Continue Learning
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}