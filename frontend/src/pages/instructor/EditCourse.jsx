import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function EditCourse() {
  const { id } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    thumbnail: "",
    category: "",
  });

  // FETCH COURSE DATA
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/courses/${id}`)
      .then((res) => {
        setForm(res.data);
      });
  }, [id]);

  // UPDATE COURSE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/courses/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Course updated!");
      navigate("/instructor/my-courses");

    } catch (err) {
      console.log(err);
      alert("Error updating course");
    }
  };

  return (
    <div className="max-w-3xl">

      <h1 className="text-2xl font-bold mb-6">
        Edit Course
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="w-full p-3 bg-white/5 rounded-lg"
        />

        <textarea
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="w-full p-3 bg-white/5 rounded-lg"
        />

        <input
          type="number"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
          className="w-full p-3 bg-white/5 rounded-lg"
        />

        <input
          value={form.thumbnail}
          onChange={(e) =>
            setForm({ ...form, thumbnail: e.target.value })
          }
          className="w-full p-3 bg-white/5 rounded-lg"
        />

        <button className="bg-blue-500 px-6 py-3 rounded-xl w-full">
          Update Course
        </button>

      </form>
    </div>
  );
}