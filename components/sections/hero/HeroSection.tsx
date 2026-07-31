"use client";

import { useMotionValue, useReducedMotion, useScroll } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroCore from "./core/HeroCore";
import { useRef, useState } from "react";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  // Real measured bottom edge of the hero text block, shared between
  // HeroContent (measures it) and HeroCore/Cube (positions off of it) — see
  // the comment in HeroContent.tsx for why this can't just be a constant.
  const [textBottom, setTextBottom] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Respect the OS-level "reduce motion" setting: skip the scroll-jacked
  // journey entirely and show the hero settled at its opening frame
  // (title, buttons, closed cube) instead of animating through it.
  const staticProgress = useMotionValue(0);

  if (shouldReduceMotion) {
    return (
      <section className="relative h-screen bg-zinc-950">
        <HeroBackground />
        <HeroContent progress={staticProgress} onTextBottomChange={setTextBottom} />
        <HeroCore progress={staticProgress} textBottom={textBottom} />
      </section>
    );
  }

  return (
    <section
      ref={heroRef}
      className="relative h-[120vh] bg-zinc-950"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <HeroBackground />
        <HeroContent progress={scrollYProgress} onTextBottomChange={setTextBottom} />
        <HeroCore progress={scrollYProgress} textBottom={textBottom} />
      </div>
    </section>
  );
}