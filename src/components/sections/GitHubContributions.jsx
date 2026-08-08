import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LEVELS = [
  "bg-white/[0.04]",
  "bg-violet-500/25",
  "bg-violet-500/45",
  "bg-violet-500/70",
  "bg-violet-400",
];

function levelClass(l) {
  return LEVELS[Math.min(4, Math.max(0, l))];
}

function useContributions(username) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);
    (async () => {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("bad status");
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        clearTimeout(timer);
      }
    })();
    return () => {
      cancelled = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, [username]);
  return { data, error };
}

function buildWeeks(contributions) {
  const weeks = [];
  let current = null;
  contributions.forEach((c) => {
    const d = new Date(c.date);
    const day = d.getDay();
    if (day === 0 || !current) {
      current = new Array(7).fill(null);
      weeks.push(current);
    }
    current[day] = c;
  });
  return weeks;
}

export default function GitHubContributions({ username = "RohitMaurya139" }) {
  const { data, error } = useContributions(username);

  if (error) return null;

  const total = data?.total?.lastYear ?? null;
  const contributions = data?.contributions || [];
  const weeks = buildWeeks(contributions);

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.012] p-6 md:p-7">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] text-white/40">
            CONTRIBUTIONS
          </div>
          <div className="mt-1.5 text-sm text-white/85">
            {total !== null ? (
              <>
                <span className="font-medium text-white">{total.toLocaleString()}</span>{" "}
                <span className="text-white/50">in the last year</span>
              </>
            ) : (
              <span className="text-white/45">Loading…</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-white/40">
          <span>LESS</span>
          {LEVELS.map((c, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-[3px] ${c}`}
              aria-hidden
            />
          ))}
          <span>MORE</span>
        </div>
      </div>

      <div className="overflow-x-auto pb-1">
        <div className="inline-flex gap-[3px]">
          {weeks.length === 0
            ? Array.from({ length: 53 }).map((_, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, di) => (
                    <div
                      key={di}
                      className="h-2.5 w-2.5 rounded-[3px] bg-white/[0.03]"
                    />
                  ))}
                </div>
              ))
            : weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, di) => {
                    const c = week[di];
                    if (!c)
                      return (
                        <div
                          key={di}
                          className="h-2.5 w-2.5 rounded-[3px] bg-transparent"
                        />
                      );
                    return (
                      <motion.div
                        key={di}
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.2,
                          delay: Math.min(wi * 0.005, 0.6),
                        }}
                        className={`h-2.5 w-2.5 rounded-[3px] ${levelClass(c.level)}`}
                        title={`${c.count} contributions · ${c.date}`}
                      />
                    );
                  })}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
