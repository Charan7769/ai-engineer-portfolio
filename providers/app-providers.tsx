"use client";

import React from "react";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./theme-provider";

interface AppProvidersProps {
    children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
    return (
        <ThemeProvider>
            {/* "user" makes Framer Motion drop transform/opacity animations for
                visitors whose OS asks for reduced motion, without changing the
                experience for everyone else. */}
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </ThemeProvider>
    );
}
export default AppProviders;
