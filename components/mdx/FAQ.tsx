"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export function FAQ({ items, title = "Често задавани въпроси" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-8">
      {title && (
        <h3 className="mb-6 text-2xl font-semibold text-gray-900">{title}</h3>
      )}

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-gray-200"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50"
            >
              <span className="pr-4 font-medium text-gray-900">
                {item.question}
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                <div
                  className="prose prose-sm max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
