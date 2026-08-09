import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import { ARCHITECTURE_STACK, ENGINEERING_PRINCIPLES } from "../../data/skills";
import { cn } from "../../lib/utils";

export default function Engineering() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = ARCHITECTURE_STACK[activeIdx];

  return (
    <section id="engineering" className="py-24 md:py-32">
      <Container>
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end">
          <div>
            <SectionLabel index="04">Engineering</SectionLabel>
            <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight text-white md:text-[42px]">
              I care about what happens behind the interface.
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-white/55 md:pl-8">
            A real product is more than a UI. Behind every interface is a stack —
            APIs, orchestration, retrieval, and models — that has to be designed
            deliberately. Hover a layer to see what it does and where I've used it.
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-violet-500/8 blur-3xl" />
            <div className="mb-3 flex items-center justify-between font-mono text-[10px] tracking-widest text-white/40">
              <span>STACK.DIAGRAM</span>
              <span>{`${String(activeIdx + 1).padStart(2, "0")} / ${String(
                ARCHITECTURE_STACK.length
              ).padStart(2, "0")}`}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {ARCHITECTURE_STACK.map((node, i) => (
                <button
                  key={node.layer}
                  type="button"
                  onMouseEnter={() => setActiveIdx(i)}
                  onFocus={() => setActiveIdx(i)}
                  onClick={() => setActiveIdx(i)}
                  className={cn(
                    "group relative flex min-w-0 flex-col items-start gap-3 rounded-xl border p-4 text-left transition-all duration-300",
                    i === activeIdx
                      ? "border-violet-500/30 bg-violet-500/[0.06]"
                      : "border-white/[0.06] bg-white/[0.012] hover:border-white/15"
                  )}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-widest transition-colors",
                        i === activeIdx ? "text-violet-300" : "text-white/30"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition-colors",
                        i === activeIdx ? "bg-violet-400" : "bg-white/15"
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <div
                      className={cn(
                        "text-sm font-medium transition-colors",
                        i === activeIdx ? "text-white" : "text-white/80"
                      )}
                    >
                      {node.layer}
                    </div>
                    <div className="mt-0.5 truncate font-mono text-[10px] text-white/45">
                      {node.tech}
                    </div>
                  </div>
                  {i === activeIdx && (
                    <motion.span
                      layoutId="stack-active-underline"
                      className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.012] p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.layer}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-start md:gap-10"
                >
                  <div className="min-w-0">
                    <div className="mb-4 flex items-center gap-3 font-mono text-[10px] tracking-widest text-white/40">
                      <span className="text-violet-300">{`0${activeIdx + 1}`}</span>
                      <span className="h-px w-6 bg-white/10" />
                      <span>{active.layer.toUpperCase()}</span>
                    </div>
                    <div className="text-2xl font-medium text-white md:text-3xl">
                      {active.tech}
                    </div>
                    <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60">
                      {active.purpose}
                    </p>
                  </div>
                  <div className="md:min-w-[220px]">
                    <div className="mb-3 font-mono text-[10px] tracking-widest text-white/40">
                      USED IN
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {active.examples.map((ex) => (
                        <span
                          key={ex}
                          className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs text-white/75"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-white/[0.06] pt-16">
          <div className="mb-10 max-w-xl">
            <div className="mb-3 font-mono text-[10px] tracking-[0.22em] text-white/40">
              PRINCIPLES
            </div>
            <h3 className="text-2xl font-medium text-white md:text-3xl">
              How I build.
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ENGINEERING_PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.012] p-6 transition-colors hover:border-white/15"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400/60" />
                </div>
                <div className="text-base font-medium text-white">{p.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
