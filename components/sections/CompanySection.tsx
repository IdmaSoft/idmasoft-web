import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Reveal } from "@/components/ui/Reveal";
import { Code2, BrainCircuit, Cloud, Blocks } from "lucide-react";
import { useTranslations } from "next-intl";

const pillarIcons = {
  softwareEngineering: <Code2 className="w-5 h-5 text-zinc-50" aria-hidden="true" />,
  cloudInfrastructure: <Cloud className="w-5 h-5 text-zinc-50" aria-hidden="true" />,
  aiAutomation: <BrainCircuit className="w-5 h-5 text-zinc-50" aria-hidden="true" />,
  scalableArchitecture: <Blocks className="w-5 h-5 text-zinc-50" aria-hidden="true" />,
};

const pillarIds = ["softwareEngineering", "cloudInfrastructure", "aiAutomation", "scalableArchitecture"] as const;

export function CompanySection() {
  const t = useTranslations("home.company");

  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="lg:sticky lg:top-24">
            <SectionTitle
              eyebrow={t("eyebrow")}
              title={t("title")}
              align="left"
              titleClassName="text-zinc-50"
              descriptionClassName="text-zinc-400"
            />
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              {t("paragraph1")}
            </p>
            <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
              {t("paragraph2")}
            </p>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillarIds.map((id, index) => (
              <Reveal key={id} delay={index * 0.07}>
                <Card className="group overflow-hidden hover:border-zinc-700 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      {pillarIcons[id]}
                    </div>
                    <CardTitle className="text-zinc-50 text-base font-semibold">
                      {t(`pillars.${id}.title`)}
                    </CardTitle>
                    <CardDescription className="text-zinc-400 text-sm leading-relaxed">
                      {t(`pillars.${id}.description`)}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
