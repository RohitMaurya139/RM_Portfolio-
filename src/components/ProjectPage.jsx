import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-10" />
          <div className="relative aspect-video bg-slate-900">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 flex items-center justify-center gap-4 z-20 bg-slate-900/40 backdrop-blur-[2px]">
            <motion.a href={project.live} target="_blank" rel="noopener noreferrer" initial={{ y: 20, opacity: 0 }} animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }} transition={{ delay: 0.1 }} className="px-5 py-2.5 bg-white text-slate-900 rounded-full font-medium text-sm hover:bg-slate-100 transition-all duration-300 flex items-center gap-2 shadow-xl">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Live Demo
            </motion.a>
            <motion.a href={project.github} target="_blank" rel="noopener noreferrer" initial={{ y: 20, opacity: 0 }} animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }} transition={{ delay: 0.2 }} className="px-5 py-2.5 bg-slate-900/90 text-white rounded-full font-medium text-sm hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 shadow-xl border border-slate-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              Code
            </motion.a>
          </motion.div>
          <div className="absolute top-4 left-4 z-10">
            <div className="w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{String(index + 1).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className={`space-y-5 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
        <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 shadow-xl">
          <p className="text-slate-300 leading-relaxed text-[15px]">{project.description}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="px-3 py-1.5 bg-blue-500/8 border border-blue-500/15 rounded-full text-xs md:text-sm text-blue-300 hover:border-blue-500/30 hover:bg-blue-500/12 transition-all duration-300">{tech}</span>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="flex gap-6 pt-2">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            Live Demo<svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            Source Code<svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectPage = () => {
  return (
    <div className="py-20 px-4">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="mb-8">
        <Link to="/" className="group inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:text-white hover:border-blue-500/40 transition-all duration-300">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Home
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="inline-block text-sm font-medium text-blue-400 tracking-widest uppercase mb-4">Portfolio</motion.span>
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent mb-4">All Projects</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">A complete showcase of my work in web development and AI</p>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-24">
        {PROJECTS.map((project, index) => <ProjectCard key={index} project={project} index={index} />)}
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-20 text-center">
        <motion.div whileHover={{ y: -5 }} className="inline-block bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-3">Want to see more?</h3>
          <p className="text-slate-400 mb-6">Check out my GitHub for more projects and open-source contributions</p>
          <a href="https://github.com/RohitMaurya139" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-medium hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-300">
            Visit GitHub<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;
