import { NextResponse } from "next/server";
import pool from "@/lib/db";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function POST(req: Request) {
  try {
    const { name, phone, amount } = await req.json();

    console.log("🔥 New Lead:", name, phone, amount);

    const userPhone = `whatsapp:+91${phone}`;

    // Save to RDS
    await pool.query(
      "INSERT INTO leads.leads (type, name, phone, amount) VALUES ($1, $2, $3, $4)",
      ["investor", name, phone, amount]
    );
    console.log("✅ Saved to RDS");

    // WhatsApp to YOU
    const wa1 = await fetch(`${baseUrl}/api/send-whatsapp`, {
      method: "POST",
      body: JSON.stringify({
        to: process.env.ADMIN_PHONE,
        
        message: `New Lead:  Name : ${name}, Phone:  ${phone}, Amount ${amount}`,
      }),
    });
    console.log("🔥 API HIT");
    console.log("📲 WhatsApp to admin:", await wa1.text());

    // WhatsApp to USER
    const wa2 = await fetch(`${baseUrl}/api/send-whatsapp`, {
      method: "POST",

      body: JSON.stringify({
      to: userPhone,

        
        message: `Hi ${name} 👋

Thanks for your interest in MOVEGRID 🚀

💰 You are exploring an investment of ${amount}

Our team will contact you shortly with:
• ROI details (25–30%)
• Fleet allocation plan
• Timeline & returns breakdown

If you have any questions, feel free to reply here.

- Team MOVEGRID`,
      }),
    });
    console.log("🔥 API HIT user");
    console.log("📲 WhatsApp to user:", await wa2.text());

    // Email
    await fetch(`${baseUrl}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: `💰 New Investor Lead — ${name}`,
        html: `
          <h2>New Investor Lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Investment Range:</strong> ${amount}</p>
        `,
      }),
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("❌ ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}