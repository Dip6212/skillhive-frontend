import { Clock, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button/Button";

import type { CourseResponse } from "@/services/courseService";

interface ProgramCardProps {
  course: CourseResponse;
}

const ProgramCard = ({ course }: ProgramCardProps) => {
  const navigate = useNavigate();

  const image =
    course.imageUrl && course.imageUrl.trim() !== ""
      ? course.imageUrl
      : "/images/courses/course-placeholder.png";

  const level =
    course.level.charAt(0).toUpperCase() +
    course.level.slice(1).toLowerCase();

  const mode =
    course.mode.charAt(0).toUpperCase() +
    course.mode.slice(1).toLowerCase();

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={course.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src =
              "/images/courses/course-placeholder.png";
          }}
        />

        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-lg">
            {course.packageName}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="space-y-5 p-6">
        <div className="flex gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {level}
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {mode}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          {course.title}
        </h3>

        <p className="leading-7 text-slate-600 line-clamp-3">
          {course.shortDescription}
        </p>

        <div className="flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{course.duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={18} />
            <span>{course.students}+</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-semibold">
            {course.rating.toFixed(1)}
          </span>
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            className="flex-1"
            onClick={() =>
              navigate(`/courses/${course.slug}`)
            }
          >
            View Details
          </Button>

          <Button
            variant="outline"
            className="flex-1"
            onClick={() => navigate("/contact")}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;