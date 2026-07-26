import { CheckCircle2 } from "lucide-react";

import Container from "../../ui/Container/Container";

import type { CourseDetailsResponse } from "@/services/courseService";

interface Props {
  course: CourseDetailsResponse;
}

const CourseOverview = ({ course }: Props) => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">
              Course Overview
            </h2>

            <p className="mt-8 leading-8 text-slate-600">
              {course.description}
            </p>
          </div>

          <div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-2xl font-bold">
                Course Information
              </h3>

              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" />
                  <span>Level : {course.level}</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" />
                  <span>Mode : {course.mode}</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" />
                  <span>Duration : {course.duration}</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" />
                  <span>Students : {course.students}+</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseOverview;