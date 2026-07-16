"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants/navigation";
import { SITE } from "@/lib/constants/site";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/80 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label={`${SITE.name} — Home`}
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-sm">
                <span className="text-zinc-100 text-sm font-bold">I</span>
              </div>
              <span className="text-zinc-100 font-semibold text-lg tracking-tight group-hover:text-white transition-colors">
                {SITE.name}
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "text-zinc-100 bg-zinc-900 border border-zinc-800/50"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                size="sm"
                className="bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-colors font-medium rounded-lg"
              >
                Get in Touch
              </Button> 
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 transition-colors"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-zinc-950 border-l border-zinc-900 backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-zinc-900">
          <span className="font-semibold text-zinc-100">{SITE.name}</span>
          <button
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "text-zinc-100 bg-zinc-900"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-4 pt-4 border-t border-zinc-900">
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="sm"
              variant="default"
              className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-colors font-medium rounded-lg"
            >
              Get in Touch
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
