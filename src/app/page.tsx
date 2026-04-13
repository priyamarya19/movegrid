import Link from "next/link";
import type { Metadata } from "next";
import RiderIllustration from "@/components/RiderIllustration";

export const metadata: Metadata = {
  title: "MoveGrid — Ride, Earn & Grow with EVs",
  description:
    "Join MoveGrid as a delivery partner, rent EVs for your business, or invest in India's EV infrastructure. Operating in NCR.",
};

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="pt-16">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-5 sm:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00C48C]/6 rounded-full blur-[130px]" />
          <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-[#0EA5E9]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00C48C]/10 border border-[#00C48C]/20 rounded-full px-4 py-1.5 text-sm text-[#00C48C] font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C48C] animate-pulse" />
              Now in NCR · Hiring delivery partners
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]">
              Ride an EV.
              <br />
              <span className="text-[#00C48C]">Earn Every Day.</span>
            </h1>

            <p className="text-[#A0A0B8] text-lg sm:text-xl mb-10 leading-relaxed max-w-xl">
              MoveGrid puts a fully maintained electric scooter in your hands so you can earn
              by delivering for Zomato, Swiggy, Blinkit & more — with zero fuel costs.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/partners"
                className="px-7 py-4 rounded-xl font-bold text-base bg-[#00C48C] text-[#0A0A0F] hover:bg-[#00D99A] transition-colors shadow-lg shadow-[#00C48C]/20 text-center"
              >
                Join as Delivery Partner →
              </Link>
              <Link
                href="/b2b"
                className="px-7 py-4 rounded-xl font-bold text-base border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors text-center"
              >
                Rent for My Business
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-[#606080]">
              {["Zero fuel cost", "Maintenance included", "Earn from day 1", "Path to ownership"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckIcon color="#00C48C" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Illustration */}
          <div className="hidden lg:block">
            <RiderIllustration />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TRUST STRIP
      ══════════════════════════════════════════════════════ */}
      <section className="border-y border-[#1E1E2E] py-5 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#606080] shrink-0">
            Deliver on
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-10">
            {["Zomato", "Swiggy", "Blinkit", "Zepto"].map((brand) => (
              <span key={brand} className="font-display font-black text-lg text-[#A0A0B8]/60 hover:text-[#A0A0B8] transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DELIVERY PARTNER SECTION  [50%]
      ══════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-8 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#00C48C]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#00C48C]">For Delivery Partners</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Ditch the petrol bike.<br />Ride electric. Earn more.
              </h2>
              <p className="text-[#A0A0B8] text-base sm:text-lg leading-relaxed mb-8">
                MoveGrid riders keep more of what they earn. No fuel expenses, no maintenance bills —
                just a reliable EV and your delivery earnings, every single day.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { label: "Fully maintained EV at a low daily rental", sub: "No fuel, no EMI, no stress" },
                  { label: "Earn from top delivery platforms", sub: "Zomato, Swiggy, Blinkit, Zepto" },
                  { label: "Zero maintenance cost", sub: "All servicing handled by us" },
                  { label: "Own your scooter in 3 years", sub: "Smart ownership program" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#12121A] border border-[#1E1E2E] rounded-xl p-4">
                    <div className="w-6 h-6 rounded-full bg-[#00C48C]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon color="#00C48C" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{item.label}</p>
                      <p className="text-[#606080] text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/partners"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#00C48C] text-[#0A0A0F] hover:bg-[#00D99A] transition-colors"
              >
                Apply Now — It&apos;s Free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Right: why MoveGrid over petrol bike */}
            <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#606080] mb-6">MoveGrid EV vs Petrol Bike</p>
              <div className="space-y-4">
                {[
                  { label: "Fuel cost", ev: "₹0*", petrol: "High daily spend", win: true },
                  { label: "Maintenance", ev: "Included", petrol: "Your expense", win: true },
                  { label: "Breakdown support", ev: "24/7 by us", petrol: "On your own", win: true },
                  { label: "Path to ownership", ev: "3-year program", petrol: "None", win: true },
                  { label: "Environmental impact", ev: "Zero emissions", petrol: "Polluting", win: true },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-[#1E1E2E] last:border-0">
                    <span className="text-[#A0A0B8] text-sm w-1/3">{row.label}</span>
                    <span className="text-[#00C48C] font-semibold text-sm w-1/3 text-center">{row.ev}</span>
                    <span className="text-[#606080] text-sm w-1/3 text-right line-through">{row.petrol}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#606080] mt-4">* EV charging costs are significantly lower than petrol. Actual savings vary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          B2B SECTION  [25%]
      ══════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-8 py-20 bg-[#0D0D14] border-t border-[#1E1E2E]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#0EA5E9]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">For Businesses</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Scale your fleet.<br />
                <span className="text-[#0EA5E9]">Skip the purchase.</span>
              </h2>
              <p className="text-[#A0A0B8] text-base sm:text-lg leading-relaxed mb-8">
                Rent fully maintained EV scooters for your logistics, delivery, or corporate operations.
                Starting from ₹5,600*/month + GST per vehicle. You use them however you want.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {["No upfront purchase", "Insurance included", "Maintenance covered", "Scale up anytime", "Fast deployment", "Volume discounts"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#A0A0B8]">
                    <CheckIcon color="#0EA5E9" />
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/b2b" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors">
                Get Fleet Details
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Pricing card */}
            <div className="bg-[#12121A] border border-[#0EA5E9]/20 rounded-2xl p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#606080] mb-6">Fleet Rental Pricing</p>
              <div className="space-y-3">
                {[
                  { range: "1–20 vehicles", price: "₹5,600*/mo", note: "per vehicle + GST", highlight: true },
                  { range: "20–100 vehicles", price: "Custom pricing", note: "volume discount applies", highlight: false },
                  { range: "100+ vehicles", price: "Best rates", note: "enterprise agreement", highlight: false },
                ].map((tier, i) => (
                  <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${tier.highlight ? "border-[#0EA5E9]/30 bg-[#0EA5E9]/5" : "border-[#1E1E2E]"}`}>
                    <div>
                      <p className="text-white text-sm font-semibold">{tier.range}</p>
                      <p className="text-[#606080] text-xs">{tier.note}</p>
                    </div>
                    <span className="font-display font-bold text-[#0EA5E9] text-sm">{tier.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#606080] mt-3">* Pricing indicative. Final rates confirmed on enquiry.</p>
              <Link href="/b2b#form" className="mt-4 block w-full py-3 rounded-xl text-center font-semibold text-sm bg-[#0EA5E9] text-white hover:bg-[#38BDF8] transition-colors">
                Request a Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INVESTOR SECTION  [25%]
      ══════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-8 py-20 border-t border-[#1E1E2E]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#6C5CE7]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#6C5CE7]">For Investors</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Target Returns", value: "25–30%" },
                { label: "Investment Duration", value: "24 months" },
                { label: "Asset Type", value: "EV Scooters" },
                { label: "Payout", value: "Monthly" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-5 hover:border-[#6C5CE7]/30 transition-colors">
                  <p className="text-[#606080] text-xs mb-2">{stat.label}</p>
                  <p className="font-display font-black text-xl text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-5 leading-tight">
                Invest in EVs.
                <br />
                <span className="text-[#6C5CE7]">Earn backed by real assets.</span>
              </h2>
              <p className="text-[#A0A0B8] text-base leading-relaxed mb-6">
                Invest in MoveGrid&apos;s EV fleet and earn predictable monthly returns.
                Your capital is backed by physical vehicles — real, tangible assets with clear utilization.
              </p>
              <div className="space-y-2 mb-8">
                {["Asset-backed investment", "Monthly payouts", "Transparent fleet tracking", "Investment per scooter"].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-[#A0A0B8]">
                    <CheckIcon color="#6C5CE7" />
                    {point}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#606080] mb-4">Returns are targeted and not guaranteed. Subject to fleet utilization and operational factors.</p>
              <Link href="/invest" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm border border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7]/10 transition-colors">
                Explore Investment →
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ABOUT / MISSION
      ══════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-8 py-20 bg-[#0D0D14] border-t border-[#1E1E2E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-5">
            Why MoveGrid exists
          </h2>
          <p className="text-[#A0A0B8] text-base sm:text-lg leading-relaxed mb-8">
            India&apos;s last-mile delivery economy runs on two-wheelers — but petrol costs, high EMIs and
            unreliable vehicles eat into rider earnings every single day. MoveGrid fixes this by putting
            affordable, maintained electric scooters in the hands of delivery partners, while creating
            a sustainable investment opportunity and a scalable fleet-rental model for businesses.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#00C48C]/10 border border-[#00C48C]/20 rounded-full px-5 py-2 text-sm text-[#00C48C] font-semibold">
            Currently operating in NCR
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-8 py-20 border-t border-[#1E1E2E]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">Ready to get started?</h2>
          <p className="text-[#A0A0B8] mb-8">Choose what fits you best.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/partners" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-[#00C48C] text-[#0A0A0F] hover:bg-[#00D99A] transition-colors text-center">
              Join as Delivery Partner
            </Link>
            <Link href="/b2b" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors text-center">
              Rent for My Business
            </Link>
            <Link href="/invest" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base border border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7]/10 transition-colors text-center">
              Invest with MoveGrid
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
