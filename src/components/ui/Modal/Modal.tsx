import { type ReactNode, useEffect } from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

const Modal = ({ open, onClose, title, children, className }: ModalProps) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close modal overlay"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "relative z-10 w-full max-w-lg rounded-xl bg-white p-6 shadow-xl",
          className,
        )}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          {title ? (
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          ) : (
            <span />
          )}
          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="rounded-lg p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
