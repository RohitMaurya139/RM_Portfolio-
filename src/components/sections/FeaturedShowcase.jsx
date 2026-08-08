import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import ProjectScreenshot from "../ui/ProjectScreenshot";
import { PROJECTS } from "../../data/projects";
import { cn } from "../../lib/utils";

export default function FeaturedShowcase() {
  const [active, setActive] = useState(0);
  const project = PROJECTS[active];

  return (
    <section id="showcase" className="pb-16 pt-4 md:pb-24">
      <Container>
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-white/45">
            <span className="text-violet-300/70">01</span>
            <span className="h-px w-8 bg-white/10" />
            <span>FEATURED WORK</span>
          </div>

          <div
            role="tablist"
            aria-label="Featured projects"
            className="flex flex-wrap items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.012] p-1"
          >
            {PROJECTS.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-[12px] font-medium tracking-wide transition-colors",
                  i === active ? "text-white" : "text-white/45 hover:text-white/80"
                )}
              >
                {i === active && (
                  <motion.span
                    layoutId="showcase-active-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/10"
                  />
                )}
                <span className="relative">{p.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href={project.live || `/work/${project.slug}`}
                target={project.live ? "_blank" : undefined}
                rel={project.live ? "noopener noreferrer" : undefined}
                className="group relative block"
              >
                <ProjectScreenshot project={project} aspect="aspect-[16/7]" priority />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-black shadow-lg backdrop-blur-sm">
                    Open live ↗
                  </span>
                </div>
              </a>

              <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] tracking-[0.18em] text-white/40">
                    {project.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight text-white md:text-3xl">
                    {project.title}{" "}
                    <span className="text-white/40">· {project.subtitle}</span>
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-white"
                    >
                      Live Demo
                      <span aria-hidden className="text-white/50 group-hover:text-white/90">↗</span>
                    </a>
                  )}
                  <Link
                    to={`/work/${project.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white"
                  >
                    Case Study
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white"
                    >
                      GitHub
                      <span aria-hidden className="text-white/50 group-hover:text-white/90">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
