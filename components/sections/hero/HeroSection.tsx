import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroScene from "./HeroScene";

export function HeroSection() {
  return (
    <section className="relative h-[240vh] bg-zinc-950">
      <div className="sticky top-0 h-screen overflow-hidden">
        <HeroBackground />
        <HeroScene />
        <HeroContent />

        {/* Próximamente */}
        {/* FloatingCards */}
        {/* Connections */}
        {/* ScrollIndicator */}
      </div>
    </section>
  );
}