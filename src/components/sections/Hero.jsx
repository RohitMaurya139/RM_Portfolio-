import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Layout, Server, Layers, Brain, Sparkles } from "lucide-react";
import { SITE, SOCIALS } from "../../data/site";
import Container from "../ui/Container";
import { getSkillIcon } from "../../lib/iconMap";

const HEADING = [
  { text: "Building", cls: "" },
  { text: "AI-powered", cls: "hero-grad" },
  { text: "products", cls: "" },
  { text: "and", cls: "" },
  { text: "scalable", cls: "italic font-normal text-white/85" },
  { text: "web", cls: "" },
  { text: "experiences.", cls: "" },
];

const MARQUEE = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "MongoDB", "Redis", "Pinecone", "LangChain", "LangGraph",
  "Gemini", "Groq", "OpenAI", "Tailwind", "Docker", "Vercel",
];

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};
const wordVariant = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const ROLES = [
  {
    id: "frontend",
    kicker: "Interfaces users love",
    title: "Frontend Developer",
    icon: Layout,
    accent: "#22D3EE",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    id: "backend",
    kicker: "APIs, data, orchestration",
    title: "Backend Developer",
    icon: Server,
    accent: "#10B981",
    tags: ["Node.js", "Express.js", "MongoDB", "Redis", "REST APIs"],
  },
  {
    id: "fullstack",
    kicker: "End-to-end product engineer",
    title: "Full-Stack Developer",
    icon: Layers,
    accent: "#8B5CF6",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    id: "ai",
    kicker: "Production LLM systems",
    title: "AI Engineer",
    icon: Brain,
    accent: "#F97316",
    tags: ["LangChain", "Pinecone", "OpenAI", "Gemini", "Groq"],
  },
  {
    id: "genai",
    kicker: "Agents, RAG, retrieval",
    title: "GenAI Developer",
    icon: Sparkles,
    accent: "#E11D48",
    tags: ["LangGraph", "RAG", "OpenRouter", "Tavily", "Vector DBs"],
  },
];

function hexA(hex, alpha) {
  return `${hex}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0")}`;
}

