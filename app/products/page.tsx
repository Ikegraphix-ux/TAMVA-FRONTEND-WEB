import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { CTA } from "@/components/CTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { fetchProducts } from "@/services/products";

export const metadata: Metadata = {
  title: "Products",
  description: "TAMVA Passport, Risk Intelligence and Verification — technology built around trust.",
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <>
      <section className="border-b border-surface-border bg-surface-muted py-14 sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <div className="mt-6">
            <SectionHeading
              eyebrow="Products"
              title="Technology built around trust."
              description="Each TAMVA product addresses a distinct part of establishing, verifying and understanding trust."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Not sure which product fits?"
        description="Tell us about your use case and we'll help you find the right starting point."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </>
  );
}
