import type { Metadata } from "next";
import PartnersContent from "@/components/PartnersContent";

export const metadata: Metadata = {
  title: "Join as EV Delivery Partner in Delhi NCR | Earn ₹800–1,200/day",
  description:
    "Become an electric vehicle delivery partner with MoveGrid in Delhi NCR. Ride a fully maintained EV scooter, earn ₹800–1,200/day delivering for Zomato, Swiggy, Blinkit & more. Zero fuel costs. Path to ownership.",
  keywords: [
    "EV delivery partner Delhi", "electric scooter delivery job NCR", "delivery partner Zomato Swiggy EV",
    "electric vehicle delivery agent", "earn with electric scooter Delhi", "EV rider program India",
  ],
  alternates: { canonical: "https://movegrid.in/partners" },
  openGraph: {
    title: "Join as EV Delivery Partner | MoveGrid Delhi NCR",
    description: "Ride a maintained electric scooter, earn ₹800–1,200/day. Zero fuel costs. Join MoveGrid's delivery partner network in Delhi NCR.",
    url: "https://movegrid.in/partners",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function PartnersPage() {
  return <PartnersContent />;
}
