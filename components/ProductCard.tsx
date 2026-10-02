import Link from "next/link";
import type { ProductSummary } from "@/lib/types";
import { Icon } from "./Icon";

export function ProductCard({ product }: { product: ProductSummary }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 shadow-xl transition-all duration-200 hover:border-tamva-accent/60 hover:-translate-y-1 group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tamva-accent/15 border border-tamva-accent/30 text-tamva-accent group-hover:scale-105 transition-transform">
            <Icon name={product.icon} className="h-6 w-6" />
          </span>
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Module</span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-tamva-accent transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-xs sm:text-sm font-semibold text-emerald-300">
          {product.tagline}
        </p>
        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
          {product.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#0d382b]">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-tamva-accent hover:text-white transition-colors"
        >
          <span>Explore {product.name.replace("TAMVA ", "")}</span>
          <span className="text-base leading-none">→</span>
        </Link>
      </div>
    </div>
  );
}
