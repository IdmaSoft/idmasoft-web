import { Link } from "@/i18n/navigation";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { SITE } from "@/lib/constants/site";
import { useTranslations } from "next-intl";
import {
  useLocalizedNavLinks,
  useLocalizedProducts,
  useLocalizedServices,
} from "@/lib/i18n/localize";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");
  const tc = useTranslations("common");
  const tm = useTranslations("metadata");
  const navLinks = useLocalizedNavLinks();
  const products = useLocalizedProducts();
  const services = useLocalizedServices();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 group w-fit"
              aria-label={`${SITE.name} — Home`}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">I</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight group-hover:text-blue-400 transition-colors">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              {tm("defaultDescription")}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                aria-label={tc("github")}
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                aria-label={tc("linkedin")}
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                aria-label={tc("email")}
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("headings.company")}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("headings.products")}
            </h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href={product.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mt-8 mb-4">
              {t("headings.services")}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("headings.contact")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="text-sm">{tc("location")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} {SITE.name}. {t("rights")}
          </p>
          <p className="text-xs text-zinc-500">
            {t("builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
