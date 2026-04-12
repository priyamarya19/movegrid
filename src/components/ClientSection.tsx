"use client";

export default function ClientSection() {
  return (
    <section id="clients" className="bg-[#0A0A0F] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold">
          Built for High-Volume Delivery Operations
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Reliable EV fleets designed for logistics companies looking to scale efficiently.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          
          {[
            "Reduce fuel costs by up to 70%",
            "Zero downtime fleet management",
            "Scalable across cities"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#12121A] p-6 rounded-2xl border border-gray-800"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}