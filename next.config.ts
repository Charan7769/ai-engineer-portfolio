import type { NextConfig } from "next";

/**
 * Baseline security headers.
 *
 * A Content Security Policy is intentionally deferred: Next.js injects inline
 * bootstrap scripts and the app uses next/image with remote images, so a CSP
 * must be validated against a production build first. The headers below are
 * compatible with the current application.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
