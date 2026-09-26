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
    default: "TAMVA — Financial Trust Infrastructure",
    template: "%s | TAMVA",
  },
  description:
    "TAMVA delivers explainable transaction-risk decisions and consent-aware financial data for institutions. Built in Ghana, designed for Africa.",
  openGraph: {
    type: "website",
    siteName: "TAMVA",
    title: "TAMVA — Financial Trust Infrastructure",
    description:
      "Explainable transaction-risk decisions and consent-aware financial data for institutions. Built in Ghana, designed for Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAMVA — Financial Trust Infrastructure",
    description:
      "Explainable transaction-risk decisions and consent-aware financial data for institutions. Built in Ghana, designed for Africa.",
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

