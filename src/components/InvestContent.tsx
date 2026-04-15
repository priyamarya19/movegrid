"use client";

import { motion } from "framer-motion";
import InvestorCalculator from "@/components/InvestorCalculator";
import { InvestForm } from "@/components/invest";
import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/translations";

export default function InvestContent() {
  const { lang } = useLang();
  const t = (key: keyof typeof translations.en) => translations[lang][key];

  const snapshot = [
    { label: t("invest_snap_returns"), value: "25–30%" },
    { label: t("invest_snap_duration"), value: t("invest_snap_duration_val") },
    { label: t("invest_snap_asset"), value: t("invest_snap_asset_val") },
    { label: t("invest_snap_payout"), value: t("invest_snap_payout_val") },
  ];

  const steps = [
    t("invest_how_s1"),
    t("invest_how_s2"),
    t("invest_how_s3"),
  ];

  const whyPoints = [
    t("invest_why_p1"),
    t("invest_why_p2"),
    t("invest_why_p3"),
    t("invest_why_p4"),
  ];

  return (
    <div className="pt-16 bg-[#0A0A0F] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-5 sm:px-8 pt-20 pb-16 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#6C5CE7]/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#6C5CE7]/10 border border-[#6C5CE7]/20 rounded-full px-4 py-1.5 text-sm text-[#6C5CE7] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] animate-pulse" />
            {t("invest_badge")}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            {t("invest_h1_1")}
            <br />
            <span className="text-[#6C5CE7]">{t("invest_h1_2")}</span>
          </motion.h1>
          <p className="text-[#A0A0B8] text-lg max-w-2xl mx-auto">
            {t("invest_hero_sub")}
          </p>
        </div>
      </section>

      {/* Snapshot */}
      <section id="snapshot" className="bg-[#0A0A0F] py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {snapshot.map((item, i) => (
            <div key={i} className="bg-[#12121A] p-6 rounded-xl border border-gray-800 text-center">
              <p className="text-[#00D1B2] text-2xl font-bold">{item.value}</p>
              <p className="text-gray-400 text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#0A0A0F] py-20 text-center border-t border-[#1E1E2E]">
        <h2 className="text-3xl font-semibold">{t("invest_how_h2")}</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto px-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#12121A] p-6 rounded-xl">
              <p className="text-[#6C5CE7] text-2xl font-bold">{i + 1}</p>
              <p className="mt-4">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why MoveGrid */}
      <section className="bg-[#0A0A0F] py-20 border-t border-[#1E1E2E]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">{t("invest_why_h2")}</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {whyPoints.map((p, i) => (
              <div key={i} className="bg-[#12121A] p-6 rounded-xl">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="px-5 sm:px-8 py-20 border-t border-[#1E1E2E]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">
              {t("invest_calc_h2")}
            </h2>
            <p className="text-[#A0A0B8]">{t("invest_calc_sub")}</p>
          </div>
          <InvestorCalculator />
        </div>
      </section>

      {/* Risk */}
      <section id="risk" className="bg-[#0A0A0F] py-16 text-center border-t border-[#1E1E2E]">
        <h2 className="text-2xl font-semibold">{t("invest_risk_h2")}</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto px-5">
          {t("invest_risk_sub")}
        </p>
      </section>

      {/* Form */}
      <InvestForm />

    </div>
  );
}
