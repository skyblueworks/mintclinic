import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import {
  generateNotificationEmail,
  generateConfirmationEmail,
} from "@/lib/email-templates";

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
  locale: z.enum(["bg", "en"]).default("bg"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData: ContactFormData = contactFormSchema.parse(body);

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Email addresses from environment variables
    const CONTACT_EMAIL_TO =
      process.env.CONTACT_EMAIL_TO || "doc.aleksov+mintclinic@gmail.com";
    const CONTACT_EMAIL_CC =
      process.env.CONTACT_EMAIL_CC || "ivetadoganova1+mintclinic@gmail.com";
    const CONTACT_EMAIL_FROM =
      process.env.CONTACT_EMAIL_FROM || "info@mintclinic.com";

    // Generate notification email (to clinic team)
    const notificationEmail = generateNotificationEmail(
      {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        message: validatedData.message,
      },
      validatedData.locale,
    );

    // Generate confirmation email (to user)
    const confirmationEmail = generateConfirmationEmail(
      { name: validatedData.name },
      validatedData.locale,
    );

    // Send notification email to clinic team
    const notificationResult = await resend.emails.send({
      from: CONTACT_EMAIL_FROM,
      to: CONTACT_EMAIL_TO,
      cc: CONTACT_EMAIL_CC,
      subject: notificationEmail.subject,
      text: notificationEmail.text,
    });

    // Check if notification email failed
    if (notificationResult.error) {
      console.error(
        "Failed to send notification email:",
        notificationResult.error,
      );
      throw new Error("Failed to send notification email");
    }

    // Send confirmation email to user
    try {
      const confirmationResult = await resend.emails.send({
        from: CONTACT_EMAIL_FROM,
        to: validatedData.email,
        subject: confirmationEmail.subject,
        text: confirmationEmail.text,
      });

      if (confirmationResult.error) {
        console.error(
          "Failed to send confirmation email:",
          confirmationResult.error,
        );
      }
    } catch (error) {
      console.error("Failed to send confirmation email to user:", error);
      // Don't throw here - notification was sent successfully
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        error: "Failed to send message",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
