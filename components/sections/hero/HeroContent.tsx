import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center px-6">
        {/* Contenido superior */}
        <div className="mt-[10vh] flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <div className="pointer-events-auto mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-1 backdrop-blur">
            <span className="text-sm font-medium tracking-wide text-sky-300">
              Software Engineering Studio
            </span>
          </div>

          {/* Título */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-zinc-50 md:text-6xl lg:text-7xl">
            We build software
            <br />
            that grows with
            <br />
            your business.
          </h1>

          {/* Descripción */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Custom platforms, mobile applications, cloud systems and AI
            solutions designed to automate processes and help businesses
            scale with confidence.
          </p>

          {/* Botones */}
          <div className="pointer-events-auto mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Start a project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-zinc-700 bg-zinc-900/40 backdrop-blur"
            >
              Explore services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}