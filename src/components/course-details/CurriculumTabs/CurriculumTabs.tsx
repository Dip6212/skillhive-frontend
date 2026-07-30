import { useMemo, useState } from "react";
import { BookOpen, Clock3 } from "lucide-react";

import Container from "../../ui/Container/Container";

import type {
  CourseDetailsResponse,
  PackageResponse,
} from "@/services/courseService";

interface Props {
  course: CourseDetailsResponse;
}

const CurriculumTabs = ({ course }: Props) => {
  const [selectedPackage, setSelectedPackage] =
    useState<"BASIC" | "ADVANCE" | "PRO">("BASIC");

  const currentPackage = useMemo(() => {
    return course.packages.find(
      (pkg) => pkg.name === selectedPackage
    );
  }, [selectedPackage, course]);

  if (!currentPackage) return null;

  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/5 blur-[180px]" />

      <Container>

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
            Learning Roadmap
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Course Curriculum
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Explore the complete learning roadmap designed to take you from
            beginner to job-ready through structured modules.
          </p>

        </div>

        {/* Package Tabs */}

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {course.packages.map((pkg: PackageResponse) => (

            <button
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg.name)}
              className={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
                selectedPackage === pkg.name
                  ? "bg-yellow-500 text-black shadow-lg"
                  : "border border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-yellow-500 hover:text-yellow-400"
              }`}
            >
              {pkg.name}
            </button>

          ))}

        </div>

        {/* Modules */}

        <div className="mt-16 space-y-6">

          {currentPackage.modules.map((module, index) => (

            <div
              key={module.id}
              className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:border-yellow-500/40 hover:shadow-[0_20px_50px_rgba(234,179,8,0.12)]"
            >

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500">

                    <BookOpen size={24} />

                  </div>

                  <div>

                    <span className="text-sm font-semibold uppercase tracking-widest text-yellow-500">
                      Module {index + 1}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {module.title}
                    </h3>

                  </div>

                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-sm font-semibold text-yellow-400">

                  <Clock3 size={18} />

                  {module.duration}

                </div>

              </div>

              <div className="mt-6 border-t border-zinc-800 pt-6">

                <p className="leading-8 text-zinc-400">
                  {module.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
};

export default CurriculumTabs;