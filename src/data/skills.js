export const SKILLS = [
  {
    category: "Frontend",
    tagline: "Interfaces users see and interact with.",
    items: [
      { name: "React", usedIn: ["KEYFRAME", "MAILFLOW", "HELPDESK AI", "Enterprise IQ", "FLIXSTREAM"] },
      { name: "Next.js", usedIn: ["KEYFRAME", "MAILFLOW", "HELPDESK AI", "QuickCart"] },
      { name: "TypeScript", usedIn: ["MAILFLOW", "HELPDESK AI"] },
      { name: "JavaScript", usedIn: ["KEYFRAME", "Buddy AI", "Netwise"] },
      { name: "Tailwind CSS", usedIn: ["KEYFRAME", "MAILFLOW", "HELPDESK AI", "Portfolio"] },
      { name: "Redux", usedIn: ["FLIXSTREAM"] },
      { name: "Vite", usedIn: ["FLIXSTREAM", "Portfolio"] },
    ],
  },
  {
    category: "Backend",
    tagline: "APIs, services, and orchestration.",
    items: [
      { name: "Node.js", usedIn: ["Enterprise IQ", "Buddy AI", "Netwise"] },
      { name: "Express.js", usedIn: ["Enterprise IQ", "Buddy AI", "Netwise"] },
      { name: "REST APIs", usedIn: ["MAILFLOW", "HELPDESK AI", "Enterprise IQ"] },
      { name: "JWT", usedIn: ["Netwise"] },
      { name: "Socket.io", usedIn: ["Netwise"] },
      { name: "BullMQ", usedIn: ["MAILFLOW"] },
    ],
  },
  {
    category: "Database",
    tagline: "Storage, retrieval, and vector search.",
    items: [
      { name: "MongoDB", usedIn: ["MAILFLOW", "Netwise"] },
      { name: "Mongoose", usedIn: ["MAILFLOW", "Netwise"] },
      { name: "Redis", usedIn: ["MAILFLOW"] },
      { name: "Pinecone", usedIn: ["Enterprise IQ"] },
      { name: "Firebase", usedIn: ["FLIXSTREAM"] },
    ],
  },
  {
    category: "AI / LLM",
    tagline: "LLMs, retrieval, and agent workflows.",
    items: [
      { name: "LangChain", usedIn: ["Enterprise IQ"] },
      { name: "LangGraph", usedIn: ["Enterprise IQ"] },
      { name: "Gemini", usedIn: ["HELPDESK AI"] },
      { name: "Groq", usedIn: ["Enterprise IQ", "Buddy AI"] },
      { name: "OpenAI", usedIn: ["Enterprise IQ"] },
      { name: "OpenRouter", usedIn: ["MAILFLOW"] },
      { name: "Tavily", usedIn: ["Buddy AI"] },
      { name: "RAG", usedIn: ["Enterprise IQ"] },
    ],
  },
  {
    category: "Cloud / DevOps",
    tagline: "Ship, deploy, and operate.",
    items: [
      { name: "Docker", usedIn: [] },
      { name: "Vercel", usedIn: ["KEYFRAME", "MAILFLOW", "HELPDESK AI", "Portfolio"] },
      { name: "Render", usedIn: [] },
      { name: "Git", usedIn: ["All projects"] },
      { name: "GitHub", usedIn: ["All projects"] },
      { name: "AWS", usedIn: [] },
    ],
  },
];

export const CURRENTLY_EXPLORING = [
  { name: "AI Agents", state: "Building" },
  { name: "RAG", state: "Building" },
  { name: "LangGraph", state: "Building" },
  { name: "Distributed Systems", state: "Learning" },
  { name: "Docker", state: "Learning" },
  { name: "AWS", state: "Learning" },
  { name: "Redis", state: "Exploring" },
  { name: "GraphQL", state: "Exploring" },
  { name: "Kubernetes", state: "Exploring" },
  { name: "System Design", state: "Learning" },
];

export const ARCHITECTURE_STACK = [
  {
    layer: "Frontend",
    tech: "React / Next.js",
    purpose:
      "Interfaces users interact with — SSR, streaming, and typed component trees.",
    examples: ["KEYFRAME", "MAILFLOW", "HELPDESK AI"],
  },
  {
    layer: "API Layer",
    tech: "Node.js / Express",
    purpose:
      "REST endpoints, auth middleware, request validation, and orchestration.",
    examples: ["Enterprise IQ", "Netwise", "MAILFLOW"],
  },
  {
    layer: "Application Logic",
    tech: "TypeScript / JavaScript",
    purpose:
      "Domain services, business rules, and cross-cutting concerns.",
    examples: ["MAILFLOW", "HELPDESK AI"],
  },
  {
    layer: "AI Orchestration",
    tech: "LangChain / LangGraph",
    purpose:
      "Retrieval, tool routing, and multi-step LLM workflows.",
    examples: ["Enterprise IQ", "Buddy AI"],
  },
  {
    layer: "Vector Search",
    tech: "Pinecone",
    purpose:
      "Semantic search over embedded documents for grounded generation.",
    examples: ["Enterprise IQ"],
  },
  {
    layer: "LLM",
    tech: "Groq · Gemini · OpenRouter",
    purpose:
      "Reasoning and generation across low-latency and high-quality tiers.",
    examples: ["HELPDESK AI", "MAILFLOW", "Enterprise IQ"],
  },
];

export const ENGINEERING_PRINCIPLES = [
  {
    title: "Product Thinking",
    body: "Build features around actual user problems, not around what's cool to implement.",
  },
  {
    title: "Clean Architecture",
    body: "Keep frontend, backend, services, and data responsibilities clear and swappable.",
  },
  {
    title: "AI Integration",
    body: "Turn raw LLM capabilities into predictable, useful product features — with fallbacks.",
  },
  {
    title: "Performance",
    body: "Interfaces and systems that stay responsive as scope, users, and data grow.",
  },
];
