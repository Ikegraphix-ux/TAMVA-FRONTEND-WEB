import { Icon } from "./Icon";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-surface-border rounded-xl2 border border-surface-border bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-primary-900 marker:content-none">
            {item.question}
            <Icon
              name="arrow-right"
              className="h-4 w-4 flex-shrink-0 rotate-90 text-ink-faint transition-transform duration-200 group-open:rotate-[270deg]"
            />
          </summary>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
