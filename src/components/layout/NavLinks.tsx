
import { NavLink } from "react-router-dom";
import { navLinks } from "./navLink";

const NavLinks = () => {

    return (
        <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
                <NavLink to={item.path} key={item.path}
                    className={({ isActive }) => `font-medium transition-colors 
                    ${isActive ? "text-yellow-600" : "text-white hover:text-yellow-600"}`}
                >
                    {item.label}
                </NavLink>
            ))}
        </div>
    );
};

export default NavLinks;

