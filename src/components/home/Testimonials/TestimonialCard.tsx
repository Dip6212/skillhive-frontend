import { Star } from "lucide-react";

import type { TestimonialResponse } from "@/services/testimonialService";

interface TestimonialCardProps {
  testimonial: TestimonialResponse;
}

const TestimonialCard = ({
  testimonial,
}: TestimonialCardProps) => {
  const image =
    testimonial.profileImage?.fileUrl &&
    testimonial.profileImage.fileUrl.trim() !== ""
      ? testimonial.profileImage.fileUrl
      : "/images/avatar-placeholder.png";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Student Image */}

      <div className="flex justify-center">
        <img
          src={image}
          alt={testimonial.name}
          className="h-24 w-24 rounded-full border-4 border-blue-100 object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "/images/avatar-placeholder.png";
          }}
        />
      </div>

      {/* Student Details */}

      <div className="mt-6 text-center">

        <h3 className="text-2xl font-bold text-slate-900">
          {testimonial.name}
        </h3>

        <p className="mt-1 font-medium text-blue-600">
          {testimonial.designation}
        </p>

        <p className="mt-1 text-slate-600">
          {testimonial.company}
        </p>

      </div>

      {/* Rating */}

      <div className="mt-6 flex justify-center gap-1">

        {Array.from({
          length: testimonial.rating,
        }).map((_, index) => (
          <Star
            key={index}
            size={20}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}

      </div>

      {/* Review */}

      <p className="mt-6 text-center italic leading-7 text-slate-600">
        "{testimonial.review}"
      </p>

    </div>
  );
};

export default TestimonialCard;