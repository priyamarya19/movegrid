import type { Metadata } from "next";
import {
  InvestHero,
  InvestmentSnapshot,
  InvestHowItWorks,
  WhyMovegrid,
  RiskSection,
  InvestForm,
} from "@/components/invest";
import InvestorCalculator from "@/components/InvestorCalculator";

export const metadata: Metadata = {
  title: "Invest with MoveGrid",
  description:
    "Invest in MoveGrid's EV fleet and earn predictable monthly returns over 24 months. Asset-backed, transparent, monthly payouts.",
};

export default function InvestPage() {
  return (
    <div className="pt-16 bg-[#0A0A0F] text-white">
      <InvestHero />
      <InvestmentSnapshot />
      <InvestHowItWorks />
      <WhyMovegrid />

      {/* ── Returns Calculator ── */}
      <section className="px-5 sm:px-8 py-20 border-t border-[#1E1E2E]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">
              Estimate your returns
            </h2>
            <p className="text-[#A0A0B8]">
              Select the number of scooters you want to invest in and see approximate payouts.
            </p>
          </div>
          <InvestorCalculator />
        </div>
      </section>

      <RiskSection />
      <InvestForm />
    </div>
  );
}
