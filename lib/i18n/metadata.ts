import { routing } from "@/i18n/routing";

function localizedPath(path: string, locale: string): string {
  if (locale === routing.defaultLocale) {
    return path;
  }
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function localeAlternates(path: string, locale: string) {
  const languages: Record<string, string> = {
    "x-default": localizedPath(path, routing.defaultLocale),
  };
  for (const l of routing.locales) {
    languages[l] = localizedPath(path, l);
  }

  return {
    canonical: localizedPath(path, locale),
    languages,
  };
}
