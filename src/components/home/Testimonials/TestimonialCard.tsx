import { Star, Quote } from "lucide-react";

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
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-yellow-400/60
      hover:shadow-[0_0_45px_rgba(250,204,21,0.18)]
    "
    >

      {/* Golden Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-yellow-400/10 blur-3xl" />

      </div>

      {/* Quote Icon */}

      <Quote
        size={52}
        className="
        absolute
        right-6
        top-6
        text-yellow-400/10
      "
      />

      {/* Avatar */}

      <div className="flex justify-center">

        <img
          src={image}
          alt={testimonial.name}
          className="
            h-24
            w-24
            rounded-full
            border-4
            border-yellow-400/40
            object-cover
            shadow-lg
            transition-all
            duration-500
            group-hover:scale-110
          "
          onError={(e) => {
            e.currentTarget.src =
              "/images/avatar-placeholder.png";
          }}
        />

      </div>

      {/* Name */}

      <div className="mt-6 text-center">

        <h3 className="text-2xl font-bold text-white">
          {testimonial.name}
        </h3>

        <p className="mt-1 font-semibold text-yellow-400">
          {testimonial.designation}
        </p>

        <p className="mt-1 text-zinc-400">
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
            size={18}
            className="
            fill-yellow-400
            text-yellow-400
          "
          />
        ))}

      </div>

      {/* Divider */}

      <div className="my-6 border-t border-zinc-800" />

      {/* Review */}

      <p
        className="
        text-center
        italic
        leading-8
        text-zinc-300
      "
      >
        "{testimonial.review}"
      </p>

    </div>
  );
};

export default TestimonialCard;