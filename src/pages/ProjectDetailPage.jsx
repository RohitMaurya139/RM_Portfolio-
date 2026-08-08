import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "../components/ui/Container";
import ProjectScreenshot from "../components/ui/ProjectScreenshot";
import { PROJECTS } from "../data/projects";
import { getSkillIcon } from "../lib/iconMap";

function Section({ label, children }) {
  return (
    <section className="border-t border-white/[0.06] py-12 first:border-0 first:pt-0">
      <div className="grid gap-6 md:grid-cols-[160px_1fr] md:gap-10">
        <div className="font-mono text-[10px] tracking-[0.18em] text-white/40">
          {label.toUpperCase()}
        </div>
        <div className="text-[15px] leading-relaxed text-white/75 md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}

function ArchitectureFlow({ steps }) {
  return (
    <ol className="relative">
      <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-violet-400/40 via-white/[0.08] to-transparent" />
      {steps.map((step, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="relative mb-3 flex gap-4 last:mb-0"
        >
          <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-violet-400/25 bg-[#0d0d0d] font-mono text-[10px] tracking-widest text-violet-200">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.012] px-4 py-3 text-[14px] leading-relaxed text-white/80">
            {step}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

function FeaturesGrid({ features }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.012] p-5 transition-colors hover:border-white/15"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-violet-300">
              <Sparkles size={14} strokeWidth={1.6} />
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-white/30">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="text-[14px] leading-relaxed text-white/80">{f}</p>
        </motion.div>
      ))}
    </div>
  );
}

function TechStackList({ tech }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => {
        const { Icon, color } = getSkillIcon(t);
        return (
          <span
            key={t}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5 text-[12px] text-white/80"
          >
            <span style={{ color }}>
              <Icon size={14} />
            </span>
            {t}
          </span>
        );
      })}
    </div>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="pt-32 pb-24">
        <Container>
          <p className="text-white/60">Project not found.</p>
          <Link
            to="/#work"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-white"
          >
            ← Back to work
          </Link>
        </Container>
      </div>
    );
  }

  const cs = project.caseStudy || {};

  return (
    <article className="pt-32 pb-24 md:pt-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/#work"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-white/50 hover:text-white"
          >
            <span aria-hidden className="transition-transform group-hover:-translate-x-0.5">←</span>
            SELECTED WORK
          </Link>

          <div className="mt-10 flex flex-wrap items-baseline gap-4 border-b border-white/[0.06] pb-8">
            <span className="font-mono text-sm text-white/30">{project.index}</span>
            <h1 className="text-4xl font-medium tracking-tight text-white md:text-6xl">
              {project.title}
            </h1>
          </div>
          <p className="mt-4 text-xl text-white/60 md:text-2xl">{project.subtitle}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] tracking-[0.18em] text-white/40">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
            <span className="text-white/25">·</span>
            <span>{project.year}</span>
          </div>
        </motion.div>

        <div className="mt-14">
          <ProjectScreenshot project={project} aspect="aspect-[16/7]" priority />
        </div>

        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/85 hover:border-white/25 hover:bg-white/5"
          >
            Try it live
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </motion.a>
        )}

        <div className="mt-20 grid gap-10 md:grid-cols-[1fr_320px] md:gap-14">
          <div>
            {cs.overview && <Section label="Overview">{cs.overview}</Section>}
            {cs.problem && <Section label="Problem">{cs.problem}</Section>}
            {cs.solution && <Section label="Solution">{cs.solution}</Section>}
            {cs.architecture && (
              <Section label="Architecture">
                <ArchitectureFlow steps={cs.architecture} />
              </Section>
            )}
            {cs.features && (
              <Section label="Key Features">
                <FeaturesGrid features={cs.features} />
              </Section>
            )}
            {cs.challenges && (
              <Section label="Challenges">{cs.challenges}</Section>
            )}
            {cs.outcome && <Section label="Outcome">{cs.outcome}</Section>}
          </div>

          <aside className="md:sticky md:top-24 md:self-start">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.012] p-6">
              <div className="font-mono text-[10px] tracking-[0.18em] text-white/40">
                TECH STACK
              </div>
              <div className="mt-4">
                <TechStackList tech={project.tech} />
              </div>

              <div className="mt-8 space-y-3 border-t border-white/[0.06] pt-6">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-white/10 px-4 py-3 text-sm text-white/90 transition-colors hover:border-white/25 hover:bg-white/5"
                  >
                    Live Demo
                    <span aria-hidden className="text-white/50 transition-colors group-hover:text-white/90">↗</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-white/10 px-4 py-3 text-sm text-white/90 transition-colors hover:border-white/25 hover:bg-white/5"
                  >
                    View Source
                    <span aria-hidden className="text-white/50 transition-colors group-hover:text-white/90">↗</span>
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-white/[0.06] pt-10">
          <Link
            to="/#work"
            className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
          >
            <span aria-hidden className="transition-transform group-hover:-translate-x-0.5">←</span>
            All Work
          </Link>
          <NextProject slug={project.slug} />
        </div>
      </Container>
    </article>
  );
}

function NextProject({ slug }) {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  return (
    <Link
      to={`/work/${next.slug}`}
      className="group inline-flex flex-col items-end gap-1 text-right"
    >
      <span className="font-mono text-[10px] tracking-widest text-white/40">NEXT</span>
      <span className="inline-flex items-center gap-2 text-sm font-medium text-white/85 group-hover:text-white">
        {next.title}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
      </span>
    </Link>
  );
}
