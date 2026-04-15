"use client";

import { motion } from "framer-motion";

export default function InvestHero() {
  return (
    <section className="relative overflow-hidden px-5 sm:px-8 pt-20 pb-16 text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#6C5CE7]/6 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#6C5CE7]/10 border border-[#6C5CE7]/20 rounded-full px-4 py-1.5 text-sm text-[#6C5CE7] font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] animate-pulse" />
          Asset-backed · Monthly payouts · NCR
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] leading-tight mb-6"
        >
          Invest in EV Fleets.
          <br />
          <span className="text-[#6C5CE7]">Earn 25–30% Returns.</span>
        </motion.h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
          Participate in India&apos;s growing EV delivery ecosystem with stable,
          asset-backed investments and monthly payouts.
        </p>
      </div>
    </section>
  );
}