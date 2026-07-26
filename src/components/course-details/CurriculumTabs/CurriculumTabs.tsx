import { useMemo, useState } from "react";

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
    <section className="bg-slate-50 py-24">
      <Container>
        <h2 className="text-center text-4xl font-bold">
          Course Curriculum
        </h2>

        <p className="mt-4 text-center text-slate-600">
          Explore the learning roadmap for each package.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          {course.packages.map((pkg: PackageResponse) => (
            <button
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg.name)}
              className={`rounded-full px-8 py-3 font-semibold transition-all ${
                selectedPackage === pkg.name
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border border-slate-200 bg-white hover:bg-slate-100"
              }`}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        <div className="mt-16 space-y-6">
          {currentPackage.modules.map((module) => (
            <div
              key={module.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">
                  {module.title}
                </h3>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  {module.duration}
                </span>
              </div>

              <p className="mt-4 leading-7 text-slate-600">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CurriculumTabs;