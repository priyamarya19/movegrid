import type { Metadata } from "next";
import InvestContent from "@/components/InvestContent";

export const metadata: Metadata = {
  title: "Invest in EV Fleet India | 25–30% Annual Returns | MoveGrid",
  description:
    "Invest in MoveGrid's electric vehicle fleet and earn 25–30% annual returns over 24 months. Asset-backed investment, monthly payouts, transparent reporting. EV infrastructure investment in Delhi NCR.",
  keywords: [
    "invest in electric vehicle India", "EV investment returns India", "EV fleet investment",
    "electric vehicle investment NCR", "asset backed EV investment", "EV startup investment India",
    "monthly returns EV fleet", "alternative investment electric vehicle",
  ],
  alternates: { canonical: "https://movegrid.in/invest" },
  openGraph: {
    title: "Invest in EV Fleet | 25–30% Returns | MoveGrid",
    description: "Asset-backed EV fleet investment. Earn 25–30% annual returns with monthly payouts over 24 months. Delhi NCR.",
    url: "https://movegrid.in/invest",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function InvestPage() {
  return <InvestContent />;
}
