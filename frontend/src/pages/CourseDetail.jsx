import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import API from "../config/api"

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { token } = useAuth();
  const { addToCart } = useCart();

  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  // 🔥 FETCH COURSE
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `${API}/courses/${id}`
        );
        setCourse(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourse();
  }, [id]);

  // 🔥 CHECK ENROLLMENT
  useEffect(() => {
    if (!token) return;

    const checkEnrollment = async () => {
      try {
        const res = await axios.get(
          `${API}/enrollment/check/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setIsEnrolled(res.data.enrolled);
      } catch (err) {
        console.log(err);
      }
    };

    checkEnrollment();
  }, [id, token]);

  if (!course) return <p className="pt-24">Loading...</p>;

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">

      {/* THUMBNAIL */}
      <img
        src={course.thumbnail}
        className="w-full h-[350px] object-cover rounded-2xl mb-6"
      />

      {/* TITLE */}
      <h1 className="text-4xl font-bold">
        {course.title}
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mt-3 max-w-3xl">
        {course.description}
      </p>

      {/* 🔥 BUTTON */}
      {isEnrolled ? (
        <button
          onClick={() => navigate(`/learn/${course._id}`)}
          className="mt-6 bg-green-500 px-6 py-3 rounded-xl hover:bg-green-600"
        >
          Continue Learning
        </button>
      ) : (
        <button
          onClick={() => addToCart(course)}
          className="mt-6 bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600"
        >
          Add to Cart
        </button>
      )}

      {/* COURSE CONTENT */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">
          Course Content
        </h2>

        {course.sections?.map((section, i) => (
          <div
            key={i}
            className="mb-6 bg-white/5 p-4 rounded-xl"
          >
            <h3 className="font-semibold text-lg mb-2">
              {section.sectionTitle}
            </h3>

            {section.lectures.map((lec, j) => (
              <div
                key={j}
                className="p-2 text-sm text-gray-300 border-b border-white/10"
              >
                ▶ {lec.title}
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
}