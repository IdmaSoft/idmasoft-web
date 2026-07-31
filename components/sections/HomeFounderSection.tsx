import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { FounderPhoto } from "@/components/ui/FounderPhoto";
import { SITE } from "@/lib/constants/site";
import { FOUNDER } from "@/lib/constants/founder";
import { useTranslations } from "next-intl";

export function HomeFounderSection() {
  const t = useTranslations("home.founder");
  const tc = useTranslations("common");

  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <FounderPhoto
                src={FOUNDER.photoUrl}
                alt={FOUNDER.name}
                size={256}
                frameClassName="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 shadow-lg"
                fallback={
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 flex items-center justify-center">
                    <span className="font-mono text-zinc-400 text-3xl font-semibold">{FOUNDER.initials}</span>
                  </div>
                }
              />
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-zinc-900/85 backdrop-blur-md border border-zinc-800 text-zinc-50 rounded-2xl shadow-lg px-4 py-3">
                <p className="text-sm text-zinc-100 font-semibold">
                  {FOUNDER.name}
                </p>
                <p className="text-xs text-zinc-400 font-medium">{tc("founderRole")}</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-flex items-center text-xs font-semibold tracking-widest text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
              {t("eyebrow")}
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-5 text-zinc-400 leading-relaxed">
              {t("paragraph1")}
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              {t("paragraph2")}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/founder"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white group"
              >
                {t("cta")}
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <span className="text-zinc-800">|</span>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all"
                aria-label={tc("github")}
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all"
                aria-label={tc("linkedin")}
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
