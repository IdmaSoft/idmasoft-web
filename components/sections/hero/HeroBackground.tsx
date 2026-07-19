export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden bg-zinc-950">

      {/* Upper gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-zinc-950/10
          via-zinc-950/20
          to-zinc-950
        "
      />

      {/* Central glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-sky-500/10
          blur-[220px]
        "
      />

      {/* Violet glow */}
      <div
        className="
          absolute
          right-[15%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-500/5
          blur-[180px]
        "
      />

      {/* Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,.65)_100%)]
        "
      />
    </div>
  );
}