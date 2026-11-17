"use client";

import { useTheme as useThemeHook } from "@/providers/theme-provider";

export const useTheme = () => {
    return useThemeHook();
};
