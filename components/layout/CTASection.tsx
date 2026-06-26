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
    <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href={primaryHref}
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg"
          >
            {primaryLabel}
          </Button>
          <Button
            href={secondaryHref}
            size="lg"
            className="bg-blue-500/30 text-white border border-white/30 hover:bg-blue-500/50"
          >
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
