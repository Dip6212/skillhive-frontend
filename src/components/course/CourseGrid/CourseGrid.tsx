import { useQuery } from "@tanstack/react-query";

import Container from "../../ui/Container/Container";
import CourseCard from "../CourseCard/CourseCard";

import { getCourses } from "../../../services/courseService";

const CourseGrid = () => {
  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  if (isLoading) {
    return (
      <section className="relative py-24">
        <Container>
          <div className="text-center text-lg text-zinc-400">
            Loading courses...
          </div>
        </Container>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="relative py-24">
        <Container>
          <div className="text-center text-lg text-red-500">
            Failed to load courses.
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-20">

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
          absolute
          left-0
          top-20
          h-[550px]
          w-[550px]
          rounded-full
          bg-yellow-400/5
          blur-[180px]
        "
        />

        <div
          className="
          absolute
          right-0
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-yellow-500/5
          blur-[170px]
        "
        />

      </div>

      <Container>

        <div
          className="
          relative
          grid
          gap-10
          md:grid-cols-2
          xl:grid-cols-3
        "
        >

          {courses?.map((course: any) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

      </Container>

    </section>
  );
};

export default CourseGrid;