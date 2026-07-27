import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          overflow-hidden
          rounded-xl
          border
          border-yellow-400/20
          bg-zinc-900
          transition-all
          duration-300
          group-hover:border-yellow-400/60
          group-hover:shadow-[0_0_20px_rgba(250,204,21,0.18)]
        "
      >
        <img
          src="/images/logo.png"
          alt="SkillHive Logo"
          className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div>
        <h1
          className="
            text-xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-yellow-400
          "
        >
          SkillHive
        </h1>

        <p className="text-xs tracking-wide text-zinc-400">
          Shaping Futures. Building Careers.
        </p>
      </div>
    </Link>
  );
};

export default Logo;