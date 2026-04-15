"use client";

import Link from "next/link";
import RiderIllustration from "@/components/RiderIllustration";
import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/translations";

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function HomeContent() {
  const { lang } = useLang();
  const t = (key: keyof typeof translations.en) => translations[lang][key];

  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="relative overflow-hidden px-5 sm:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00C48C]/6 rounded-full blur-[130px]" />
          <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-[#0EA5E9]/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00C48C]/10 border border-[#00C48C]/20 rounded-full px-4 py-1.5 text-sm text-[#00C48C] font-medium mb-8">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              {t("home_badge")}
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] mb-6 leading-[1.05]">
              {t("home_h1_1")}
              <br />
              <span className="text-[#00C48C]">{t("home_h1_2")}</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg sm:text-xl mb-10 leading-relaxed max-w-xl">
              {t("home_hero_sub")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/partners" className="px-7 py-4 rounded-xl font-bold text-base bg-[#00C48C] text-[#0A0A0F] hover:bg-[#00D99A] transition-colors shadow-lg shadow-[#00C48C]/20 text-center">
                {t("home_cta_partner")}
              </Link>
              <Link href="/b2b" className="px-7 py-4 rounded-xl font-bold text-base border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors text-center">
                {t("home_cta_b2b")}
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)]">
              {([
                t("home_feat_fuel"),
                t("home_feat_maintenance"),
                t("home_feat_earn"),
                t("home_feat_ownership"),
              ] as string[]).map((feat) => (
                <div key={feat} className="flex items-center gap-1.5">
                  <CheckIcon color="#00C48C" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block"><RiderIllustration /></div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-[var(--border)] py-5 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] shrink-0">{t("home_deliver_on")}</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-10">
            {["Zomato", "Swiggy", "Blinkit", "Zepto"].map((brand) => (
              <span key={brand} className="font-display font-black text-lg text-[var(--text-secondary)]/60 hover:text-[var(--text-secondary)] transition-colors">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY PARTNER SECTION */}
      <section className="px-5 sm:px-8 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#00C48C]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#00C48C]">{t("home_dp_label")}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] mb-5 leading-tight">
                {t("home_dp_h2").split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-8">{t("home_dp_sub")}</p>
              <div className="space-y-3 mb-8">
                {([
                  { label: t("home_dp_b1_label"), sub: t("home_dp_b1_sub") },
                  { label: t("home_dp_b2_label"), sub: t("home_dp_b2_sub") },
                  { label: t("home_dp_b3_label"), sub: t("home_dp_b3_sub") },
                  { label: t("home_dp_b4_label"), sub: t("home_dp_b4_sub") },
                ] as { label: string; sub: string }[]).map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4">
                    <div className="w-6 h-6 rounded-full bg-[#00C48C]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon color="#00C48C" />
                    </div>
                    <div>
                      <p className="text-[var(--text-primary)] text-sm font-semibold">{item.label}</p>
                      <p className="text-[var(--text-muted)] text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/partners" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#00C48C] text-[#0A0A0F] hover:bg-[#00D99A] transition-colors">
                {t("home_dp_apply")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-6">{t("home_dp_table_title")}</p>
              <div className="space-y-4">
                {([
                  { label: t("home_dp_fuel"), ev: t("home_dp_ev_fuel"), petrol: t("home_dp_petrol_fuel") },
                  { label: t("home_dp_maintenance"), ev: t("home_dp_ev_maint"), petrol: t("home_dp_petrol_maint") },
                  { label: t("home_dp_breakdown"), ev: t("home_dp_ev_break"), petrol: t("home_dp_petrol_break") },
                  { label: t("home_dp_ownership"), ev: t("home_dp_ev_own"), petrol: t("home_dp_petrol_own") },
                  { label: t("home_dp_env"), ev: t("home_dp_ev_env"), petrol: t("home_dp_petrol_env") },
                ] as { label: string; ev: string; petrol: string }[]).map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-0">
                    <span className="text-[var(--text-secondary)] text-sm w-1/3">{row.label}</span>
                    <span className="text-[#00C48C] font-semibold text-sm w-1/3 text-center">{row.ev}</span>
                    <span className="text-[var(--text-muted)] text-sm w-1/3 text-right line-through">{row.petrol}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-4">{t("home_dp_table_note")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* B2B SECTION */}
      <section className="px-5 sm:px-8 py-20 bg-[var(--bg-section)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#0EA5E9]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">{t("home_b2b_label")}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] mb-5 leading-tight">
                {t("home_b2b_h2_1")}<br />
                <span className="text-[#0EA5E9]">{t("home_b2b_h2_2")}</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-8">{t("home_b2b_sub")}</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {([t("home_b2b_f1"), t("home_b2b_f2"), t("home_b2b_f3"), t("home_b2b_f4"), t("home_b2b_f5"), t("home_b2b_f6")] as string[]).map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckIcon color="#0EA5E9" />{item}
                  </div>
                ))}
              </div>
              <Link href="/b2b" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors">
                {t("home_b2b_cta")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="bg-[var(--bg-card)] border border-[#0EA5E9]/20 rounded-2xl p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-6">{t("home_b2b_table_title")}</p>
              <div className="space-y-3">
                {([
                  { range: t("home_b2b_t1_range"), price: t("home_b2b_t1_price"), note: t("home_b2b_t1_note"), highlight: true },
                  { range: t("home_b2b_t2_range"), price: t("home_b2b_t2_price"), note: t("home_b2b_t2_note"), highlight: false },
                  { range: t("home_b2b_t3_range"), price: t("home_b2b_t3_price"), note: t("home_b2b_t3_note"), highlight: false },
                ] as { range: string; price: string; note: string; highlight: boolean }[]).map((tier, i) => (
                  <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${tier.highlight ? "border-[#0EA5E9]/30 bg-[#0EA5E9]/5" : "border-[var(--border)]"}`}>
                    <div>
                      <p className="text-[var(--text-primary)] text-sm font-semibold">{tier.range}</p>
                      <p className="text-[var(--text-muted)] text-xs">{tier.note}</p>
                    </div>
                    <span className="font-display font-bold text-[#0EA5E9] text-sm">{tier.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-3">{t("home_b2b_table_note")}</p>
              <Link href="/b2b#form" className="mt-4 block w-full py-3 rounded-xl text-center font-semibold text-sm bg-[#0EA5E9] text-white hover:bg-[#38BDF8] transition-colors">
                {t("home_b2b_quote")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTOR SECTION */}
      <section className="px-5 sm:px-8 py-20 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#6C5CE7]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#6C5CE7]">{t("home_inv_label")}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              {([
                { label: t("home_inv_target"), value: "25–30%" },
                { label: t("home_inv_duration"), value: t("home_inv_duration_val") },
                { label: t("home_inv_asset"), value: t("home_inv_asset_val") },
                { label: t("home_inv_payout"), value: t("home_inv_payout_val") },
              ] as { label: string; value: string }[]).map((stat, i) => (
                <div key={i} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 hover:border-[#6C5CE7]/30 transition-colors">
                  <p className="text-[var(--text-muted)] text-xs mb-2">{stat.label}</p>
                  <p className="font-display font-black text-xl text-[var(--text-primary)]">{stat.value}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[var(--text-primary)] mb-5 leading-tight">
                {t("home_inv_h2_1")}<br />
                <span className="text-[#6C5CE7]">{t("home_inv_h2_2")}</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">{t("home_inv_sub")}</p>
              <div className="space-y-2 mb-8">
                {([t("home_inv_p1"), t("home_inv_p2"), t("home_inv_p3"), t("home_inv_p4")] as string[]).map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckIcon color="#6C5CE7" />{point}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--text-muted)] mb-4">{t("home_inv_disclaimer")}</p>
              <Link href="/invest" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm border border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7]/10 transition-colors">
                {t("home_inv_cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-5 sm:px-8 py-20 bg-[var(--bg-section)] border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[var(--text-primary)] mb-5">{t("home_about_h2")}</h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-8">{t("home_about_sub")}</p>
          <div className="inline-flex items-center gap-2 bg-[#00C48C]/10 border border-[#00C48C]/20 rounded-full px-5 py-2 text-sm text-[#00C48C] font-semibold">
            {t("home_about_badge")}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 py-20 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[var(--text-primary)] mb-4">{t("home_cta_h2")}</h2>
          <p className="text-[var(--text-secondary)] mb-8">{t("home_cta_sub")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/partners" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-[#00C48C] text-[#0A0A0F] hover:bg-[#00D99A] transition-colors text-center">
              {t("home_cta_partner_full")}
            </Link>
            <Link href="/b2b" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors text-center">
              {t("home_cta_b2b_full")}
            </Link>
            <Link href="/invest" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base border border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7]/10 transition-colors text-center">
              {t("home_cta_invest")}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
