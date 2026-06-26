import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { TECHNOLOGIES } from "@/lib/constants/technologies";
import type { Technology } from "@/lib/types";

const categories: Technology["category"][] = [
  "Frontend",
  "Backend",
  "Database",
  "Cloud",
  "DevOps",
];

const categoryLabels: Record<Technology["category"], string> = {
  Frontend: "Frontend",
  Backend: "Backend",
  Database: "Databases",
  Cloud: "Cloud",
  DevOps: "DevOps & Tooling",
};

export function TechnologiesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-14">
          <SectionTitle
            eyebrow="Stack"
            title="Technologies we work with"
            description="A curated selection of modern, battle-tested tools chosen for reliability, performance, and developer experience."
          />
        </div>

        <div className="space-y-10">
          {categories.map((category) => {
            const techs = TECHNOLOGIES.filter((t) => t.category === category);
            if (techs.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                  {categoryLabels[category]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech) => (
                    <TechnologyBadge key={tech.name} technology={tech} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
