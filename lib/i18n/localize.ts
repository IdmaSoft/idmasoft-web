import { useTranslations } from "next-intl";
import { PRODUCTS } from "@/lib/constants/products";
import { SERVICES } from "@/lib/constants/services";
import { FEATURES } from "@/lib/constants/features";
import { PROCESS_STEPS } from "@/lib/constants/process";
import { NAV_LINKS } from "@/lib/constants/navigation";

export function useLocalizedProducts() {
  const t = useTranslations("data.products");
  return PRODUCTS.map((product) => ({
    ...product,
    name: t(`${product.id}.name`),
    tagline: t(`${product.id}.tagline`),
    description: t(`${product.id}.description`),
    category: t(`${product.id}.category`),
  }));
}

export function useLocalizedServices() {
  const t = useTranslations("data.services");
  return SERVICES.map((service) => ({
    ...service,
    title: t(`${service.id}.title`),
    description: t(`${service.id}.description`),
  }));
}

export function useLocalizedFeatures() {
  const t = useTranslations("data.features");
  return FEATURES.map((feature) => ({
    ...feature,
    title: t(`${feature.id}.title`),
    description: t(`${feature.id}.description`),
  }));
}

export function useLocalizedProcessSteps() {
  const t = useTranslations("data.process");
  return PROCESS_STEPS.map((processStep) => ({
    ...processStep,
    title: t(`${processStep.step}.title`),
    description: t(`${processStep.step}.description`),
  }));
}

export function useLocalizedNavLinks() {
  const t = useTranslations("nav.links");
  return NAV_LINKS.map((link) => ({
    ...link,
    label: t(link.id),
  }));
}
