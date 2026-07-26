import { useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface CarouselProps {
  children: ReactNode[];
  className?: string;
}

const Carousel = ({ children, className }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = children.length;

  if (totalSlides === 0) return null;

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? totalSlides - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === totalSlides - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-xl">{children[activeIndex]}</div>

      {totalSlides > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {children.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition",
                  index === activeIndex ? "bg-blue-600" : "bg-slate-300",
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Carousel;
