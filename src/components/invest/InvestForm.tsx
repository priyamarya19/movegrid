"use client";

import { useState } from "react";

const amounts = ["₹6L – ₹12L", "₹12L – ₹25L", "₹25L+"];

export default function InvestForm() {
  const [form, setForm] = useState({ name: "", phone: "", amount: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
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
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-lg mx-auto bg-[#12121A] border border-[#6C5CE7]/30 rounded-2xl p-8 text-center">
          <div className="w-14 h-14 rounded-full bg-[#6C5CE7]/15 flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-2">Request Received!</h3>
          <p className="text-[#A0A0B8] text-sm">
            Our investment team will reach out within <span className="text-white font-semibold">24 hours</span> with full details and ROI breakdown.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="invest-form" className="py-20 px-5 sm:px-8">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-display font-black text-3xl text-white mb-2">Start Your Investment</h2>
          <p className="text-[#A0A0B8] text-sm">Our team will call you with a complete ROI plan.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-6 sm:p-8 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#A0A0B8] uppercase tracking-wider mb-1.5">Full Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-white placeholder-[#606080] text-sm focus:outline-none focus:border-[#6C5CE7] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A0A0B8] uppercase tracking-wider mb-1.5">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
              pattern="[0-9+\s]{10,14}"
              className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-white placeholder-[#606080] text-sm focus:outline-none focus:border-[#6C5CE7] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A0A0B8] uppercase tracking-wider mb-1.5">Investment Range *</label>
            <select
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6C5CE7] transition-colors appearance-none"
            >
              <option value="" disabled>Select investment range</option>
              {amounts.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or WhatsApp us.</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 rounded-xl font-semibold text-sm bg-[#6C5CE7] text-white hover:bg-[#7C6CF7] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {status === "loading" ? "Submitting..." : "Get Investment Details →"}
          </button>

          <p className="text-center text-xs text-[#606080]">
            Investment involves risk. Please read all disclosures before committing.
          </p>
        </form>
      </div>
    </section>
  );
}
