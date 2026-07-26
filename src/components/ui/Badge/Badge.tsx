import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "primary" | "success" | "warning";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-slate-100 text-slate-700",
  primary: "bg-blue-100 text-blue-700",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
};

const Badge = ({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
