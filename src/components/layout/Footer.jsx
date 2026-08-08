import Container from "../ui/Container";
import { SITE, SOCIALS } from "../../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-white/[0.06] py-14">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="font-mono text-[13px] tracking-[0.14em] text-white/90">
              ROHIT MAURYA
            </div>
            <p className="mt-2 text-sm text-white/50">
              {SITE.role}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white"
            >
              GitHub
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white"
            >
              LinkedIn
            </a>
            <a href={SOCIALS.email} className="text-white/60 hover:text-white">
              Email
            </a>
            <a
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/[0.04] pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <span>© {year} Rohit Maurya</span>
        </div>
      </Container>
    </footer>
  );
}
