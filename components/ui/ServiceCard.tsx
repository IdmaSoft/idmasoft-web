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
    <div className="flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 p-7 hover:-translate-y-0.5">
      <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}
