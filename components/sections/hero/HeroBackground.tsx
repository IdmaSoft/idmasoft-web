import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-zinc-950">
      {/* Imagen principal */}
      <Image
        src="/images/hero/hero-background.png"
        alt=""
        fill
        priority
        className="object-cover object-center select-none pointer-events-none"
      />

      {/* Gradiente superior */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-zinc-950/30
          via-zinc-950/10
          to-zinc-950/70
        "
      />

      {/* Gradiente radial azul */}
      <div
        className="
          absolute
          left-1/2
          top-[70%]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-sky-400/10
          blur-[180px]
        "
      />

      {/* Glow violeta */}
      <div
        className="
          absolute
          right-[15%]
          top-[25%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-500/5
          blur-[180px]
        "
      />

      {/* Viñeta */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,.55)_100%)]
        "
      />

      {/* Glow inferior */}
      <div
        className="
          absolute
          bottom-[-120px]
          left-1/2
          h-[320px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-sky-400/10
          blur-[120px]
        "
      />
    </div>
  );
}