import { NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH
);

export async function POST(req: Request) {
  const body = await req.json();

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

