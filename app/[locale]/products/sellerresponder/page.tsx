import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Smartphone,
  Bot,
  ShoppingBag,
  Clock,
  Star,
  CheckCircle,
  ImageIcon,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localeAlternates } from "@/lib/i18n/metadata";
import { Reveal } from "@/components/ui/Reveal";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import { SELLERRESPONDER_SCREENSHOT_URL } from "@/lib/constants/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.sellerresponder" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates("/products/sellerresponder", locale),
    openGraph: {
      title: `${t("title")} | Idmasoft`,
      description: t("description"),
    },
  };
}

const techStack = [
  "React Native",
  "NestJS",
  "PostgreSQL",
  "Azure",
  "OpenAI API",
  "Docker",
];

export default async function SellerResponderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("sellerresponder");
  const features = t.raw("features") as string[];
  const platforms = t.raw("platformsList") as string[];

  return (
    <>
      {/* Hero */}
      <div className="pt-28 pb-20 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-orange-400 uppercase bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full mb-6">
                <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
                {t("badge")}
              </span>
              <h1 className="text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl leading-tight">
                {t("title")}
              </h1>
              <p className="mt-5 text-xl text-zinc-400 leading-relaxed">
                {t("subtitle")}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  render={<Link href="https://sellerresponder.com" />}
                  nativeButton={false}
                  size="lg"
                  className="bg-orange-500 text-white hover:bg-orange-600"
                >
                  {t("visitLandingCta")}
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </Button>
                <Button
                  render={<Link href="https://play.google.com" />}
                  nativeButton={false}
                  size="lg"
                  className="border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-white bg-transparent"
                >
                  <Smartphone className="w-4 h-4" aria-hidden="true" />
                  {t("googlePlayCta")}
                </Button>
              </div>
            </div>

            {/* Screenshot + status card */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              <ProductScreenshot
                src={SELLERRESPONDER_SCREENSHOT_URL}
                alt={t("title")}
                className="w-full max-w-sm"
                fallbackIcon={<ImageIcon className="w-10 h-10" aria-hidden="true" />}
              />
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 w-full max-w-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-400">{t("statusCard.statusLabel")}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {t("statusCard.status")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-400">{t("statusCard.categoryLabel")}</span>
                  <span className="text-sm text-zinc-50">{t("statusCard.category")}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-400">{t("statusCard.platformLabel")}</span>
                  <span className="text-sm text-zinc-50">{t("statusCard.platform")}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-400">{t("statusCard.developerLabel")}</span>
                  <span className="text-sm text-zinc-50">Idmasoft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Problem */}
            <Reveal delay={0}>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-rose-400" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-zinc-50 mb-3">{t("problem.title")}</h2>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {t("problem.description")}
              </p>
            </Reveal>

            {/* Solution */}
            <Reveal delay={0.1}>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4">
                <Bot className="w-5 h-5 text-sky-300" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-zinc-50 mb-3">{t("solution.title")}</h2>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {t("solution.description")}
              </p>
            </Reveal>

            {/* Result */}
            <Reveal delay={0.2}>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-emerald-300" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-zinc-50 mb-3">{t("result.title")}</h2>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {t("result.description")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-50">
              {t("featuresHeading")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle
                  className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-zinc-300 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Tech stack */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-50 mb-6">
                {t("technologyHeading")}
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
                {t("technologyDescription")}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-medium px-3 py-1.5 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-50 mb-6">
                {t("platformsHeading")}
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
                {t("platformsDescription")}
              </p>
              <ul className="space-y-3">
                {platforms.map((platform) => (
                  <li key={platform} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-sky-400" />
                    <span className="text-sm text-zinc-300">{platform}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-50 mb-4">
            {t("finalCta.title")}
          </h2>
          <p className="text-orange-300 mb-8 max-w-xl mx-auto">
            {t("finalCta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              render={<Link href="https://sellerresponder.com" />}
              nativeButton={false}
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              {t("visitLandingCta")}
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button
              render={<Link href="https://play.google.com" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="bg-transparent border-zinc-700 text-zinc-100 hover:bg-zinc-900"
            >
              <Smartphone className="w-4 h-4" aria-hidden="true" />
              {t("downloadGooglePlayCta")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
