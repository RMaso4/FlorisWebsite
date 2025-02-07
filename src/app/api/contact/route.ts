// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sendContactFormEmail } from "@/app/lib/email"

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Verplichte velden ontbreken" },
        { status: 400 }
      );
    }

    // Send emails using the email utility
    const emailResult = await sendContactFormEmail({
      name,
      email,
      phone,
      subject,
      message,
    });

    if (!emailResult) {
      return NextResponse.json(
        { error: "Kan e-mail niet verzenden" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Contact request received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}