"use client";

import { useMotionValue, useReducedMotion, useScroll } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroCore from "./core/HeroCore";
import { useRef } from "react";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Respect the OS-level "reduce motion" setting: skip the scroll-jacked
  // 240vh journey entirely and show the hero settled at its opening frame
  // (title, buttons, closed cube) instead of animating through it.
  const staticProgress = useMotionValue(0);

  if (shouldReduceMotion) {
    return (
      <section className="relative h-screen bg-zinc-950">
        <HeroBackground />
        <HeroContent progress={staticProgress} />
        <HeroCore progress={staticProgress} />
      </section>
    );
  }

  return (
    <section
      ref={heroRef}
      className="relative h-[240vh] bg-zinc-950"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <HeroBackground />
        <HeroContent progress={scrollYProgress} />
        <HeroCore progress={scrollYProgress} />
      </div>
    </section>
  );
}