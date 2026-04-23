export default function AuthToggle({ role, setRole }) {
  return (
    <div className="flex bg-white/10 rounded-full p-1 w-fit mb-6">
      <button
        onClick={() => setRole("student")}
        className={`px-6 py-2 rounded-full ${
          role === "student" ? "bg-black text-white" : "text-gray-400"
        }`}
      >
        Student
      </button>

      <button
        onClick={() => setRole("instructor")}
        className={`px-6 py-2 rounded-full ${
          role === "instructor" ? "bg-black text-white" : "text-gray-400"
        }`}
      >
        Instructor
      </button>
    </div>
  );
}