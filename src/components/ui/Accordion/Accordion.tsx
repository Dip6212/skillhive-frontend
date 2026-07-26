import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

const Accordion = ({ items, defaultOpenId, className }: AccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className={cn("divide-y divide-slate-200 rounded-xl border border-slate-200", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium text-slate-900">{item.title}</span>
              <ChevronDown
                size={18}
                className={cn(
                  "shrink-0 text-slate-500 transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen ? (
              <div className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
