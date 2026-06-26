import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CompanySection } from "@/components/sections/CompanySection";
import { HomeProductsSection } from "@/components/sections/HomeProductsSection";
import { HomeServicesSection } from "@/components/sections/HomeServicesSection";
import { WhyIdmasoftSection } from "@/components/sections/WhyIdmasoftSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { FeaturedProductSection } from "@/components/sections/FeaturedProductSection";
import { HomeFounderSection } from "@/components/sections/HomeFounderSection";
import { CTASection } from "@/components/layout/CTASection";

export const metadata: Metadata = {
  title: "Idmasoft � Modern Software Products & Engineering",
  description:
    "Idmasoft builds modern software products, AI-powered solutions, backend systems, and enterprise applications that scale.",
  openGraph: {
    title: "Idmasoft � Modern Software Products & Engineering",
    description:
      "Idmasoft builds modern software products, AI-powered solutions, backend systems, and enterprise applications that scale.",
    url: "https://idmasoft.com",
  },
};

export default function Home() {
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
      <CTASection />
    </>
  );
}
