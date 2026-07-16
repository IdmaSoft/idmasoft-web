import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PROCESS_STEPS } from "@/lib/constants/process";

export function ProcessSection() {
  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle
            eyebrow="Development Process"
            title="How we take ideas to production"
            description="A structured, iterative process that keeps quality high and stakeholders informed at every stage."
            titleClassName="text-zinc-50"
            descriptionClassName="text-zinc-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <Card
              key={step.step}
              className="overflow-hidden hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-zinc-50">
                      {step.step}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-zinc-800" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg text-zinc-50">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-sm text-zinc-400">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
