import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants/services";
import { Layers, Server, Plug, Cloud, Cpu, RefreshCw } from "lucide-react";
import Link from "next/link";

const featured = SERVICES.slice(0, 6);

const iconMap = {
  Layers,
  Server,
  Plug,
  Cloud,
  Cpu,
  RefreshCw,
};

const accentMap: Record<string, string> = {
  fullstack: "text-sky-300",
  backend: "text-violet-300",
  api: "text-emerald-300",
  cloud: "text-sky-300",
  ai: "text-rose-300",
  modernization: "text-violet-300",
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
  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-14">
          <SectionTitle
            eyebrow="Services"
            title="How we work with clients"
            description="From greenfield projects to system modernization, we bring the technical depth to move fast and build things right."
            titleClassName="text-zinc-50"
            descriptionClassName="text-zinc-400"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[minmax(0,_1.6fr)_minmax(0,_1fr)] xl:grid-cols-[1.3fr_0.7fr_0.9fr]">
          {featured.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Layers;
            const accent = accentMap[service.id] ?? "text-sky-300";
            return (
              <Card
                key={service.id}
                className={`${layoutClasses[index]} hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300`}
              >
                <CardHeader>
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-zinc-800 ${accent}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            render={<Link href="/services" />}
            nativeButton={false}
            className="text-zinc-50 border-zinc-800 hover:bg-zinc-900"
          >
            See All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
