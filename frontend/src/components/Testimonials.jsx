import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "This platform changed my career completely!",
  },
  {
    name: "Priya Verma",
    text: "Best learning experience ever.",
  },
  {
    name: "Amit Singh",
    text: "Courses are top-notch and practical.",
  },
  {
    name: "Sneha Patel",
    text: "Loved the UI and learning flow.",
  },
];

export default function Testimonials() {
  return (
    <div className="py-20 overflow-hidden">

      <h2 className="text-3xl font-bold mb-10 text-center">
        What Our Students Say
      </h2>

      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="min-w-[300px] bg-white/5 border border-white/10 p-6 rounded-2xl"
          >
            <p className="text-gray-300">"{t.text}"</p>
            <h4 className="mt-4 font-semibold">{t.name}</h4>
          </div>
        ))}
      </motion.div>
    </div>
  );
}