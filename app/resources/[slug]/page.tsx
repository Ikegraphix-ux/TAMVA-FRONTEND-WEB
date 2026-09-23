import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";
import { articles } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((item) => item.id === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

export default function ResourceArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((item) => item.id === params.slug);
  if (!article) notFound();

  return (
    <>
      <article className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: article.title },
            ]}
          />
          <div className="mt-8">
            <SectionHeading
              eyebrow={article.category}
              title={article.title}
              description={article.description}
            />
            <p className="mt-5 text-sm text-ink-faint">{article.readingTime}</p>
          </div>

          <div className="mt-12 space-y-6 text-[16px] leading-8 text-ink-muted">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </article>

      <CTA
        title="Have questions about TAMVA?"
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </>
  );
}
