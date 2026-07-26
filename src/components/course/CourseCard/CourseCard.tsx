import { useNavigate } from "react-router-dom";
import { Clock, Star } from "lucide-react";

import Button from "../../ui/Button/Button";

// import type { Course } from "../../../constants/courseData";
import type{ Course } from "@/types/course";
interface Props {
  course: Course;
}

const CourseCard = ({ course }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <img
        src={course.imageUrl}
        alt={course.title}
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="space-y-4 p-6">

        <div className="flex justify-between">

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            {course.level}
          </span>

          <span className="flex items-center gap-1">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            {course.rating}
          </span>

        </div>

        <h3 className="text-2xl font-bold">
          {course.title}
        </h3>

        <p className="text-slate-600">
          {course.shortDescription}
        </p>

        <div className="flex items-center gap-2 text-slate-500">

          <Clock size={18} />

          {course.duration}

        </div>

        <Button
          fullWidth
          onClick={() =>
            navigate(`/courses/${course.slug}`)
          }
        >
          View Details
        </Button>

      </div>

    </div>
  );
};

export default CourseCard;