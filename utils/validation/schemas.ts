import { z } from "zod";

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters" })
        .max(100, { message: "Name must be 100 characters or fewer" }),
    email: z
        .string()
        .max(254, { message: "Email must be 254 characters or fewer" })
        .email({ message: "Please enter a valid email address" }),
    subject: z
        .string()
        .min(5, { message: "Subject must be at least 5 characters" })
        .max(150, { message: "Subject must be 150 characters or fewer" }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters" })
        .max(5000, { message: "Message must be 5,000 characters or fewer" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
