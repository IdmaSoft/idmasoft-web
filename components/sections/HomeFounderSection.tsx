import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { SITE } from "@/lib/constants/site";

export function HomeFounderSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-lg">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">F</span>
                </div>
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Founder &</p>
                <p className="text-sm text-slate-900 font-semibold">
                  Lead Engineer
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-flex items-center text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full">
              The Founder
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Engineering-driven leadership
            </h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              Idmasoft was founded by a software engineer with deep experience
              across full stack development, backend architecture, and cloud
              systems. The company reflects a personal belief that great
              software comes from technical rigor and a long-term perspective.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Every product and service offered through Idmasoft is backed by
              hands-on engineering involvement at the architecture and
              implementation level.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/founder"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group"
              >
                Meet the Founder
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <span className="text-slate-200">|</span>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
