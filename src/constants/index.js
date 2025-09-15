import project1 from "../assets/projects/project-1.PNG";
import project2 from "../assets/projects/project-2.PNG";
import project3 from "../assets/projects/project-3.PNG";
import project4 from "../assets/projects/project-4.PNG";
import project5 from "../assets/projects/project-5.PNG";
import project6 from "../assets/projects/project-6.PNG";

export const HERO_CONTENT = `Passionate full-stack developer dedicated to building scalable, user-focused web applications. Committed to collaboration, innovation, and turning ideas into seamless digital experiences.

`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "QuickChat-Realtime Chat Application",
    image: project1,
    link: "https://quick-chat-client-nu.vercel.app/",
    description:
      "Built a full-stack real-time chat platform using React.js, Node.js, Express.js, and MongoDB with secure user authentication.Implemented real-time messaging and online presence detection using Socket.io, enabling users to chat instantly with active users.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "Socket.io",
    ],
  },
  {
    title: "DevConnect- Developer Networking Platform",
    image: project2,
    link: "https://github.com/RohitMaurya139/DevConnect-Backend",
    description:
      "Developed DevConnect,a developer networking platform (Tinder-inspired, not for dating) enabling sign-up/login, profile creation, tech stack-based discovery, and connection requests with accept/reject functionality.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "JWT Authentication",
      "Tailwind CSS",
      "DaisyUI",
      "AWS(Ec2)",
    ],
  },
  {
    title: "FlixStreamGPT",
    image: project3,
    link: "https://github.com/RohitMaurya139/FLIXSTREAM-GPT",
    description:
      "Developed a responsive, Netflix-like movie streaming platform with global search, detailed movie info, and trailer viewing, built using React (Vite) for fast performance and modular architecture.",
    technologies: ["React.js", "Redux", "Tailwind CSS", "TMBD API", "Firebase"],
  },

  {
    title: "Focus On Today",
    image: project4,
    link: "https://focus-today-by-rohit-maurya.netlify.app/",
    description:
      "Built a responsive daily task tracker web app with features like adding, editing, and deleting tasks across devices. Implemented localStorage to persist user data even after closing the browser, ensuring a consistent  experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "MovieVerse Entertainment",
    image: project5,
    link: "https://tera-movies-mini-app.netlify.app/",
    description:
      "Developed a responsive movie website that showcases movie previews, download links, and details such as year, quality, and genre. Designed an intuitive user interface with a clean layout, search functionality, and structured menus for easy navigation. Focused on optimizing page structure and styling for better user experience across devices.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    title: "ToDesktop WebApp",
    image: project6,
    link: "https://todesktop-by-rohit-maurya.netlify.app/",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.I have built the frontend of the ToDesktop website, replicating its complete user interface. The website is fully responsive and adapts seamlessly to mobile, tablet, and laptop screen sizes.",
    technologies: ["HTML", "Tailwind CSS", "React"],
  },
];

export const CONTACT = {
  address: "Delhi, India ",
  phoneNo: "+91 8368802824 ",
  email: "rohit139maurya@gmail.com",
};
