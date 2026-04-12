"use client";

import { motion } from "framer-motion";
import PartnerForm from "@/components/PartnerForm";

export default function PartnersPage() {
  return (
    <section className="bg-[#0A0A0F] text-white min-h-screen">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Earn More with <span className="text-[#6C5CE7]">MOVEGRID</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Join our EV delivery network and start earning daily with reliable,
          low-cost electric scooters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <a
            href="#plans"
            className="px-8 py-3 bg-[#6C5CE7] rounded-xl font-semibold hover:opacity-90 transition"
          >
            View Plans
          </a>
        </motion.div>
      </div>

      {/* BENEFITS */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">

        {[
          {
            title: "Low Daily Cost",
            desc: "Start with affordable plans designed for maximum savings.",
          },
          {
            title: "High Earnings Potential",
            desc: "Earn more with delivery platforms using EV savings.",
          },
          {
            title: "Zero Fuel Cost",
            desc: "Electric scooters mean no petrol expenses.",
          },
          {
            title: "Maintenance Included",
            desc: "We take care of servicing and upkeep.",
          },
          {
            title: "Flexible Usage",
            desc: "Work anytime with no strict schedules.",
          },
          {
            title: "Fast Onboarding",
            desc: "Get started quickly with minimal documentation.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#12121A] p-6 rounded-2xl border border-gray-800"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      

      {/* PLANS */}
      {/* SMART OWNERSHIP SECTION */}
<div className="max-w-6xl mx-auto px-6 py-20 text-center">

  <h2 className="text-3xl md:text-4xl font-semibold">
    A Smarter Way to Own & Earn
  </h2>

  <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
      Build towards ownership — stay with MOVEGRID for 3 years and get the opportunity to own your EV 🚀
  </p>

  {/* FLOW */}
  <div className="mt-16 grid md:grid-cols-3 gap-8">

    {[
      {
        step: "1",
        title: "Get Your EV",
        desc: "We provide you with a reliable electric scooter at a low daily cost starting from ₹180/day.",
      },
      {
        step: "2",
        title: "Start Delivering",
        desc: "Connect with leading delivery platforms and begin earning immediately.",
      },
      {
        step: "3",
        title: "Earn Daily Income",
        desc: "Make consistent daily earnings while saving on fuel and maintenance costs.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-[#12121A] p-8 rounded-2xl border border-gray-800 relative"
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6C5CE7] w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">
          {item.step}
        </div>

        <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
      </div>
    ))}

  </div>

  {/* EARNING HIGHLIGHT */}
  <div className="mt-16 bg-[#12121A] p-10 rounded-2xl border border-gray-800">
    <h3 className="text-2xl font-semibold">
      Start Earning from Day One 🚀
    </h3>

    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
      With MOVEGRID, you don’t just rent a vehicle — you unlock a steady income opportunity with minimal upfront cost.
    </p>

    <p className="mt-6 text-3xl font-bold text-[#00D1B2]">
      Plans starting from ₹200/day
    </p>
  </div>

</div>

      {/* CTA */}
      <div className="text-center pb-20">
        <h3 className="text-2xl font-semibold">
          Start earning with MOVEGRID today
        </h3>

        <PartnerForm />


      </div>

    </section>
  );
}