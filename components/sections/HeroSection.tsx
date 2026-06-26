import { Button } from "@/components/ui/Button";
import { ArrowRight, Zap } from "lucide-react";

function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none">
      {/* Ambient glow */}
      <div
        className="absolute -inset-4 rounded-3xl bg-blue-100/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl p-6 space-y-4">
        {/* Fake browser bar */}
        <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-slate-100 rounded-md h-5 mx-2" />
        </div>

        {/* Fake code block */}
        <div className="font-mono text-xs space-y-1.5 text-slate-400">
          <div className="flex gap-3">
            <span className="text-slate-300 select-none">1</span>
            <span>
              <span className="text-violet-500">export</span>
              <span className="text-blue-500"> async function</span>
              <span className="text-yellow-600"> buildProduct</span>
              <span>{"() {"}</span>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-slate-300 select-none">2</span>
            <span className="pl-4">
              <span className="text-blue-500">const</span>
              <span className="text-slate-600"> idea </span>
              <span>=</span>
              <span className="text-emerald-600"> await</span>
              <span className="text-slate-500"> discovery()</span>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-slate-300 select-none">3</span>
            <span className="pl-4">
              <span className="text-blue-500">const</span>
              <span className="text-slate-600"> system </span>
              <span>=</span>
              <span className="text-emerald-600"> await</span>
              <span className="text-slate-500"> architecture(idea)</span>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-slate-300 select-none">4</span>
            <span className="pl-4">
              <span className="text-blue-500">const</span>
              <span className="text-slate-600"> product </span>
              <span>=</span>
              <span className="text-emerald-600"> await</span>
              <span className="text-slate-500"> deploy(system)</span>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-slate-300 select-none">5</span>
            <span>
              <span className="text-blue-500">{"  return"}</span>
              <span className="text-slate-600"> product</span>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-slate-300 select-none">6</span>
            <span>{"}"}</span>
          </div>
        </div>

        {/* Floating badge cards */}
        <div className="flex gap-3 flex-wrap pt-2">
          {["Next.js", "TypeScript", "NestJS", "PostgreSQL"].map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Status bar */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-slate-500">Deployed to production</span>
          <span className="ml-auto text-xs text-slate-400">100% uptime</span>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gradient-to-l from-blue-50/80 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-8">
              <Zap className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                Software Company
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-6xl xl:text-7xl leading-[1.1]">
              Building Software
              <br />
              <span className="text-blue-600">That Scales</span>
            </h1>

            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-lg">
              Idmasoft designs and engineers modern software products,
              AI-powered solutions, and enterprise applications built for
              long-term growth.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/products" size="lg" variant="primary">
                Explore Products
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Work With Us
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
