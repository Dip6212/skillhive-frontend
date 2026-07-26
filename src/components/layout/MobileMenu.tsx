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

        <div className="fixed inset-0 z-50 bg-black/40">

            <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg">

                <div className="flex items-center justify-between border-b p-5">

                    <h2 className="text-lg font-semibold">

                        Menu

                    </h2>

                    <button onClick={onClose}>

                        <X />

                    </button>

                </div>

                <div className="flex flex-col p-6 gap-5">

                    {navLinks.map((item) => (

                        <NavLink

                            key={item.path}

                            to={item.path}

                            onClick={onClose}

                            className="font-medium text-slate-700 hover:text-blue-600"

                        >

                            {item.label}

                        </NavLink>

                    ))}

                    <hr />

                    <button

                        className="rounded-lg border py-3"

                    >

                        Login

                    </button>

                    <button

                        className="rounded-lg bg-blue-600 py-3 font-semibold text-white"

                    >

                        Get Started

                    </button>

                </div>

            </div>

        </div>

    );

};

export default MobileMenu;