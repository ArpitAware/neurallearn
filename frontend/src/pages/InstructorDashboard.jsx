import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function InstructorDashboard() {
  const { token } = useAuth();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    thumbnail: "",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/courses",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Course created!");

      setForm({
        title: "",
        description: "",
        price: "",
        thumbnail: "",
        category: "",
      });

    } catch (err) {
      console.log(err);
      alert("Error creating course");
    }
  };

  return (
    <div className="pt-24 max-w-4xl mx-auto px-6">

      <h1 className="text-3xl font-bold mb-8">
        Instructor Panel
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          placeholder="Course Title"
          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <input
          placeholder="Price"
          type="number"
          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          placeholder="Thumbnail URL"
          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg"
          value={form.thumbnail}
          onChange={(e) =>
            setForm({ ...form, thumbnail: e.target.value })
          }
        />

        <input
          placeholder="Category (web, app, ai...)"
          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <button className="bg-blue-500 px-6 py-3 rounded-xl w-full">
          Create Course
        </button>

      </form>
    </div>
  );
}