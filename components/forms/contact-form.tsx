"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/utils/validation/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to submit form");
            }

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            const error = err as Error;
            setStatus("error");
            setErrorMessage(error.message || "Something went wrong. Please try again.");
        }
    };

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle className="text-secondary w-16 h-16 animate-bounce" />
                <h4 className="text-xl font-bold text-foreground">Message Sent!</h4>
                <p className="text-sm text-muted-foreground max-w-sm">
                    Thank you for reaching out! Your message has been received, and I will get back to you shortly.
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
                <div className="p-4 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-lg flex items-center gap-2">
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
                    className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
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
                    className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
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
                    className={errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {errors.subject && <span className="text-xs text-destructive">{errors.subject}</span>}
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
                    className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
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
