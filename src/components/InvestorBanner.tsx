"use client";

import { motion } from "framer-motion";

export default function InvestorBanner() {
  return (
    <section className="bg-[var(--bg-base)] py-16">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#6C5CE7] to-[#00D1B2] p-[1px] rounded-2xl"
        >
          <div className="bg-[var(--bg-card)] rounded-2xl p-8 md:p-12 text-center">
            
            <h2 className="text-3xl md:text-4xl font-semibold">
              Earn 25–30% Returns with EV Infrastructure
            </h2>

            <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto">
              Join early investment program, powering India’s EV delivery advancement. Limited fleet slots available.
            </p>

            <a
              href="/invest"
              className="inline-block mt-6 px-8 py-3 bg-white text-black rounded-xl font-semibold"
            >
              Start Investing
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}