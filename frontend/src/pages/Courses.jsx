import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard";
import API from "../config/api"

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/courses`)
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // 🔥 DYNAMIC CATEGORIES FROM DATA
  const categories = [
    "all",
    ...new Set(courses.map((c) => c.category)),
  ];

  // FILTER
  const filtered =
    selected === "all"
      ? courses
      : courses.filter((c) => c.category === selected);

  return (
    <div className="pt-5 max-w-7xl mx-auto px-6">

      <h1 className="text-4xl font-bold mb-8">All Courses</h1>

      {/* CATEGORY FILTER */}
      <div className="flex gap-3 mb-10 flex-wrap">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-lg capitalize ${
              selected === cat ? "bg-blue-500" : "bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}

      </div>

      {/* LOADING */}
      {loading && (
        <div className="text-center text-gray-400">
          Loading courses...
        </div>
      )}

      {/* COURSES GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {filtered.length > 0 ? (
          filtered.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          !loading && (
            <p className="text-gray-400">
              No courses found
            </p>
          )
        )}

      </div>

    </div>
  );
}