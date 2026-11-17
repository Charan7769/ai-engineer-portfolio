"use client";

import React from "react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { ContactForm } from "@/components/forms/contact-form";
import { ContactInfo } from "./contact-info";

export function Contact() {
    return (
        <SectionContainer id="contact">
            <SectionHeading
                title="Let's Connect"
                subtitle="I'm actively seeking internships, full-time Software Engineer, AI/ML Engineer, and Generative AI opportunities. I'm also open to exciting projects, collaborations, and networking. Feel free to reach out!"
                badge="Contact"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
                {/* Left Side: Contact Info */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                    <FadeIn direction="right" className="height-full">
                        <ContactInfo />
                    </FadeIn>
                </div>

                {/* Right Side: Contact Form */}
                <div className="lg:col-span-7">
                    <FadeIn direction="left">
                        <div className="p-6 sm:p-8 bg-card border border-border/40 rounded-2xl shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-500 to-indigo-500" />
                            <ContactForm />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
export default Contact;
