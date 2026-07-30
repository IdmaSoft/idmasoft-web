import type { Metadata } from "next";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { CTASection } from "@/components/layout/CTASection";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SERVICES } from "@/lib/constants/services";
import { localeAlternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.services" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates("/services", locale),
    openGraph: {
      title: `${t("title")} | Idmasoft`,
      description: t("description"),
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const tData = await getTranslations("data.services");
  const highlights = t.raw("approach.highlights") as string[];

  const services = SERVICES.map((service) => ({
    ...service,
    title: tData(`${service.id}.title`),
    description: tData(`${service.id}.description`),
  }));

  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </div>
      </div>

      {/* Services grid */}
      <section id="services" className="py-16 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={Math.min(index, 6) * 0.07}>
                <div id={service.id}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionTitle
                eyebrow={t("approach.eyebrow")}
                title={t("approach.title")}
                align="left"
              />
              <p className="mt-6 text-zinc-400 leading-relaxed">
                {t("approach.paragraph1")}
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                {t("approach.paragraph2")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((label, index) => {
                const colors = [
                  "bg-sky-500/10 text-sky-300 ring-1 ring-inset ring-sky-500/20",
                  "bg-violet-500/10 text-violet-300 ring-1 ring-inset ring-violet-500/20",
                  "bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/20",
                  "bg-orange-500/10 text-orange-300 ring-1 ring-inset ring-orange-500/20",
                  "bg-sky-500/10 text-sky-300 ring-1 ring-inset ring-sky-500/20",
                  "bg-rose-500/10 text-rose-300 ring-1 ring-inset ring-rose-500/20",
                ];
                return (
                  <div
                    key={label}
                    className={`px-4 py-3 rounded-xl text-sm font-medium ${colors[index % colors.length]}`}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <TechnologiesSection />

      <CTASection
        title={t("cta.title")}
        description={t("cta.description")}
        primaryLabel={t("cta.primaryLabel")}
        primaryHref="/contact"
        secondaryLabel={t("cta.secondaryLabel")}
        secondaryHref="/products"
      />
    </>
  );
}
