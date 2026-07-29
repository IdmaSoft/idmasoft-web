import { ArrowRight, ShoppingBag, Bot, Smartphone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useLocalizedProducts } from "@/lib/i18n/localize";

const highlightIds = ["marketplace", "ai", "mobile"] as const;

const highlightIcons = {
  marketplace: <ShoppingBag className="w-5 h-5" aria-hidden="true" />,
  ai: <Bot className="w-5 h-5" aria-hidden="true" />,
  mobile: <Smartphone className="w-5 h-5" aria-hidden="true" />,
};

const highlightColors = {
  marketplace: "text-blue-400",
  ai: "text-orange-400",
  mobile: "text-emerald-400",
};

export function FeaturedProductSection() {
  const t = useTranslations("home.featuredProduct");
  const products = useLocalizedProducts();
  const product = products.find((p) => p.id === "sellerresponder") ?? products[0];
  const bullets = t.raw("bullets") as string[];

  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
              {t("eyebrow")}
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl leading-tight">
              {product.name}
            </h2>
            <p className="mt-2 text-lg font-medium text-orange-400">
              {product.category}
            </p>
            <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
              {product.description}
            </p>

            <ul className="mt-8 space-y-3">
              {bullets.map((point) => (
                <li key={point} className="flex items-center gap-3 text-zinc-300 text-sm">
                  <Check className="w-4 h-4 text-zinc-500 flex-shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                render={<Link href={product.href} />}
                nativeButton={false}
                className="bg-orange-600 text-white hover:bg-orange-500 transition-colors"
              >
                {t("viewProductCta")}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button
                render={<Link href="/products" />}
                nativeButton={false}
                  variant="default"
                  className="border-zinc-800 text-zinc-100 hover:border-zinc-700"
              >
                {t("allProductsCta")}
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="flex flex-col gap-5">
            {highlightIds.map((id) => (
              <Card
                key={id}
                className="hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors duration-300"
              >
                <CardHeader className="flex items-center gap-5 p-5">
                  <div className={`w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center ${highlightColors[id]}`}>
                    {highlightIcons[id]}
                  </div>
                  <div>
                    <CardTitle className="text-zinc-50 text-sm font-semibold">
                      {t(`highlights.${id}.label`)}
                    </CardTitle>
                    <CardDescription className="text-zinc-400 text-xs mt-1">
                      {t(`highlights.${id}.detail`)}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
