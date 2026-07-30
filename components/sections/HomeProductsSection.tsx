import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useLocalizedProducts } from "@/lib/i18n/localize";

export function HomeProductsSection() {
  const t = useTranslations("home.products");
  const products = useLocalizedProducts();

  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-14">
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            titleClassName="text-zinc-50"
            descriptionClassName="text-zinc-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={Math.min(index, 6) * 0.07}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            render={<Link href="/products" />}
            nativeButton={false}
            variant="outline"
            className="bg-transparent border-zinc-800 text-zinc-50 hover:bg-zinc-900"
          >
            {t("viewAllCta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
