import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { auditLog } from "@/lib/audit";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function POST(req: Request) {
  try {
    const { name, phone, amount } = await req.json();

    const userPhone = `whatsapp:+91${phone}`;

    await pool.query(
      "INSERT INTO leads.leads (type, name, phone, amount) VALUES ($1, $2, $3, $4)",
      ["investor", name, phone, amount]
    );
    console.log(`[investor-lead] ${name} | ${phone} | ${amount}`);
    await auditLog({ action: "lead_created", entity: "investor", details: { name, phone, amount } });

    await fetch(`${baseUrl}/api/send-whatsapp`, {
      method: "POST",
      body: JSON.stringify({
        to: process.env.ADMIN_PHONE,
        message: `New Lead:  Name : ${name}, Phone:  ${phone}, Amount ${amount}`,
      }),
    });

    await fetch(`${baseUrl}/api/send-whatsapp`, {
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
