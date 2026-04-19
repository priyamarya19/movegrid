"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { LogoWordmark } from "./LogoWordmark";
import { useLang } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

// ── Feature flags ─────────────────────────────────────────
const SHOW_LANG_TOGGLE = false; // flip to true when i18n is ready to ship

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
  const { theme, toggleTheme } = useTheme();
  const t = (key: keyof typeof translations.en) => translations[lang][key];

  useEffect(() => {
    setScrolled(window.scrollY > 20);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const activeClass = "text-[var(--text-primary)] bg-[var(--overlay-active)]";
  const inactiveClass = "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--overlay-hover)]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "backdrop-blur-md border-b border-[var(--border)] shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
      style={scrolled || menuOpen ? { backgroundColor: "var(--navbar-bg)" } : undefined}
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
                  active ? activeClass : inactiveClass
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA + Toggles */}
        <div className="hidden md:flex items-center gap-3">

          {/* Language toggle — hidden until i18n is ready */}
          {SHOW_LANG_TOGGLE && (
            <button
              onClick={toggle}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[var(--border)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-light)] transition-colors"
              aria-label="Toggle language"
            >
              <span className={lang === "en" ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}>EN</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className={lang === "hi" ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}>हि</span>
            </button>
          )}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-light)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
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

        {/* Mobile: toggles + hamburger */}
        <div className="md:hidden flex items-center gap-2">

          {/* Language toggle — hidden until i18n is ready */}
          {SHOW_LANG_TOGGLE && (
            <button
              onClick={toggle}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[var(--border)] text-xs font-semibold text-[var(--text-secondary)]"
            >
              <span className={lang === "en" ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}>EN</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className={lang === "hi" ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}>हि</span>
            </button>
          )}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[var(--overlay-hover)] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-md border-t border-[var(--border)]" style={{ backgroundColor: "var(--navbar-bg)" }}>
          <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks(t).map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    active ? activeClass : inactiveClass
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-[var(--border)]">
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
