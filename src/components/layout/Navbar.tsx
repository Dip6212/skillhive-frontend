import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky  top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black shadow-md" : "bg-black"}`}>

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <Logo />
                <NavLinks />

                {/* Desktop Buttons */}

                <div className="hidden items-center gap-4 lg:flex">

                    <button
                        className="rounded-lg border border-slate-300 px-5 py-2 text-yellow-400 text-sm font-medium hover:bg-slate-100 transition"
                    >
                        Login
                    </button>

                    <button
                        className="rounded-lg bg-yellow-600 px-5 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400"
                    >
                        Get Started
                    </button>

                </div>

            {/* mobile Buttons */}

                <button

                    onClick={() => setMobileOpen(true)}

                    className="lg:hidden"

                >

                    <Menu size={28} />

                </button>

            </div>

            <MobileMenu

                open={mobileOpen}

                onClose={() => setMobileOpen(false)}

            />

        </header>
    );
};

export default Navbar;