"use client";

import { motion } from "framer-motion";

const logos = ["Zomato", "Swiggy", "Blinkit", "Zepto"];

export default function TrustStrip() {
  return (
    <section className="bg-[#0A0A0F] py-10 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <p className="text-gray-500 text-sm mb-6">
          Powering operations for modern delivery platforms
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ delay: i * 0.1 }}
              className="text-gray-400 text-lg font-semibold"
            >
              {logo}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}