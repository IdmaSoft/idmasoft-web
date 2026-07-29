import type { LocalizedProcessStep } from "@/lib/types";

interface TimelineProps {
  steps: LocalizedProcessStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      <div
        className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block"
        aria-hidden="true"
      />
      <ol className="space-y-10">
        {steps.map((step, index) => (
          <li key={step.step} className="relative flex gap-6 md:gap-10">
            <div className="flex-shrink-0 relative z-10">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-sm">
                <span className="text-sm font-bold text-white">{step.step}</span>
              </div>
            </div>
            <div className="flex-1 pb-2">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                {index < steps.length - 1 && (
                  <div
                    className="h-px flex-1 bg-slate-200 hidden md:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <p className="text-slate-500 leading-relaxed text-sm max-w-sm">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
