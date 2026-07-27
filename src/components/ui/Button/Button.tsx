import React from "react";
import { cn } from "../../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary:
      "bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg hover:shadow-xl",

    secondary:
      "bg-yellow-400 text-black hover:bg-slate-800",

    outline:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "rounded-xl font-semibold transition-all duration-300 active:scale-95",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;