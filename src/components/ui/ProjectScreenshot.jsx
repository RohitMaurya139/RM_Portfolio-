import { useState } from "react";
import { cn } from "../../lib/utils";

const ACCENT_GLOW = {
  violet: "from-violet-500/30 via-fuchsia-500/15 to-indigo-500/25",
  cyan: "from-cyan-500/30 via-teal-500/15 to-blue-500/25",
  indigo: "from-indigo-500/30 via-blue-500/15 to-violet-500/25",
  emerald: "from-emerald-500/30 via-teal-500/15 to-cyan-500/25",
  rose: "from-rose-500/30 via-orange-500/15 to-amber-500/25",
};

function BrowserFrame({ url }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0d0d0d]/85 px-4 py-2.5">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
      </div>
      <div className="ml-2 min-w-0 flex-1 truncate rounded-md border border-white/[0.06] bg-black/40 px-3 py-1 text-center font-mono text-[11px] text-white/45">
        {url || "preview.local"}
      </div>
    </div>
  );
}

function Placeholder({ project }) {
  const accent = ACCENT_GLOW[project.accent] || ACCENT_GLOW.violet;
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40", accent)} />
      <div className="absolute inset-0 bg-grid opacity-30 mask-radial" />
      <div className="relative flex flex-col items-center gap-3">
        <div className="font-mono text-[10px] tracking-[0.22em] text-white/40">
          {project.tags?.[0] || "PROJECT"} · PREVIEW
        </div>
        <div className="text-2xl font-medium tracking-tight text-white md:text-3xl">
          {project.title}
        </div>
        <div className="text-sm text-white/50">{project.tagline || project.subtitle}</div>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] tracking-widest text-white/50">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/60" />
          </span>
          SCREENSHOT COMING SOON
        </div>
      </div>
    </div>
  );
}

export default function ProjectScreenshot({
  project,
  showBrowserFrame = true,
  aspect = "aspect-[16/10]",
  className,
  priority = false,
  objectFit = "cover",
  objectPosition = "top",
}) {
  const [loadedFor, setLoadedFor] = useState(null);
  const [erroredFor, setErroredFor] = useState(null);

  const currentSrc = project?.image;
  const loaded = loadedFor === currentSrc;
  const errored = erroredFor === currentSrc;
  const showImage = !!currentSrc && !errored;

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br blur-3xl opacity-40",
          ACCENT_GLOW[project?.accent] || ACCENT_GLOW.violet
        )}
      />
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0d]/70 backdrop-blur-sm",
          aspect
        )}
      >
        {showBrowserFrame && <BrowserFrame url={project?.live} />}
        <div
          className={cn(
            "relative h-full w-full",
            showBrowserFrame && "h-[calc(100%-40px)]"
          )}
        >
          {showImage ? (
            <>
              {!loaded && <Placeholder project={project} />}
              <img
                key={currentSrc}
                src={currentSrc}
                alt={`${project.title} preview`}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                ref={(node) => {
                  if (node && node.complete && node.naturalWidth > 0) {
                    setLoadedFor(currentSrc);
                  }
                }}
                onLoad={() => setLoadedFor(currentSrc)}
                onError={() => setErroredFor(currentSrc)}
                style={{ objectFit, objectPosition }}
                className={cn(
                  "absolute inset-0 h-full w-full transition-opacity duration-500",
                  loaded ? "opacity-100" : "opacity-0"
                )}
              />
            </>
          ) : (
            <Placeholder project={project} />
          )}
        </div>
      </div>
    </div>
  );
}
