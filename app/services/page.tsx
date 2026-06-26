import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { CTASection } from "@/components/layout/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Idmasoft offers full stack development, backend architecture, API development, cloud deployment, AI integration, and software consulting services.",
  openGraph: {
    title: "Services | Idmasoft",
    description:
      "Full stack development, backend architecture, cloud deployment, AI integration, and software consulting.",
    url: "https://idmasoft.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Services"
            title="Engineering services for your business"
            description="From building a product from scratch to modernizing legacy systems, we bring the full stack depth and architectural experience to deliver results."
          />
        </div>
      </div>

      {/* Services grid */}
      <section id="services" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} id={service.id}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionTitle
                eyebrow="Our Approach"
                title="Quality over shortcuts"
                align="left"
              />
              <p className="mt-6 text-slate-500 leading-relaxed">
                Every engagement starts with understanding the business problem
                before touching the technology. We ask the hard questions up
                front — what does success look like, what are the constraints,
                and what does the system need to handle six months from now?
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                We write code that teams can maintain. We document decisions.
                We test thoroughly. And we stay involved after deployment to
                ensure systems run reliably in production.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Clean, readable code", color: "bg-blue-50 text-blue-700" },
                { label: "Strong typing throughout", color: "bg-violet-50 text-violet-700" },
                { label: "Tested at every layer", color: "bg-emerald-50 text-emerald-700" },
                { label: "Production-ready CI/CD", color: "bg-orange-50 text-orange-700" },
                { label: "Documented architecture", color: "bg-sky-50 text-sky-700" },
                { label: "Post-launch support", color: "bg-rose-50 text-rose-700" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`px-4 py-3 rounded-xl text-sm font-medium ${item.color}`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TechnologiesSection />

      <CTASection
        title="Let's discuss your project"
        description="Tell us what you're building and we'll figure out the best way to help."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Products"
        secondaryHref="/products"
      />
    </>
  );
}
