import type { Metadata } from "next";
import { getCanonicalAlternates } from "@/lib/site";
import { notFound } from "next/navigation";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { fetchProduct } from "@/services/products";

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetchProduct("verification");
  return {
    alternates: getCanonicalAlternates("/products/verification"),
    title: product?.name ?? "Product",
    description: product?.description,
  };
}

export default async function Page() {
  const product = await fetchProduct("verification");
  if (!product) notFound();
  return <ProductDetailTemplate product={product} />;
}
