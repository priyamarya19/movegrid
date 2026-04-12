"use client";

import { useState } from "react";

export default function PartnerForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      city: formData.get("city"),
    };

    const res = await fetch("/api/partner-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      alert("Application submitted! We will contact you.");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-16">
      <h2 className="text-2xl font-semibold text-center">
        Join as Delivery Partner
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4 bg-[#12121A] p-8 rounded-2xl border border-gray-800"
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

        <input
          name="city"
          type="text"
          placeholder="City"
          required
          className="w-full p-3 rounded-lg bg-black border border-gray-700"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#6C5CE7] py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Apply Now"}
        </button>
      </form>
    </div>
  );
}