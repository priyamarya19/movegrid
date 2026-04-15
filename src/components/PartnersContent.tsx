"use client";

import PartnerForm from "@/components/PartnerForm";
import EarnIllustration from "@/components/EarnIllustration";
import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/translations";

export default function PartnersContent() {
  const { lang } = useLang();
  const t = (key: keyof typeof translations.en) => translations[lang][key];

  const benefits = [
    {
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>),
      title: t("partners_b1_title"), desc: t("partners_b1_desc"),
    },
    {
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>),
      title: t("partners_b2_title"), desc: t("partners_b2_desc"),
    },
    {
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
      title: t("partners_b3_title"), desc: t("partners_b3_desc"),
    },
    {
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>),
      title: t("partners_b4_title"), desc: t("partners_b4_desc"),
    },
    {
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>),
      title: t("partners_b5_title"), desc: t("partners_b5_desc"),
    },
    {
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>),
      title: t("partners_b6_title"), desc: t("partners_b6_desc"),
    },
  ];

  const steps = [
    { num: "01", title: t("partners_s1_title"), desc: t("partners_s1_desc") },
    { num: "02", title: t("partners_s2_title"), desc: t("partners_s2_desc") },
    { num: "03", title: t("partners_s3_title"), desc: t("partners_s3_desc") },
  ];

  const ownershipSteps = [
    { year: t("partners_y1_label"), title: t("partners_y1_title"), desc: t("partners_y1_desc") },
    { year: t("partners_y2_label"), title: t("partners_y2_title"), desc: t("partners_y2_desc") },
    { year: t("partners_y3_label"), title: t("partners_y3_title"), desc: t("partners_y3_desc") },
  ];

  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="relative overflow-hidden px-5 sm:px-8 pt-20 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00C48C]/7 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#00C48C]/10 border border-[#00C48C]/20 rounded-full px-4 py-1.5 text-sm text-[#00C48C] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C48C] animate-pulse" />
            {t("partners_badge")}
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] mb-6 leading-tight">
            {t("partners_h1_1")}<br />
            <span className="text-[#00C48C]">{t("partners_h1_2")}</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("partners_hero_sub")}
          </p>
          <a href="#apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-[#00C48C] text-[#0A0A0F] hover:bg-[#00D99A] transition-colors shadow-lg shadow-[#00C48C]/20">
            {t("partners_apply_cta")}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>

      {/* Illustration */}
      <section className="px-5 sm:px-8 pb-10 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto"><EarnIllustration /></div>
      </section>

      {/* Benefits */}
      <section className="px-5 sm:px-8 py-20 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[var(--text-primary)] mb-3">{t("partners_benefits_h2")}</h2>
            <p className="text-[var(--text-secondary)] text-base max-w-xl mx-auto">{t("partners_benefits_sub")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[#00C48C]/30 transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-[#00C48C]/10 flex items-center justify-center text-[#00C48C] mb-4 group-hover:bg-[#00C48C]/20 transition-colors">
                  {b.icon}
                </div>
                <h3 className="font-display font-bold text-[var(--text-primary)] text-base mb-1.5">{b.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section id="how-it-works" className="px-5 sm:px-8 py-20 bg-[var(--bg-section)] border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[var(--text-primary)] mb-3">{t("partners_steps_h2")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 text-center">
                <span className="inline-block font-display font-black text-4xl text-[#00C48C]/20 mb-3">{step.num}</span>
                <h3 className="font-display font-bold text-[var(--text-primary)] text-base mb-2">{step.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership Path */}
      <section id="ownership" className="px-5 sm:px-8 py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[var(--text-primary)] mb-3">{t("partners_ownership_h2")}</h2>
            <p className="text-[var(--text-secondary)] text-base max-w-xl mx-auto">{t("partners_ownership_sub")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ownershipSteps.map((s, i) => (
              <div key={i} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6">
                <span className="inline-block bg-[#00C48C]/10 text-[#00C48C] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">{s.year}</span>
                <h3 className="font-display font-bold text-[var(--text-primary)] text-base mb-2">{s.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[var(--bg-card)] border border-[#00C48C]/20 rounded-2xl p-6 text-center">
            <p className="font-display font-black text-2xl sm:text-3xl text-[#00C48C] mb-2">{t("partners_own_cta")}</p>
            <p className="text-[var(--text-secondary)] text-sm">{t("partners_own_cta_sub")}</p>
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="px-5 sm:px-8 py-20 bg-[var(--bg-section)] border-t border-[var(--border)]">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[var(--text-primary)] mb-3">{t("partners_form_h2")}</h2>
            <p className="text-[var(--text-secondary)]">{t("partners_form_sub")}</p>
          </div>
          <PartnerForm />
        </div>
      </section>

    </div>
  );
}
