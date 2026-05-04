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

  try {
    await ses.send(new SendEmailCommand({
      Source: "priyam@movegrid.in",
      Destination: { ToAddresses: [process.env.ADMIN_EMAIL!] },
      Message: {
        Subject: { Data: body.subject || "New Lead — MoveGrid" },
        Body: { Html: { Data: body.html } },
      },
    }));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
