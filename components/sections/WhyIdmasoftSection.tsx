import { SectionTitle } from "@/components/ui/SectionTitle";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";
import {
  Shield,
  TrendingUp,
  Wrench,
  Zap,
  RefreshCw,
  HeartHandshake,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocalizedFeatures } from "@/lib/i18n/localize";

const iconMap = {
  Shield,
  TrendingUp,
  Wrench,
  Zap,
  RefreshCw,
  HeartHandshake,
};

export function WhyIdmasoftSection() {
  const t = useTranslations("home.why");
  const features = useLocalizedFeatures();

  return (
    <section className="relative overflow-hidden py-24 bg-zinc-900 border-b border-zinc-800">
      <div
        className="pointer-events-none absolute left-[5%] bottom-0 h-[380px] w-[380px] translate-y-1/3 rounded-full bg-emerald-500/10 blur-[160px]"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? Shield;
            return (
              <Reveal key={feature.id} delay={Math.min(index, 6) * 0.07}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={<Icon className="w-5 h-5" aria-hidden="true" />}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
