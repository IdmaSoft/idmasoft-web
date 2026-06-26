interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-4 p-7 rounded-2xl bg-white border border-slate-100 shadow-sm">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-slate-900 mb-1.5">
          {title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
