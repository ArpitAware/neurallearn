import { motion } from "framer-motion";

const stats = [
  { value: "50000+", label: "Students" },
  { value: "120+", label: "Courses" },
  { value: "95%", label: "Success Rate" },
  { value: "4.8", label: "Average Rating" },
];

export default function Stats() {
  return (
    <div className="py-24">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-md"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {s.value}
            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              {s.label}
            </p>
          </motion.div>
        ))}

      </div>

    </div>
  );
}