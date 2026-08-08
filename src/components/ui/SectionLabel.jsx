export default function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-zinc-500 uppercase mb-6">
      {index && (
        <span className="text-violet-400/80">{index}</span>
      )}
      {index && <span className="h-px w-8 bg-white/10" aria-hidden />}
      <span>{children}</span>
    </div>
  );
}
