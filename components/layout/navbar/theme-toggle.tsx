"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />;
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="p-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
        >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
export default ThemeToggle;
