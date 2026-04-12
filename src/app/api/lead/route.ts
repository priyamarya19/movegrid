import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { name, phone, amount } = await req.json();

    console.log("🔥 New Lead:", name, phone, amount);

    const userPhone = `whatsapp:+91${phone}`;

    // Save to DB
    await supabase.from("leads").insert([{ name, phone, amount }]);
    console.log("✅ Saved to DB");

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
    const email = await fetch(`${baseUrl}/api/send-email`, {
      method: "POST",
      body: JSON.stringify({
        to: process.env.ADMIN_EMAIL,
        name: name,
        phone: phone,
        amount:amount,
        subject: "Test Email",
        text: `Lead: ${name}`,
      }),
    });
    console.log("📧 Email:", await email.text());

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("❌ ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}