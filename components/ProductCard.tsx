import Link from "next/link";
import type { ProductSummary } from "@/lib/types";
import { Icon } from "./Icon";

export function ProductCard({ product }: { product: ProductSummary }) {
  return (
    <div className="flex h-full flex-col rounded-xl2 border border-surface-border bg-white p-8 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-900 text-white">
        <Icon name={product.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-6 text-h3 font-semibold text-primary-900">{product.name}</h3>
      <p className="mt-1 text-sm font-medium text-accent-600">{product.tagline}</p>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-muted">
        {product.description}
      </p>
      <Link
        href={`/products/${product.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-900 hover:text-accent-600"
      >
        Explore {product.name.replace("TAMVA ", "")}
        <Icon name="arrow-right" className="h-4 w-4" />
      </Link>
    </div>
  );
}
