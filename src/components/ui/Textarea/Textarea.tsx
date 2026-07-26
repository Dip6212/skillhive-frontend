import { type TextareaHTMLAttributes, useId } from "react";

import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = ({
  label,
  error,
  className,
  id,
  ...props
}: TextareaProps) => {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  return (
    <div className="w-full">
      {label ? (
        <label
          htmlFor={textareaId}
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={textareaId}
        className={cn(
          "min-h-28 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className,
        )}
        {...props}
      />
      {error ? <p className="mt-1.5 text-sm text-red-600">{error}</p> : null}
    </div>
  );
};

export default Textarea;
