import type { Metadata } from "next";
import B2BForm from "@/components/B2BForm";

export const metadata: Metadata = {
  title: "B2B Fleet Rental",
  description:
    "Rent EV scooters for your business. Starting ₹5,600/month + GST. No upfront cost, fully maintained, ready to deploy across NCR.",
};

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Zero upfront cost",
    desc: "No vehicle purchase needed. Pay a simple monthly rental and deploy immediately.",
    color: "#0EA5E9",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Fully maintained",
    desc: "Insurance, servicing, and repairs are all covered. You focus on your business.",
    color: "#0EA5E9",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Scale up or down",
    desc: "Add more vehicles as your demand grows. No lock-in penalties for scaling.",
    color: "#0EA5E9",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Zero fuel costs",
    desc: "Electric vehicles cut operational costs by up to 70% versus petrol two-wheelers.",
    color: "#0EA5E9",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Fast deployment",
    desc: "From agreement to vehicles on the road in as little as 48–72 hours.",
    color: "#0EA5E9",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Dedicated support",
    desc: "A relationship manager assigned to your account from day one.",
    color: "#0EA5E9",
  },
];

const useCases = [
  { label: "Quick Commerce", desc: "10-min delivery for dark stores & micro warehouses" },
  { label: "Hyperlocal Delivery", desc: "Restaurants, pharmacies, grocery delivery" },
  { label: "Logistics & Courier", desc: "Last-mile package and parcel delivery" },
  { label: "Corporate Fleet", desc: "Employee commute, campus, or intra-city movement" },
  { label: "E-commerce Returns", desc: "Reverse logistics & returns management" },
  { label: "Any Custom Use", desc: "You decide how the vehicles are used" },
];

const steps = [
  { num: "01", title: "Apply online", desc: "Fill the form below with your company details and fleet requirement." },
  { num: "02", title: "Setup call", desc: "Our fleet team will call you within 24 hours to discuss pricing and timelines." },
  { num: "03", title: "Get your fleet", desc: "Agreement signed, vehicles deployed at your location in 48–72 hours." },
];

const faqs = [
  {
    q: "What is included in the monthly rental?",
    a: "The rental covers the vehicle, insurance, scheduled maintenance, and breakdown support. Charging costs are the operator's responsibility.",
  },
  {
    q: "Is there a minimum contract duration?",
    a: "We offer flexible contracts starting from 3 months. Longer contracts come with better rates.",
  },
  {
    q: "Can I increase my fleet size mid-contract?",
    a: "Yes. You can add vehicles anytime with a 3–5 day notice. We scale with your demand.",
  },
  {
    q: "What cities do you operate in?",
    a: "We currently operate across NCR — Delhi, Noida, Gurugram, Faridabad, Ghaziabad, and Greater Noida.",
  },
  {
    q: "Do I need to provide charging infrastructure?",
    a: "We assist with charging setup guidance. For large fleets (10+ vehicles), we help arrange charging point installations.",
  },
];

