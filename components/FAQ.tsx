import { Icon } from "./Icon";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-[#0d382b] rounded-2xl border border-[#0d382b] bg-[#03231a] shadow-xl overflow-hidden">
      {items.map((item) => (
        <details key={item.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-bold text-white group-hover:text-tamva-accent transition-colors marker:content-none">
            <span>{item.question}</span>
            <span className="p-1 rounded-lg bg-white/5 border border-white/10 group-hover:border-tamva-accent/40 text-tamva-accent transition-transform duration-200 group-open:rotate-90 shrink-0">
              <Icon
                name="arrow-right"
                className="h-3.5 w-3.5"
              />
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 pl-1">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
