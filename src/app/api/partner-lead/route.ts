import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { auditLog } from "@/lib/audit";

export async function POST(req: Request) {
  try {
    const { name, phone, city } = await req.json();

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    await pool.query(
      "INSERT INTO leads.leads (type, name, phone, city) VALUES ($1, $2, $3, $4)",
      ["rider", name, phone, city]
    );
    console.log(`[rider-lead] ${name} | ${phone} | ${city}`);
    await auditLog({ action: "lead_created", entity: "rider", details: { name, phone, city } });

    // WhatsApp to admin
    await fetch(`${baseUrl}/api/send-whatsapp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: process.env.ADMIN_PHONE,
        message: `🚴 New Delivery Partner

Name: ${name}
Phone: ${phone}
City: ${city}`,
      }),
    });

    // WhatsApp to user
    await fetch(`${baseUrl}/api/send-whatsapp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: `whatsapp:${phone}`,
        message: `Hi ${name} 👋

Thanks for applying to join MOVEGRID 🚀

Our team will contact you shortly with next steps.

– Team MOVEGRID`,
      }),
    });

    // Email to admin
    await fetch(`${baseUrl}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: `🚴 New Rider Application — ${name}`,
        html: `
          <h2>New Delivery Partner Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>City:</strong> ${city}</p>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}