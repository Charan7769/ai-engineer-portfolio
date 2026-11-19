"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/utils/validation/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

async function readErrorMessage(res: Response): Promise<string> {
    const fallback =
        res.status === 503
            ? "The contact form is not available right now."
            : "Something went wrong while sending your message. Please try again.";

    try {
        const data: unknown = await res.json();

        if (typeof data === "object" && data !== null && "message" in data) {
            const { message } = data as { message?: unknown };
            if (typeof message === "string" && message.trim().length > 0) return message;
        }
    } catch {
        // The response body was not JSON; fall back to a status-based message.
    }

    return fallback;
}

export function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error
        if (errors[name as keyof ContactFormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrors({});
        setErrorMessage("");

        // Validate using Zod schema
        const validation = contactFormSchema.safeParse(formData);
        if (!validation.success) {
            const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
            validation.error.issues.forEach((err) => {
                if (err.path[0]) {
                    fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
                }
            });
            setErrors(fieldErrors);
            setStatus("idle");

            // Move the user straight to the first field that needs attention.
            const firstInvalidField = validation.error.issues[0]?.path[0];
            if (typeof firstInvalidField === "string") {
                document.getElementById(firstInvalidField)?.focus();
            }
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error(await readErrorMessage(res));
            }

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            setStatus("error");
            setErrorMessage(
                err instanceof TypeError
                    ? "Network error. Please check your connection and try again."
                    : err instanceof Error
                        ? err.message
                        : "Something went wrong. Please try again."
            );
        }
    };

    if (status === "success") {
        return (
            <div role="status" aria-live="polite" className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle className="text-secondary w-16 h-16 animate-bounce" />
                <h4 className="text-xl font-bold text-foreground">Message Submitted</h4>
                <p className="text-sm text-muted-foreground max-w-sm">
                    Thank you for reaching out. Your message was accepted by the email service and is queued for delivery. I will reply to the address you provided.
                </p>
                <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4 rounded-full">
                    Send another message
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {status === "error" && (
                <div role="alert" className="p-4 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-lg flex items-center gap-2">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                </div>
            )}

            {/* Name */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">Name</label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    disabled={status === "submitting"}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {errors.name && <span id="name-error" className="text-xs text-destructive">{errors.name}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">Email</label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    disabled={status === "submitting"}
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {errors.email && <span id="email-error" className="text-xs text-destructive">{errors.email}</span>}
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject</label>
                <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    disabled={status === "submitting"}
                    aria-invalid={errors.subject ? true : undefined}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {errors.subject && <span id="subject-error" className="text-xs text-destructive">{errors.subject}</span>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    disabled={status === "submitting"}
                    rows={5}
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {errors.message && <span id="message-error" className="text-xs text-destructive">{errors.message}</span>}
            </div>

            <Button type="submit" disabled={status === "submitting"} className="w-full mt-2 rounded-full cursor-pointer flex gap-2">
                {status === "submitting" ? (
                    <>
                        <div className="w-4 h-4 rounded-full border border-t-transparent border-white animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send size={16} /> Send Message
                    </>
                )}
            </Button>
        </form>
    );
}
export default ContactForm;
