export const PROJECTS = [
  {
    slug: "keyframe",
    index: "01",
    title: "KEYFRAME",
    subtitle: "Multi-Modal AI Video Studio",
    description:
      "An AI-powered video creation platform that turns a prompt, a reference video, or a website URL into an editable production script. A creative workspace where AI generation is a first-class primitive on the timeline.",
    tagline: "Turn a prompt into a production script.",
    tags: ["AI", "VIDEO", "SAAS", "FULL-STACK"],
    tech: ["Next.js", "React", "JavaScript", "AI APIs", "Tailwind CSS", "Vercel"],
    live: "https://keyframe-dhc4.vercel.app/",
    github: "https://github.com/RohitMaurya139/keyframe",
    image: "/projects/keyframe.png",
    layout: "flagship",
    accent: "violet",
    year: "2026",
    featured: true,
    caseStudy: {
      overview:
        "KEYFRAME is a multi-modal AI video studio that turns a prompt, a reference video, or a website URL into an editable production script. It combines a timeline-based editor with AI generation so creators can iterate on prompts, previews, and outputs without leaving the browser.",
      problem:
        "Most AI video tools are one-shot generators — prompt in, video out. Creators lose control the moment they need to iterate: no timeline, no scene composition, no way to combine multiple generations into a coherent piece.",
      solution:
        "A workspace-first UI where AI generation lives on the timeline as an editable primitive. Prompts, models, and clips coexist as nodes; the interface stays responsive during long-running generations.",
      architecture: [
        "Next.js App Router for streaming UI and server actions",
        "Multi-modal input pipeline: text prompt, video reference, URL scraping",
        "AI provider abstraction so models can be swapped per-generation",
        "Optimistic UI + background job orchestration for long-running renders",
      ],
      features: [
        "Prompt · reference video · URL as equal first-class inputs",
        "Editable production script generation, not just raw video",
        "Timeline-based scene composition",
        "Keyboard-first shortcuts inspired by professional editors",
      ],
      challenges:
        "Making generation feel synchronous when it isn't — solved with a job queue, optimistic placeholders on the timeline, and a small state machine per clip so the UI never lies about what's ready.",
      outcome:
        "A working end-to-end product demonstrating that AI generation can live inside a real editor instead of a chat box.",
    },
  },
  {
    slug: "mailflow",
    index: "02",
    title: "MAILFLOW",
    subtitle: "AI Email Automation Platform",
    description:
      "An AI-powered email automation platform for individuals and teams. Connect multiple mailboxes, upload leads, launch campaigns, and let AI classify intent, suggest replies, and drive workflow automation.",
    tagline: "Autonomous outreach with an AI-native inbox.",
    tags: ["AI", "AUTOMATION", "PRODUCTIVITY", "FULL-STACK"],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Redis",
      "BullMQ",
      "OpenRouter",
      "Auth.js",
    ],
    live: "https://mailflow-web-one.vercel.app",
    github: "https://github.com/RohitMaurya139/Mailflow",
    image: "/projects/mailflow.png",
    layout: "split-right",
    accent: "cyan",
    year: "2026",
    featured: true,
    caseStudy: {
      overview:
        "MailFlow is an AI-powered email automation platform. Users connect Gmail or SMTP mailboxes, upload leads, launch campaigns, and let a trigger-condition-action engine take over — with AI classifying intent, suggesting replies, and surfacing analytics on funnel and sender health.",
      problem:
        "Sales and support teams juggle multiple inboxes, thousands of leads, and repetitive replies. Existing tools either lock you into a workflow or leave you stitching automation together across platforms.",
      solution:
        "One platform for multi-mailbox campaigns, autonomous sending, AI-classified replies, and workflow automation — with a public API for programmatic access.",
      architecture: [
        "Next.js 15 + React 19 + TypeScript frontend with shadcn/ui components",
        "Auth.js v5 for authentication across multiple mailbox providers",
        "MongoDB Atlas (Mongoose) for persistence; Upstash Redis for caching + queues",
        "BullMQ for background job orchestration (send, reply-check, workflows)",
        "OpenRouter for AI model routing across providers",
        "Public /api/v1 for contacts and workspace management via API keys",
      ],
      features: [
        "Connect many Gmail/SMTP mailboxes with campaign scheduling",
        "AI intent classification and suggested replies",
        "Unified inbox with thread reconciliation across mailboxes",
        "Trigger–condition–action workflow engine",
        "Analytics dashboards for funnel metrics and sender health",
        "Public API for programmatic contact + workspace management",
      ],
      challenges:
        "Multi-mailbox thread reconciliation without duplicates, deliverability-aware sender rotation, and keeping AI intent classification predictable enough to drive automation.",
      outcome:
        "A production email automation platform combining classic outbound tooling with AI-native workflows — running end-to-end on Vercel.",
    },
  },
  {
    slug: "helpdesk-ai",
    index: "03",
    title: "HELPDESK AI",
    subtitle: "Multi-Tenant AI Support Platform",
    description:
      "A multi-tenant SaaS where businesses create a custom AI chatbot trained on their data and embed it into any website with a single script tag. Handles API architecture, user onboarding, and dynamic chatbot generation end-to-end.",
    tagline: "Your data, your bot, one script tag.",
    tags: ["AI", "SAAS", "PRODUCT", "FULL-STACK"],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Gemini API",
      "ScaleKit",
      "Tailwind CSS",
      "Vercel",
    ],
    live: "https://helpdesk-ai-gold.vercel.app/",
    github: "https://github.com/RohitMaurya139/helpdesk-ai",
    image: "/projects/helpdesk-ai.png",
    layout: "split-left",
    accent: "emerald",
    year: "2025",
    featured: true,
    caseStudy: {
      overview:
        "HelpDesk AI is a multi-tenant SaaS platform. Businesses sign up, upload their support data, and get an embeddable chatbot that answers customer questions grounded in their own content — dropped into any site with a script tag.",
      problem:
        "Every business wants a support chatbot; nobody wants to build one. Off-the-shelf bots are generic; custom builds are expensive. And multi-tenant isolation for AI data is a real engineering problem.",
      solution:
        "A self-serve platform where the customer's data becomes the bot's knowledge. Multi-tenant isolation, per-owner embeds, and a single JS snippet for integration.",
      architecture: [
        "Next.js app for the tenant dashboard with dynamic chatbot generation",
        "ScaleKit for authentication and user onboarding",
        "Per-tenant data ingestion and retrieval store",
        "Gemini API for grounded response generation",
        "Public embed script (chatBot.js) with data-owner-id targeting",
        "Deployed on Vercel with API-first architecture",
      ],
      features: [
        "One-line script embed with tenant scoping",
        "Custom knowledge base per business",
        "Grounded responses via Gemini",
        "Dynamic chatbot generation per tenant",
        "Managed authentication with ScaleKit",
      ],
      challenges:
        "Multi-tenancy hardening — ensuring one tenant's queries never touch another's data — and building an embed script that behaves well across host-site CSS.",
      outcome:
        "A production SaaS running on Vercel, embeddable anywhere. It's currently powering the chat widget on this very portfolio.",
    },
  },
];

