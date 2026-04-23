import { motion } from "framer-motion";
import { Brain, BarChart3, Rocket } from "lucide-react";

const data = [
  {
    icon: Brain,
    title: "AI Learning",
    desc: "Smart recommendations and personalized paths",
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    desc: "Monitor your growth with analytics",
  },
  {
    icon: Rocket,
    title: "Career Boost",
    desc: "Job-ready skills with real projects",
  },
];

export default function FeatureCards() {
  return (
    <div className="py-20 grid md:grid-cols-3 gap-8">

      {data.map((f, i) => {
        const Icon = f.icon;

        return (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl"
          >
            <Icon size={32} className="text-blue-400 mb-4" />

            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-400 mt-2">{f.desc}</p>
          </motion.div>
        );
      })}

    </div>
  );
}