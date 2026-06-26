import { SectionTitle } from "@/components/ui/SectionTitle";
import { Code2, BrainCircuit, Cloud, Blocks } from "lucide-react";

const pillars = [
  {
    icon: <Code2 className="w-5 h-5" aria-hidden="true" />,
    title: "Software Engineering",
    description:
      "Clean, maintainable code built on proven architectural patterns. We engineer systems that your team can understand, extend, and operate with confidence.",
  },
  {
    icon: <Cloud className="w-5 h-5" aria-hidden="true" />,
    title: "Cloud & Infrastructure",
    description:
      "Production-grade deployments on AWS and Azure. Scalable infrastructure, automated pipelines, and reliable operations from day one.",
  },
  {
    icon: <BrainCircuit className="w-5 h-5" aria-hidden="true" />,
    title: "AI & Automation",
    description:
      "Practical AI integrations that solve real business problems. From intelligent workflows to language-powered features in your applications.",
  },
  {
    icon: <Blocks className="w-5 h-5" aria-hidden="true" />,
    title: "Scalable Systems",
    description:
      "Architecture that grows with your business. We design for the load you have today and the scale you'll need tomorrow.",
  },
];

export function CompanySection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <SectionTitle
              eyebrow="What We Do"
              title="Software built for the long run"
              align="left"
            />
            <p className="mt-6 text-slate-500 leading-relaxed">
              Idmasoft is a software company focused on building products and
              systems that last. We work across the full stack — from product
              conception and architecture to deployment and ongoing support.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed">
              We specialize in building business applications, automation
              platforms, and AI-integrated tools that help companies operate
              more effectively. Every system we build is designed to be
              maintained, extended, and scaled over time.
            </p>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col gap-3 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-slate-900">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