export default function B2BPage() {
  return (
    <div className="pt-16">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-5 sm:px-8 pt-20 pb-24">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0EA5E9]/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-full px-4 py-1.5 text-sm text-[#0EA5E9] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse" />
            B2B Fleet Rental · NCR
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Power Your Business
            <br />
            <span className="text-[#0EA5E9]">Fleet with EVs</span>
          </h1>

          <p className="text-[#A0A0B8] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Rent fully maintained EV scooters for your business. No purchase, no maintenance headache.
            Just reliable vehicles ready to work for you.
          </p>

          {/* Pricing highlight */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-[#12121A] border border-[#0EA5E9]/20 rounded-2xl px-8 py-5">
            <div className="text-center">
              <p className="text-3xl font-display font-black text-[#0EA5E9]">₹5,600*<span className="text-lg font-semibold text-[#A0A0B8]">/mo</span></p>
              <p className="text-xs text-[#606080] mt-1">+ GST per vehicle (1–20 fleet)</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#1E1E2E]" />
            <div className="flex flex-col gap-1.5 text-sm text-left">
              <div className="flex items-center gap-2 text-[#A0A0B8]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                Insurance included
              </div>
              <div className="flex items-center gap-2 text-[#A0A0B8]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                Maintenance included
              </div>
              <div className="flex items-center gap-2 text-[#A0A0B8]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                Volume discounts available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────── */}
      <section className="px-5 sm:px-8 py-20 border-t border-[#1E1E2E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">Why businesses choose MoveGrid</h2>
            <p className="text-[#A0A0B8] text-base max-w-xl mx-auto">Everything your fleet needs, nothing you don&apos;t.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-6 hover:border-[#0EA5E9]/30 transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9] mb-4 group-hover:bg-[#0EA5E9]/20 transition-colors">
                  {b.icon}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-1.5">{b.title}</h3>
                <p className="text-[#A0A0B8] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ────────────────────────────────────── */}
      <section className="px-5 sm:px-8 py-20 bg-[#0D0D14] border-t border-[#1E1E2E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">Built for every business type</h2>
            <p className="text-[#A0A0B8] text-base">You rent. You decide how it&apos;s used.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#12121A] border border-[#1E1E2E] rounded-xl p-5">
                <div className="w-8 h-8 rounded-lg bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9] shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">{uc.label}</p>
                  <p className="text-[#606080] text-xs leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────── */}
      <section id="pricing" className="px-5 sm:px-8 py-20 border-t border-[#1E1E2E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">Simple, transparent pricing</h2>
          <p className="text-[#A0A0B8] text-base mb-12">More vehicles = better rates. No hidden fees.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { range: "1–20 vehicles", price: "₹5,600*", note: "per vehicle/month", tag: "Starting price" },
              { range: "20–100 vehicles", price: "Custom", note: "volume pricing", tag: "Popular" },
              { range: "100+ vehicles", price: "Best rates", note: "enterprise pricing", tag: "Enterprise" },
            ].map((tier, i) => (
              <div key={i} className={`relative bg-[#12121A] border rounded-2xl p-6 text-center ${i === 0 ? "border-[#0EA5E9]/40" : "border-[#1E1E2E]"}`}>
                {tier.tag && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0EA5E9] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {tier.tag}
                  </span>
                )}
                <p className="text-[#A0A0B8] text-sm mb-3">{tier.range}</p>
                <p className="font-display font-black text-2xl text-white mb-1">{tier.price}</p>
                <p className="text-xs text-[#606080]">{tier.note} + GST</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-[#606080]">* Pricing indicative. Final rates confirmed on enquiry. All plans include insurance, maintenance, and a dedicated relationship manager.</p>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────── */}
      <section className="px-5 sm:px-8 py-20 bg-[#0D0D14] border-t border-[#1E1E2E]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">Get your fleet in 3 steps</h2>
            <p className="text-[#A0A0B8]">From application to wheels on the road.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-6 left-[calc(50%+2rem)] w-full h-px bg-gradient-to-r from-[#0EA5E9]/30 to-transparent" />
                )}
                <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-6 text-center">
                  <span className="inline-block font-display font-black text-4xl text-[#0EA5E9]/20 mb-3">{step.num}</span>
                  <h3 className="font-display font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-[#A0A0B8] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form ─────────────────────────────────────────── */}
      <section id="form" className="px-5 sm:px-8 py-20 border-t border-[#1E1E2E]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">Get a Fleet Quote</h2>
            <p className="text-[#A0A0B8]">Tell us what you need. We&apos;ll get back within 24 hours.</p>
          </div>
          <B2BForm />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="px-5 sm:px-8 py-20 bg-[#0D0D14] border-t border-[#1E1E2E]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl text-white text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#12121A] border border-[#1E1E2E] rounded-xl p-6">
                <p className="font-semibold text-white text-sm mb-2">{faq.q}</p>
                <p className="text-[#A0A0B8] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
