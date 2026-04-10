import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { RiReactjsLine, RiCss3Line, RiJavaLine, RiJavascriptLine, RiLinksFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql, SiNodedotjs, SiTailwindcss, SiRedux, SiMaterialdesign, SiJsonwebtokens, SiNextdotjs, SiGithub, SiPostman, SiTypescript, SiPython, SiGraphql, SiGit } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";
import { BiBrain } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";
import { BsDatabase } from "react-icons/bs";

const technologies = [
  { icon: RiLinksFill, name: "LangChain", color: "text-green-400", bg: "bg-green-400/10", category: "AI/ML" },
  { icon: FaNetworkWired, name: "LangGraph", color: "text-blue-400", bg: "bg-blue-400/10", category: "AI/ML" },
  { icon: GiSparkles, name: "LangSmith", color: "text-violet-400", bg: "bg-violet-400/10", category: "AI/ML" },
  { icon: BiBrain, name: "LLMs", color: "text-cyan-500", bg: "bg-cyan-500/10", category: "AI/ML" },
  { icon: FiFileText, name: "RAG", color: "text-orange-400", bg: "bg-orange-400/10", category: "AI/ML" },
  { icon: BsDatabase, name: "Pinecone", color: "text-teal-500", bg: "bg-teal-500/10", category: "AI/ML" },
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400", bg: "bg-cyan-400/10", category: "Frontend" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-500", bg: "bg-green-500/10", category: "Backend" },
  { icon: SiExpress, name: "Express", color: "text-slate-300", bg: "bg-slate-300/10", category: "Backend" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-white", bg: "bg-white/10", category: "Frontend" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500", bg: "bg-green-500/10", category: "Database" },
  { icon: SiMysql, name: "MySQL", color: "text-blue-500", bg: "bg-blue-500/10", category: "Database" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400", bg: "bg-teal-400/10", category: "Frontend" },
  { icon: SiRedux, name: "Redux", color: "text-violet-500", bg: "bg-violet-500/10", category: "Frontend" },
  { icon: SiMaterialdesign, name: "Material UI", color: "text-blue-400", bg: "bg-blue-400/10", category: "Frontend" },
  { icon: RiCss3Line, name: "CSS3", color: "text-blue-500", bg: "bg-blue-500/10", category: "Frontend" },
  { icon: RiJavascriptLine, name: "JavaScript", color: "text-yellow-400", bg: "bg-yellow-400/10", category: "Language" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-500", bg: "bg-blue-500/10", category: "Language" },
  { icon: SiJsonwebtokens, name: "JWT", color: "text-indigo-400", bg: "bg-indigo-400/10", category: "Backend" },
  { icon: RiJavaLine, name: "Java", color: "text-red-500", bg: "bg-red-500/10", category: "Language" },
  { icon: SiPython, name: "Python", color: "text-yellow-500", bg: "bg-yellow-500/10", category: "Language" },
  { icon: SiGithub, name: "GitHub", color: "text-slate-300", bg: "bg-slate-300/10", category: "Tools" },
  { icon: SiGit, name: "Git", color: "text-orange-600", bg: "bg-orange-600/10", category: "Tools" },
  { icon: SiPostman, name: "Postman", color: "text-orange-500", bg: "bg-orange-500/10", category: "Tools" },
  { icon: SiGraphql, name: "GraphQL", color: "text-pink-500", bg: "bg-pink-500/10", category: "Backend" },
];

const categories = ["All", "AI/ML", "Frontend", "Backend", "Database", "Language", "Tools"];

const categoryColors = {
  "All": "from-blue-500 to-indigo-500",
  "AI/ML": "from-amber-500 to-orange-500",
  "Frontend": "from-blue-500 to-cyan-500",
  "Backend": "from-emerald-500 to-teal-500",
  "Database": "from-indigo-500 to-violet-500",
  "Language": "from-orange-500 to-red-500",
  "Tools": "from-slate-400 to-slate-500",
};

const Tech = ({ preview = false }) => {
  const [filter, setFilter] = useState("All");
  const [hoveredTech, setHoveredTech] = useState(null);

  const filteredTechs = filter === "All" ? technologies : technologies.filter((tech) => tech.category === filter);
  const displayTechs = preview ? technologies.slice(0, 8) : filteredTechs;

  return (
    <div className="pb-24 px-4">
      <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        {!preview && (
          <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-block text-sm font-medium text-blue-400 tracking-widest uppercase mb-4">What I work with</motion.span>
        )}
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 bg-clip-text text-transparent mb-4">Tech Stack</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Technologies I use to build exceptional digital experiences</p>
      </motion.div>

      {!preview && (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button key={category} onClick={() => setFilter(category)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category ? `bg-gradient-to-r ${categoryColors[category]} text-white shadow-lg scale-105` : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white border border-slate-700/50"}`}>
              {category}
              {filter === category && <span className="ml-2 text-xs opacity-80">({category === "All" ? technologies.length : technologies.filter(t => t.category === category).length})</span>}
            </motion.button>
          ))}
        </motion.div>
      )}

      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {displayTechs.map((tech, index) => {
            const Icon = tech.icon;
            const isHovered = hoveredTech === tech.name;
            return (
              <motion.div key={tech.name} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3, delay: index * 0.03 }} whileHover={{ scale: 1.08, y: -5 }} onHoverStart={() => setHoveredTech(tech.name)} onHoverEnd={() => setHoveredTech(null)} className="relative group cursor-default">
                <div className={`relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border transition-all duration-300 shadow-xl ${isHovered ? "border-blue-500/40 shadow-blue-500/10" : "border-slate-700/50"}`}>
                  <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"} ${tech.bg}`} />
                  <div className="relative flex flex-col items-center justify-center space-y-3">
                    <motion.div animate={isHovered ? { y: [0, -8, 0] } : { y: 0 }} transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0, repeatType: "reverse" }}>
                      <Icon className={`text-4xl md:text-5xl ${tech.color} drop-shadow-sm`} />
                    </motion.div>
                    <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">{tech.name}</span>
                  </div>
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }} className={`absolute -top-2 -right-2 bg-gradient-to-r ${categoryColors[tech.category]} text-white text-[10px] px-2 py-0.5 rounded-full shadow-lg font-medium`}>{tech.category}</motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {preview && (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12 text-center">
          <Link to="/skills" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-medium shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300">
            Show All Skills
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </motion.div>
      )}

      {!preview && (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {[
            { label: "Technologies", value: technologies.length + "+", color: "from-blue-500 to-indigo-500" },
            { label: "Years Experience", value: "1+", color: "from-cyan-500 to-blue-500" },
            { label: "Projects Built", value: "20+", color: "from-emerald-500 to-teal-500" },
            { label: "Lines of Code", value: "100K+", color: "from-amber-500 to-orange-500" },
          ].map((stat, index) => (
            <motion.div key={index} whileHover={{ y: -5 }} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700/50 text-center hover:border-blue-500/25 transition-all duration-300">
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Tech;
