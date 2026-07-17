import { LucideIcon } from "lucide-react";

interface FloatingCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  x: string;
  y: string;
}

export default function FloatingCard({
  title,
  description,
  icon: Icon,
  x,
  y,
}: FloatingCardProps) {
  return (
    <div
      className="
        absolute
        w-64
        -translate-x-1/2
        -translate-y-1/2
        rounded-2xl
        border border-zinc-800/80
        bg-zinc-900/60
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        transition-all
        duration-300
      "
      style={{
        left: x,
        top: y,
      }}
    >
      <div className="p-5">
        {/* Icono */}
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10">
          <Icon className="h-5 w-5 text-sky-300" />
        </div>

        {/* Título */}
        <h3 className="text-lg font-semibold text-zinc-50">
          {title}
        </h3>

        {/* Descripción */}
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {description}
        </p>

        {/* Estado */}
        <div className="mt-5 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-xs uppercase tracking-wider text-zinc-500">
            Active
          </span>
        </div>
      </div>
    </div>
  );
}