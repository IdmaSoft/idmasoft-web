import type { Technology } from "@/lib/types";

const categoryColors: Record<Technology["category"], string> = {
  Frontend: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  Backend: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  Database: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  Cloud: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  DevOps: "bg-orange-500/10 text-orange-300 border-orange-500/20",
};

export function TechnologyBadge({ technology }: { technology: Technology }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-full border ${categoryColors[technology.category]}`}
    >
      {technology.name}
    </span>
  );
}
