"use client";

export default function HowItWorks() {
  const steps = [
    "You invest in EV fleet",
    "We deploy with delivery partners",
    "You earn stable monthly returns"
  ];

  return (
    <section className="bg-[var(--bg-base)] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              
              <div className="text-5xl font-bold text-[#6C5CE7]/20">
                {i + 1}
              </div>

              <p className="mt-4 text-lg">{step}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}