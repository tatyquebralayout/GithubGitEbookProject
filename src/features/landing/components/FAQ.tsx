import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqItems } from '../../faq/data/faq-data';
import type { FAQItem } from '../../faq/types/faq.types';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24" id="faq">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
            Dúvidas
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Obtenha respostas para as dúvidas comuns sobre a litro abertis.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqItems.map((item: FAQItem, index: number) => (
            <div key={index} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              <div
                className={`overflow-hidden px-6 transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
