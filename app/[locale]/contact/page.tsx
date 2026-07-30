import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { ContactForm } from "./ContactForm";
import { SITE } from "@/lib/constants/site";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localeAlternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates("/contact", locale),
    openGraph: {
      title: `${t("title")} | Idmasoft`,
      description: t("description"),
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const tc = await getTranslations("common");

  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center text-xs font-semibold tracking-widest text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full mb-5">
            {t("eyebrow")}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-zinc-50 mb-5">
                  {t("contactInfoHeading")}
                </h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors group"
                    aria-label={`${tc("email")} ${SITE.email}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-zinc-800 flex items-center justify-center text-sky-300 flex-shrink-0">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium mb-0.5">
                        {t("emailLabel")}
                      </p>
                      <p className="text-sm font-medium text-zinc-50 group-hover:text-sky-300 transition-colors">
                        {SITE.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-zinc-800 flex items-center justify-center text-sky-300 flex-shrink-0">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium mb-0.5">
                        {t("locationLabel")}
                      </p>
                      <p className="text-sm font-medium text-zinc-50">
                        {tc("location")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-50 mb-5">
                  {t("socialHeading")}
                </h2>
                <div className="flex flex-col gap-3">
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors group"
                    aria-label={tc("githubProfile")}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-zinc-800 flex items-center justify-center text-zinc-300 flex-shrink-0">
                      <GitHubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium mb-0.5">
                        {t("githubLabel")}
                      </p>
                      <p className="text-sm font-medium text-zinc-50 group-hover:text-sky-300 transition-colors">
                        github.com/idmasoft
                      </p>
                    </div>
                  </a>

                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors group"
                    aria-label={tc("linkedinProfile")}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-zinc-800 flex items-center justify-center text-sky-300 flex-shrink-0">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium mb-0.5">
                        {t("linkedinLabel")}
                      </p>
                      <p className="text-sm font-medium text-zinc-50 group-hover:text-sky-300 transition-colors">
                        linkedin.com/company/idmasoft
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response note */}
              <div className="p-5 bg-sky-500/10 border border-sky-500/20 rounded-2xl">
                <p className="text-sm text-sky-300 leading-relaxed">
                  <span className="font-semibold">{t("responseTimeLabel")}</span> {t("responseTimeText")}
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-zinc-900/50 rounded-3xl border border-zinc-800 shadow-sm p-8">
              <h2 className="text-lg font-semibold text-zinc-50 mb-7">
                {t("formHeading")}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
