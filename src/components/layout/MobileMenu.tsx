import { X } from "lucide-react";
import { NavLink } from "react-router-dom";

import { navLinks } from "./navLink";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="
          absolute
          right-0
          top-0
          flex
          h-full
          w-80
          flex-col
          border-l
          border-zinc-800
          bg-[#050505]
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-zinc-800 p-6">
          <div>
            <h2 className="text-xl font-bold text-white">
              Menu
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Navigate through SkillHive
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              rounded-lg
              border
              border-zinc-700
              p-2
              text-zinc-400
              transition-all
              duration-300
              hover:border-yellow-400/40
              hover:bg-zinc-900
              hover:text-yellow-400
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}

        <div className="flex flex-1 flex-col gap-3 p-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `
                rounded-xl
                px-4
                py-3
                text-base
                font-medium
                transition-all
                duration-300
                ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "text-zinc-300 hover:bg-zinc-900 hover:text-yellow-400"
                }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Footer */}

        <div className="space-y-4 border-t border-zinc-800 p-6">
          <button
            className="
              w-full
              rounded-xl
              border
              border-zinc-700
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:border-yellow-400/40
              hover:text-yellow-400
            "
          >
            Login
          </button>

          <button
            className="
              w-full
              rounded-xl
              bg-yellow-400
              py-3
              font-semibold
              text-black
              transition-all
              duration-300
              hover:bg-yellow-300
              hover:shadow-[0_10px_25px_rgba(250,204,21,0.25)]
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;