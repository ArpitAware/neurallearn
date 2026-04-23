import { motion } from "framer-motion";
import { Brain, BarChart3, Briefcase } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Mentor",
    desc: "Personalized learning paths powered by AI",
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    desc: "Advanced analytics and performance tracking",
  },
  {
    icon: Briefcase,
    title: "Career Ready",
    desc: "Job-focused courses with real-world projects",
  },
];

export default function Features() {
  return (
    <div className="py-10">

      <h2 className="text-4xl font-semibold text-center mb-16">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {features.map((f, i) => {
          const Icon = f.icon;

          return (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 group"
            >
              {/* subtle glow (not aggressive) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl" />
              </div>

              <Icon size={28} className="text-blue-400 mb-5" />

              <h3 className="text-xl font-semibold mb-2">
                {f.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}