import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Reveal } from "@/components/ui/Reveal";
import { StackDiagram } from "@/components/ui/StackDiagram";
import { Layers, Server, Plug, Cloud, Cpu, RefreshCw } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useLocalizedServices } from "@/lib/i18n/localize";

const iconMap = {
  Layers,
  Server,
  Plug,
  Cloud,
  Cpu,
  RefreshCw,
};

// Faint, oversized watermark behind each card's text — same idea as the
// "Key Benefits" cards on the SellerResponder marketing page (giant
// low-opacity glyph bleeding off a corner, content layered on top).
const watermarkAccents: Record<string, string> = {
  fullstack: "text-sky-500/20",
  backend: "text-violet-500/20",
  api: "text-emerald-500/20",
  cloud: "text-sky-500/20",
  ai: "text-rose-500/20",
  modernization: "text-violet-500/20",
};

const layoutClasses = [
  "order-1 row-span-2",
  "order-3",
  "order-2",
  "order-4",
  "order-5",
  "order-6",
];

export function HomeServicesSection() {
  const t = useTranslations("home.services");
  const featured = useLocalizedServices().slice(0, 6);

  return (
    <section className="relative overflow-hidden py-24 bg-zinc-950 border-b border-zinc-900">
      <div
        className="pointer-events-none absolute left-[10%] top-0 h-[400px] w-[400px] -translate-y-1/3 rounded-full bg-sky-500/10 blur-[160px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-14">
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            titleClassName="text-zinc-50"
            descriptionClassName="text-zinc-400"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[minmax(0,_1.6fr)_minmax(0,_1fr)] xl:grid-cols-[1.3fr_0.7fr_0.9fr]">
          {featured.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Layers;
            const watermark = watermarkAccents[service.id] ?? "text-sky-500/10";
            // The anchor tile has its own diagram instead — the giant icon
            // would just clash with it, so skip the watermark there.
            const isAnchor = index === 0;
            return (
              <Reveal key={service.id} delay={Math.min(index, 6) * 0.07} className={layoutClasses[index]}>
                <Card className="relative h-full overflow-hidden hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300">
                  {!isAnchor && (
                    <Icon
                      className={`pointer-events-none absolute -right-6 top-1/2 h-28 w-28 -translate-y-1/2 ${watermark}`}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  )}
                  <CardHeader className="relative">
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="mt-1.5">{service.description}</CardDescription>
                    {isAnchor && (
                      <div className="pt-4">
                        <StackDiagram />
                      </div>
                    )}
                  </CardHeader>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            render={<Link href="/services" />}
            nativeButton={false}
            variant="outline"
            className="bg-transparent text-zinc-50 border-zinc-800 hover:bg-zinc-900"
          >
            {t("viewAllCta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
