import type { Metadata } from "next";
import { Code2, Server, Cloud, BrainCircuit } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { CTASection } from "@/components/layout/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { FounderPhoto } from "@/components/ui/FounderPhoto";
import { SITE } from "@/lib/constants/site";
import { FOUNDER } from "@/lib/constants/founder";
import type { Technology } from "@/lib/types";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localeAlternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.founder" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates("/founder", locale),
    openGraph: {
      title: `${t("title")} | Idmasoft`,
      description: t("description"),
    },
  };
}

const expertiseIds = ["fullstack", "backend", "cloud", "ai"] as const;

const expertiseIcons = {
  fullstack: <Code2 className="w-5 h-5" aria-hidden="true" />,
  backend: <Server className="w-5 h-5" aria-hidden="true" />,
  cloud: <Cloud className="w-5 h-5" aria-hidden="true" />,
  ai: <BrainCircuit className="w-5 h-5" aria-hidden="true" />,
};

const coreSkills: Technology[] = [
  { name: "TypeScript", category: "Frontend" },
  { name: "React / Next.js", category: "Frontend" },
  { name: "NestJS", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "SQL Server", category: "Database" },
  { name: "Azure", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
];

const timelineIds = ["present", "previous", "earlier"] as const;
const projectIds = ["sellerresponder", "enterprise"] as const;

const projectStatusColors = {
  sellerresponder: "bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/20",
  enterprise: "bg-sky-500/10 text-sky-300 ring-1 ring-inset ring-sky-500/20",
};

export default async function FounderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("founder");
  const tc = await getTranslations("common");

  return (
    <>
      {/* Hero */}
      <div className="pt-28 pb-16 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="flex flex-col items-center lg:items-start gap-5">
              <div className="relative">
                <FounderPhoto
                  src={FOUNDER.photoUrl}
                  alt={FOUNDER.name}
                  size={192}
                  frameClassName="bg-zinc-900 border border-zinc-800 shadow-lg"
                  fallback={
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">{FOUNDER.initials}</span>
                    </div>
                  }
                />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold text-zinc-50">
                  {FOUNDER.name}
                </h1>
                <p className="text-zinc-400 text-sm mt-1">
                  {tc("founderRole")}
                </p>
                <p className="text-sky-300 text-sm font-medium">Idmasoft</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-sky-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-4 py-2 rounded-xl transition-colors"
                  aria-label={tc("githubProfile")}
                >
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-sky-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-4 py-2 rounded-xl transition-colors"
                  aria-label={tc("linkedinProfile")}
                >
                  <LinkedInIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <span className="inline-flex items-center text-xs font-semibold tracking-widest text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full mb-5">
                {t("aboutEyebrow")}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl mb-6">
                {t("title")}
                <br />
                {t("titleLine2")}
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>{t("paragraph1")}</p>
                <p>{t("paragraph2")}</p>
                <p>{t("paragraph3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Expertise */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-50 mb-10">
            {t("expertiseHeading")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseIds.map((id, index) => (
              <Reveal key={id} delay={Math.min(index, 6) * 0.07}>
                <div className="flex flex-col gap-4 p-6 bg-zinc-950/80 rounded-2xl border border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-zinc-800 flex items-center justify-center text-sky-300">
                    {expertiseIcons[id]}
                  </div>
                  <h3 className="font-semibold text-zinc-50 text-sm">
                    {t(`expertise.${id}.title`)}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {t(`expertise.${id}.description`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-50 mb-8">
            {t("skillsHeading")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {coreSkills.map((skill) => (
              <TechnologyBadge key={skill.name} technology={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-50 mb-10">
            {t("timelineHeading")}
          </h2>
          <div className="relative">
            <div
              className="absolute left-5 top-0 bottom-0 w-px bg-zinc-800"
              aria-hidden="true"
            />
            <ol className="space-y-10">
              {timelineIds.map((id) => (
                <li key={id} className="relative flex gap-8 pl-14">
                  <div
                    className="absolute left-0 top-1 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-sm z-10"
                    aria-hidden="true"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-300" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-sky-300 uppercase tracking-wider">
                      {t(`timeline.${id}.period`)}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-zinc-50">
                      {t(`timeline.${id}.role`)}
                    </h3>
                    <p className="text-sm font-medium text-zinc-400 mb-2">
                      {t(`timeline.${id}.org`)}
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
                      {t(`timeline.${id}.description`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-50 mb-10">
            {t("projectsHeading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectIds.map((id, index) => (
              <Reveal key={id} delay={index * 0.1}>
                <div className="bg-zinc-950/80 rounded-2xl border border-zinc-800 shadow-sm p-7">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-zinc-50">{t(`projects.${id}.name`)}</h3>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${projectStatusColors[id]}`}
                    >
                      {t(`projects.${id}.status`)}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {t(`projects.${id}.description`)}
                  </p>
                </div>
              </Reveal>
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
