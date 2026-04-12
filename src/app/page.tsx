// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import InvestorBanner from "@/components/InvestorBanner";
import ClientSection from "@/components/ClientSection";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A0A0F] text-white">

      {/* <Navbar /> */}

      <Hero />

      <TrustStrip />

      <InvestorBanner />

      <ClientSection />

      <HowItWorks />

      {/* <Metrics /> */}

      <CTA />

      {/* <Footer /> */}

    </main>
  );
}