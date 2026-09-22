export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-wide ${
            light ? "text-accent-300" : "text-accent-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-h2-mobile sm:text-h2 font-semibold ${
          light ? "text-white" : "text-primary-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-primary-100" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
