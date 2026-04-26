import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function LearningPage() {
  const { courseId } = useParams();
  const { token } = useAuth();

  const [course, setCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentLectureId, setCurrentLectureId] = useState(null);
  const [completed, setCompleted] = useState([]);

  // 🔥 FETCH COURSE
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/courses/${courseId}`
        );

        setCourse(res.data);

        if (res.data.sections?.length > 0) {
          const firstLecture = res.data.sections[0].lectures[0];

          setCurrentVideo(firstLecture.videoUrl);
          setCurrentLectureId(firstLecture._id);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourse();
  }, [courseId]);

  // 🔥 FETCH PROGRESS
  useEffect(() => {
    if (!token) return;

    const fetchProgress = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/progress/${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCompleted(res.data.completedLectures || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProgress();
  }, [courseId, token]);

  // 🔥 MARK COMPLETE
  const markComplete = async (lectureId) => {
    if (!lectureId || completed.includes(lectureId)) return;

    try {
      await axios.post(
        "http://localhost:5000/api/progress/mark",
        { courseId, lectureId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCompleted((prev) => [...prev, lectureId]);
    } catch (err) {
      console.log(err);
    }
  };

  if (!course) return <p className="pt-24">Loading...</p>;

  // 🔥 PROGRESS %
  const totalLectures = course.sections.reduce(
    (acc, sec) => acc + sec.lectures.length,
    0
  );

  const progressPercent = Math.round(
    (completed.length / totalLectures) * 100
  );

  return (
    <div className="pt-5 px-6 max-w-7xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        {course.title}
      </h1>

      {/* 🔥 PROGRESS BAR */}
      <div className="mb-6">
        <div className="h-2 bg-white/10 rounded">
          <div
            className="h-2 bg-green-500 rounded"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-sm text-gray-400 mt-2">
          {progressPercent}% completed
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {/* VIDEO PLAYER */}
        <div className="md:col-span-2">

          {/* 🔹 YOUTUBE */}
          {currentVideo?.includes("youtube") ||
          currentVideo?.includes("youtu.be") ? (
            <iframe
              src={currentVideo.replace("watch?v=", "embed/")}
              className="w-full h-[400px] rounded-xl"
              allowFullScreen
            />
          ) : (
            /* 🔹 CLOUDINARY / NORMAL VIDEO */
            <video
              src={currentVideo}
              controls
              onEnded={() => markComplete(currentLectureId)} // ✅ ONLY HERE
              className="w-full h-[400px] rounded-xl"
            />
          )}

        </div>

        {/* COURSE CONTENT */}
        <div className="bg-white/5 p-4 rounded-xl">

          <h2 className="text-xl font-semibold mb-4">
            Course Content
          </h2>

          {course.sections?.map((section, i) => (
            <div key={i} className="mb-4">

              <h3 className="font-semibold mb-2">
                {section.sectionTitle}
              </h3>

              {section.lectures.map((lec) => (
                <div
                  key={lec._id}
                  onClick={() => {
                    // 🔥 Mark previous lecture complete BEFORE switching
                    if (currentLectureId) {
                      markComplete(currentLectureId);
                    }

                    setCurrentVideo(lec.videoUrl);
                    setCurrentLectureId(lec._id);
                  }}
                  className={`cursor-pointer p-2 rounded transition ${
                    completed.includes(lec._id)
                      ? "text-green-400"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  ▶ {lec.title}
                </div>
              ))}

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}