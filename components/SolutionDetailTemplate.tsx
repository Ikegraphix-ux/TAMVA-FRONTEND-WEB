import { Container } from "./Container";
import { Breadcrumb } from "./Breadcrumb";
import { Icon } from "./Icon";
import { CTA } from "./CTA";
import { ProductCard } from "./ProductCard";
import type { SolutionDetail } from "@/lib/types";
import { products } from "@/lib/content";

export function SolutionDetailTemplate({ solution }: { solution: SolutionDetail }) {
  const related = products.filter((p) => solution.relatedProducts.includes(p.slug));

  return (
    <div className="bg-[#021812] text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#0d382b] hero-pattern">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-tamva-accent/15 blur-[130px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              { label: solution.name },
            ]}
          />

          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-tamva-accent/15 border border-tamva-accent/30 text-tamva-accent shadow-[0_0_20px_rgba(0,230,118,0.25)] shrink-0">
              <Icon name={solution.icon} className="h-8 w-8" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-tamva-accent uppercase tracking-wider">
                Audience Solution Track
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
                {solution.name}
              </h1>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-300">
            {solution.headline}
          </p>
        </Container>
      </section>

      {/* 2. Challenges & How TAMVA Helps Split */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 sm:p-10 shadow-xl">
              <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
                Friction Points
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white mb-6">
                Common Operational Obstacles
              </h2>
              <ul className="flex flex-col gap-4">
                {solution.challenges.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-rose-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 sm:p-10 shadow-xl">
              <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
                The TAMVA Advantage
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white mb-6">
                Engineered Capabilities Delivered
              </h2>
              <div className="flex flex-col gap-6">
                {solution.howTamvaHelps.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-[#0d382b]/80 bg-[#021812] p-5">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="text-tamva-accent">✓</span>
                      <span>{item.title}</span>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300 pl-5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Related Products Section */}
      {related.length > 0 && (
        <section className="py-20 sm:py-28 border-b border-[#0d382b] bg-[#021c15]/60">
          <Container>
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
                Integrated Technology
              </span>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Products Powering This Solution
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 4. CTA */}
      <CTA
        title={`Discover How TAMVA Transforms ${solution.name}`}
        description="Connect with our solutions specialists to structure a tailored deployment."
        primaryLabel="Schedule a Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore All Solutions"
        secondaryHref="/solutions"
      />
    </div>
  );
}
