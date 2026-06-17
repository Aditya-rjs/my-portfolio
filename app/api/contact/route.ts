import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Log to server console — replace with Resend/EmailJS for production email delivery
    console.log("📬 New contact form submission:", { name, email, subject, message });

    return NextResponse.json({ success: true, message: "Message received!" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
