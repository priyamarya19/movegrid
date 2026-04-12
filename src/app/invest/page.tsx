import {
  InvestHero,
  InvestmentSnapshot,
  InvestHowItWorks,
  WhyMovegrid,
  RiskSection,
  InvestForm
} from "@/components/invest";

export default function InvestPage() {
  return (
    <main className="bg-[#0A0A0F] text-white">
      <InvestHero />
      <InvestmentSnapshot />
      <InvestHowItWorks />
      <WhyMovegrid />
      <RiskSection />
      <InvestForm />
    </main>
  );
}