import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.movegrid.in"),
  title: {
    default: "MoveGrid — EV Fleet for Delivery & Business in Delhi NCR",
    template: "%s | MoveGrid",
  },
  description:
    "MoveGrid provides electric vehicles for delivery partners, EV fleet rental for businesses, and EV investment opportunities in Delhi NCR. Zero fuel costs, fully maintained scooters.",
  keywords: [
    "electric vehicle", "EV scooter", "electric scooter", "EV fleet",
    "delivery partner", "EV scooter rental", "B2B fleet", "electric vehicle NCR",
    "EV delivery", "electric scooter delivery", "EV for business", "EV investment",
    "electric vehicle Delhi", "electric scooter Delhi NCR", "EV fleet India",
    "delivery partner program", "electric vehicle rental", "EV partner",
  ],
  authors: [{ name: "Movegrid Technologies Pvt Ltd" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    siteName: "MoveGrid",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo-icon.png",
        width: 256,
        height: 256,
        alt: "MoveGrid — EV Fleet for Delivery & Business",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@movegrid",
    title: "MoveGrid — EV Fleet for Delivery & Business in Delhi NCR",
    description:
      "Ride an EV scooter and earn, rent a fleet for your business, or invest in India's EV infrastructure. Operating in Delhi NCR.",
    images: ["/logo-icon.png"],
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
        <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive">{`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.movegrid.in/#organization",
                "name": "Movegrid Technologies Pvt Ltd",
                "url": "https://www.movegrid.in",
                "logo": "https://www.movegrid.in/logo-icon.png",
                "sameAs": [
                  "https://www.instagram.com/movegrid",
                  "https://www.linkedin.com/company/movegrid/",
                  "https://www.facebook.com/profile.php?id=61589003842416"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-96393-50154",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Hindi"]
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://www.movegrid.in/#localbusiness",
                "name": "MoveGrid",
                "description": "EV fleet provider for delivery partners and businesses in Delhi NCR. Offers electric scooter rental, delivery partner programs, and EV investment opportunities.",
                "url": "https://www.movegrid.in",
                "logo": "https://www.movegrid.in/logo-icon.png",
                "telephone": "+91-96393-50154",
                "areaServed": ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad", "Greater Noida"],
                "priceRange": "₹₹",
                "currenciesAccepted": "INR",
                "paymentAccepted": "Cash, UPI, Bank Transfer",
                "openingHours": "Mo-Sa 09:00-19:00"
              }
            ]
          }
        `}</Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J3B5ZN9CXT" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J3B5ZN9CXT');
        `}</Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--bg-base)] text-[var(--text-primary)] antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
