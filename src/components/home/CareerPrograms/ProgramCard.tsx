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
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-gradient-to-b
      from-zinc-900
      via-[#111111]
      to-black
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-yellow-400/60
      hover:shadow-[0_0_40px_rgba(250,204,21,0.18)]
    "
    >
      {/* Golden Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -top-28
            -right-28
            h-64
            w-64
            rounded-full
            bg-yellow-400/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-24
            -left-24
            h-56
            w-56
            rounded-full
            bg-yellow-500/5
            blur-3xl
          "
        />
      </div>

      {/* Hover Shine */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-[linear-gradient(120deg,transparent,rgba(250,204,21,0.08),transparent)]
        "
      />

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={course.title}
          className="
            h-56
            w-full
            object-cover
            brightness-90
            transition-all
            duration-700
            group-hover:scale-110
            group-hover:brightness-100
          "
          onError={(e) => {
            e.currentTarget.src =
              "/images/courses/course-placeholder.png";
          }}
        />

        {/* Package Badge */}
        <div className="absolute left-4 top-4">
          <span
            className="
              rounded-full
              bg-yellow-400
              px-4
              py-2
              text-xs
              font-bold
              text-black
              shadow-lg
            "
          >
            {course.packageName}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative space-y-5 p-6">

        {/* Tags */}
        <div className="flex gap-2">

          <span
            className="
              rounded-full
              border
              border-yellow-400/20
              bg-yellow-400/10
              px-3
              py-1
              text-xs
              font-semibold
              text-yellow-300
            "
          >
            {level}
          </span>

          <span
            className="
              rounded-full
              border
              border-zinc-700
              bg-zinc-800
              px-3
              py-1
              text-xs
              font-semibold
              text-zinc-300
            "
          >
            {mode}
          </span>

        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white">
          {course.title}
        </h3>

        {/* Description */}
        <p className="line-clamp-3 leading-7 text-zinc-400">
          {course.shortDescription}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-zinc-500">

          <div className="flex items-center gap-2">
            <Clock size={18} className="text-yellow-400" />
            <span>{course.duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={18} className="text-yellow-400" />
            <span>{course.students}+</span>
          </div>

        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">

          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-bold text-white">
            {course.rating.toFixed(1)}
          </span>

        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-5">

          <div className="flex gap-3">

            <Button
              className="flex-1 bg-yellow-400 text-black hover:bg-yellow-300"
              onClick={() =>
                navigate(`/courses/${course.slug}`)
              }
            >
              View Details
            </Button>

            <Button
              variant="outline"
              className="
                flex-1
                border-zinc-700
                bg-transparent
                text-white
                hover:border-yellow-400
                hover:bg-yellow-400/10
                hover:text-yellow-300
              "
              onClick={() => navigate("/contact")}
            >
              Enroll Now
            </Button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProgramCard;