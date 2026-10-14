import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API || process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, phone, product, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Aditya Chemicals <onboarding@resend.dev>", // You should replace this with your verified domain in production
      to: "info@adityachemicals.com",
      subject: `New Inquiry from ${name} - ${company || "Individual"}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Phone/WhatsApp:</strong> ${phone || "N/A"}</p>
        <p><strong>Product of Interest:</strong> ${product || "N/A"}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
