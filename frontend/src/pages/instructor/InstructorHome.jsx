import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

export default function InstructorHome() {
  const { user, token } = useAuth();
  const [totalCourses, setTotalCourses] = useState(0);

  useEffect(() => {
    const fetchMyCourses = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/courses/my",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setTotalCourses(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };

    if (token) fetchMyCourses();
  }, [token]);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user?.name}
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-6 bg-white/5 rounded-xl">
          <p className="text-gray-400">Email</p>
          <h2 className="text-lg font-semibold">
            {user?.email}
          </h2>
        </div>

        <div className="p-6 bg-white/5 rounded-xl">
          <p className="text-gray-400">Total Courses</p>
          <h2 className="text-lg font-semibold">
            {totalCourses}
          </h2>
        </div>

        <div className="p-6 bg-white/5 rounded-xl">
          <p className="text-gray-400">Earnings</p>
          <h2 className="text-lg font-semibold">
            ₹0
          </h2>
        </div>

      </div>

    </div>
  );
}