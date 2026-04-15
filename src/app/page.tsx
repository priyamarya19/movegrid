import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "MoveGrid — Ride, Earn & Grow with EVs",
  description:
    "Join MoveGrid as a delivery partner, rent EVs for your business, or invest in India's EV infrastructure. Operating in NCR.",
};

export default function HomePage() {
  return <HomeContent />;
}
