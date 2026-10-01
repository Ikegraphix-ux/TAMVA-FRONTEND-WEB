import type { Metadata } from "next";
import { getCanonicalAlternates } from "@/lib/site";
import { Hero } from "@/components/Hero";
import { FeatureCardsRow } from "@/components/FeatureCardsRow";
import { HowTamvaWorksSection } from "@/components/HowTamvaWorksSection";
import { OurImpactSection } from "@/components/OurImpactSection";
import { DevelopersSection } from "@/components/DevelopersSection";

export const metadata: Metadata = {
  title: "TAMVA — Your Trusted Partner in Digital Finance",
  description:
    "Simple. Secure. Inclusive. TAMVA is a modern financial platform built for individuals, businesses and institutions across Africa. Send, receive, save and grow — all in one place.",
  alternates: getCanonicalAlternates("/"),
};

export default function HomePage() {
  return (
    <>
      {/* 1. Rich Visual Hero with African Model + Floating Mobile App UI Card */}
      <Hero />

      {/* 2. 6 Modern Feature & Audience Cards with Mint Icon Accents */}
      <FeatureCardsRow />

      {/* 3. How TAMVA Works with Step Process + Laptop Dashboard Preview & Live Chart */}
      <HowTamvaWorksSection />

      {/* 4. Impact Metrics & Glowing African Financial Network Mesh */}
      <OurImpactSection />

      {/* 5. Interactive Developers & Integration Workspace with Code Switcher & Live Webhook Simulation */}
      <DevelopersSection />
    </>
  );
}
