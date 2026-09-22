import { LinkButton } from "./Button";
import { Container } from "./Container";

export function CTA({
  title = "Let's build trust together.",
  description = "Talk to the TAMVA team about your identity and risk needs.",
  primaryLabel = "Contact us",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-primary-900 py-16 sm:py-24">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-h2-mobile sm:text-h2 font-semibold text-white">{title}</h2>
          <p className="text-lg text-primary-100">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <LinkButton href={primaryHref} withArrow>
              {primaryLabel}
            </LinkButton>
            {secondaryLabel && secondaryHref && (
              <LinkButton href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </LinkButton>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
