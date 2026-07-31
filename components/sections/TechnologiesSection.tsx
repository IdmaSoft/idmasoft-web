import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { Reveal } from "@/components/ui/Reveal";
import { TECHNOLOGIES } from "@/lib/constants/technologies";
import type { Technology } from "@/lib/types";
import { useTranslations } from "next-intl";

const categories: Technology["category"][] = [
  "Frontend",
  "Backend",
  "Database",
  "Cloud",
  "DevOps",
];

export function TechnologiesSection() {
  const t = useTranslations("home.technologies");
  const tData = useTranslations("data.technologies");

  return (
    <section className="relative overflow-hidden py-24 bg-zinc-950 border-b border-zinc-900">
      <div
        className="pointer-events-none absolute right-[10%] bottom-0 h-[380px] w-[380px] translate-y-1/3 rounded-full bg-sky-500/10 blur-[160px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-14">
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            titleClassName="text-zinc-50"
            descriptionClassName="text-zinc-400"
          />
        </div>

        <div className="space-y-10">
          {categories.map((category, index) => {
            const techs = TECHNOLOGIES.filter((t) => t.category === category);
            if (techs.length === 0) return null;

            return (
              <Reveal
                key={category}
                delay={Math.min(index, 6) * 0.07}
                className="border-t border-zinc-900/60 pt-8 first:border-0 first:pt-0"
              >
                <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                  {tData(category)}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech) => (
                    <TechnologyBadge key={tech.name} technology={tech} />
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
