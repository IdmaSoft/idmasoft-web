import { HeroSection } from "@/components/sections/hero/HeroSection";
import { CompanySection } from "@/components/sections/CompanySection";
import { HomeProductsSection } from "@/components/sections/HomeProductsSection";
import { HomeServicesSection } from "@/components/sections/HomeServicesSection";
import { WhyIdmasoftSection } from "@/components/sections/WhyIdmasoftSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { FeaturedProductSection } from "@/components/sections/FeaturedProductSection";
import { HomeFounderSection } from "@/components/sections/HomeFounderSection";
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
      <CompanySection />
      <HomeProductsSection />
      <HomeServicesSection />
      <WhyIdmasoftSection />
      <ProcessSection />
      <TechnologiesSection />
      <FeaturedProductSection />
      <HomeFounderSection />
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
