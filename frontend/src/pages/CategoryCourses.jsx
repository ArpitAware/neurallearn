import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard";
import API from "../config/api"

export default function CategoryCourses() {
  const { categoryId } = useParams();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          `${API}/courses`
        );
        setCourses(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourses();
  }, []);

  // 🔥 FILTER FROM BACKEND DATA
  const filteredCourses = courses.filter(
    (c) => c.category === categoryId
  );

  return (
    <div className="pt-28 max-w-7xl mx-auto px-6">

      <h1 className="text-4xl font-bold mb-10 capitalize">
        {categoryId} Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <p className="text-gray-400">
            No courses found
          </p>
        )}

      </div>

    </div>
  );
}