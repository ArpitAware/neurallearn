import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import API from "../config/api"

export default function CoursePreview() {
  const [courses, setCourses] = useState([]);

  // FETCH FROM BACKEND
  useEffect(() => {
    axios
      .get(`${API}/courses`)
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);
  

  // LIMIT 6 COURSES
  const previewCourses = courses.slice(0, 6);

  return (
    <div className="py-20">

      <h2 className="text-3xl font-bold mb-10 text-center">
        Top Instructor Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-8 justify-items-center">
        {previewCourses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

    </div>
  );
}