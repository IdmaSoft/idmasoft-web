import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { useTranslations } from "next-intl";
import { useLocalizedProcessSteps } from "@/lib/i18n/localize";

// Cycled per step so the pipeline reads as distinct, scannable nodes instead
// of a monochrome sequence — always visible (not hover-only), since hover
// doesn't exist on the touch devices most visitors will use.
const stepAccents = [
  { ring: "border-sky-500/60", text: "text-sky-300" },
  { ring: "border-violet-500/60", text: "text-violet-300" },
  { ring: "border-emerald-500/60", text: "text-emerald-300" },
  { ring: "border-rose-500/60", text: "text-rose-300" },
  { ring: "border-orange-500/60", text: "text-orange-300" },
];

export function ProcessSection() {
  const t = useTranslations("home.process");
  const steps = useLocalizedProcessSteps();

  return (
    <section className="relative overflow-hidden py-24 bg-zinc-950 border-b border-zinc-900">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-violet-500/10 blur-[170px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            titleClassName="text-zinc-50"
            descriptionClassName="text-zinc-400"
          />
        </div>

        {/* Mobile: vertical connected-node pipeline */}
        <div className="relative md:hidden">
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-zinc-800"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {steps.map((step, index) => {
              const accent = stepAccents[index % stepAccents.length];
              return (
                <Reveal key={step.step} delay={Math.min(index, 6) * 0.07}>
                  <div className="relative flex gap-5">
                    <div
                      className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 bg-zinc-950 ${accent.ring}`}
                    >
                      <span className={`text-sm font-bold ${accent.text}`}>{step.step}</span>
                    </div>
                    <div className="pt-1.5 pb-1">
                      <h3 className="text-base font-semibold text-zinc-50">{step.title}</h3>
                      <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* md+: horizontal connected-node pipeline (n8n-inspired, adapted to our palette) */}
        <div className="hidden md:block overflow-x-auto pb-2">
          <div className="relative flex gap-6">
            <div
              className="pointer-events-none absolute left-0 right-0 top-5 h-px bg-zinc-800"
              aria-hidden="true"
            />
            {steps.map((step, index) => {
              const accent = stepAccents[index % stepAccents.length];
              return (
                <Reveal
                  key={step.step}
                  delay={Math.min(index, 6) * 0.07}
                  className="min-w-[180px] flex-1"
                >
                  <div className="group flex flex-col items-center text-center">
                    <div
                      className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 bg-zinc-950 transition-transform group-hover:scale-110 ${accent.ring}`}
                    >
                      <span className={`text-sm font-bold ${accent.text}`}>{step.step}</span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-zinc-50">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
