import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import API from "../../config/api"

export default function MyCourses() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [courses, setCourses] = useState([]);

  // FETCH ONLY MY COURSES
  const fetchCourses = () => {
    axios
      .get(`${API}/courses/my`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // DELETE COURSE
  const handleDelete = async (id) => {
    if (!confirm("Delete this course?")) return;

    try {
      await axios.delete(
        `${API}/courses/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // refresh list
      setCourses((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        My Courses
      </h1>

      {courses.length === 0 && (
        <p className="text-gray-400">
          No courses created yet.
        </p>
      )}

      <div className="space-y-4">

        {courses.map((course) => (
          <div
            key={course._id}
            className="p-4 bg-white/5 rounded-lg flex justify-between items-center"
          >

            <div>
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-400">
                ₹{course.price}
              </p>
            </div>

            <div className="flex gap-3">

              <button
  onClick={() => navigate(`/instructor/edit/${course._id}`)}
  className="px-3 py-1 bg-blue-500 rounded"
>
  Edit
</button>

              <button
                onClick={() => handleDelete(course._id)}
                className="px-3 py-1 bg-red-500 rounded"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}