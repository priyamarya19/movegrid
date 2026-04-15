import type { Metadata } from "next";
import InvestContent from "@/components/InvestContent";

export const metadata: Metadata = {
  title: "Invest with MoveGrid",
  description:
    "Invest in MoveGrid's EV fleet and earn predictable monthly returns over 24 months. Asset-backed, transparent, monthly payouts.",
};

export default function InvestPage() {
  return <InvestContent />;
}
