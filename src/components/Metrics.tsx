"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "EVs Deployed", value: "1200+" },
  { label: "Active Cities", value: "8+" },
  { label: "CO₂ Saved", value: "18T+" },
  { label: "Investor Returns", value: "25–30%" }
];

export default function Metrics() {
  return (
    <section className="bg-[#0A0A0F] py-20 border-y border-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-3xl font-bold text-[#00D1B2]">
              {stat.value}
            </p>
            <p className="text-gray-400 mt-2 text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}