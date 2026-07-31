import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Bot, Smartphone, Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useLocalizedProducts } from "@/lib/i18n/localize";

const FEATURED_PRODUCT_ID = "sellerresponder";

const highlightIds = ["marketplace", "ai", "mobile"] as const;

const highlightIcons = {
  marketplace: <ShoppingBag className="w-4 h-4" aria-hidden="true" />,
  ai: <Bot className="w-4 h-4" aria-hidden="true" />,
  mobile: <Smartphone className="w-4 h-4" aria-hidden="true" />,
};

export function HomeProductsSection() {
  const t = useTranslations("home.products");
  const tc = useTranslations("common");
  const products = useLocalizedProducts();
  const featured = products.find((p) => p.id === FEATURED_PRODUCT_ID);
  const rest = products.filter((p) => p.id !== FEATURED_PRODUCT_ID);
  const bullets = t.raw("featuredBullets") as string[];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured && (
            <Reveal className="md:col-span-2">
              <div className="flex flex-col lg:flex-row gap-8 h-full rounded-3xl border border-zinc-800 bg-zinc-950/80 shadow-sm p-8">
                <div className="flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-zinc-50">{featured.name}</h3>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/20">
                      {t("featuredBadge")}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-sky-300 mb-3">{featured.category}</p>
                  <p className="text-zinc-400 leading-relaxed text-sm mb-5">
                    {featured.description}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {bullets.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-zinc-300 text-sm">
                        <Check className="w-4 h-4 text-zinc-500 flex-shrink-0" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={featured.href}
                    className="group/link mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 hover:text-zinc-50"
                  >
                    {tc("learnMore")}
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>

                <div className="flex flex-col gap-3 lg:w-64 flex-shrink-0">
                  {highlightIds.map((id) => (
                    <div
                      key={id}
                      className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sky-300 flex-shrink-0">
                        {highlightIcons[id]}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-zinc-50">
                          {t(`featuredHighlights.${id}.label`)}
                        </p>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          {t(`featuredHighlights.${id}.detail`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {rest.map((product, index) => (
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
