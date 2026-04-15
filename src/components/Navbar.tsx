"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { LogoWordmark } from "./LogoWordmark";
import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/translations";

const navLinks = (t: (k: keyof typeof translations.en) => string) => [
  { href: "/", label: t("nav_home") },
  { href: "/partners", label: t("nav_riders") },
  { href: "/b2b", label: t("nav_b2b") },
  { href: "/invest", label: t("nav_investors") },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle } = useLang();
  const t = (key: keyof typeof translations.en) => translations[lang][key];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#0A0A0F]/95 backdrop-blur-md border-b border-[#1E1E2E] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="MoveGrid Home">
          <LogoWordmark height={56} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks(t).map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  active
                    ? "text-white bg-white/10"
                    : "text-[#A0A0B8] hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA + Language toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#1E1E2E] text-xs font-semibold text-[#A0A0B8] hover:text-white hover:border-white/20 transition-colors"
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "text-white" : "text-[#606080]"}>EN</span>
            <span className="text-[#606080]">/</span>
            <span className={lang === "hi" ? "text-white" : "text-[#606080]"}>हि</span>
          </button>
          <Link
            href="/partners"
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#00C48C] text-[#0A0A0F] hover:bg-[#00D99A] transition-colors duration-150"
          >
            {t("nav_join_rider")}
          </Link>
          <Link
            href="/b2b"
            className="px-4 py-2 rounded-lg text-sm font-semibold border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors duration-150"
          >
            {t("nav_rent_fleet")}
          </Link>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#1E1E2E] text-xs font-semibold text-[#A0A0B8]"
          >
            <span className={lang === "en" ? "text-white" : "text-[#606080]"}>EN</span>
            <span className="text-[#606080]">/</span>
            <span className={lang === "hi" ? "text-white" : "text-[#606080]"}>हि</span>
          </button>
          <button
            className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0F]/98 backdrop-blur-md border-t border-[#1E1E2E]">
          <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks(t).map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    active
                      ? "text-white bg-white/10"
                      : "text-[#A0A0B8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-[#1E1E2E]">
              <Link
                href="/partners"
                className="px-4 py-3 rounded-lg text-sm font-semibold bg-[#00C48C] text-[#0A0A0F] text-center hover:bg-[#00D99A] transition-colors"
              >
                {t("nav_join_rider")}
              </Link>
              <Link
                href="/b2b"
                className="px-4 py-3 rounded-lg text-sm font-semibold border border-[#0EA5E9] text-[#0EA5E9] text-center hover:bg-[#0EA5E9]/10 transition-colors"
              >
                {t("nav_rent_fleet")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
