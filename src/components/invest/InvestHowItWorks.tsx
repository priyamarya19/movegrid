export default function InvestHowItWorks() {
  const steps = [
    "Choose your investment amount",
    "We deploy EVs with partners",
    "Earn monthly payouts"
  ];

  return (
    <section className="bg-[#0A0A0F] py-20 text-center">
      <h2 className="text-3xl font-semibold">Simple 3-Step Process</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto px-6">
        {steps.map((step, i) => (
          <div key={i} className="bg-[#12121A] p-6 rounded-xl">
            <p className="text-[#6C5CE7] text-2xl font-bold">
              {i + 1}
            </p>
            <p className="mt-4">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}