import type { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({
  open,
  onClose,
  children,
}: ModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 transition hover:bg-slate-100"
        >
          <X size={22} />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;