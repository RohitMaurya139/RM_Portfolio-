import { motion as Motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="pb-4 flex flex-col justify-center items-center">
        <Motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-3xl sm:text-4xl md:text-5xl"
        >
          About Me
        </Motion.h2>
        <Motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-4 text-stone-400 mx-4 sm:mx-10 md:mx-20 max-w-screen-md mx-auto text-base sm:text-lg md:text-xl leading-relaxed"
        >
          I am a{" "}
          <span className="text-white font-medium">
            Full-Stack Web Developer
          </span>
          passionate about building scalable, user-friendly, and visually
          appealing web applications. With a strong foundation in
          <span className="text-white font-medium">
            {" "}
            JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, and
            Tailwind CSS
          </span>
          , I enjoy solving real-world problems using clean and efficient code.
        </Motion.p>
        <Motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="mb-4 text-stone-400 mx-4 sm:mx-10 md:mx-20 max-w-screen-md mx-auto text-base sm:text-lg md:text-xl leading-relaxed"
        >
          As a{" "}
          <span className="text-white font-medium">
            B.Tech graduate in Computer Science
          </span>
          , I have strengthened my fundamentals by qualifying the GATE exam
          twice, gaining deep knowledge in{" "}
          <span className="text-white font-medium">
            Data Structures, Algorithms, Operating Systems, Computer Networks,
            and Databases
          </span>
          . This strong academic background enables me to think critically and
          approach problems from multiple perspectives.
        </Motion.p>
        <Motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-stone-400 mx-4 sm:mx-10 md:mx-20 max-w-screen-md mx-auto text-base sm:text-lg md:text-xl leading-relaxed"
        >
          I am seeking an opportunity in a{" "}
          <span className="text-white font-medium">
            growth-oriented organization
          </span>
          where I can apply my skills, collaborate with like-minded
          professionals, and contribute to impactful projects. With qualities of
          patience, consistency, and a strong team spirit, I am eager to take on
          challenges and deliver meaningful solutions that make a difference.
        </Motion.p>
      </div>
    </>
  );
};

export default About;
