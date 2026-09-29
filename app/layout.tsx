import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getRobotsPolicy, getSiteUrl } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "TAMVA — Financial Technology Infrastructure for African Markets",
    template: "%s | TAMVA",
  },
  description:
    "TAMVA is building financial technology infrastructure for individuals, businesses and institutions across African markets, starting in Ghana.",
  openGraph: {
    type: "website",
    siteName: "TAMVA",
    title: "TAMVA — Financial Technology Infrastructure for African Markets",
    description:
      "A financial technology platform for people and organizations across African markets, starting in Ghana.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAMVA — Financial Technology Infrastructure for African Markets",
    description:
      "A financial technology platform for people and organizations across African markets, starting in Ghana.",
  },
  robots: getRobotsPolicy(),
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
