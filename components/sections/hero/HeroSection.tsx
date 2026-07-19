"use client";

import { useScroll } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroScene from "./HeroScene";
import { useRef } from "react";
import HeroCore from "./core/HeroCore";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      ref={heroRef} 
      className="relative h-[240vh] bg-zinc-950"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <HeroBackground />
        <HeroContent progress={scrollYProgress} />
        <HeroCore progress={scrollYProgress} />
        <HeroScene progress={scrollYProgress} />

        {/* Próximamente */}
        {/* FloatingCards */}
        {/* Connections */}
        {/* ScrollIndicator */}
      </div>
    </section>
  );
}