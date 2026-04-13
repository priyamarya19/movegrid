import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MoveGrid — EV Fleet for Delivery & Business",
    template: "%s | MoveGrid",
  },
  description:
    "Join MoveGrid to earn with EV scooters, rent a fleet for your business, or invest in India's EV infrastructure. Operating in NCR.",
  keywords: ["EV fleet", "delivery partner", "EV scooter rental", "B2B fleet", "electric vehicle", "NCR"],
  authors: [{ name: "Movegrid Technologies Pvt Ltd" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    siteName: "MoveGrid",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0F] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
