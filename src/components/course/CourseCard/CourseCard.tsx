import { useNavigate } from "react-router-dom";
import { ArrowRight, Clock, Star } from "lucide-react";

import Button from "../../ui/Button/Button";

import type { Course } from "@/types/course";

interface Props {
  course: Course;
}

const CourseCard = ({ course }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="
      group
      flex
      flex-col
      overflow-hidden
      rounded-[28px]
      border
      border-zinc-800
      bg-gradient-to-b
      from-zinc-900
      via-[#111111]
      to-black
      transition-all
      duration-500
      hover:border-yellow-500/70
      hover:shadow-[0_25px_60px_rgba(250,204,21,0.15)]
    "
    >
      {/* IMAGE */}

      <div
        className="
        relative
        overflow-hidden
        bg-black
        flex-shrink-0
      "
      >
        <img
          src={course.imageUrl}
          alt={course.title}
          className="
            block
            h-60
            w-full
            object-cover
            brightness-90
            transition-all
            duration-500
            ease-out
            group-hover:scale-[1.03]
            group-hover:brightness-100
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute left-5 top-5">
          <span
            className="
            rounded-full
            border
            border-yellow-500/40
            bg-yellow-500/15
            px-4
            py-2
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-yellow-300
          "
          >
            {course.level}
          </span>
        </div>
      </div>

      {/* CONTENT */}

      <div
        className="
        flex
        flex-1
        flex-col
        bg-gradient-to-b
        from-[#121212]
        to-black
        p-7
      "
      >
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="font-semibold">
              {course.rating}
            </span>
          </div>

          <div className="flex items-center gap-2 text-zinc-500">
            <Clock
              size={18}
              className="text-yellow-400"
            />
            <span>{course.duration}</span>
          </div>
        </div>

        <h3
          className="
          text-2xl
          font-bold
          text-white
          transition-colors
          duration-300
          group-hover:text-yellow-300
        "
        >
          {course.title}
        </h3>

        <p
          className="
          mt-5
          flex-1
          leading-8
          text-zinc-400
          line-clamp-3
        "
        >
          {course.shortDescription}
        </p>

        <div className="mt-7 border-t border-zinc-800 pt-6">
          <Button
            fullWidth
            className="
            group/button
            flex
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-yellow-400
            py-3
            font-semibold
            text-black
            transition-all
            duration-300
            hover:bg-yellow-300
          "
            onClick={() => navigate(`/courses/${course.slug}`)}
          >
            View Details

            <ArrowRight
              size={18}
              className="
              transition-transform
              duration-300
              group-hover/button:translate-x-1
            "
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;