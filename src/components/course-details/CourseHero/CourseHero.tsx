import { Download, Star, Users, Clock } from "lucide-react";
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
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="text-white">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              {course.level}
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              {course.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              {course.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                {course.duration}
              </div>

              <div className="flex items-center gap-2">
                <Users size={20} />
                {course.students}+ Students
              </div>

              <div className="flex items-center gap-2">
                <Star
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />
                {course.rating}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button onClick={() => navigate("/contact")}>
                Enroll Now
              </Button>

              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700"
                onClick={downloadBrochure}
              >
                <Download size={18} className="mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>

          <div>
            <img
              src={course.imageUrl}
              alt={course.title}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseHero;