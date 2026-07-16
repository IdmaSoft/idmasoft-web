import { Button } from "@/components/ui/Button";
import { ArrowRight, Zap } from "lucide-react";

function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none">
      <div
        className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 bottom-6 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative rounded-[2.5rem] border border-zinc-800 bg-zinc-950/95 shadow-[0_40px_100px_rgba(15,23,42,0.45)] p-6">
        <div className="flex items-center gap-3 pb-4 mb-4 border-b border-zinc-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <div className="flex-1 h-3 rounded-full bg-zinc-900/80" />
        </div>

        <div className="font-mono text-xs space-y-1.5 text-zinc-400">
          <div className="flex gap-3">
            <span className="text-zinc-500 select-none">1</span>
            <span>
              <span className="text-violet-400">export</span>
              <span className="text-sky-400"> async function</span>
              <span className="text-amber-400"> buildProduct</span>
              <span>{"() {"}</span>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-zinc-500 select-none">2</span>
            <span className="pl-4">
              <span className="text-sky-400">const</span>
              <span className="text-zinc-300"> idea </span>
              <span>=</span>
              <span className="text-emerald-400"> await</span>
              <span className="text-zinc-400"> discovery()</span>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-zinc-500 select-none">3</span>
            <span className="pl-4">
              <span className="text-sky-400">const</span>
              <span className="text-zinc-300"> system </span>
              <span>=</span>
              <span className="text-emerald-400"> await</span>
              <span className="text-zinc-400"> architecture(idea)</span>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-zinc-500 select-none">4</span>
            <span className="pl-4">
              <span className="text-sky-400">const</span>
              <span className="text-zinc-300"> product </span>
              <span>=</span>
              <span className="text-emerald-400"> await</span>
              <span className="text-zinc-400"> deploy(system)</span>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-zinc-500 select-none">5</span>
            <span>
              <span className="text-sky-400">{"  return"}</span>
              <span className="text-zinc-300"> product</span>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-zinc-500 select-none">6</span>
            <span>{"}"}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-400">
          {["Next.js", "TypeScript", "NestJS", "PostgreSQL"].map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 pt-4 border-t border-zinc-800">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-zinc-500">Deployed to production</span>
          <span className="ml-auto text-xs text-zinc-500">100% uptime</span>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 border-b border-zinc-900 pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div
        className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 bottom-16 h-64 w-64 rounded-full bg-violet-500/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 shadow-sm shadow-violet-500/10">
              <Zap className="w-3.5 h-3.5 text-violet-400" aria-hidden="true" />
              <span>Software Company</span>
            </div>

            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-zinc-50 sm:text-6xl lg:text-6xl xl:text-7xl leading-[1.04]">
              Building Software
              <br />
              <span className="text-sky-300">That Scales</span>
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-8 text-zinc-400">
              Idmasoft designs and engineers modern software products,
              AI-powered solutions, and enterprise applications built for
              long-term growth.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
              Native Android apps, secure backend APIs and real-time synchronization designed to keep mobile operations aligned with business metrics.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/products" size="lg" variant="default">
                Explore Products
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Work With Us
              </Button>
            </div>
          </div>

          <div className="block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
