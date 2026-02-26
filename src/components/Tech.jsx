import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  RiReactjsLine,
  RiCss3Line,
  RiJavaLine,
  RiJavascriptLine,
  RiLinksFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiTailwindcss,
  SiRedux,
  SiMaterialdesign,
  SiAwsamplify,
  SiJsonwebtokens,
  SiCplusplus,
  SiC,
  SiNextdotjs,
  SiGithub,
  SiPostman,
  SiJest,
  SiTypescript,
  SiPython,
  SiAmazon,
  SiGraphql,
  SiGit,
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";
import { BiBrain } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";
import { BsDatabase } from "react-icons/bs";

const technologies = [
  {
    icon: RiLinksFill,
    name: "LangChain",
    color: "text-green-400",
    category: "AI/ML",
  },
  {
    icon: FaNetworkWired,
    name: "LangGraph",
    color: "text-blue-400",
    category: "AI/ML",
  },
  {
    icon: GiSparkles,
    name: "LangSmith",
    color: "text-purple-400",
    category: "AI/ML",
  },
  {
    icon: BiBrain,
    name: "LLMs",
    color: "text-cyan-500",
    category: "AI/ML",
  },
  {
    icon: FiFileText,
    name: "RAG",
    color: "text-orange-400",
    category: "AI/ML",
  },
  {
    icon: BsDatabase,
    name: "Pinecone",
    color: "text-teal-500",
    category: "AI/ML",
  },
  {
    icon: RiReactjsLine,
    name: "React",
    color: "text-cyan-400",
    category: "Frontend",
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
    color: "text-green-500",
    category: "Backend",
  },
  {
    icon: SiExpress,
    name: "Express",
    color: "text-gray-300",
    category: "Backend",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "text-white",
    category: "Frontend",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    color: "text-green-500",
    category: "Database",
  },
  {
    icon: SiMysql,
    name: "MySQL",
    color: "text-blue-500",
    category: "Database",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
    color: "text-teal-400",
    category: "Frontend",
  },
  {
    icon: SiRedux,
    name: "Redux",
    color: "text-purple-500",
    category: "Frontend",
  },
  {
    icon: SiMaterialdesign,
    name: "Material UI",
    color: "text-blue-400",
    category: "Frontend",
  },
  {
    icon: RiCss3Line,
    name: "CSS3",
    color: "text-blue-600",
    category: "Frontend",
  },
  {
    icon: RiJavascriptLine,
    name: "JavaScript",
    color: "text-yellow-400",
    category: "Language",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    color: "text-blue-600",
    category: "Language",
  },

  {
    icon: SiJsonwebtokens,
    name: "JWT",
    color: "text-purple-600",
    category: "Backend",
  },
  {
    icon: RiJavaLine,
    name: "Java",
    color: "text-red-500",
    category: "Language",
  },

  {
    icon: SiPython,
    name: "Python",
    color: "text-yellow-500",
    category: "Language",
  },
  { icon: SiGithub, name: "GitHub", color: "text-gray-300", category: "Tools" },
  { icon: SiGit, name: "Git", color: "text-red-600", category: "Tools" },
  {
    icon: SiPostman,
    name: "Postman",
    color: "text-orange-500",
    category: "Tools",
  },
  // { icon: SiJest, name: "Jest", color: "text-red-500", category: "Tools" },
  {
    icon: SiGraphql,
    name: "GraphQL",
    color: "text-pink-500",
    category: "Backend",
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Language",
  "Cloud",
  "AI/ML",
  "Tools",
];

const Tech = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredTech, setHoveredTech] = useState(null);

  const filteredTechs =
    filter === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === filter);

  return (
    <div className="pb-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
          Tech Stack
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Technologies I use to build exceptional digital experiences
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === category
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105"
                : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Tech Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
      >
        {filteredTechs.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                z: 50,
              }}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              className="relative group"
              style={{ perspective: "1000px" }}
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-purple-500/20">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300" />

                {/* Icon */}
                <div className="relative flex flex-col items-center justify-center space-y-3">
                  <motion.div
                    animate={{
                      y: hoveredTech === tech.name ? [0, -10, 0] : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: hoveredTech === tech.name ? Infinity : 0,
                      repeatType: "reverse",
                    }}
                  >
                    <Icon className={`text-5xl ${tech.color} drop-shadow-lg`} />
                  </motion.div>

                  {/* Name */}
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>

                {/* Particle effect on hover */}
                {hoveredTech === tech.name && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${tech.color.replace(
                        "text-",
                        "rgb(var(--tw-"
                      )}20, transparent 70%)`,
                    }}
                  />
                )}
              </div>

              {/* Category badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                {tech.category}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
      >
        {[
          { label: "Technologies", value: technologies.length },
          { label: "Years Experience", value: "1+" },
          { label: "Projects Built", value: "20+" },
          { label: "Lines of Code", value: "100K+" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700/50 text-center hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
