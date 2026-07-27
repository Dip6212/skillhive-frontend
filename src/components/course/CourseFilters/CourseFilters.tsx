import Container from "../../ui/Container/Container";

const filters = [
  "All",
  "Programming",
  "Cloud",
  "AI",
  "Data",
  "Design",
];

const CourseFilters = () => {
  return (
    <section className="relative pb-12">

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-yellow-400/5 blur-[120px]" />

      </div>

      <Container>

        <div className="flex flex-wrap justify-center gap-4">

          {filters.map((filter, index) => (

            <button
              key={filter}
              className={`
                rounded-full
                border
                px-6
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  index === 0
                    ? "border-yellow-400 bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.35)]"
                    : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-400"
                }
              `}
            >
              {filter}
            </button>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default CourseFilters;