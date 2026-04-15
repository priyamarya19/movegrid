export default function WhyMovegrid() {
  const points = [
    "Asset-backed investment (EV fleet)",
    "Growing demand from delivery platforms",
    "Managed operations by MOVEGRID",
    "Transparent tracking & payouts"
  ];

  return (
    <section className="bg-[var(--bg-base)] py-20">
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-3xl font-semibold text-center">
          Why MOVEGRID
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {points.map((p, i) => (
            <div key={i} className="bg-[var(--bg-card)] p-6 rounded-xl">
              {p}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}