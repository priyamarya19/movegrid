"use client";

import Link from "next/link";
import { LogoWordmark } from "./LogoWordmark";
import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const t = (key: keyof typeof translations.en) => translations[lang][key];

  const footerLinks = {
    [t("footer_for_riders")]: [
      { label: t("footer_join_partner"), href: "/partners" },
      { label: t("footer_how_it_works"), href: "/partners#how-it-works" },
      { label: t("footer_earning_plans"), href: "/partners#earnings" },
      { label: t("footer_ownership"), href: "/partners#ownership" },
    ],
    [t("footer_for_business")]: [
      { label: t("footer_b2b_rental"), href: "/b2b" },
      { label: t("footer_pricing"), href: "/b2b#pricing" },
      { label: t("footer_get_quote"), href: "/b2b#form" },
    ],
    [t("footer_investors")]: [
      { label: t("footer_invest_overview"), href: "/invest" },
      { label: t("footer_returns"), href: "/invest#snapshot" },
      { label: t("footer_risk"), href: "/invest#risk" },
    ],
  };

  return (
    <footer className="bg-[var(--bg-footer)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <LogoWordmark height={48} className="mb-4" />
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs">
              {t("footer_tagline")}
            </p>

            <div className="mt-6 space-y-2">
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">{t("footer_contact")}</p>
              <a
                href="https://wa.me/919639350154"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[#00C48C] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#00C48C] shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +91 96393 50154
              </a>
              <p className="text-sm text-[var(--text-secondary)]">{t("footer_location")}</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Movegrid Technologies Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)] text-center sm:text-right max-w-sm">
            {t("footer_legal")}
          </p>
        </div>
      </div>
    </footer>
  );
}
