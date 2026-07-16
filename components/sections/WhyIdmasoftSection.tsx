import { SectionTitle } from "@/components/ui/SectionTitle";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FEATURES } from "@/lib/constants/features";
import {
  Shield,
  TrendingUp,
  Wrench,
  Zap,
  RefreshCw,
  HeartHandshake,
} from "lucide-react";

const iconMap = {
  Shield,
  TrendingUp,
  Wrench,
  Zap,
  RefreshCw,
  HeartHandshake,
};

const features = FEATURES;

export function WhyIdmasoftSection() {
  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-14">
          <SectionTitle
            eyebrow="Why Idmasoft"
            title="Principles we build by"
            description="We take a deliberate approach to software engineering — focused on quality, longevity, and value over shortcuts."
            titleClassName="text-zinc-50"
            descriptionClassName="text-zinc-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? Shield;
            return (
              <FeatureCard
                key={feature.title}
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
