import type { Metadata } from "next";
import { fontSans, fontMono } from "@/lib/fonts";
import { AppProviders } from "@/providers/app-providers";
import { Navbar } from "@/components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer/footer";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { constructMetadata } from "@/lib/metadata";
import "@/app/globals.css";

export const metadata: Metadata = constructMetadata({ path: "/" });

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
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </AppProviders>
      </body>
    </html>
  );
}
export { constructMetadata };
