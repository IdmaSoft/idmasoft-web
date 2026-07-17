import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center px-6">
        {/* Top content */}
        <div className="pt-24 flex max-w-3xl flex-col items-center text-center">

          {/* Títle */}
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
            Build software that scales.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            We design custom platforms, mobile applications, cloud systems and AI solutions that help businesses automate, grow and scale.
          </p>

          {/* Buttons */}
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