import type { Metadata } from "next";
import { fontSans, fontMono } from "@/lib/fonts";
import { AppProviders } from "@/providers/app-providers";
import { Navbar } from "@/components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer/footer";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { constructMetadata } from "@/lib/metadata";
import "@/app/globals.css";

/**
 * Shared metadata only. Canonical and og:url are set per page (including "/"),
 * so unmatched 404 responses are never given the homepage's canonical identity.
 */
export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} h-full antialiased dark`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 transition-colors duration-300">
        <AppProviders>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </AppProviders>
      </body>
    </html>
  );
}
export { constructMetadata };
