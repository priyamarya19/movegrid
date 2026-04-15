import type { Metadata } from "next";
import B2BContent from "@/components/B2BContent";

export const metadata: Metadata = {
  title: "B2B Fleet Rental",
  description:
    "Rent EV scooters for your business. Starting ₹5,600/month + GST. No upfront cost, fully maintained, ready to deploy across NCR.",
};

export default function B2BPage() {
  return <B2BContent />;
}
