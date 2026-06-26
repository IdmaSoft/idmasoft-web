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

const features = [
  {
    title: "Clean Architecture",
    description:
      "Separation of concerns, clear domain boundaries, and patterns that make code readable and predictable months after it's written.",
    icon: <Shield className="w-5 h-5" aria-hidden="true" />,
  },
  {
    title: "Scalable Systems",
    description:
      "Designed to handle growth. We build systems with the headroom to scale horizontally without architectural rewrites.",
    icon: <TrendingUp className="w-5 h-5" aria-hidden="true" />,
  },
  {
    title: "Modern Stack",
    description:
      "We work with technologies that have strong ecosystems, active communities, and a proven track record in production.",
    icon: <Wrench className="w-5 h-5" aria-hidden="true" />,
  },
  {
    title: "Performance First",
    description:
      "Optimized databases, efficient queries, and lean frontend bundles. Fast applications are a requirement, not an afterthought.",
    icon: <Zap className="w-5 h-5" aria-hidden="true" />,
  },
  {
    title: "Maintainability",
    description:
      "Code that future developers can understand. Consistent patterns, good documentation, and a testing strategy that gives teams confidence.",
    icon: <RefreshCw className="w-5 h-5" aria-hidden="true" />,
  },
  {
    title: "Long-term Support",
    description:
      "We don't disappear after launch. We stay involved to monitor, improve, and extend the systems we build.",
    icon: <HeartHandshake className="w-5 h-5" aria-hidden="true" />,
  },
];

export function WhyIdmasoftSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-14">
          <SectionTitle
            eyebrow="Why Idmasoft"
            title="Principles we build by"
            description="We take a deliberate approach to software engineering — focused on quality, longevity, and value over shortcuts."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
