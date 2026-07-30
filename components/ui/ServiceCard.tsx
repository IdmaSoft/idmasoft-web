"use client";

import {
  Layers,
  Server,
  Plug,
  Cloud,
  Cpu,
  RefreshCw,
  Database,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Server,
  Plug,
  Cloud,
  Cpu,
  RefreshCw,
  Database,
  MessageCircle,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Layers;

  return (
    <div className="flex flex-col bg-zinc-950/80 rounded-2xl border border-zinc-800 shadow-sm hover:shadow-md hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-200 p-7 hover:-translate-y-0.5">
      <div className="w-11 h-11 rounded-xl bg-white/5 border border-zinc-800 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-sky-300" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-zinc-50 mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
}
