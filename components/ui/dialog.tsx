"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export function Dialog({
    isOpen,
    onClose,
    title,
    children,
    className,
}: DialogProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Content wrapper */}
            <div
                className={cn(
                    "w-full max-w-lg rounded-xl shadow-2xl z-10 overflow-hidden relative border border-border animate-float",
                    "glass-morphism-dark",
                    className
                )}
                role="dialog"
                aria-modal="true"
            >
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 border-b border-border/25 pb-3">
                        {title && <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500">{title}</h3>}
                        <button
                            onClick={onClose}
                            aria-label="Close dialog"
                            className="text-muted-foreground hover:text-foreground p-1.5 rounded-full hover:bg-muted transition-colors cursor-pointer"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="max-h-[75vh] overflow-y-auto pr-1 no-scrollbar">{children}</div>
                </div>
            </div>
        </div>
    );
}
export default Dialog;
