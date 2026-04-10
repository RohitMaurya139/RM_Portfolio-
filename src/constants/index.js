import project1 from "../assets/projects/project-1.PNG";
import project2 from "../assets/projects/project-2.PNG";
import project3 from "../assets/projects/project-3.PNG";
import project6 from "../assets/projects/project-6.PNG";
import project8 from "../assets/projects/project-8.PNG";

export const PROJECTS = [
  {
    title: "HelpDesk AI",
    image: project1,
    description:
      "HelpDesk AI is a multi-tenant SaaS platform where businesses can create their own AI chatbot trained on their custom data and embed it into their website using a simple script tag.",
    technologies: ["Gemini API", "Next.js", "ScaleKit", "Tailwind CSS"],
    github: "https://github.com/RohitMaurya139/helpdesk-ai",
    live: "https://helpdesk-ai-gold.vercel.app/",
  },
  {
    title: "Enterprise IQ",
    image: project3,
    description:
      "Enterprise IQ is an internal AI assistant for companies to help employees instantly access information regarding HR policies, company guidelines, and internal documents. Built with a Retrieval-Augmented Generation pipeline.",
    technologies: [
      "LangChain",
      "Pinecone",
      "LLMs",
      "RAG",
      "Groq Cloud",
      "OpenAI",
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
    ],
    github: "https://github.com/RohitMaurya139/enterprise-iq",
    live: "https://enterprise-iq-frontend.vercel.app/",
  },
  {
    title: "Buddy AI",
    image: project2,
    description:
      "BuddyAI is a personal AI chatbot that can handle any type of text query — from general knowledge to real-time information. Built with LLMs, API integrations, prompt engineering, and memory systems.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Groq Cloud",
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
    description:
      "A fully responsive e-commerce application with role-based authentication (Seller & Customer), allowing product management, cart, and checkout features. Integrated Clerk for Google login and Inngest for backend automation workflows.",
    technologies: ["Next.js", "Clerk", "Inngest", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/RohitMaurya139/QuickCart",
    live: "https://quick-cart-opal-one.vercel.app/",
  },
  // To add Ask-AI back, add a project-7.PNG screenshot to src/assets/projects/
  // {
  //   title: "Ask-AI",
  //   image: project7,
  //   description: "Built AskAI, a full-stack MERN application integrating the Groq Llama-3 API to deliver ultra-fast AI-generated responses.",
  //   technologies: ["React.js", "Groq", "Node.js", "Express.js", "Tailwind CSS"],
  //   github: "https://github.com/RohitMaurya139/askai",
  //   live: "https://askai-21cm.vercel.app/",
  // },
  {
    title: "Netwise",
    image: project6,
    description:
      "A full-stack professional networking platform inspired by LinkedIn, featuring secure sign-up and login, personalized profiles, creating and sharing posts, real-time likes and comments using Socket.io, and connection requests.",
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
];

export const CONTACT = {
  address: "Delhi, India",
  phoneNo: "+91 8368802824",
  email: "rohit139maurya@gmail.com",
};
