import { motion } from "framer-motion";

export default function FeatureShowcase() {
  return (
    <div className="py-24 text-center">

      <h2 className="text-4xl font-bold mb-4">
        Your swiss knife for{" "}
        <span className="text-blue-400">
          learning any language
        </span>
      </h2>

      <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
        Learn faster with smart tracking, comparison, and scheduling.
      </p>

      <div className="flex justify-center items-center gap-6 flex-wrap">

        {/* CARD 1 */}
        <motion.div
          whileHover={{ rotate: -5 }}
          className="bg-white p-6 rounded-xl text-black w-[250px] shadow-lg"
        >
          <h3 className="font-semibold">Track Progress</h3>
          <p className="text-sm mt-2">See your growth daily</p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl text-black w-[250px] shadow-lg"
        >
          <h3 className="font-semibold">Compare</h3>
          <p className="text-sm mt-2">Compete with others</p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          whileHover={{ rotate: 5 }}
          className="bg-white p-6 rounded-xl text-black w-[250px] shadow-lg"
        >
          <h3 className="font-semibold">Plan Learning</h3>
          <p className="text-sm mt-2">Schedule lessons smartly</p>
        </motion.div>

      </div>

      <button className="mt-10 bg-yellow-400 px-6 py-3 rounded-lg text-black font-semibold">
        Learn More
      </button>

    </div>
  );
}