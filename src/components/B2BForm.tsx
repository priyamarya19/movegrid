"use client";

import { useState } from "react";

const fleetSizes = ["1–5 vehicles", "6–10 vehicles", "11–20 vehicles", "21–50 vehicles", "50+ vehicles"];

export default function B2BForm() {
  const [form, setForm] = useState({ name: "", phone: "", fleet_size: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/b2b-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#12121A] border border-[#0EA5E9]/30 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-[#0EA5E9]/15 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold font-display mb-2">Request Received!</h3>
        <p className="text-[#A0A0B8] text-sm">
          Our fleet team will reach out within <span className="text-white font-semibold">24 hours</span> to discuss your requirements.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-6 sm:p-8 space-y-4">
      <div>
        <label className="block text-xs font-semibold text-[#A0A0B8] uppercase tracking-wider mb-1.5">
          Your Name *
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Rahul Sharma"
          required
          className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-white placeholder-[#606080] text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#A0A0B8] uppercase tracking-wider mb-1.5">
          Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          required
          pattern="[0-9+\s]{10,14}"
          className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-white placeholder-[#606080] text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#A0A0B8] uppercase tracking-wider mb-1.5">
          Fleet Size Needed *
        </label>
        <select
          name="fleet_size"
          value={form.fleet_size}
          onChange={handleChange}
          required
          className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors appearance-none"
        >
          <option value="" disabled>Select range</option>
          {fleetSizes.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or WhatsApp us.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 rounded-xl font-semibold text-sm bg-[#0EA5E9] text-white hover:bg-[#38BDF8] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === "loading" ? "Sending..." : "Get a Fleet Quote →"}
      </button>

      <p className="text-center text-xs text-[#606080]">
        We&apos;ll respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
