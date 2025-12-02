import React, { useState } from "react";
import { motion } from "framer-motion";
import project1 from "../assets/projects/project-1.PNG";
import project2 from "../assets/projects/project-2.PNG";
import project7 from "../assets/projects/project-7.PNG";
import project8 from "../assets/projects/project-8.PNG";
import project6 from "../assets/projects/project-6.PNG";
// Sample project data - replace with your PROJECTS constant
const PROJECTS = [
  {
    title: "Buddy AI",
    image: project2,
    link: "https://buddy-ai-frontend.vercel.app/",
    description:
      "BuddyAI, an AI-powered chatbot I built that can handle any type of text query — from general knowledge to the latest real-time information. This project helped me dive deep into LLMs, API integrations, prompt engineering, memory systems, and frontend UI/UX..",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Groq Cloude",
      "LLM",
      "Tavily",
      "Tailwind CSS",
    ],
    github: "https://github.com/RohitMaurya139/buddy-ai",
    live: "https://buddy-ai-frontend.vercel.app/",
  },
  {
    title: "QuickCart",
    image: project8,
    link: "https://quick-cart-opal-one.vercel.app/",
    description:
      "Developed a fully responsive e-commerce application with role-based authentication (Seller & Customer), allowing product management, cart, and checkout features.Integrated Clerk for Google login and Inngest for backend automation workflows, enhancing scalability and user experience.",
    technologies: ["Next.js", "Clerk", "Inngest", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/RohitMaurya139/QuickCart",
    live: "https://quick-cart-opal-one.vercel.app/",
  },
  {
    title: "Ask-Ai",
    image: project7,
    link: "https://askai-21cm.vercel.app/",
    description:
      "Built AskAI, a full-stack MERN application integrating the Groq Llama-3 API to deliver ultra-fast AI-generated responses. Developed a responsive React + Tailwind UI and secure Express backend with environment-based API handling.",
    technologies: ["React.js", "Groq", "Node.js", "Express.js", "Tailwind CSS"],
    github: "https://github.com/RohitMaurya139/askai",
    live: "https://askai-21cm.vercel.app/",
  },
  {
    title: "Netwise",
    image: project6,
    link: "https://netwise-web-app.vercel.app/",
    description:
      " A full-stack professional networking platform inspired by LinkedIn, featuring secure sign-up and login, personalized profiles with photo, skills, education, company, and experience. Key functionality includes creating and sharing posts (text only), real-time likes and comments using Socket.io, and the ability to send, accept, or reject connection requests.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "Socket.io",
    ],
    github: "https://github.com/RohitMaurya139/Netwise-webApp",
    live: "https://netwise-web-app.vercel.app/",
  },
  {
    title: "QuickChat",
    image: project1,
    link: "https://quick-chat-client-nu.vercel.app/",
    description:
      "Built a real-time messaging platform with Socket.io, supporting live presence detection and instant updates.Integrated Cloudinary API for image and media upload.Optimized socket connections for scalability, reducing message latency",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "Socket.io",
    ],
    github: "https://github.com/RohitMaurya139/QuickChat",
    live: "https://quick-chat-client-nu.vercel.app/",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Showcasing my best work in web development and design
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-24">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`grid lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Image Section */}
            <motion.div
              className={`relative group ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Image */}
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Hover overlay with buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  className="absolute inset-0 flex items-center justify-center gap-4 z-20"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-xl"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-xl border border-gray-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
                </motion.div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                  Featured
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <div
              className={`space-y-6 ${
                index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
              }`}
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="inline-block text-sm font-medium text-purple-400 mb-3">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl"
                >
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-4 pt-4"
              >
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group"
                >
                  <span className="font-medium">View Project</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center"
      >
        <div className="inline-block bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-3">
            Want to see more?
          </h3>
          <p className="text-gray-400 mb-6">
            Check out my GitHub for more projects and open-source contributions
          </p>
          <a
            href="https://github.com/RohitMaurya139"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
          >
            Visit GitHub
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
