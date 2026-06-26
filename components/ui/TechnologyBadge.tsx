import type { Technology } from "@/lib/types";

const categoryColors: Record<Technology["category"], string> = {
  Frontend: "bg-violet-50 text-violet-700 border-violet-200",
  Backend: "bg-blue-50 text-blue-700 border-blue-200",
  Database: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Cloud: "bg-sky-50 text-sky-700 border-sky-200",
  DevOps: "bg-orange-50 text-orange-700 border-orange-200",
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
