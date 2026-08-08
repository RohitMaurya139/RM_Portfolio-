export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-grid opacity-[0.35] mask-radial" />
      <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute right-[-10%] top-[40%] h-[380px] w-[380px] rounded-full bg-indigo-600/8 blur-[100px]" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>
  );
}
