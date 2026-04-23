import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-70px)] flex items-center justify-center text-center px-6 relative overflow-hidden">

      {/* animated gradient blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Upgrade Your Skills <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            With NeuralLearn
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-gray-400 text-lg"
        >
          AI-powered LMS for next-gen learners
        </motion.p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-500 px-8 py-3 rounded-xl text-lg hover:scale-105 transition">
            Start Learning
          </button>
          <button className="border border-white/20 px-8 py-3 rounded-xl text-lg hover:bg-white/10 transition">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
}