function RoleCycler() {
  const [active, setActive] = useState(0);
  const role = ROLES[active];
  const Icon = role.icon;

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-md">
      <motion.div
        aria-hidden
        animate={{ backgroundColor: hexA(role.accent, 0.12) }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] blur-3xl"
      />

      <div
        className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0d]/60 p-6 backdrop-blur-sm md:p-8"
        style={{ minHeight: 340 }}
      >
        <div className="mb-6 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] text-white/45">
          <div className="flex items-center gap-2">
            <span
              className="relative flex h-1.5 w-1.5"
              aria-hidden
            >
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                style={{ background: role.accent }}
              />
              <span
                className="relative inline-flex h-1.5 w-1.5 rounded-full"
                style={{ background: role.accent }}
              />
            </span>
            <span>I AM A</span>
          </div>
          <span>
            {String(active + 1).padStart(2, "0")} / {String(ROLES.length).padStart(2, "0")}
          </span>
        </div>

        <div className="absolute -right-6 -top-6 opacity-[0.08]">
          <AnimatePresence mode="wait">
            <motion.div
              key={role.id + "-bg"}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 0.55, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: role.accent }}
            >
              <Icon size={220} strokeWidth={1.2} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl border"
                  style={{
                    background: hexA(role.accent, 0.1),
                    borderColor: hexA(role.accent, 0.25),
                    color: role.accent,
                  }}
                >
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <div className="font-mono text-[11px] tracking-[0.16em] text-white/55">
                  {role.kicker}
                </div>
              </div>

              <h3
                className="text-[34px] font-medium leading-[1.05] tracking-tight text-white md:text-[40px]"
                style={{
                  background: `linear-gradient(120deg, #ffffff 0%, ${role.accent} 60%, #ffffff 100%)`,
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {role.title}
              </h3>

              <div className="mt-6">
                <div className="mb-3 font-mono text-[9px] tracking-[0.22em] text-white/35">
                  STACK
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {role.tags.map((t, i) => {
                    const { Icon: TIcon, color } = getSkillIcon(t);
                    return (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[12px] text-white/80"
                      >
                        <span style={{ color }}>
                          <TIcon size={13} />
                        </span>
                        {t}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center gap-2">
          {ROLES.map((r, i) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show role: ${r.title}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-7" : "w-1.5 bg-white/15 hover:bg-white/35"
              }`}
              style={i === active ? { background: r.accent } : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 90, damping: 25, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 90, damping: 25, mass: 0.5 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      rawX.set(((e.clientX - r.left) / r.width) * 100);
      rawY.set(((e.clientY - r.top) / r.height) * 100);
    };
    const onLeave = () => {
      rawX.set(50);
      rawY.set(30);
    };
    onLeave();
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [rawX, rawY]);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <SpotlightLayer x={x} y={y} />

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16"
        >
          <div className="min-w-0">
            <motion.div variants={item} className="mb-8 flex items-center gap-3">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.22em] text-white/55">
                FULL-STACK ENGINEER × AI
              </span>
            </motion.div>

            <motion.h1
              variants={stagger}
              className="text-balance text-[40px] font-medium leading-[1.04] tracking-[-0.02em] text-white sm:text-[54px] md:text-[68px] lg:text-[80px]"
            >
              {HEADING.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-2 pr-3 align-top">
                  <motion.span
                    variants={wordVariant}
                    className={`inline-block will-change-transform ${w.cls}`}
                  >
                    {w.text}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60 md:text-lg"
            >
              I build modern full-stack applications, AI-powered systems,
              intelligent workflows, and developer tools — from frontend and
              backend to AI infrastructure.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
              >
                View My Work
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/90 transition-colors hover:border-white/25 hover:bg-white/5"
              >
                GitHub
                <span aria-hidden className="text-white/50 transition-colors group-hover:text-white/80">↗</span>
              </a>
              <a
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/90 transition-colors hover:border-white/25 hover:bg-white/5"
              >
                Resume
                <span aria-hidden className="text-white/50 transition-colors group-hover:text-white/80">↗</span>
              </a>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-12 grid max-w-xl grid-cols-1 gap-5 border-t border-white/[0.06] pt-7 sm:grid-cols-3"
            >
              <MetaBlock label="CURRENTLY" value="Full-Stack Dev @ Writecream" />
              <MetaBlock label="FOCUS" value="AI · Full-Stack · Systems" />
              <MetaBlock label="BASED IN" value="India" />
            </motion.dl>
          </div>

          <motion.div variants={item} className="hidden min-w-0 lg:block">
            <RoleCycler />
          </motion.div>
        </motion.div>

        <div className="mt-16 lg:hidden">
          <RoleCycler />
          <div className="mt-10" />
        </div>

        <Marquee />
      </Container>
    </section>
  );
}

function SpotlightLayer({ x, y }) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    const upd = () => {
      setStyle({
        background: `radial-gradient(650px circle at ${x.get()}% ${y.get()}%, rgba(139,92,246,0.14), transparent 65%)`,
      });
    };
    upd();
    const un1 = x.on("change", upd);
    const un2 = y.on("change", upd);
    return () => {
      un1();
      un2();
    };
  }, [x, y]);
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-[1] transition-[background] duration-100"
      style={style}
    />
  );
}

function Marquee() {
  return (
    <div
      aria-hidden
      className="relative mt-16 -mx-6 overflow-hidden border-y border-white/[0.05] py-4 md:-mx-10"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
      <div className="marquee-track flex items-center gap-10 whitespace-nowrap">
        {[...MARQUEE, ...MARQUEE].map((t, i) => (
          <span
            key={i}
            className="font-mono text-[11px] tracking-[0.18em] text-white/35"
          >
            {t}
            <span className="ml-10 text-white/15">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function MetaBlock({ label, value }) {
  return (
    <div>
      <dt className="font-mono text-[10px] tracking-[0.18em] text-white/40">
        {label}
      </dt>
      <dd className="mt-2 text-sm text-white/85 leading-snug">{value}</dd>
    </div>
  );
}
