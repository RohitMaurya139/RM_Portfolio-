import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import ProjectScreenshot from "../ui/ProjectScreenshot";
import { PROJECTS, ADDITIONAL_PROJECTS } from "../../data/projects";
import { getSkillIcon } from "../../lib/iconMap";
import { cn } from "../../lib/utils";

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm text-white/85 transition-colors hover:text-white"
        >
          Live Demo
          <span aria-hidden className="text-white/50 transition-colors group-hover:text-white/90">↗</span>
        </a>
      )}
      <Link
        to={`/work/${project.slug}`}
        className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
      >
        Case Study
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
      </Link>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
        >
          GitHub
          <span aria-hidden className="text-white/50 transition-colors group-hover:text-white/90">↗</span>
        </a>
      )}
    </div>
  );
}

function TechChips({ tech }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.slice(0, 6).map((t) => {
        const { Icon, color } = getSkillIcon(t);
        return (
          <span
            key={t}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[11px] text-white/75"
          >
            <span style={{ color }} className="inline-flex">
              <Icon size={12} />
            </span>
            {t}
          </span>
        );
      })}
    </div>
  );
}

function ProjectRow({ project, imageRight }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-20 md:mb-28 last:mb-0"
    >
      <div
        className={cn(
          "grid items-center gap-8 md:gap-14 lg:grid-cols-2",
          imageRight && "lg:[&>*:first-child]:order-2"
        )}
      >
        <div className="w-full max-w-lg">
          <ProjectScreenshot
            project={project}
            aspect="aspect-[16/9]"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-white/40">
            <span className="text-violet-300/80">{project.index}</span>
            <span className="h-px w-6 bg-white/[0.08]" />
            {project.tags.slice(0, 3).map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <h3 className="text-2xl font-medium leading-tight tracking-tight text-white md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-white/55 md:text-base">
            {project.subtitle}
          </p>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/60 md:text-[15px]">
            {project.description}
          </p>
          <div className="mt-5">
            <TechChips tech={project.tech} />
          </div>
          <div className="mt-6">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function AdditionalCard({ project, index }) {
  const href = project.live || project.github;
  if (!href) return null;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.012] p-6 transition-colors hover:border-white/15 hover:bg-white/[0.025]"
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.18em] text-white/30">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-white/20 transition-all group-hover:translate-x-0.5 group-hover:text-white/60">↗</span>
        </div>
        <h4 className="text-lg font-medium text-white">{project.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          {project.description}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] tracking-wide text-white/50"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <div className="mb-20 max-w-2xl">
          <SectionLabel index="02">Selected Work</SectionLabel>
          <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight text-white md:text-[42px]">
            Things I've built.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/55">
            Three products where full-stack engineering and AI meet — with live
            deployments and open source.
          </p>
        </div>

        <div>
          {PROJECTS.map((project, i) => (
            <ProjectRow
              key={project.slug}
              project={project}
              imageRight={i % 2 === 1}
            />
          ))}
        </div>

        <div className="mt-16 border-t border-white/[0.06] pt-16">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 font-mono text-[10px] tracking-[0.22em] text-white/40">
                ALSO BUILT
              </div>
              <h3 className="text-2xl font-medium text-white md:text-3xl">
                More projects.
              </h3>
            </div>
            <p className="max-w-sm text-sm text-white/50">
              A selection of side projects and experiments spanning AI,
              full-stack, and real-time systems.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ADDITIONAL_PROJECTS.map((p, i) => (
              <AdditionalCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
