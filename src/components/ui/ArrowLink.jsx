import { cn } from "../../lib/utils";

export default function ArrowLink({ href, external, className, children, variant = "ghost", ...props }) {
  const isExternal = external ?? /^https?:/.test(href || "");
  const base =
    "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors";
  const variants = {
    primary: "bg-white text-black hover:bg-white/90",
    ghost: "border border-white/10 text-white/90 hover:border-white/25 hover:bg-white/5",
    subtle: "text-white/70 hover:text-white",
  };
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
      <span aria-hidden className="translate-y-[-0.5px] transition-transform group-hover:translate-x-0.5">
        {isExternal ? "↗" : "→"}
      </span>
    </a>
  );
}
