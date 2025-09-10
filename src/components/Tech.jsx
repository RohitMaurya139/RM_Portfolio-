import React from "react";
import { motion as Motion } from "framer-motion";
import {
  RiReactjsLine,
  RiCss3Line,
  RiJavaLine,
  RiJavascriptLine,
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
  SiNestjs,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiPostman,
  SiJest,
  SiTypescript,
  SiPython,
  SiAmazon,
  SiGraphql,
  SiBootstrap,
  SiSass,
  SiGit,
} from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <>
      <div className="pb-15">
        <Motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </Motion.h2>
        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4"
          >
            <RiReactjsLine className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cyan-400 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiNodedotjs className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-green-600 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4"
          >
            <SiExpress className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-200 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4"
          >
            <SiNextdotjs className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          {/* <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiNestjs className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-600 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div> */}
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4"
          >
            <SiMongodb className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-green-500 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4"
          >
            <SiMysql className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-600 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiTailwindcss className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-teal-400 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4"
          >
            <SiRedux className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-purple-600 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4"
          >
            <SiMaterialdesign className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-500 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <RiCss3Line className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-700 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4"
          >
            <RiJavascriptLine className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4"
          >
            <SiAwsamplify className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-orange-500 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiJsonwebtokens className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-purple-700 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4"
          >
            <RiJavaLine className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-red-600 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4"
          >
            <SiC className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-blue-800 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiCplusplus className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-blue-600 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          {/* <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4"
          >
            <SiDocker className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-blue-600 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div> */}
         
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiGithub className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-gray-200 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4"
          >
            <SiPostman className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-orange-500 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4"
          >
            <SiJest className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-red-600 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiTypescript className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-blue-700 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4"
          >
            <SiPython className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-yellow-500 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4"
          >
            <SiAmazon className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-orange-400 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiGraphql className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-pink-600 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
         
          <Motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiGit className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-red-700 transition-transform duration-300 hover:scale-110 hover:text-opacity-80" />
          </Motion.div>
        </Motion.div>
      </div>
    </>
  );
};

export default Tech;
