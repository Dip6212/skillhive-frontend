import {
  CheckCircle2,
  GraduationCap,
  MonitorSmartphone,
  Clock3,
  Users,
} from "lucide-react";

import Container from "../../ui/Container/Container";

import type { CourseDetailsResponse } from "@/services/courseService";

interface Props {
  course: CourseDetailsResponse;
}

const CourseOverview = ({ course }: Props) => {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/5 blur-[180px]" />

      <Container>

        <div className="grid items-start gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
              Course Details
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              Course Overview
            </h2>

            <p className="mt-8 leading-8 text-lg text-zinc-400">
              {course.description}
            </p>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

            <h3 className="text-2xl font-bold text-white">
              Course Information
            </h3>

            <div className="mt-8 space-y-5">

              <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

                <div className="flex items-center gap-3">

                  <GraduationCap
                    size={22}
                    className="text-yellow-500"
                  />

                  <span className="text-zinc-400">
                    Level
                  </span>

                </div>

                <span className="font-semibold text-white">
                  {course.level}
                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

                <div className="flex items-center gap-3">

                  <MonitorSmartphone
                    size={22}
                    className="text-yellow-500"
                  />

                  <span className="text-zinc-400">
                    Mode
                  </span>

                </div>

                <span className="font-semibold text-white">
                  {course.mode}
                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

                <div className="flex items-center gap-3">

                  <Clock3
                    size={22}
                    className="text-yellow-500"
                  />

                  <span className="text-zinc-400">
                    Duration
                  </span>

                </div>

                <span className="font-semibold text-white">
                  {course.duration}
                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

                <div className="flex items-center gap-3">

                  <Users
                    size={22}
                    className="text-yellow-500"
                  />

                  <span className="text-zinc-400">
                    Students
                  </span>

                </div>

                <span className="font-semibold text-white">
                  {course.students}+
                </span>

              </div>

            </div>

            <div className="mt-10 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">

              <div className="flex items-start gap-3">

                <CheckCircle2
                  className="mt-0.5 text-yellow-500"
                />

                <p className="text-sm leading-7 text-zinc-300">
                  Industry-oriented curriculum with practical projects,
                  expert mentorship, placement assistance, and certification
                  support to help you become job-ready.
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default CourseOverview;