import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tech from "./Tech";

const SkillsPage = () => {
  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:text-white hover:border-blue-500/40 transition-all duration-300"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </motion.div>

      <Tech />
    </div>
  );
};

export default SkillsPage;
