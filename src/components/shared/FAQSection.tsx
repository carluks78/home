import { useState } from 'react';
import type { FAQ } from '../../data/company';

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = 'Questions fréquentes' }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-orange-500 text-center mb-3">FAQ</p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 uppercase tracking-tight text-center mb-10">
          {title}
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-colors ${
                open === i ? 'border-orange-200 bg-white shadow-sm' : 'border-gray-100 bg-white'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className={`font-semibold text-sm md:text-base leading-snug ${open === i ? 'text-orange-500' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform ${open === i ? 'rotate-180 text-orange-500' : 'text-gray-300'}`}
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
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
