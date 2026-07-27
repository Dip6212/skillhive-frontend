import { useMemo, useState } from "react";

import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import SectionReveal from "@/components/ui/sectionReveal/SectionReveal";

import ProgramCard from "./ProgramCard";

import { useCourses } from "@/hooks/useCourses";

const tabs = ["BASIC", "ADVANCE", "PRO"] as const;

const CareerPrograms = () => {
  const [selectedPackage, setSelectedPackage] =
    useState<"BASIC" | "ADVANCE" | "PRO">("BASIC");

  const {
    data: courses,
    isLoading,
    isError,
  } = useCourses();


console.log("Courses =>", courses);

const filteredCourses = useMemo(() => {
  if (!courses) return [];

  const filtered = courses.filter(
    (course) =>
      course.featured &&
      course.packageName === selectedPackage
  );

  console.log("Selected:", selectedPackage);
  console.log("Filtered:", filtered);

  return filtered;
}, [courses, selectedPackage]);

  return (
    <SectionReveal>
      <section  className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black py-24 lg:py-32">
        <Container>

          <SectionHeading
            title="Our Career Programs"
            subtitle="Choose your learning level and explore the programs designed for you."
          />

          {/* Tabs */}

          <div className="mt-12 flex justify-center gap-4">

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedPackage(tab)}
                className={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
                  selectedPackage === tab
                    ? "bg-yellow-600 text-white shadow-lg"
                    : "border border-slate-200 bg-white hover:bg-slate-100"
                }`}
              >
                {tab}
              </button>
            ))}

          </div>

          {/* Loading */}

          {isLoading && (
            <div className="mt-16 text-center text-slate-500">
              Loading career programs...
            </div>
          )}

          {/* Error */}

          {isError && (
            <div className="mt-16 text-center text-red-500">
              Failed to load career programs.
            </div>
          )}

          {/* Empty */}

          {!isLoading &&
            !isError &&
            filteredCourses.length === 0 && (
              <div className="mt-16 text-center text-slate-500">
                No courses available.
              </div>
            )}

          {/* Cards */}

          {!isLoading &&
            !isError &&
            filteredCourses.length > 0 && (
              <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                {filteredCourses.map((course) => (
                  <ProgramCard
                    key={course.id}
                    course={course}
                  />
                ))}

              </div>
            )}

        </Container>
      </section>
    </SectionReveal>
  );
};

export default CareerPrograms;