import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "MoveGrid — Electric Vehicle Fleet for Delivery & Business | Delhi NCR",
  description:
    "Ride a maintained EV scooter and earn with Zomato, Swiggy & Blinkit, rent an EV fleet for your business, or invest in EV infrastructure. Delhi NCR.",
  alternates: { canonical: "https://movegrid.in" },
  keywords: [
    "electric vehicle delivery partner Delhi", "EV scooter earn money", "electric scooter for delivery NCR",
    "EV fleet rental Delhi", "invest in electric vehicle India", "MoveGrid",
  ],
  openGraph: {
    title: "MoveGrid — Electric Vehicle Fleet for Delivery & Business",
    description: "Ride an EV, earn daily. Rent an EV fleet for business. Invest in EV infrastructure. Delhi NCR.",
    url: "https://movegrid.in",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
