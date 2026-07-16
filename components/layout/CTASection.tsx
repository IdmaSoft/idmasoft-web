import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Ready to build something great?",
  description = "Whether you need a product built from scratch or want to scale an existing system, let's talk.",
  primaryLabel = "Get in Touch",
  primaryHref = "/contact",
  secondaryLabel = "Explore Products",
  secondaryHref = "/products",
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
            href={primaryHref}
            size="lg"
            className="bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-colors"
          >
            {primaryLabel}
          </Button>
          <Button
            href={secondaryHref}
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
