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
    <section className="bg-white pb-10">

      <Container>

        <div className="flex flex-wrap justify-center gap-4">

          {filters.map((filter) => (
            <button
              key={filter}
              className="rounded-full border border-slate-200 px-6 py-3 transition hover:bg-blue-600 hover:text-white"
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