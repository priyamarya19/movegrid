"use client";

import { motion } from "framer-motion";

export default function InvestHero() {
  return (
    <section className="bg-[#0A0A0F] text-white py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Invest in EV Fleets. <br />
        Earn Predictable Returns.
      </motion.h1>

      <p className="text-gray-400 mt-6 max-w-xl mx-auto">
        Participate in India’s growing EV delivery ecosystem with 
        stable, asset-backed investments.
      </p>
    </section>
  );
}