import { Download, Star, Users, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button/Button";
import Container from "../../ui/Container/Container";

import type { CourseDetailsResponse } from "@/services/courseService";

interface Props {
  course: CourseDetailsResponse;
}

const CourseHero = ({ course }: Props) => {
  const navigate = useNavigate();

  const downloadBrochure = () => {
    if (course.brochureUrl) {
      window.open(course.brochureUrl, "_blank");
    }
  };

  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/5 blur-[180px]" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
              {course.level}
            </span>

            <h1 className="mt-7 text-5xl font-bold leading-tight text-white lg:text-6xl">
              {course.title}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
              {course.shortDescription}
            </p>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-3 gap-4">

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 backdrop-blur">
                <Clock
                  size={22}
                  className="mb-3 text-yellow-500"
                />

                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Duration
                </p>

                <h4 className="mt-1 font-semibold text-white">
                  {course.duration}
                </h4>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 backdrop-blur">
                <Users
                  size={22}
                  className="mb-3 text-yellow-500"
                />

                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Students
                </p>

                <h4 className="mt-1 font-semibold text-white">
                  {course.students}+
                </h4>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 backdrop-blur">
                <Star
                  size={22}
                  className="mb-3 fill-yellow-500 text-yellow-500"
                />

                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Rating
                </p>

                <h4 className="mt-1 font-semibold text-white">
                  {course.rating}
                </h4>
              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Button
                onClick={() => navigate("/contact")}
                className="group"
              >
                Enroll Now

                <ArrowRight
                  size={18}
                  className="ml-2 transition group-hover:translate-x-1"
                />
              </Button>

              <Button
                variant="outline"
                className="border-yellow-500/40 bg-zinc-900 text-yellow-400 hover:bg-yellow-500 hover:text-black"
                onClick={downloadBrochure}
              >
                <Download
                  size={18}
                  className="mr-2"
                />

                Download Brochure
              </Button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute -inset-4 rounded-[34px] bg-yellow-500/20 blur-3xl" />

            <img
              src={course.imageUrl}
              alt={course.title}
              className="
                relative
                w-full
                rounded-[32px]
                border
                border-zinc-800
                object-cover
                shadow-[0_25px_70px_rgba(0,0,0,0.6)]
                transition
                duration-500
                hover:scale-[1.02]
              "
            />

          </div>

        </div>
      </Container>
    </section>
  );
};

export default CourseHero;