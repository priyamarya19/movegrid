import { NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH
);

export async function POST(req: Request) {
  const body = await req.json();

  // ✅ Step 2: log full body (VERY IMPORTANT)
    console.log("BODY:", body);

    // ✅ Step 3: extract values
    const { name, phone, amount } = body;

    // ✅ Step 4: log individual values
    console.log("NAME:", name);
    console.log("PHONE:", phone);
    console.log("AMOUNT:", amount);

  try {
    await client.messages.create({
      body: body.message,
      from: "whatsapp:+14155238886",
      to: body.to,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}

