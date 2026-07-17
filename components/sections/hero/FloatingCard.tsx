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
        w-44
        -translate-x-1/2
        -translate-y-1/2
        rounded-xl
        border border-zinc-800/80
        bg-zinc-900/60
        backdrop-blur-xl
        shadow-[0_12px_40px_rgba(0,0,0,0.35)]
        transition-all
        duration-300
      "
      style={{
        left: x,
        top: y,
      }}
    >
      <div className="p-4">
        {/* Icon */}
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/10">
          <Icon className="h-4 w-4 text-sky-300" />
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-zinc-50">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-1 text-xs leading-5 text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}