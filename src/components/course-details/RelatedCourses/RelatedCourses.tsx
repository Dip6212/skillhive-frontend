import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";

import { useCourses } from "@/hooks/useCourses";

const RelatedCourses = () => {
  const { slug } = useParams();

  const navigate = useNavigate();

  const { data: courses } = useCourses();

  const relatedCourses = useMemo(() => {
    if (!courses) return [];

    return courses
      .filter((course) => course.slug !== slug)
      .slice(0, 3);
  }, [courses, slug]);

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <h2 className="text-center text-4xl font-bold">
          Related Programs
        </h2>

        <p className="mt-4 text-center text-slate-600">
          Explore other programs that can boost your career.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {relatedCourses.map((course) => (
            <div
              key={course.id}
              className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className="h-52 w-full object-cover"
              />

              <div className="space-y-4 p-6">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {course.packageName}
                </span>

                <h3 className="text-2xl font-bold">
                  {course.title}
                </h3>

                <p className="text-slate-600">
                  {course.shortDescription}
                </p>

                <Button
                  fullWidth
                  onClick={() =>
                    navigate(`/courses/${course.slug}`)
                  }
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RelatedCourses;