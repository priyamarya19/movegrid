"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/translations";

const cities = ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad", "Greater Noida", "Other NCR"];

export default function PartnerForm() {
  const { lang } = useLang();
  const t = (key: keyof typeof translations.en) => translations[lang][key];

  const [form, setForm] = useState({ name: "", phone: "", city: "" });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const e: { name?: string; phone?: string } = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Name must be at least 2 characters";
    else if (!/^[a-zA-Z\s]+$/.test(form.name.trim())) e.name = "Name can only contain letters";
    const digits = form.phone.replace(/\D/g, "").slice(-10);
    if (digits.length !== 10 || !/^[6-9]/.test(digits)) e.phone = "Please enter a valid phone number";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/partner-lead", {
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
      <div className="bg-[var(--bg-card)] border border-[#00C48C]/30 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-[#00C48C]/15 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C48C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold font-display mb-2 text-[var(--text-primary)]">{t("form_partner_success_h")}</h3>
        <p className="text-[var(--text-secondary)] text-sm">
          {t("form_partner_success_sub")} <span className="text-[var(--text-primary)] font-semibold">{t("form_partner_success_hours")}</span> {t("form_partner_success_end")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 space-y-4">
      <div>
        <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
          {t("form_name_label")}
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={t("form_name_placeholder")}
          className={`w-full bg-[var(--bg-base)] border rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none transition-colors ${errors.name ? "border-red-500 focus:border-red-500" : "border-[var(--border)] focus:border-[#00C48C]"}`}
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
          {t("form_phone_label")}
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={(e) => { if (e.target.value.replace(/\D/g, "").length <= 10) handleChange(e); }}
          placeholder={t("form_phone_placeholder")}
          maxLength={10}
          className={`w-full bg-[var(--bg-base)] border rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none transition-colors ${errors.phone ? "border-red-500 focus:border-red-500" : "border-[var(--border)] focus:border-[#00C48C]"}`}
        />
        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
          {t("form_city_label")}
        </label>
        <select
          name="city"
          value={form.city}
          onChange={handleChange}
          required
          className="w-full bg-[var(--bg-base)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#00C48C] transition-colors appearance-none"
        >
          <option value="" disabled>{t("form_city_placeholder")}</option>
          {cities.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">{t("form_error")}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 rounded-xl font-semibold text-sm bg-[#00C48C] text-[#0A0A0F] hover:bg-[#00D99A] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === "loading" ? t("form_submitting") : t("form_submit_partner")}
      </button>

      <p className="text-center text-xs text-[var(--text-muted)]">
        {t("form_partner_note")}
      </p>
    </form>
  );
}