export const ADDITIONAL_PROJECTS = [
  {
    slug: "enterprise-iq",
    title: "Enterprise IQ",
    description:
      "Internal AI knowledge assistant using RAG over enterprise documents, with cited answers grounded in retrieved passages.",
    tech: ["LangChain", "LangGraph", "Pinecone", "OpenAI", "Groq", "Next.js"],
    live: "https://enterprise-iq-frontend.vercel.app/",
    github: "https://github.com/RohitMaurya139/enterprise-iq",
  },
  {
    slug: "buddy-ai",
    title: "Buddy AI",
    description:
      "Personal AI chatbot for general knowledge and real-time queries with LLMs, prompt engineering, and web search tools.",
    tech: ["React", "Node.js", "Express", "Groq", "Tavily"],
    live: "https://buddy-ai-frontend.vercel.app/",
    github: "https://github.com/RohitMaurya139/buddy-ai",
  },
  {
    slug: "flixstream",
    title: "FLIXSTREAM",
    description:
      "Netflix-inspired movie discovery app with Firebase auth, Redux state, and live TMDB data.",
    tech: ["React", "Vite", "Redux", "Firebase", "TMDB API"],
    live: null,
    github: "https://github.com/RohitMaurya139/FLIXSTREAM-GPT",
  },
  {
    slug: "quickcart",
    title: "QuickCart",
    description:
      "Full-stack e-commerce app with role-based auth (Seller/Customer), product management, and checkout.",
    tech: ["Next.js", "Clerk", "Inngest", "Tailwind"],
    live: "https://quick-cart-opal-one.vercel.app/",
    github: "https://github.com/RohitMaurya139/QuickCart",
  },
  {
    slug: "netwise",
    title: "Netwise",
    description:
      "LinkedIn-style networking platform with real-time posts, likes, comments via Socket.io and MongoDB.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    live: "https://netwise-web-app.vercel.app/",
    github: "https://github.com/RohitMaurya139/Netwise-webApp",
  },
  {
    slug: "resume-analyzer",
    title: "Resume Analyzer",
    description:
      "AI resume analysis tool for structured feedback and role fit.",
    tech: ["React", "AI APIs", "Node.js"],
    live: null,
    github: "https://github.com/RohitMaurya139/resumeAnalyzer",
  },
];
