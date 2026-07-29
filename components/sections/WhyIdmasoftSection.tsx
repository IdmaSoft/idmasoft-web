import { SectionTitle } from "@/components/ui/SectionTitle";
import { FeatureCard } from "@/components/ui/FeatureCard";
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
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
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
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? Shield;
            return (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={<Icon className="w-5 h-5" aria-hidden="true" />}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
