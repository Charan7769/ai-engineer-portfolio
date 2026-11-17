import { z } from "zod";

const envSchema = z.object({
    NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
    GITHUB_TOKEN: z.string().optional(),
    GITHUB_USERNAME: z.string().optional(),
    RESEND_API_KEY: z.string().optional(),
});

export const env = envSchema.parse({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GITHUB_USERNAME: process.env.GITHUB_USERNAME,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
});
