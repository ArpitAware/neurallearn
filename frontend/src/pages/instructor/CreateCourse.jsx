import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import API from "../../config/api"

export default function CreateCourse() {
  const { token } = useAuth();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    thumbnail: "",
    category: "",
  });

  // 🔥 DYNAMIC CATEGORIES FROM BACKEND
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  // 🔥 MULTIPLE SECTIONS
  const [sections, setSections] = useState([]);

  // ➕ ADD SECTION
  const addSection = () => {
    setSections([
      ...sections,
      {
        sectionTitle: "",
        lectures: [],
      },
    ]);
  };

  // ➕ ADD LECTURE
  const addLecture = (sectionIndex) => {
    const updated = [...sections];
    updated[sectionIndex].lectures.push({
      title: "",
      duration: "",
      videoUrl: "",
    });
    setSections(updated);
  };

  // 🚀 SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${API}/courses`,
        {
          ...form,
          sections,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Course created successfully");

    } catch (err) {
      console.log(err);
      alert("Error creating course");
    }
  };

  return (
    <div className="max-w-3xl">

      <h1 className="text-2xl font-bold mb-6">
        Create Course
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* TITLE */}
        <input
          placeholder="Title"
          className="w-full p-3 bg-white/5 rounded-lg"
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        {/* DESCRIPTION */}
        <textarea
          placeholder="Description"
          className="w-full p-3 bg-white/5 rounded-lg"
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        {/* PRICE */}
        <input
          type="number"
          placeholder="Price"
          className="w-full p-3 bg-white/5 rounded-lg"
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        {/* THUMBNAIL */}
        <input
          placeholder="Thumbnail URL"
          className="w-full p-3 bg-white/5 rounded-lg"
          onChange={(e) =>
            setForm({ ...form, thumbnail: e.target.value })
          }
        />

        {/* 🔥 CATEGORY SELECT (FIXED) */}
        <select
          className="w-full p-3 rounded-lg bg-white text-black"
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        >
          <option value="">Select Category</option>

          {categories.map((cat) => (
            <option key={cat._id} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* 🔥 COURSE CONTENT BUILDER */}
        <div className="p-4 bg-white/5 rounded-lg">

          <h2 className="text-lg font-semibold mb-4">
            Course Content
          </h2>

          {/* ADD SECTION */}
          <button
            type="button"
            onClick={addSection}
            className="bg-purple-500 px-4 py-2 rounded mb-4"
          >
            + Add Section
          </button>

          {sections.map((section, sIndex) => (
            <div key={sIndex} className="mb-6 p-4 bg-white/10 rounded-lg">

              {/* SECTION TITLE */}
              <input
                placeholder="Section Title"
                className="w-full p-3 mb-3 bg-white text-black rounded"
                value={section.sectionTitle}
                onChange={(e) => {
                  const updated = [...sections];
                  updated[sIndex].sectionTitle = e.target.value;
                  setSections(updated);
                }}
              />

              {/* ADD LECTURE */}
              <button
                type="button"
                onClick={() => addLecture(sIndex)}
                className="bg-blue-500 px-3 py-1 rounded mb-3"
              >
                + Add Lecture
              </button>

              {section.lectures.map((lec, lIndex) => (
                <div key={lIndex} className="mb-3 ml-4">

                  <input
                    placeholder="Lecture Title"
                    className="p-2 mr-2 bg-white text-black rounded"
                    value={lec.title}
                    onChange={(e) => {
                      const updated = [...sections];
                      updated[sIndex].lectures[lIndex].title =
                        e.target.value;
                      setSections(updated);
                    }}
                  />

                  <input
                    placeholder="Duration"
                    className="p-2 mr-2 bg-white text-black rounded"
                    value={lec.duration}
                    onChange={(e) => {
                      const updated = [...sections];
                      updated[sIndex].lectures[lIndex].duration =
                        e.target.value;
                      setSections(updated);
                    }}
                  />

                  <input
                    placeholder="Video URL"
                    className="p-2 bg-white text-black rounded"
                    value={lec.videoUrl}
                    onChange={(e) => {
                      const updated = [...sections];
                      updated[sIndex].lectures[lIndex].videoUrl =
                        e.target.value;
                      setSections(updated);
                    }}
                  />

                </div>
              ))}

            </div>
          ))}

        </div>

        {/* SUBMIT */}
        <button className="bg-blue-500 px-6 py-3 rounded-xl w-full">
          Create Course
        </button>

      </form>
    </div>
  );
}