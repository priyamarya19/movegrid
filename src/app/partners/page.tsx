import type { Metadata } from "next";
import PartnerForm from "@/components/PartnerForm";
import EarnIllustration from "@/components/EarnIllustration";

export const metadata: Metadata = {
  title: "Join as Delivery Partner",
  description:
    "Join MoveGrid's delivery partner network in NCR. Ride a fully maintained EV scooter, earn on your schedule, and build toward owning your vehicle.",
};

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Zero petrol cost",
    desc: "Ride electric and say goodbye to fuel bills forever. Every rupee you save is a rupee you keep.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Maintenance included",
    desc: "All servicing, repairs, and breakdowns are handled by MoveGrid. You just ride.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Flexible hours",
    desc: "No fixed schedule. Work as many or as few hours as you like, on your terms.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Fast onboarding",
    desc: "Minimal documentation. Once approved, you can be on the road within hours.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Earn daily",
    desc: "Deliver for Zomato, Swiggy, Blinkit, Zepto and keep all your platform earnings.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Own it in 3 years",
    desc: "Stay with MoveGrid for 3 years and earn the opportunity to own your EV scooter.",
  },
];

const steps = [
  {
    num: "01",
    title: "Apply online",
    desc: "Fill the form below. No fees, no upfront documents required.",
  },
  {
    num: "02",
    title: "Get a call",
    desc: "Our team calls you to verify details and schedule your vehicle pickup.",
  },
  {
    num: "03",
    title: "Start riding & earning",
    desc: "Pick up your EV, connect to delivery platforms, and start earning from day one.",
  },
];

const ownershipSteps = [
  { year: "Year 1", title: "Rent & Earn", desc: "Ride a fully maintained EV. Earn daily from top delivery platforms." },
  { year: "Year 2", title: "Build Loyalty", desc: "Continued partnership unlocks better terms and priority vehicle allocation." },
  { year: "Year 3", title: "Own Your EV", desc: "Complete 3 years with MoveGrid and earn the opportunity to own your scooter." },
];

export default function PartnersPage() {
  return (
    <div className="pt-16">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-5 sm:px-8 pt-20 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00C48C]/7 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#00C48C]/10 border border-[#00C48C]/20 rounded-full px-4 py-1.5 text-sm text-[#00C48C] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C48C] animate-pulse" />
            Now hiring in NCR — Apply Today
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Ride. Earn.
            <br />
            <span className="text-[#00C48C]">Own.</span>
          </h1>

          <p className="text-[#A0A0B8] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join MoveGrid&apos;s delivery partner network. Ride a fully maintained EV,
            earn on your schedule delivering for top platforms, and build toward owning your vehicle.
          </p>

          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-[#00C48C] text-[#0A0A0F] hover:bg-[#00D99A] transition-colors shadow-lg shadow-[#00C48C]/20"
          >
            Apply Now — It&apos;s Free
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>

      {/* ── Illustration ─────────────────────────────────── */}
      <section className="px-5 sm:px-8 pb-10 border-b border-[#1E1E2E]">
        <div className="max-w-3xl mx-auto">
          <EarnIllustration />
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────── */}
      <section className="px-5 sm:px-8 py-20 border-t border-[#1E1E2E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">Everything in your favour</h2>
            <p className="text-[#A0A0B8] text-base max-w-xl mx-auto">No petrol. No repairs. No stress. Just earnings.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-6 hover:border-[#00C48C]/30 transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-[#00C48C]/10 flex items-center justify-center text-[#00C48C] mb-4 group-hover:bg-[#00C48C]/20 transition-colors">
                  {b.icon}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-1.5">{b.title}</h3>
                <p className="text-[#A0A0B8] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Join ──────────────────────────────────── */}
      <section id="how-it-works" className="px-5 sm:px-8 py-20 bg-[#0D0D14] border-t border-[#1E1E2E]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">Start in 3 simple steps</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-6 text-center">
                <span className="inline-block font-display font-black text-4xl text-[#00C48C]/20 mb-3">{step.num}</span>
                <h3 className="font-display font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-[#A0A0B8] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ownership Path ───────────────────────────────── */}
      <section id="ownership" className="px-5 sm:px-8 py-20 border-t border-[#1E1E2E]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">The Smart Ownership Path</h2>
            <p className="text-[#A0A0B8] text-base max-w-xl mx-auto">
              With MoveGrid, you&apos;re not just renting — you&apos;re building towards owning your own vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ownershipSteps.map((s, i) => (
              <div key={i} className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-6">
                <span className="inline-block bg-[#00C48C]/10 text-[#00C48C] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  {s.year}
                </span>
                <h3 className="font-display font-bold text-white text-base mb-2">{s.title}</h3>
                <p className="text-[#A0A0B8] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#12121A] border border-[#00C48C]/20 rounded-2xl p-6 text-center">
            <p className="font-display font-black text-2xl sm:text-3xl text-[#00C48C] mb-2">3 years → Your EV</p>
            <p className="text-[#A0A0B8] text-sm">
              Stay committed, ride consistently, and MoveGrid rewards you with vehicle ownership.
            </p>
          </div>
        </div>
      </section>

      {/* ── Apply Form ───────────────────────────────────── */}
      <section id="apply" className="px-5 sm:px-8 py-20 bg-[#0D0D14] border-t border-[#1E1E2E]">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">Apply to Join</h2>
            <p className="text-[#A0A0B8]">Free to apply. No upfront documents. We&apos;ll call you within 24 hours.</p>
          </div>
          <PartnerForm />
        </div>
      </section>

    </div>
  );
}
