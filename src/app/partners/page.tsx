import type { Metadata } from "next";
import PartnersContent from "@/components/PartnersContent";

export const metadata: Metadata = {
  title: "Join as Delivery Partner",
  description:
    "Join MoveGrid's delivery partner network in NCR. Ride a fully maintained EV scooter, earn on your schedule, and build toward owning your vehicle.",
};

export default function PartnersPage() {
  return <PartnersContent />;
}
