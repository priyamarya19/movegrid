export default function InvestmentSnapshot() {
  const data = [
    { label: "Returns", value: "25–30%" },
    { label: "Duration", value: "~24 Months" },
    { label: "Asset", value: "EV Scooters" },
    { label: "Payout", value: "Monthly" }
  ];

  return (
    <section className="bg-[#0A0A0F] py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#12121A] p-6 rounded-xl border border-gray-800 text-center"
          >
            <p className="text-[#00D1B2] text-2xl font-bold">
              {item.value}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}