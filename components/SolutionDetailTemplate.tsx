import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Breadcrumb } from "./Breadcrumb";
import { Icon } from "./Icon";
import { CTA } from "./CTA";
import { ProductCard } from "./ProductCard";
import type { SolutionDetail } from "@/lib/types";
import { products } from "@/lib/content";

export function SolutionDetailTemplate({ solution }: { solution: SolutionDetail }) {
  const related = products.filter((p) => solution.relatedProducts.includes(p.slug));

  return (
    <>
      <section className="border-b border-surface-border bg-surface-muted py-14 sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              { label: solution.name },
            ]}
          />
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-accent-600 shadow-card">
              <Icon name={solution.icon} className="h-6 w-6" />
            </span>
            <h1 className="text-h2-mobile sm:text-h2 font-semibold text-primary-900">
              {solution.name}
            </h1>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {solution.headline}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Common challenges" title="What gets in the way" />
              <ul className="mt-6 flex flex-col gap-3">
                {solution.challenges.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="How TAMVA helps" title="What TAMVA provides" />
              <div className="mt-6 flex flex-col gap-6">
                {solution.howTamvaHelps.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-semibold text-primary-900">{item.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-surface-muted py-16 sm:py-24">
          <Container>
            <SectionHeading title="Related products" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTA title={`See how TAMVA fits ${solution.name.toLowerCase()}`} />
    </>
  );
}
