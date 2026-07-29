import type { Metadata } from "next";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
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
      <div className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </div>
      </div>

      {/* Services grid */}
      <section id="services" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
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
                eyebrow={t("approach.eyebrow")}
                title={t("approach.title")}
                align="left"
              />
              <p className="mt-6 text-slate-500 leading-relaxed">
                {t("approach.paragraph1")}
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                {t("approach.paragraph2")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((label, index) => {
                const colors = [
                  "bg-blue-50 text-blue-700",
                  "bg-violet-50 text-violet-700",
                  "bg-emerald-50 text-emerald-700",
                  "bg-orange-50 text-orange-700",
                  "bg-sky-50 text-sky-700",
                  "bg-rose-50 text-rose-700",
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
