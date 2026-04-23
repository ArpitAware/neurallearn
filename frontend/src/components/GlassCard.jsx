import { motion } from "framer-motion";

export default function GlassCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl"
    >
      {children}
    </motion.div>
  );
}