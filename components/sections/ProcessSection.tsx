import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROCESS_STEPS } from "@/lib/constants/process";

export function ProcessSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle
            eyebrow="Development Process"
            title="How we take ideas to production"
            description="A structured, iterative process that keeps quality high and stakeholders informed at every stage."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative flex flex-col gap-4 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <div className="h-px flex-1 bg-slate-100" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
