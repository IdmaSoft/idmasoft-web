import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/layout/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { Target, Eye, Heart, Wrench } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localeAlternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates("/about", locale),
    openGraph: {
      title: `${t("title")} | Idmasoft`,
      description: t("description"),
    },
  };
}

const valueIcons = {
  technicalExcellence: <Wrench className="w-5 h-5" aria-hidden="true" />,
  purposeDriven: <Target className="w-5 h-5" aria-hidden="true" />,
  longTermThinking: <Heart className="w-5 h-5" aria-hidden="true" />,
  transparency: <Eye className="w-5 h-5" aria-hidden="true" />,
};

const valueIds = ["technicalExcellence", "purposeDriven", "longTermThinking", "transparency"] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const principles = t.raw("philosophy.principles") as string[];

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

      {/* Mission & Vision */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-zinc-50">
              <span className="text-xs font-semibold tracking-widest uppercase text-sky-300 mb-4 block">
                {t("mission.eyebrow")}
              </span>
              <h2 className="text-2xl font-bold mb-5 leading-snug">
                {t("mission.title")}
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                {t("mission.description")}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-zinc-50">
              <span className="text-xs font-semibold tracking-widest uppercase text-violet-300 mb-4 block">
                {t("vision.eyebrow")}
              </span>
              <h2 className="text-2xl font-bold mb-5 leading-snug">
                {t("vision.title")}
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                {t("vision.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-14">
            <SectionTitle
              eyebrow={t("values.eyebrow")}
              title={t("values.title")}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueIds.map((id, index) => (
              <Reveal key={id} delay={Math.min(index, 6) * 0.07}>
                <div className="flex flex-col gap-4 p-7 bg-zinc-950/80 rounded-2xl border border-zinc-800 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-zinc-800 flex items-center justify-center text-sky-300">
                    {valueIcons[id]}
                  </div>
                  <h3 className="font-semibold text-zinc-50">{t(`values.items.${id}.title`)}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {t(`values.items.${id}.description`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                eyebrow={t("philosophy.eyebrow")}
                title={t("philosophy.title")}
                align="left"
              />
              <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">
                <p>{t("philosophy.paragraph1")}</p>
                <p>{t("philosophy.paragraph2")}</p>
                <p>{t("philosophy.paragraph3")}</p>
              </div>
            </div>

            {/* Principles list */}
            <div className="space-y-4">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-4 p-4 bg-zinc-900 rounded-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                  <span className="text-sm text-zinc-300 leading-relaxed">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={t("cta.title")}
        description={t("cta.description")}
        primaryLabel={t("cta.primaryLabel")}
        primaryHref="/contact"
        secondaryLabel={t("cta.secondaryLabel")}
        secondaryHref="/founder"
      />
    </>
  );
}
