import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="relative py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.14),transparent_40%)]" />
      <div className="mx-auto relative max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">   
          <Button
            render={<Link href={primaryHref} />}
            nativeButton={false}
            size="lg"
            className="bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-colors"
          >
            {primaryLabel}
          </Button>
          <Button
            render={<Link href={secondaryHref} />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
          >
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
