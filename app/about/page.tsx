import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/layout/CTASection";
import { Target, Eye, Heart, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Idmasoft is a software company focused on building modern products and systems that solve real problems and stand the test of time.",
  openGraph: {
    title: "About | Idmasoft",
    description:
      "Idmasoft is a software company focused on building modern products and systems that solve real problems and stand the test of time.",
    url: "https://idmasoft.com/about",
  },
};

const values = [
  {
    icon: <Wrench className="w-5 h-5" aria-hidden="true" />,
    title: "Technical Excellence",
    description:
      "We hold a high bar for code quality, architectural decisions, and system design. Good enough is not good enough.",
  },
  {
    icon: <Target className="w-5 h-5" aria-hidden="true" />,
    title: "Purpose-Driven Building",
    description:
      "We don't add features for the sake of it. Every line of code serves a clear purpose tied to a real business outcome.",
  },
  {
    icon: <Heart className="w-5 h-5" aria-hidden="true" />,
    title: "Long-Term Thinking",
    description:
      "We build for the next two years, not just the next sprint. Maintainability and extensibility are design requirements.",
  },
  {
    icon: <Eye className="w-5 h-5" aria-hidden="true" />,
    title: "Transparency",
    description:
      "We communicate clearly, flag problems early, and treat clients as partners in the building process — not as ticket requesters.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="About"
            title="A software company built on engineering values"
            description="Idmasoft exists to build software that works well, lasts long, and delivers real value to the businesses that rely on it."
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white">
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-200 mb-4 block">
                Mission
              </span>
              <h2 className="text-2xl font-bold mb-5 leading-snug">
                Build software that solves real problems and keeps working
              </h2>
              <p className="text-blue-100 leading-relaxed">
                Idmasoft's mission is to design and engineer software systems
                that deliver lasting value. We focus on quality, clarity, and
                reliability — not novelty for its own sake. Every product and
                service we produce should make the businesses we work with more
                effective and more capable.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-900 rounded-3xl p-10 text-white">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4 block">
                Vision
              </span>
              <h2 className="text-2xl font-bold mb-5 leading-snug">
                A trusted software partner for businesses that take technology
                seriously
              </h2>
              <p className="text-slate-400 leading-relaxed">
                We want Idmasoft to be known as a company that ships exceptional
                software — consistently, honestly, and with a deep understanding
                of the problems being solved. Over time, our product portfolio
                will grow alongside our services business, creating a company
                that builds both for clients and for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-14">
            <SectionTitle
              eyebrow="Values"
              title="What guides how we work"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-4 p-7 bg-white rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-slate-900">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                eyebrow="Philosophy"
                title="Software engineering as a craft"
                align="left"
              />
              <div className="mt-6 space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Good software doesn't happen by accident. It comes from
                  deliberate choices — about architecture, about technology
                  selection, about how to structure code so that the next
                  developer (or the same developer six months later) can
                  understand it quickly.
                </p>
                <p>
                  At Idmasoft, we approach every project with the mindset of an
                  engineer who will have to maintain it. That means making
                  decisions that optimize for long-term clarity, not short-term
                  speed. It means writing tests that give us confidence to
                  change things. It means documenting the why, not just the what.
                </p>
                <p>
                  This philosophy applies equally to the products we build for
                  clients and the products we build for ourselves. We don't have
                  different standards depending on who's paying — we have one
                  standard: build it right.
                </p>
              </div>
            </div>

            {/* Principles list */}
            <div className="space-y-4">
              {[
                "Architecture decisions are made with the whole system in mind",
                "Code is written to be read, not just to work",
                "Tests are a design tool, not a checkbox",
                "Documentation reflects the current state of the system",
                "Production monitoring is part of the definition of done",
                "Technical debt is tracked and managed, not accumulated and ignored",
              ].map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span className="text-sm text-slate-700 leading-relaxed">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Build with a company that cares about the craft"
        description="Whether you need a product built or a system improved, we bring the same level of rigor and involvement to every engagement."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="Meet the Founder"
        secondaryHref="/founder"
      />
    </>
  );
}
