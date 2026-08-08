import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SITE, SOCIALS } from "../data/site";
import { PROJECTS } from "../data/projects";
import { scrollToId } from "../lib/utils";
import { lockBody, unlockBody } from "../lib/scrollLock";

function buildCommands(navigate, close) {
  const go = (id) => () => {
    close();
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(id), 50);
    } else {
      scrollToId(id);
    }
  };
  const openUrl = (url) => () => {
    window.open(url, "_blank", "noopener,noreferrer");
    close();
  };
  const navTo = (path) => () => {
    close();
    navigate(path);
  };
  return [
    {
      group: "Navigate",
      items: [
        { id: "n-work", label: "View Work", hint: "Go", action: go("work") },
        {
          id: "n-engineering",
          label: "View Engineering",
          hint: "Go",
          action: go("engineering"),
        },
        {
          id: "n-experience",
          label: "View Experience",
          hint: "Go",
          action: go("experience"),
        },
        { id: "n-about", label: "About", hint: "Go", action: go("about") },
        {
          id: "n-contact",
          label: "Contact",
          hint: "Go",
          action: go("contact"),
        },
      ],
    },
    {
      group: "Projects",
      items: PROJECTS.map((p) => ({
        id: `p-${p.slug}`,
        label: p.title,
        hint: "Case Study",
        action: navTo(`/work/${p.slug}`),
      })),
    },
    {
      group: "Links",
      items: [
        {
          id: "l-github",
          label: "GitHub",
          hint: "↗",
          action: openUrl(SOCIALS.github),
        },
        {
          id: "l-linkedin",
          label: "LinkedIn",
          hint: "↗",
          action: openUrl(SOCIALS.linkedin),
        },
        {
          id: "l-email",
          label: `Email · ${SITE.email}`,
          hint: "→",
          action: () => {
            window.location.href = `mailto:${SITE.email}`;
            close();
          },
        },
        {
          id: "l-resume",
          label: "Download Resume",
          hint: "↓",
          action: openUrl(SITE.resume),
        },
      ],
    },
  ];
}

export default function CommandPalette({ open, onClose }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const groups = useMemo(
    () => buildCommands(navigate, onClose),
    [navigate, onClose]
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return groups;
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter((i) => i.label.toLowerCase().includes(query)),
      }))
      .filter((g) => g.items.length > 0);
  }, [q, groups]);

  const flat = useMemo(() => filtered.flatMap((g) => g.items), [filtered]);
  const idxById = useMemo(() => {
    const map = new Map();
    flat.forEach((item, i) => map.set(item.id, i));
    return map;
  }, [flat]);

  useEffect(() => {
    setActive(0);
  }, [q, open]);

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => inputRef.current?.focus(), 50);
    lockBody();
    return () => {
      clearTimeout(timer);
      unlockBody();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => Math.min(i + 1, flat.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        flat[active]?.action?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, active, flat, onClose]);

  const focusFirst = () => inputRef.current?.focus();
  const focusLast = () => {
    const btns = listRef.current?.querySelectorAll(
      'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
    );
    btns?.[btns.length - 1]?.focus();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-[10vh] backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="command-palette-title"
        >
          <span
            tabIndex={0}
            onFocus={focusLast}
            aria-hidden="true"
            className="sr-only"
          />
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.99 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d0d]/95 shadow-2xl shadow-black/60 backdrop-blur-2xl"
          >
            <h2 id="command-palette-title" className="sr-only">
              Command palette
            </h2>
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search commands…"
                aria-label="Search commands"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
              />
              <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/50">
                ESC
              </kbd>
            </div>

            <div ref={listRef} className="max-h-[60vh] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="p-6 text-center text-sm text-white/40">
                  No results.
                </div>
              ) : (
                filtered.map((g) => (
                  <div key={g.group} className="mb-2 last:mb-0">
                    <div className="px-3 py-1.5 font-mono text-[10px] tracking-widest text-white/35">
                      {g.group.toUpperCase()}
                    </div>
                    {g.items.map((item) => {
                      const globalIdx = idxById.get(item.id) ?? 0;
                      const isActive = globalIdx === active;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onMouseEnter={() => setActive(globalIdx)}
                          onClick={item.action}
                          className={`flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                            isActive
                              ? "bg-violet-500/10 text-white"
                              : "text-white/75 hover:bg-white/[0.03]"
                          }`}
                        >
                          <span>{item.label}</span>
                          <span
                            className={`font-mono text-[10px] tracking-widest ${
                              isActive ? "text-violet-300" : "text-white/30"
                            }`}
                          >
                            {item.hint}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-white/[0.06] px-3 py-2 text-[10px] font-mono text-white/40">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5">↑↓</kbd> nav
                </span>
                <span>
                  <kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5">↵</kbd> run
                </span>
              </div>
              <span>ROHIT · CMD</span>
            </div>
          </motion.div>
          <span
            tabIndex={0}
            onFocus={focusFirst}
            aria-hidden="true"
            className="sr-only"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
