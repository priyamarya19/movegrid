import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: Request) {
  const body = await req.json();

  const recipients = [process.env.ADMIN_EMAIL!, "ajay.mathur@movegrid.in", "priyam@movegrid.in"];
  console.log("[send-email] Attempting to send to:", recipients);
  console.log("[send-email] Subject:", body.subject);

  try {
    const result = await ses.send(new SendEmailCommand({
      Source: "priyam@movegrid.in",
      Destination: { ToAddresses: recipients },
      Message: {
        Subject: { Data: body.subject || "New Lead — MoveGrid" },
        Body: { Html: { Data: body.html } },
      },
    }));

    console.log("[send-email] Success. MessageId:", result.MessageId);
    return NextResponse.json({ success: true, messageId: result.MessageId });
  } catch (error: unknown) {
    const err = error as { name?: string; message?: string };
    console.error("[send-email] FAILED:", err.name, err.message);
    return NextResponse.json({ error: err.message, name: err.name }, { status: 500 });
  }
}
