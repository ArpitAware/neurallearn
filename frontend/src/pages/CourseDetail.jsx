import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CourseDetail() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);

  // 🔥 FETCH COURSE
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/courses/${id}`
        );

        setCourse(res.data);

        // ✅ SET FIRST VIDEO DEFAULT
        if (
          res.data.sections &&
          res.data.sections.length > 0 &&
          res.data.sections[0].lectures.length > 0
        ) {
          setCurrentVideo(res.data.sections[0].lectures[0].videoUrl);
        }

      } catch (err) {
        console.log(err);
      }
    };

    fetchCourse();
  }, [id]);

  // LOADING STATE
  if (!course) {
    return (
      <p className="pt-24 text-center text-gray-400">
        Loading course...
      </p>
    );
  }

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">

      {/* THUMBNAIL */}
<img
  src={course.thumbnail}
  alt="course"
  className="w-full h-[350px] object-cover rounded-2xl mb-6"
/>

{/* TITLE + DESC */}
<h1 className="text-4xl font-bold">
  {course.title}
</h1>

<p className="text-gray-400 mt-3">
  {course.description}
</p>

<button className="mt-6 bg-blue-500 px-6 py-3 rounded-xl">
  Enroll Now
</button>

{/* 🔥 VIDEO + CONTENT */}
<div className="mt-10 grid md:grid-cols-3 gap-6">

  {/* 🎬 VIDEO PLAYER */}
  <div className="md:col-span-2">

    {currentVideo ? (
      <iframe
        src={currentVideo}
        title="video"
        className="w-full h-[400px] rounded-xl"
        allowFullScreen
      />
    ) : (
      <div className="h-[400px] bg-white/5 rounded-xl flex items-center justify-center">
        Select a lecture
      </div>
    )}

  </div>

  {/* 📚 SIDEBAR */}
  <div className="bg-white/5 p-4 rounded-xl h-fit">

    <h2 className="text-xl font-semibold mb-4">
      Course Content
    </h2>

    {course.sections?.map((section, i) => (
      <div key={i} className="mb-4">

        <h3 className="font-semibold mb-2">
          {section.sectionTitle}
        </h3>

        {section.lectures.map((lec, j) => (
          <div
            key={j}
            onClick={() => setCurrentVideo(lec.videoUrl)}
            className="p-2 rounded cursor-pointer hover:bg-white/10"
          >
            ▶ {lec.title} ({lec.duration})
          </div>
        ))}

      </div>
    ))}

  </div>

</div>
    </div>
  );
}