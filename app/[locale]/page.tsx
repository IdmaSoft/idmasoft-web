import { HeroSection } from "@/components/sections/hero/HeroSection";
import { HomeProductsSection } from "@/components/sections/HomeProductsSection";
import { HomeServicesSection } from "@/components/sections/HomeServicesSection";
import { HomeFounderSection } from "@/components/sections/HomeFounderSection";
import { WhyIdmasoftSection } from "@/components/sections/WhyIdmasoftSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { CTASection } from "@/components/layout/CTASection";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home.cta");

  return (
    <>
      <HeroSection />
      <HomeServicesSection />
      <HomeProductsSection />
      <HomeFounderSection />
      <WhyIdmasoftSection />
      <ProcessSection />
      <TechnologiesSection />
      <CTASection
        title={t("title")}
        description={t("description")}
        primaryLabel={t("primaryLabel")}
        primaryHref="/contact"
        secondaryLabel={t("secondaryLabel")}
        secondaryHref="/products"
      />
    </>
  );
}
