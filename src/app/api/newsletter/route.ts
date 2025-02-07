// src/app/api/newsletter/route.ts
import { NextResponse } from "next/server";
import { sendNewsletterSignupEmail } from "@/app/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, type } = body;

    // Validate the input
    if (!name || !email || !type) {
      return NextResponse.json(
        { error: "Alle velden zijn verplicht" },
        { status: 400 }
      );
    }

    // Send emails using the email utility
    const emailResult = await sendNewsletterSignupEmail({
      name,
      email,
      type,
    });

    if (!emailResult) {
      return NextResponse.json(
        { error: "Kan e-mail niet verzenden" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}