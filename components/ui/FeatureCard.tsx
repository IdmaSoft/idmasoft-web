interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-4 p-7 rounded-3xl border border-zinc-800 bg-zinc-950/80 shadow-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
      <div className="w-11 h-11 rounded-xl bg-white/5 border border-zinc-800 flex items-center justify-center text-sky-300 shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-zinc-50 mb-1.5">
          {title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
