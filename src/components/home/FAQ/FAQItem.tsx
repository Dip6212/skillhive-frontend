import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { FaqResponse } from "@/services/faqService";

interface FAQItemProps {
  faq: FaqResponse;
}

const FAQItem = ({ faq }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        transition-all
        duration-500
        ${
          open
            ? "border-yellow-400/60 bg-gradient-to-b from-zinc-900 via-[#111111] to-black shadow-[0_0_30px_rgba(250,204,21,0.12)]"
            : "border-zinc-800 bg-gradient-to-b from-zinc-900 via-[#111111] to-black hover:border-yellow-400/40"
        }
      `}
    >

      {/* Golden Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -top-20
            -right-20
            h-40
            w-40
            rounded-full
            bg-yellow-400/10
            blur-3xl
          "
        />

      </div>

      <button
        onClick={() => setOpen(!open)}
        className="
          relative
          flex
          w-full
          items-center
          justify-between
          p-7
          text-left
        "
      >

        <span className="pr-5 text-lg font-semibold text-white">
          {faq.question}
        </span>

        <ChevronDown
          size={22}
          className={`
            shrink-0
            text-yellow-400
            transition-all
            duration-300
            ${open ? "rotate-180" : ""}
          `}
        />

      </button>

      <div
        className={`
          grid
          transition-all
          duration-500
          ${
            open
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >

        <div className="overflow-hidden">

          <div className="border-t border-zinc-800 px-7 pb-7 pt-5">

            <p className="leading-8 text-zinc-400">
              {faq.answer}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FAQItem;