import { type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 bg-white p-6 shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
