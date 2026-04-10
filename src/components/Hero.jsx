import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profilenew.png";
import {
  RiReactjsLine,
  RiJavascriptLine,
} from "react-icons/ri";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";
import { BiBrain } from "react-icons/bi";

const ROLES = [
  "Full Stack Developer",
  "Generative AI Developer",
  "React & Node.js Engineer",
  "Problem Solver",
];

const ORBIT_TECHS = [
  { icon: RiReactjsLine, color: "#61DAFB", name: "React", size: 28 },
  { icon: SiNodedotjs, color: "#68A063", name: "Node.js", size: 24 },
  { icon: RiJavascriptLine, color: "#F7DF1E", name: "JavaScript", size: 26 },
  { icon: SiMongodb, color: "#4DB33D", name: "MongoDB", size: 24 },
  { icon: BiBrain, color: "#A78BFA", name: "LLM", size: 26 },
  { icon: SiExpress, color: "#FFFFFF", name: "Express", size: 22 },
  { icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js", size: 24 },
  { icon: SiTailwindcss, color: "#38BDF8", name: "Tailwind", size: 24 },
  { icon: SiPython, color: "#FFD43B", name: "Python", size: 24 },
];

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-gray-900 to-blue-900/30">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <motion.span
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400 backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: "rgba(52,211,153,0.4)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for opportunities
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            >
              <span className="block text-white mb-2">Rohit Maurya</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-2">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-[3px] h-[1em] bg-gradient-to-b from-blue-400 to-cyan-400 ml-1 align-middle"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I'm a Full-Stack and Generative AI Developer passionate about
              building scalable, modern, and intelligent web applications using
              React, Node.js, and AI-powered technologies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-medium shadow-lg shadow-blue-600/25 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Download Resume
                  <svg
                    className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-white font-medium hover:bg-slate-700/50 hover:border-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get in Touch
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex gap-8 justify-center lg:justify-start"
            >
              {[
                { value: "1+", label: "Years Exp." },
                { value: "20+", label: "Projects" },
                { value: "25+", label: "Tech Stack" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image with Orbiting Tech Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 lg:order-2 relative flex items-center justify-center"
          >
            <motion.div
              animate={{ x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="relative"
            >
              {/* Outer orbit ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-70px] md:inset-[-90px] lg:inset-[-100px] border border-dashed border-blue-500/15 rounded-full"
              />

              {/* Inner orbit ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-35px] md:inset-[-45px] lg:inset-[-50px] border border-slate-700/30 rounded-full"
              />

              {/* Orbiting tech icons - outer ring */}
              <div className="absolute inset-[-70px] md:inset-[-90px] lg:inset-[-100px]">
                {ORBIT_TECHS.slice(0, 6).map((tech, i) => {
                  const angle = (i * 360) / 6;
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                      className="absolute"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${angle}deg) translateY(-50%) translateX(-50%)`,
                      }}
                    >
                      <motion.div
                        animate={{ rotate: -angle }}
                        className="relative"
                        style={{
                          transform: `rotate(${angle}deg) translate(${
                            typeof window !== "undefined" && window.innerWidth < 768
                              ? "130px"
                              : window.innerWidth < 1024
                              ? "170px"
                              : "200px"
                          }) rotate(-${angle}deg)`,
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.3 }}
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            y: { duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
                          }}
                          className="group relative w-11 h-11 md:w-13 md:h-13 lg:w-14 lg:h-14 bg-slate-900/90 backdrop-blur-sm border border-slate-700/60 rounded-xl flex items-center justify-center shadow-lg hover:border-blue-500/40 transition-all duration-300 cursor-default"
                        >
                          <Icon
                            style={{ color: tech.color, fontSize: tech.size }}
                            className="drop-shadow-sm"
                          />
                          {/* Tooltip */}
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 border border-slate-700 rounded-md text-[10px] text-slate-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {tech.name}
                          </div>
                          {/* Glow */}
                          <div
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            style={{ backgroundColor: tech.color }}
                          />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Inner floating icons */}
              {ORBIT_TECHS.slice(6).map((tech, i) => {
                const angle = (i * 360) / 3 + 60;
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8 + i * 0.15, duration: 0.5 }}
                    className="absolute"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${angle}deg) translate(${
                        typeof window !== "undefined" && window.innerWidth < 768
                          ? "95px"
                          : window.innerWidth < 1024
                          ? "120px"
                          : "140px"
                      }) rotate(-${angle}deg) translate(-50%, -50%)`,
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 2.5 + i * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                      className="group w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 bg-slate-900/80 backdrop-blur-sm border border-slate-700/40 rounded-lg flex items-center justify-center shadow-md hover:border-blue-500/40 transition-all duration-300 cursor-default"
                    >
                      <Icon
                        style={{ color: tech.color, fontSize: tech.size - 4 }}
                        className="drop-shadow-sm"
                      />
                      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-800 border border-slate-700 rounded-md text-[10px] text-slate-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {tech.name}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Glow effect behind image */}
              <div className="absolute inset-[-20px] bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" />

              {/* Profile Image */}
              <div className="relative">
                {/* Rotating gradient border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-[3px] rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #3b82f6, #6366f1, #8b5cf6, #06b6d4, #10b981, #3b82f6)",
                  }}
                />

                {/* Image */}
                <div className="relative bg-slate-950 p-[3px] rounded-full">
                  <img
                    src={profileImage}
                    alt="Rohit Maurya"
                    className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-blue-400"
            />
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;
