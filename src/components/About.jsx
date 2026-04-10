import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(target);
    if (isNaN(num)) { setCount(target); return; }
    let start = 0;
    const step = Math.ceil(num / (duration * 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(start);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{typeof count === "number" ? count : target}{suffix}</span>;
}

const About = () => {
  const stats = [
    { label: "Years Experience", value: 1, suffix: "+", icon: "clock" },
    { label: "Projects Completed", value: 20, suffix: "+", icon: "rocket" },
    { label: "Technologies", value: 25, suffix: "+", icon: "code" },
    { label: "GATE Qualified", value: 2, suffix: "x", icon: "trophy" },
  ];

  const skills = [
    { category: "AI / ML", items: ["LLMs", "RAG", "LangChain", "LangGraph", "Vector DBs"], color: "from-amber-500 to-orange-500" },
    { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"], color: "from-blue-500 to-cyan-500" },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT"], color: "from-emerald-500 to-teal-500" },
    { category: "Databases", items: ["MongoDB", "MySQL", "Pinecone", "Firebase"], color: "from-indigo-500 to-violet-500" },
  ];

  const iconMap = {
    clock: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    rocket: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>,
    code: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
    trophy: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0116.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-3.77 1.522m0 0a6.003 6.003 0 01-3.77-1.522" /></svg>,
  };

  return (
    <div className="py-12 px-4">
      <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-block text-sm font-medium text-blue-400 tracking-widest uppercase mb-4">Get to know me</motion.span>
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent mb-4">About Me</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Passionate developer crafting exceptional digital experiences</p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Stats Grid */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -5 }} className="relative group">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300 shadow-xl overflow-hidden">
                <div className="text-blue-400 mb-3 flex justify-center opacity-60 group-hover:opacity-100 transition-opacity">{iconMap[stat.icon]}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
            <div className="absolute top-6 left-6 text-6xl text-blue-500/10 font-serif leading-none">"</div>

            <div className="relative space-y-6 text-slate-300 leading-relaxed">
              <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl">
                Hi, I'm <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Rohit Maurya</span> from Delhi. I have done <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">B.Tech in Computer Science</span> from Indraprastha University with a <span className="text-white font-semibold">9 CGPA</span>. I have experience in <span className="text-white font-medium">Full-Stack Development and Generative AI.</span>
              </motion.p>
              <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg md:text-xl">
                I've built applications using React and Node.js, along with AI-powered projects like <span className="text-blue-400 font-medium">HelpDesk AI</span> and <span className="text-blue-400 font-medium">Buddy AI</span>, where I integrated LLMs to develop intelligent chatbot systems.
              </motion.p>
              <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg md:text-xl">
                I'm passionate about building scalable software solutions that combine strong engineering with AI capabilities.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillSet, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -5 }} className="group bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/25 transition-all duration-300 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skillSet.color} flex items-center justify-center`}>
                    <div className="w-3 h-3 bg-white rounded-sm" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{skillSet.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <motion.span key={skillIndex} whileHover={{ scale: 1.05 }} className="px-3 py-1.5 bg-slate-800/80 border border-slate-700/50 rounded-lg text-sm text-slate-300 hover:border-blue-500/30 hover:text-white hover:bg-slate-700/50 transition-all duration-300 cursor-default">
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/15 rounded-3xl p-8 md:p-12">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-center gap-6">
            <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }} className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20 flex-shrink-0">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0116.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-3.77 1.522m0 0a6.003 6.003 0 01-3.77-1.522" /></svg>
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">GATE Qualified (2x)</h3>
              <p className="text-slate-300 leading-relaxed">Demonstrated strong fundamentals in Computer Science by qualifying GATE exam twice, showcasing deep understanding of core CS concepts and problem-solving abilities.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
