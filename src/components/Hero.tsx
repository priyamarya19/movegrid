"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full bg-[var(--bg-base)] text-[var(--text-primary)] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C5CE7]/20 via-transparent to-[#00D1B2]/20 blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Powering India’s Delivery <br />
            with <span className="text-[#6C5CE7]">Smart EV Fleets</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[var(--text-secondary)] text-lg max-w-xl"
          >
            Invest in next-gen electric mobility infrastructure and earn up to 
            25–30% returns. Built for scale. Designed for the future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/invest"
              className="px-6 py-3 bg-[#6C5CE7] rounded-xl font-semibold text-center hover:opacity-90 transition"
            >
              Start Investing
            </a>

            <a
              href="/partners"
              className="px-6 py-3 border border-gray-600 rounded-xl text-center hover:border-white transition"
            >
              For Businesses
            </a>
          </motion.div>

          {/* Trust Line */}
          <p className="mt-6 text-sm text-[var(--text-muted)]">
            Trusted by growing logistics & mobility partners
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">

          {/* Card */}
          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5 }}
  className="bg-[var(--bg-card)] p-6 rounded-2xl shadow-xl border border-[var(--border)] text-center"
>
  <h3 className="text-lg font-semibold">Projected Returns</h3>
  <p className="text-4xl font-bold text-[#00D1B2] mt-2">
    25–30%
  </p>
  <p className="text-[var(--text-secondary)] text-sm mt-1">
    Monthly returns upto 24 Months
  </p>
</motion.div>

          {/* Floating Metric 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -top-6 -left-6 bg-[var(--bg-card)] px-4 py-3 rounded-xl border border-[var(--border)]"
          >
            <p className="text-sm text-[var(--text-secondary)]">Support </p>
            <p className="text-lg font-semibold">EV Revolution</p>
          </motion.div>

          {/* Floating Metric 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -bottom-6 -right-6 bg-[var(--bg-card)] px-4 py-3 rounded-xl border border-[var(--border)]"
          >
            <p className="text-sm text-[var(--text-secondary)]">Reduce  </p>
            <p className="text-lg font-semibold">CO₂ emission</p>
          </motion.div> 
          
        </div>

      </div>
    </section>
  );
}