import type { Metadata } from "next";
import B2BContent from "@/components/B2BContent";

export const metadata: Metadata = {
  title: "EV Fleet Rental for Business in Delhi NCR | From ₹5,600/month | MoveGrid",
  description:
    "Rent electric scooters for your business in Delhi NCR. Starting ₹5,600/month + GST. No upfront cost, fully maintained fleet, insurance included. Serving Zomato, Swiggy, quick commerce & logistics businesses.",
  keywords: [
    "EV fleet rental Delhi NCR", "electric scooter rental for business", "EV fleet for delivery business",
    "electric vehicle B2B rental India", "EV scooter on rent Noida Gurugram", "commercial EV fleet NCR",
    "electric vehicle for logistics", "EV fleet management India",
  ],
  openGraph: {
    title: "EV Fleet Rental for Business | MoveGrid Delhi NCR",
    description: "Rent electric scooters for your business from ₹5,600/month. No upfront cost, fully maintained. Delhi NCR.",
    url: "https://www.movegrid.in/b2b",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in the monthly EV rental?",
      "acceptedAnswer": { "@type": "Answer", "text": "The rental covers the vehicle, insurance, scheduled maintenance, and breakdown support. Charging costs are the operator's responsibility." }
    },
    {
      "@type": "Question",
      "name": "Is there a minimum contract duration for EV fleet rental?",
      "acceptedAnswer": { "@type": "Answer", "text": "We offer flexible contracts starting from 3 months. Longer contracts come with better rates." }
    },
    {
      "@type": "Question",
      "name": "Can I increase my EV fleet size mid-contract?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can add vehicles anytime with a 3–5 day notice. We scale with your demand." }
    },
    {
      "@type": "Question",
      "name": "Which cities does MoveGrid EV fleet operate in?",
      "acceptedAnswer": { "@type": "Answer", "text": "We currently operate across NCR — Delhi, Noida, Gurugram, Faridabad, Ghaziabad, and Greater Noida." }
    },
    {
      "@type": "Question",
      "name": "Do I need to provide charging infrastructure for the EV fleet?",
      "acceptedAnswer": { "@type": "Answer", "text": "We assist with charging setup guidance. For large fleets (10+ vehicles), we help arrange charging point installations." }
    }
  ]
};

export default function B2BPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <B2BContent />
    </>
  );
}
