"use client";
import { motion } from "framer-motion";
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
></motion.div>
export default function InvestorSection() {
    return (
      <section className="px-8 md:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-12">
  
          <div>
            <h2 className="text-3xl font-bold">
              Built for Investors. Designed for Scale.
            </h2>
  
            <p className="mt-4 text-[var(--text-secondary)]">
              Invest in EV scooters powering India’s delivery ecosystem and earn consistent returns.
            </p>
          </div>
  
          <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-gray-700">
            <h3 className="text-3xl font-bold text-[#A29BFE]">
              25–30% Returns
            </h3>
            <p className="text-sm text-[var(--text-muted)] mt-2">
              *Projected over 24 months
            </p>
          </div>
  
        </div>
      </section>
    );
  }