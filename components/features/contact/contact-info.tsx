import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactInfo() {
    return (
        <div className="flex flex-col gap-6 h-full justify-center">
            {/* Heading */}
            <div>
                <h3 className="text-3xl font-bold text-primary">
                    Contact Details
                </h3>

                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Final-year B.Tech (CSE — AI &amp; ML) student working on
                    machine learning and generative AI projects. Open to
                    internships, graduate roles, and collaborative work on
                    applied AI.
                </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-5 mt-4">

                {/* Email */}
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Mail size={18} />
                    </div>

                    <div>
                        <span className="block text-xs text-muted-foreground uppercase font-bold tracking-wider">
                            Email
                        </span>

                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                        >
                            {siteConfig.email}
                        </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Phone size={18} />
                    </div>

                    <div>
                        <span className="block text-xs text-muted-foreground uppercase font-bold tracking-wider">
                            Phone
                        </span>

                        <span className="text-sm font-semibold text-foreground">
                            {siteConfig.phone}
                        </span>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <MapPin size={18} />
                    </div>

                    <div>
                        <span className="block text-xs text-muted-foreground uppercase font-bold tracking-wider">
                            Location
                        </span>

                        <span className="text-sm font-semibold text-foreground">
                            {siteConfig.location}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ContactInfo;