"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/translations";

const SCOOTER_COST = 25000;
const RETURN_RATE = 0.27; // 27% total over 24 months — not displayed
const DURATION_MONTHS = 24;

const slabs = [
  { label: "10–25 scooters", min: 10, max: 25 },
  { label: "25–50 scooters", min: 25, max: 50 },
  { label: "50–100 scooters", min: 50, max: 100 },
];

function formatINR(amount: number) {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} L`;
  }
  return `₹${amount.toLocaleString("en-IN")}`;
}

export default function InvestorCalculator() {
  const { lang } = useLang();
  const t = (key: keyof typeof translations.en) => translations[lang][key];

  const [scooters, setScooters] = useState(25);

  const investment = scooters * SCOOTER_COST;
  const totalReturn = investment * RETURN_RATE;
  const totalAtMaturity = investment + totalReturn;
  const monthlyPayout = totalAtMaturity / DURATION_MONTHS;

  const activeSlab = slabs.findIndex(s => scooters >= s.min && scooters <= s.max);

  return (
    <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-6 sm:p-8">

      {/* Slab selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {slabs.map((slab, i) => (
          <button
            key={i}
            onClick={() => setScooters(Math.round((slab.min + slab.max) / 2))}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
              activeSlab === i
                ? "bg-[#6C5CE7]/15 border-[#6C5CE7]/50 text-[#6C5CE7]"
                : "border-[#1E1E2E] text-[#606080] hover:border-[#6C5CE7]/30 hover:text-[#A0A0B8]"
            }`}
          >
            {slab.label}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#A0A0B8]">
            {t("calc_scooters")}
          </label>
          <span className="font-display font-black text-2xl text-[#6C5CE7]">{scooters}</span>
        </div>
        <input
          type="range"
          min={10}
          max={100}
          step={1}
          value={scooters}
          onChange={(e) => setScooters(Number(e.target.value))}
          className="w-full accent-[#6C5CE7] cursor-pointer"
        />
        <div className="relative text-xs text-[#606080] mt-1 h-4">
          {/* Labels positioned at their actual slider percentages: (val-10)/(100-10)*100 */}
          <span className="absolute" style={{ left: "0%" }}>10</span>
          <span className="absolute -translate-x-1/2" style={{ left: "16.7%" }}>25</span>
          <span className="absolute -translate-x-1/2" style={{ left: "44.4%" }}>50</span>
          <span className="absolute -translate-x-full" style={{ left: "100%" }}>100</span>
        </div>
      </div>

      {/* Output cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl p-4 text-center">
          <p className="text-xs text-[#606080] mb-1">{t("calc_investment")}</p>
          <p className="font-display font-black text-xl text-white">{formatINR(investment)}</p>
          <p className="text-xs text-[#606080] mt-1">{scooters} × {formatINR(SCOOTER_COST)}</p>
        </div>

        <div className="bg-[#0A0A0F] border border-[#6C5CE7]/20 rounded-xl p-4 text-center">
          <p className="text-xs text-[#606080] mb-1">{t("calc_monthly")}</p>
          <p className="font-display font-black text-xl text-[#6C5CE7]">{formatINR(Math.round(monthlyPayout))}*</p>
          <p className="text-xs text-[#606080] mt-1">{t("calc_monthly_sub")}</p>
        </div>

        <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl p-4 text-center">
          <p className="text-xs text-[#606080] mb-1">{t("calc_maturity")}</p>
          <p className="font-display font-black text-xl text-white">{formatINR(Math.round(totalAtMaturity))}*</p>
          <p className="text-xs text-[#606080] mt-1">{t("calc_maturity_sub")}</p>
        </div>
      </div>

      {/* Breakdown bar */}
      <div className="bg-[#0A0A0F] rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-[#A0A0B8]">{t("calc_principal")}</span>
          <span className="text-white font-semibold">{formatINR(investment)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#A0A0B8]">{t("calc_returns")}</span>
          <span className="text-[#6C5CE7] font-semibold">+ {formatINR(Math.round(totalReturn))}*</span>
        </div>
        {/* Visual bar */}
        <div className="mt-3 flex h-2 rounded-full overflow-hidden bg-[#1E1E2E]">
          <div
            className="bg-white/30 rounded-l-full transition-all duration-300"
            style={{ width: `${(investment / totalAtMaturity) * 100}%` }}
          />
          <div className="bg-[#6C5CE7] rounded-r-full flex-1 transition-all duration-300" />
        </div>
        <div className="flex justify-between text-xs text-[#606080] mt-1">
          <span>{t("calc_principal")}</span>
          <span>{t("calc_returns")}</span>
        </div>
      </div>

      <p className="text-xs text-[#606080] leading-relaxed">
        {t("calc_disclaimer")}
      </p>
    </div>
  );
}
