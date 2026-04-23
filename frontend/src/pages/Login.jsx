import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password, role }
      );

      login(res.data);

      if (res.data.user.role === "instructor") {
        navigate("/instructor");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-lg">

        <button onClick={() => navigate(-1)} className="text-blue-400 mb-6">
          ← Go Back
        </button>

        <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>

        {/* ROLE TOGGLE */}
        <div className="flex bg-white/10 p-1 rounded-full w-fit mb-6">
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

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-4 rounded-lg bg-white/5 border border-white/10"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 py-4 rounded-xl text-lg hover:scale-105 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}