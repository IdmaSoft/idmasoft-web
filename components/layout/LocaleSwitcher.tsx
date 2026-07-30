"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useEffect, useState } from "react";

interface LocaleSwitcherProps {
  className?: string;
}

export function LocaleSwitcher({ className = "" }: LocaleSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("common");
  // A client-side transition (router.replace) keeps the whole scroll-jacked
  // hero mounted across the locale switch, but framer-motion's useScroll only
  // remeasures the hero's position on an actual `scroll`/`resize` event —
  // never merely because translated text reflowed the layout (no reload, no
  // resize fires). That leaves the cube's scroll-driven position stuck with
  // the previous locale's geometry until the next real scroll, overlapping
  // the (now differently-sized) text/buttons. A full navigation sidesteps
  // this category of staleness entirely by remounting everything fresh.
  const [pendingLocale, setPendingLocale] = useState<string | null>(null);

  useEffect(() => {
    if (!pendingLocale) return;
    // next-intl's middleware (proxy.ts) has localeDetection enabled, which
    // reads this cookie to decide the locale on the next request. Its own
    // router.replace() keeps this in sync automatically, but a raw
    // window.location navigation doesn't — without this, the middleware
    // would see the stale cookie and redirect straight back to the locale
    // we're trying to leave.
    document.cookie = `NEXT_LOCALE=${pendingLocale}; path=/; SameSite=lax`;
    window.location.href = getPathname({ href: pathname, locale: pendingLocale });
  }, [pendingLocale, pathname]);

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
          onClick={() => setPendingLocale(l)}
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
