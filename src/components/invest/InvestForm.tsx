"use client";

import { useState } from "react";

export default function InvestForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      amount: formData.get("amount"),
    };
console.log(data);
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: {
    "Content-Type": "application/json",
  },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      alert("Success! We will contact you shortly.");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <section className="bg-[#0A0A0F] py-20">
      <div className="max-w-xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center">
          Start Your Investment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4 bg-[#12121A] p-8 rounded-2xl border border-gray-800"
        >
          
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          <select
            name="amount"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          >
            <option value="">Investment Range</option>
            <option>₹50K – ₹1L</option>
            <option>₹1L – ₹5L</option>
            <option>₹5L+</option>
          </select>

          <button
            type="submit"
            className="w-full bg-[#6C5CE7] py-3 rounded-lg font-semibold"
          >
            {loading ? "Submitting..." : "Submit & Get Details"}
          </button>

        </form>

      </div>
    </section>
  );
}