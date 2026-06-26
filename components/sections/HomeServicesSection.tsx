import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants/services";
import { Button } from "@/components/ui/Button";

export function HomeServicesSection() {
  const featured = SERVICES.slice(0, 6);

  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-14">
          <SectionTitle
            eyebrow="Services"
            title="How we work with clients"
            description="From greenfield projects to system modernization, we bring the technical depth to move fast and build things right."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="outline" size="md">
            See All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
