import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetailTemplate } from "@/components/SolutionDetailTemplate";
import { getSolution } from "@/lib/content";

export function generateMetadata(): Metadata {
  const solution = getSolution("organizations");
  return {
    title: solution?.name ?? "Solution",
    description: solution?.headline,
  };
}

export default function Page() {
  const solution = getSolution("organizations");
  if (!solution) notFound();
  return <SolutionDetailTemplate solution={solution} />;
}
