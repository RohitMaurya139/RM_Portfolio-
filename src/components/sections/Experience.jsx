import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import { EXPERIENCE } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <Container>
        <div className="mb-16 max-w-2xl">
          <SectionLabel index="05">Experience</SectionLabel>
          <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight text-white md:text-[42px]">
            Where I've worked.
          </h2>
        </div>

        <ol className="relative">
          {EXPERIENCE.map((job, i) => (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative grid gap-5 pb-14 pl-8 md:grid-cols-[168px_1fr] md:gap-8 md:pl-0"
            >
              <div className="relative md:pr-8 md:text-right">
                <span className="absolute left-[-33px] top-2 h-2 w-2 rounded-full bg-white/40 ring-4 ring-[#0a0a0a] md:left-auto md:right-[-5px]" />
                {job.current && (
                  <span className="absolute left-[-37px] top-1 h-3 w-3 animate-ping rounded-full bg-emerald-400/60 md:left-auto md:right-[-9px]" />
                )}
                <div className="font-mono text-[11px] tracking-wide text-white/45">
                  {job.period}
                </div>
              </div>
              <div className="md:pl-8">
                <div className="text-lg font-medium text-white md:text-xl">
                  {job.company}
                </div>
                <div className="mt-0.5 text-sm text-white/55">{job.role}</div>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-[14px] leading-relaxed text-white/60"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-white/25" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
