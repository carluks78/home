import { useState } from 'react';
import type { FAQ } from '../../data/company';

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = 'Questions fréquentes' }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase tracking-tight text-center mb-2">
          {title}
        </h2>
        <p className="text-zinc-400 text-center mb-10">Les réponses à vos questions sur nos services d'électricité dans l'Eure</p>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-colors ${
                open === i ? 'border-orange-500/50 bg-zinc-900' : 'border-zinc-800 bg-zinc-900/50'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className={`font-semibold text-sm md:text-base leading-snug ${open === i ? 'text-orange-400' : 'text-zinc-200'}`}>
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform ${open === i ? 'rotate-180 text-orange-400' : 'text-zinc-500'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
