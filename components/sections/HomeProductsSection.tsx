import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import { AppMockup } from "@/components/ui/AppMockup";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useLocalizedProducts } from "@/lib/i18n/localize";
import { SELLERRESPONDER_SCREENSHOT_URL } from "@/lib/constants/products";

const FEATURED_PRODUCT_ID = "sellerresponder";
// Home stays a teaser, not the full catalog — cap how many non-featured
// products render here so it doesn't grow unbounded as more ship. The
// complete, unbounded list always lives at /products.
const MAX_EXTRA_PRODUCTS = 2;

export function HomeProductsSection() {
  const t = useTranslations("home.products");
  const tc = useTranslations("common");
  const products = useLocalizedProducts();
  const featured = products.find((p) => p.id === FEATURED_PRODUCT_ID);
  const rest = products
    .filter((p) => p.id !== FEATURED_PRODUCT_ID)
    .slice(0, MAX_EXTRA_PRODUCTS);

  return (
    <section className="relative overflow-hidden py-24 bg-zinc-900 border-b border-zinc-800">
      <div
        className="pointer-events-none absolute right-[10%] top-0 h-[400px] w-[400px] -translate-y-1/3 rounded-full bg-violet-500/10 blur-[160px]"
        aria-hidden="true"
      />
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

        {/* Compact spotlight — full detail (bullets, highlights) lives only
            on the product's own page, not duplicated here. */}
        {featured && (
          <Reveal>
            <div className="flex items-center gap-6 rounded-3xl border border-zinc-800 bg-zinc-950/80 shadow-sm p-6 sm:p-8">
              <ProductScreenshot
                src={SELLERRESPONDER_SCREENSHOT_URL}
                alt={featured.name}
                fallback={<AppMockup />}
                className="hidden w-32 flex-shrink-0 sm:block"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <h3 className="text-lg font-semibold text-zinc-50">{featured.name}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/20">
                    {t("featuredBadge")}
                  </span>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {featured.description}
                </p>
              </div>
              <Link
                href={featured.href}
                className="group/link hidden flex-shrink-0 items-center gap-1.5 text-sm font-semibold text-sky-300 hover:text-zinc-50 sm:inline-flex"
              >
                {tc("learnMore")}
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        )}

        {/* Any additional products: name + link only, never a full card —
            keeps this section's height constant regardless of catalog size. */}
        {rest.length > 0 && (
          <div className="mt-4 flex flex-col gap-2">
            {rest.map((product, index) => (
              <Reveal key={product.id} delay={Math.min(index, 6) * 0.05}>
                <Link
                  href={product.href}
                  className="group flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 hover:bg-zinc-900/80 transition-colors"
                >
                  <span className="text-sm font-medium text-zinc-100">{product.name}</span>
                  <ArrowRight
                    className="w-4 h-4 text-zinc-500 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        )}

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
