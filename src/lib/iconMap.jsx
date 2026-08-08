/* eslint-disable react-refresh/only-export-components */
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiSocketdotio,
  SiMongodb,
  SiMongoose,
  SiRedis,
  SiFirebase,
  SiOpenai,
  SiDocker,
  SiVercel,
  SiRender,
  SiGit,
  SiGithub,
  SiAmazonwebservices,
  SiLangchain,
} from "react-icons/si";
import {
  Send,
  ListChecks,
  Workflow,
  Zap,
  Router,
  Search,
  Layers,
  Brain,
  Server,
  Database,
  Cloud,
  Layout,
  Cpu,
} from "lucide-react";

const LucideWrap = (Icon) => (props) => <Icon size={18} strokeWidth={1.7} {...props} />;

export const SKILL_ICONS = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  Redux: { Icon: SiRedux, color: "#764ABC" },
  Vite: { Icon: SiVite, color: "#B73BFE" },

  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { Icon: SiExpress, color: "#E5E7EB" },
  "REST APIs": { Icon: LucideWrap(Send), color: "#A78BFA" },
  JWT: { Icon: SiJsonwebtokens, color: "#E5E7EB" },
  "Socket.io": { Icon: SiSocketdotio, color: "#E5E7EB" },
  BullMQ: { Icon: LucideWrap(ListChecks), color: "#F97316" },

  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Mongoose: { Icon: SiMongoose, color: "#B94A44" },
  Redis: { Icon: SiRedis, color: "#FF4438" },
  Pinecone: { Icon: LucideWrap(Database), color: "#22D3EE" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },

  LangChain: { Icon: SiLangchain, color: "#1EA97C" },
  LangGraph: { Icon: LucideWrap(Workflow), color: "#8B5CF6" },
  Gemini: { Icon: LucideWrap(Cpu), color: "#8E75B2" },
  Groq: { Icon: LucideWrap(Zap), color: "#F55036" },
  OpenAI: { Icon: SiOpenai, color: "#E5E7EB" },
  OpenRouter: { Icon: LucideWrap(Router), color: "#A78BFA" },
  Tavily: { Icon: LucideWrap(Search), color: "#22D3EE" },
  RAG: { Icon: LucideWrap(Layers), color: "#F59E0B" },

  Docker: { Icon: SiDocker, color: "#2496ED" },
  Vercel: { Icon: SiVercel, color: "#FFFFFF" },
  Render: { Icon: SiRender, color: "#46E3B7" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#FFFFFF" },
  AWS: { Icon: SiAmazonwebservices, color: "#FF9900" },
};

export const CATEGORY_ICONS = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  "AI / LLM": Brain,
  "Cloud / DevOps": Cloud,
};

export function getSkillIcon(name) {
  return SKILL_ICONS[name] || { Icon: LucideWrap(Layers), color: "#A78BFA" };
}
