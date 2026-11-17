import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/utils/validation/schemas";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Validate using Zod schema
        const validation = contactFormSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { message: "Invalid payload input", errors: validation.error.format() },
                { status: 400 }
            )
        }

        const { name, email, subject, message } = validation.data;

        // Simulate sending email through SMTP/Resend client integration
        console.log(`Sending Contact Form notification:
      From: ${name} (${email})
      Subject: ${subject}
      Message: ${message}
    `);

        // Add brief artificial delay to represent API throughput
        await new Promise((resolve) => setTimeout(resolve, 800));

        return NextResponse.json(
            { message: "Form submitted successfully. We will contact you soon." },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Contact API Request failed:", error);
        return NextResponse.json(
            { message: "Internal server error occurred while sending message." },
            { status: 500 }
        );
    }
}
export default POST;
