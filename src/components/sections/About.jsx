import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import { SITE } from "../../data/site";

const META = [
  { label: "BASED IN", value: "Delhi, India" },
  { label: "EDUCATION", value: "B.Tech · Computer Science" },
  { label: "ACHIEVEMENT", value: "GATE CSE · Qualified 2x" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <div className="mb-14 max-w-2xl">
          <SectionLabel index="06">About</SectionLabel>
          <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight text-white md:text-[42px]">
            Building useful software at the intersection of web and AI.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[240px_minmax(0,1fr)] md:gap-14 lg:gap-16">
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0 md:sticky md:top-24 md:self-start"
          >
            <div className="relative w-52 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] shadow-xl shadow-black/40 sm:w-56 md:w-full">
              <div className="aspect-[4/5] w-full">
                <img
                  src={SITE.avatar}
                  alt="Rohit Maurya"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-medium text-white">
                      Rohit Maurya
                    </div>
                    <div className="font-mono text-[9px] tracking-widest text-white/60">
                      FULL-STACK · AI
                    </div>
                  </div>
                  <span className="flex-shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/[0.06] px-1.5 py-0.5 font-mono text-[8px] tracking-widest text-emerald-300">
                    AVAILABLE
                  </span>
                </div>
              </div>
            </div>

            <dl className="mt-6 hidden space-y-4 md:block">
              {META.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[10px] tracking-[0.18em] text-white/40">
                    {m.label}
                  </dt>
                  <dd className="mt-1 text-[13px] text-white/85">{m.value}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="min-w-0 max-w-2xl"
          >
            <p className="text-[18px] leading-relaxed text-white/85 md:text-[20px]">
              Hey — I'm Rohit. I build products at the intersection of{" "}
              <span className="text-white">full-stack engineering</span> and{" "}
              <span className="text-white">AI</span>.
            </p>

            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-white/65 md:text-[16px]">
              <p>
                Most of my work lives where modern web applications meet
                LLM-powered workflows — RAG pipelines, agents, and product-grade
                AI features. I'm as comfortable in a Next.js codebase as I am
                wiring up embeddings, vector search, and orchestration behind
                the scenes.
              </p>
              <p>
                I studied Computer Science (B.Tech, 9 CGPA) and qualified GATE
                CSE twice — which shaped how I think about fundamentals: data
                structures, systems design, and the tradeoffs that don't show
                up in a UI. I care about how software actually runs in
                production.
              </p>
              <p>
                Currently I'm a Full-Stack Developer at{" "}
                <span className="text-white">Writecream</span>, shipping product
                features across the stack.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-white/[0.06] pt-8 sm:grid-cols-3 md:hidden">
              {META.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[10px] tracking-[0.18em] text-white/40">
                    {m.label}
                  </dt>
                  <dd className="mt-2 text-sm text-white/85">{m.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
