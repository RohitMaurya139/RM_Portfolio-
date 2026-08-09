import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import GitHubContributions from "./GitHubContributions";
import { SOCIALS } from "../../data/site";

const FEATURED_REPOS = [
  "enterprise-iq",
  "helpdesk-ai",
  "buddy-ai",
  "QuickCart",
  "Netwise-webApp",
  "FLIXSTREAM-GPT",
];

function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-0 flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.012] p-6 transition-colors hover:border-white/15 hover:bg-white/[0.025]"
    >
      <div>
        <div className="flex items-start justify-between">
          <div className="flex min-w-0 items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="flex-shrink-0 text-white/50">
              <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 11-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
            </svg>
            <span className="truncate font-mono text-[13px] text-white/85">{repo.name}</span>
          </div>
          <span className="text-white/20 transition-all group-hover:translate-x-0.5 group-hover:text-white/60">↗</span>
        </div>
        <p className="mt-3 line-clamp-2 text-sm text-white/50">
          {repo.description || "—"}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-4 font-mono text-[11px] text-white/40">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-violet-400/70" />
            {repo.language}
          </span>
        )}
        {typeof repo.stargazers_count === "number" && (
          <span>★ {repo.stargazers_count}</span>
        )}
        {typeof repo.forks_count === "number" && (
          <span>⑂ {repo.forks_count}</span>
        )}
      </div>
    </a>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.012] p-6">
      <div className="h-3 w-32 rounded bg-white/[0.06]" />
      <div className="mt-4 space-y-2">
        <div className="h-2 w-full rounded bg-white/[0.04]" />
        <div className="h-2 w-3/4 rounded bg-white/[0.04]" />
      </div>
      <div className="mt-6 flex gap-3">
        <div className="h-2 w-12 rounded bg-white/[0.04]" />
        <div className="h-2 w-8 rounded bg-white/[0.04]" />
      </div>
    </div>
  );
}

export default function GitHubSection() {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 10000);
      try {
        const res = await fetch(
          "https://api.github.com/users/RohitMaurya139/repos?per_page=100&sort=updated",
          {
            headers: { Accept: "application/vnd.github+json" },
            signal: controller.signal,
          }
        );
        if (!res.ok) throw new Error("bad status");
        const data = await res.json();
        if (cancelled) return;
        const featured = FEATURED_REPOS.map((name) =>
          data.find((r) => r.name === name)
        ).filter(Boolean);
        const fill = data
          .filter(
            (r) =>
              !r.fork &&
              !FEATURED_REPOS.includes(r.name) &&
              r.name !== "RohitMaurya139"
          )
          .slice(0, 6);
        setRepos((featured.length ? featured : fill).slice(0, 6));
      } catch {
        if (!cancelled) setError(true);
      } finally {
        clearTimeout(timer);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="py-24 md:py-32">
      <Container>
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Open Source</SectionLabel>
            <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight text-white md:text-[42px]">
              More of my work lives on GitHub.
            </h2>
          </div>
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 self-start rounded-full border border-white/10 px-4 py-2 text-sm text-white/85 transition-colors hover:border-white/25 hover:bg-white/5 md:self-auto"
          >
            @RohitMaurya139
            <span aria-hidden className="text-white/50 transition-colors group-hover:text-white/90">↗</span>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <GitHubContributions />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {repos
            ? repos.map((r) => <RepoCard key={r.id} repo={r} />)
            : error
            ? [
                <div
                  key="err"
                  className="col-span-full rounded-2xl border border-white/[0.06] bg-white/[0.012] p-8 text-center text-sm text-white/50"
                >
                  Couldn't load repositories.{" "}
                  <a
                    href={SOCIALS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 underline underline-offset-2 hover:text-white"
                  >
                    Visit GitHub directly ↗
                  </a>
                </div>,
              ]
            : Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
        </motion.div>
      </Container>
    </section>
  );
}
