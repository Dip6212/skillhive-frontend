import { Search } from "lucide-react";
import Container from "../../ui/Container/Container";

const SearchBar = () => {
  return (
    <section className="relative py-10">

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/5 blur-[120px]" />

      </div>

      <Container>

        <div className="mx-auto max-w-4xl">

          <div className="relative">

            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400"
              size={22}
            />

            <input
              type="text"
              placeholder="Search courses..."
              className="
                w-full
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900/80
                py-4
                pl-14
                pr-5
                text-white
                placeholder:text-zinc-500
                backdrop-blur
                transition-all
                duration-300
                focus:border-yellow-400
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-400/20
                hover:border-yellow-400/40
              "
            />

          </div>

        </div>

      </Container>

    </section>
  );
};

export default SearchBar;