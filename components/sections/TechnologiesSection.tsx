import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { Reveal } from "@/components/ui/Reveal";
import { TECHNOLOGIES } from "@/lib/constants/technologies";
import { useTranslations } from "next-intl";

export function TechnologiesSection() {
  const t = useTranslations("home.technologies");

  return (
    <section className="relative overflow-hidden py-24 bg-zinc-900 border-b border-zinc-800">
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

        <Reveal className="flex flex-wrap justify-center gap-3">
          {TECHNOLOGIES.map((tech) => (
            <TechnologyBadge key={tech.name} technology={tech} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
