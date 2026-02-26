import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "1+", icon: "⏱️" },
    { label: "Projects Completed", value: "20+", icon: "🚀" },
    { label: "Technologies", value: "25+", icon: "💻" },
    { label: "Client Satisfaction", value: "100%", icon: "⭐" },
  ];

  const skills = [
    {
      category: "AI/ML",
      items: ["LLMs", "RAG", "LangChain", "LangGraph", "Vector DataBases"],
      color: "from-yellow-500 to-yellow-800",
    },
    {
      category: "Frontend Development",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL", "Firebase"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
          About Me
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Passionate developer crafting exceptional digital experiences
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 shadow-xl">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />

            <div className="relative space-y-6 text-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg"
              >
                Hi, I’m{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Rohit Maurya
                </span>
                from Delhi. I have done{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  B.Tech in Computer Science
                </span>{" "}
                from Indraprastha University with a 9 CGPA.I have experience in{" "}
                <span className="text-white font-medium">
                  Full-Stack Development and Generative AI.
                </span>
                I’ve built applications using React and Node.js, along with
                AI-powered projects like HelpDesk AI and Buddy AI, where I
                integrated LLMs to develop intelligent chatbot systems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg"
              >
                I’m passionate about building scalable software solutions that
                combine strong engineering with AI capabilities.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Technical Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillSet.color}`}
                  />
                  <h4 className="text-xl font-semibold text-white">
                    {skillSet.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications/Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-6xl">🏆</div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                GATE Qualified (2x)
              </h3>
              <p className="text-gray-300">
                Demonstrated strong fundamentals in Computer Science by
                qualifying GATE exam twice, showcasing deep understanding of
                core CS concepts and problem-solving abilities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
