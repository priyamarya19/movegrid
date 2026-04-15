"use client";

import { useState } from "react";

export default function EarningEstimator() {
  const [daysPerMonth, setDaysPerMonth] = useState(22);
  const [hoursPerDay, setHoursPerDay] = useState(8);

  // Estimate: ₹100–130/hr on average delivery platforms in NCR
  const hourlyRate = 110;
  const dailyRental = 200;

  const grossDaily = hoursPerDay * hourlyRate;
  const netDaily = grossDaily - dailyRental;
  const netMonthly = netDaily * daysPerMonth;
  const fuelSaving = daysPerMonth * 250; // avg petrol bike cost per day

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">

        {/* Slider: Days per month */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Days worked / month
            </label>
            <span className="font-display font-black text-[#00C48C] text-xl">{daysPerMonth}</span>
          </div>
          <input
            type="range"
            min={10}
            max={30}
            value={daysPerMonth}
            onChange={(e) => setDaysPerMonth(Number(e.target.value))}
            className="w-full accent-[#00C48C] cursor-pointer"
          />
          <div className="flex justify-between text-xs text-[var(--text-muted)] mt-1">
            <span>10 days</span>
            <span>30 days</span>
          </div>
        </div>

        {/* Slider: Hours per day */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Hours worked / day
            </label>
            <span className="font-display font-black text-[#00C48C] text-xl">{hoursPerDay} hrs</span>
          </div>
          <input
            type="range"
            min={4}
            max={14}
            value={hoursPerDay}
            onChange={(e) => setHoursPerDay(Number(e.target.value))}
            className="w-full accent-[#00C48C] cursor-pointer"
          />
          <div className="flex justify-between text-xs text-[var(--text-muted)] mt-1">
            <span>4 hrs</span>
            <span>14 hrs</span>
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="space-y-3 mb-6">
        {[
          {
            label: `Gross earnings (${daysPerMonth} days × ₹${grossDaily.toLocaleString("en-IN")}/day)`,
            value: `₹${(grossDaily * daysPerMonth).toLocaleString("en-IN")}`,
            positive: true,
          },
          {
            label: `Vehicle rental (${daysPerMonth} days × ₹200/day)`,
            value: `−₹${(dailyRental * daysPerMonth).toLocaleString("en-IN")}`,
            positive: false,
          },
          {
            label: "Fuel cost",
            value: "₹0",
            positive: true,
          },
          {
            label: "Maintenance cost",
            value: "₹0",
            positive: true,
          },
        ].map((row, i) => (
          <div key={i} className="flex items-center justify-between py-2.5 border-b border-[var(--border)] last:border-0">
            <span className="text-[var(--text-secondary)] text-sm">{row.label}</span>
            <span className={`font-semibold text-sm ${row.positive ? "text-[#00C48C]" : "text-red-400"}`}>{row.value}</span>
          </div>
        ))}
      </div>

      {/* Result */}
      <div className="bg-[var(--bg-base)] border border-[#00C48C]/20 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <p className="text-[var(--text-secondary)] text-sm">Estimated monthly take-home</p>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            + You save ₹{fuelSaving.toLocaleString("en-IN")} on fuel vs petrol bike
          </p>
        </div>
        <p className="font-display font-black text-3xl text-[#00C48C]">
          ₹{Math.max(0, netMonthly).toLocaleString("en-IN")}
        </p>
      </div>

      <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
        *Based on ₹110/hr average delivery earnings in NCR. Actual earnings depend on platform, area & hours.
      </p>
    </div>
  );
}
