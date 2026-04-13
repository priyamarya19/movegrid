import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { name, phone, fleet_size } = await req.json();

    // Save to Supabase
    await supabase.from("b2b_leads").insert([{ name, phone, fleet_size }]);

    // WhatsApp to admin
    await fetch(`${baseUrl}/api/send-whatsapp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: process.env.ADMIN_PHONE,
        message: `🏢 New B2B Lead!\n\nName: ${name}\nPhone: ${phone}\nFleet Size: ${fleet_size}`,
      }),
    });

    // WhatsApp confirmation to lead
    const userPhone = `whatsapp:+91${phone.replace(/\D/g, "").slice(-10)}`;
    await fetch(`${baseUrl}/api/send-whatsapp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: userPhone,
        message: `Hi ${name} 👋

Thanks for reaching out to MoveGrid!

We've received your fleet rental request for *${fleet_size}*.

Our fleet team will call you within *24 hours* to discuss:
• Pricing & volume discounts
• Contract terms
• Deployment timeline

For urgent queries, reply here anytime.

— Team MoveGrid 🚗⚡`,
      }),
    });

    // Email to admin
    await fetch(`${baseUrl}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: `🏢 New B2B Fleet Lead — ${name}`,
        html: `
          <h2>New B2B Fleet Rental Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Fleet Size:</strong> ${fleet_size}</p>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("B2B lead error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
