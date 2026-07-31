const layers = [
  { ring: "border-sky-500/60", border: "border-sky-500/30", bg: "bg-sky-500/10", bar: "bg-sky-500/40" },
  { ring: "border-violet-500/60", border: "border-violet-500/30", bg: "bg-violet-500/10", bar: "bg-violet-500/40" },
  { ring: "border-emerald-500/60", border: "border-emerald-500/30", bg: "bg-emerald-500/10", bar: "bg-emerald-500/40" },
];

// Purely geometric — three connected layers standing in for
// frontend/backend/data, echoing "full stack" without faking a real
// screenshot. Same connected-node language as ProcessSection/AppMockup.
export function StackDiagram() {
  return (
    <div className="relative flex flex-col gap-3">
      <div
        className="pointer-events-none absolute left-[9px] top-2 bottom-2 w-px bg-zinc-800"
        aria-hidden="true"
      />
      {layers.map((layer, i) => (
        <div key={i} className="relative z-10 flex items-center gap-3">
          <div className={`h-[18px] w-[18px] flex-shrink-0 rounded-full border-2 bg-zinc-950 ${layer.ring}`} />
          <div className={`flex-1 rounded-xl border p-3 ${layer.border} ${layer.bg}`}>
            <div className="space-y-1.5">
              <div className={`h-1.5 w-2/3 rounded-full ${layer.bar}`} />
              <div className={`h-1.5 w-1/3 rounded-full ${layer.bar} opacity-60`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
