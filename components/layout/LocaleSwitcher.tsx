"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

interface LocaleSwitcherProps {
  className?: string;
}

export function LocaleSwitcher({ className = "" }: LocaleSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("common");

  return (
    <div
      role="group"
      aria-label={t("languageSelector")}
      className={`inline-flex items-center gap-0.5 rounded-lg border border-zinc-800 bg-zinc-900/50 p-0.5 ${className}`}
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, { locale: l })}
          aria-current={l === locale ? "true" : undefined}
          className={`px-2.5 py-1 rounded-md text-xs font-semibold uppercase transition-colors ${
            l === locale
              ? "bg-zinc-50 text-zinc-950"
              : "text-zinc-400 hover:text-zinc-100"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
