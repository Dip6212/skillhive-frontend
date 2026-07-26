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
      <section className="py-20 text-center">
        Loading courses...
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-20 text-center text-red-500">
        Failed to load courses.
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-16">

      <Container>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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