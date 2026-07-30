import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  Users,
  Star,
} from "lucide-react";

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
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/5 blur-[180px]" />

      <Container>

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
            Continue Learning
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Related Programs
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Explore other career-focused programs that can help you
            level up your skills and accelerate your professional
            journey.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {relatedCourses.map((course) => (

            <div
              key={course.id}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-yellow-500/40
                hover:shadow-[0_20px_60px_rgba(234,179,8,0.18)]
              "
            >

              {/* Image */}

              <div className="relative h-56 overflow-hidden">

                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-yellow-500 px-4 py-1 text-xs font-semibold text-black">
                  {course.packageName}
                </span>

              </div>

              {/* Body */}

              <div className="flex h-[320px] flex-col p-6">

                <h3 className="text-2xl font-bold text-white transition group-hover:text-yellow-400">
                  {course.title}
                </h3>

                <p className="mt-4 line-clamp-3 leading-7 text-zinc-400">
                  {course.shortDescription}
                </p>

                {/* Stats */}

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">

                  <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3">

                    <Clock3
                      size={18}
                      className="mx-auto mb-2 text-yellow-500"
                    />

                    <p className="text-xs text-zinc-500">
                      Duration
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {course.duration}
                    </p>

                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3">

                    <Users
                      size={18}
                      className="mx-auto mb-2 text-yellow-500"
                    />

                    <p className="text-xs text-zinc-500">
                      Students
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {course.students}+
                    </p>

                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3">

                    <Star
                      size={18}
                      className="mx-auto mb-2 fill-yellow-500 text-yellow-500"
                    />

                    <p className="text-xs text-zinc-500">
                      Rating
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {course.rating}
                    </p>

                  </div>

                </div>

                {/* Button */}

                <div className="mt-auto pt-8">

                  <Button
                    fullWidth
                    onClick={() =>
                      navigate(`/courses/${course.slug}`)
                    }
                    className="group/button"
                  >
                    View Details

                    <ArrowRight
                      size={18}
                      className="ml-2 transition-transform duration-300 group-hover/button:translate-x-1"
                    />

                  </Button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
};

export default RelatedCourses;