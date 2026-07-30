import type { Metadata } from "next";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/layout/CTASection";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PRODUCTS } from "@/lib/constants/products";
import { localeAlternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.products" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates("/products", locale),
    openGraph: {
      title: `${t("title")} | Idmasoft`,
      description: t("description"),
    },
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("products");
  const tData = await getTranslations("data.products");

  const products = PRODUCTS.map((product) => ({
    ...product,
    name: tData(`${product.id}.name`),
    tagline: tData(`${product.id}.tagline`),
    description: tData(`${product.id}.description`),
    category: tData(`${product.id}.category`),
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

      {/* Product list */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={t("cta.title")}
        description={t("cta.description")}
        primaryLabel={t("cta.primaryLabel")}
        primaryHref="/contact"
        secondaryLabel={t("cta.secondaryLabel")}
        secondaryHref="/services"
      />
    </>
  );
}
