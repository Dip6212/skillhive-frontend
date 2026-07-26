import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src="/images/logo.png" // Change this to your actual path
        alt="SkillHive Logo"
        className="h-10 w-10 object-contain"
      />

      <div>
        <h1 className="text-lg font-bold text-slate-900">
          SkillHive
        </h1>

        <p className="text-xs text-slate-500">
          Shaping Future. Building Careers.
        </p>
      </div>
    </Link>
  );
};

export default Logo;