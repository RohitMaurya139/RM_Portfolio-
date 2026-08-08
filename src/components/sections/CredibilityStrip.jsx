import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";
import Container from "../ui/Container";

const ITEMS = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech · Computer Science · 9 CGPA",
  },
  {
    icon: Briefcase,
    label: "Role",
    value: "Full-Stack Developer @ Writecream",
  },
  {
    icon: MapPin,
    label: "Base",
    value: "Delhi, India",
  },
];

export default function CredibilityStrip() {
  return (
    <section aria-label="Credentials" className="border-y border-white/[0.06] bg-white/[0.008]">
      <Container>
        <ul className="grid grid-cols-1 gap-y-6 py-6 sm:grid-cols-3 sm:gap-x-6 sm:py-4 md:py-5">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-violet-300/80">
                  <Icon size={14} strokeWidth={1.6} />
                </span>
                <div className="min-w-0">
                  <div className="font-mono text-[9px] tracking-[0.2em] text-white/40">
                    {item.label.toUpperCase()}
                  </div>
                  <div className="mt-0.5 truncate text-[13px] text-white/85">
                    {item.value}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
