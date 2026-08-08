import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import { CURRENTLY_EXPLORING } from "../../data/skills";
import { cn } from "../../lib/utils";

const STATE_COLORS = {
  Building: "text-emerald-300 border-emerald-400/25 bg-emerald-400/[0.04]",
  Learning: "text-violet-300 border-violet-400/25 bg-violet-400/[0.04]",
  Exploring: "text-cyan-300 border-cyan-400/25 bg-cyan-400/[0.04]",
};

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="py-24 md:py-32">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <SectionLabel index="07">Currently Exploring</SectionLabel>
            <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight text-white md:text-[42px]">
              Live workspace.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-white/50">
            The things I'm reading about, building with, and figuring out this
            month. Updated as reality changes.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {CURRENTLY_EXPLORING.map((item, i) => (
            <motion.span
              key={item.name}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] py-1.5 pl-2 pr-3.5 text-sm text-white/85"
            >
              <span
                className={cn(
                  "rounded-full border px-1.5 py-0.5 font-mono text-[9px] tracking-widest",
                  STATE_COLORS[item.state]
                )}
              >
                {item.state}
              </span>
              {item.name}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
}
