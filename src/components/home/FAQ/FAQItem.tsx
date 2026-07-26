import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { FaqResponse } from "@/services/faqService";

interface FAQItemProps {
  faq: FaqResponse;
}

const FAQItem = ({ faq }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-semibold text-slate-900">
          {faq.question}
        </span>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-slate-200 px-6 pb-6 pt-4">
          <p className="leading-7 text-slate-600">
            {faq.answer}
          </p>
        </div>
      )}

    </div>
  );
};

export default FAQItem;