import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tamva.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TAMVA — Trusted Identity, Verification & Risk Intelligence",
    template: "%s | TAMVA",
  },
  description:
    "TAMVA is a modern African technology company building trusted digital identity, verification and risk intelligence infrastructure.",
  openGraph: {
    type: "website",
    siteName: "TAMVA",
    title: "TAMVA — Trusted Identity, Verification & Risk Intelligence",
    description:
      "Trusted identity, verification and risk intelligence to help organizations make informed decisions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAMVA — Trusted Identity, Verification & Risk Intelligence",
    description:
      "Trusted identity, verification and risk intelligence to help organizations make informed decisions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
