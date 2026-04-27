import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import API from "../config/api"

export default function CourseCarousel() {
  const [courses, setCourses] = useState([]);
  const [index, setIndex] = useState(0);

  const visible = 4;
  const cardWidth = 320; // IMPORTANT: must match card width

  // FETCH FROM BACKEND
  useEffect(() => {
    axios
      .get(`${API}/courses`)
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    
    if (courses.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev + visible >= courses.length) return 0;
        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [courses]);

  return (
    <div className="py-20">

      <h2 className="text-3xl font-bold mb-10 text-center">
        Trending Courses
      </h2>

      <div className="overflow-hidden">

        <div
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * cardWidth}px)`
          }}
        >
          {courses.map((course) => (
            <div key={course._id} className="flex-shrink-0">
              <CourseCard course={course} />
              
            </div>
            
          ))}
        </div>

      </div>
    </div>
  );
}