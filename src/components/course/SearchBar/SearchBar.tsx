import Container from "../../ui/Container/Container";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <section className="bg-white py-10">

      <Container>

        <div className="mx-auto max-w-3xl">

          <div className="relative">

            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search courses..."
              className="w-full rounded-2xl border border-slate-200 py-4 pl-14 pr-5 shadow-sm outline-none transition focus:border-blue-500"
            />

          </div>

        </div>

      </Container>

    </section>
  );
};

export default SearchBar;