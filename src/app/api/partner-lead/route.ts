import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { name, phone, city } = await req.json();

    console.log("🚴 New Partner:", name, phone, city);

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Save to DB
    await supabase.from("partners").insert([{ name, phone, city }]);

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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}