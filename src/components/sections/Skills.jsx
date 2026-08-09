import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import { SKILLS } from "../../data/skills";
import { getSkillIcon, CATEGORY_ICONS } from "../../lib/iconMap";
import { useMediaQuery } from "../../lib/useMediaQuery";
import { cn } from "../../lib/utils";

function TechChip({ tech, isHovered, onHover, delay }) {
  const { Icon, color } = getSkillIcon(tech.name);
  return (
    <motion.button
      type="button"
      onMouseEnter={() => onHover(tech.name)}
      onFocus={() => onHover(tech.name)}
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2, scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative flex items-center gap-2 rounded-xl border px-3.5 py-2 text-[13px] transition-colors duration-200",
        isHovered
          ? "border-white/25 bg-white/[0.05] text-white"
          : "border-white/[0.08] bg-white/[0.02] text-white/80 hover:border-white/20"
      )}
      style={
        isHovered
          ? { boxShadow: `0 0 0 1px ${color}18, 0 8px 24px -12px ${color}55` }
          : undefined
      }
    >
      <span className="flex h-5 w-5 items-center justify-center" style={{ color }}>
        <Icon size={18} />
      </span>
      <span>{tech.name}</span>
    </motion.button>
  );
}

function DesktopSkills() {
  const [catIdx, setCatIdx] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);
  const active = SKILLS[catIdx];
  const displayTech =
    hoveredTech && active.items.find((i) => i.name === hoveredTech);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {SKILLS.map((c, i) => {
          const Icon = CATEGORY_ICONS[c.category];
          const isActive = i === catIdx;
          return (
            <button
              key={c.category}
              type="button"
              onMouseEnter={() => setCatIdx(i)}
              onFocus={() => setCatIdx(i)}
              onClick={() => setCatIdx(i)}
              className={cn(
                "group relative flex min-w-0 flex-col items-start gap-3 rounded-xl border p-4 text-left transition-all",
                isActive
                  ? "border-white/15 bg-white/[0.04]"
                  : "border-white/[0.06] bg-white/[0.012] hover:border-white/12"
              )}
            >
              <div className="flex w-full items-start justify-between">
                <span
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg border transition-colors",
                    isActive
                      ? "border-violet-400/30 bg-violet-500/10 text-violet-200"
                      : "border-white/[0.06] bg-white/[0.02] text-white/50 group-hover:text-white/80"
                  )}
                >
                  {Icon && <Icon size={16} strokeWidth={1.6} />}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="w-full">
                <div
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-white" : "text-white/75"
                  )}
                >
                  {c.category}
                </div>
                <div className="mt-0.5 font-mono text-[10px] tracking-widest text-white/35">
                  {String(c.items.length).padStart(2, "0")} · TECH
                </div>
              </div>
              {isActive && (
                <motion.span
                  layoutId="cat-active-underline"
                  className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
      <div className="relative min-w-0 rounded-2xl border border-white/[0.06] bg-white/[0.012] p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.category}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mb-2 flex items-center gap-3 font-mono text-[11px] tracking-widest text-white/50">
              <span className="text-violet-300/80">{String(catIdx + 1).padStart(2, "0")}</span>
              <span className="h-px w-6 bg-white/10" />
              <span>{active.category.toUpperCase()}</span>
            </div>
            <p className="mb-8 max-w-md text-sm text-white/55">{active.tagline}</p>
            <div
              className="flex flex-wrap gap-2"
              onMouseLeave={() => setHoveredTech(null)}
            >
              {active.items.map((tech, i) => (
                <TechChip
                  key={tech.name}
                  tech={tech}
                  delay={i * 0.03}
                  isHovered={hoveredTech === tech.name}
                  onHover={setHoveredTech}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.012] p-6">
        <div className="font-mono text-[10px] tracking-[0.18em] text-white/40">
          USED IN
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={displayTech?.name || active.category + "-empty"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="mt-4"
          >
            {displayTech ? (
              <>
                <div className="mb-5 flex items-center gap-2.5">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]"
                    style={{ color: getSkillIcon(displayTech.name).color }}
                  >
                    {(() => {
                      const { Icon } = getSkillIcon(displayTech.name);
                      return <Icon size={16} />;
                    })()}
                  </span>
                  <div className="text-base font-medium text-white">
                    {displayTech.name}
                  </div>
                </div>
                {displayTech.usedIn.length ? (
                  <ul className="space-y-2">
                    {displayTech.usedIn.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-sm text-white/75"
                      >
                        <span className="h-1 w-1 rounded-full bg-violet-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-sm text-white/45">Exploring / learning.</div>
                )}
              </>
            ) : (
              <div className="mt-2 text-sm text-white/45">
                Hover a technology to see where I've used it.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
}

function MobileSkills() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <div className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.012]">
      {SKILLS.map((c, i) => {
        const Icon = CATEGORY_ICONS[c.category];
        const open = i === openIdx;
        return (
          <div key={c.category}>
            <button
              type="button"
              onClick={() => setOpenIdx(open ? -1 : i)}
              className="flex w-full items-center gap-3 px-5 py-4 text-left"
              aria-expanded={open}
            >
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg border transition-colors",
                  open
                    ? "border-violet-400/30 bg-violet-500/10 text-violet-200"
                    : "border-white/[0.06] bg-white/[0.02] text-white/60"
                )}
              >
                {Icon && <Icon size={16} strokeWidth={1.6} />}
              </span>
              <div className="flex-1">
                <div className="text-sm font-medium text-white">{c.category}</div>
                <div className="mt-0.5 font-mono text-[10px] tracking-widest text-white/35">
                  {String(c.items.length).padStart(2, "0")} · TECH
                </div>
              </div>
              <span
                className={cn(
                  "text-white/40 transition-transform",
                  open && "rotate-180"
                )}
              >
                ⌄
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <p className="mb-3 text-xs text-white/50">{c.tagline}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.items.map((tech) => {
                        const { Icon, color } = getSkillIcon(tech.name);
                        return (
                          <span
                            key={tech.name}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5 text-[12px] text-white/80"
                          >
                            <span style={{ color }}>
                              <Icon size={14} />
                            </span>
                            {tech.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function Skills() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <section id="skills" className="py-24 md:py-32">
      <Container>
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel index="03">Skills</SectionLabel>
            <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight text-white md:text-[42px]">
              Tools I use to build.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/50">
            The stack behind the projects — hover a technology to see where it
            lives in my work.
          </p>
        </div>
        {isDesktop ? <DesktopSkills /> : <MobileSkills />}
      </Container>
    </section>
  );
}
