import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MultiCarouselProps {
  children: ReactNode[];
  className?: string;
}

const MultiCarousel = ({
  children,
  className = "",
}: MultiCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1280) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(children.length - cardsPerView, 0);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleCards = children.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <div className={`relative ${className}`}>
      <div className="flex justify-center">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {visibleCards}
      </div>
      </div>
      {children.length > cardsPerView && (
        <>
          <button
            onClick={previous}
            className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900 p-3 text-white transition hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900 p-3 text-white transition hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
          >
            <ChevronRight size={22} />
          </button>

          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-8 bg-yellow-500"
                    : "w-2 bg-zinc-600"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MultiCarousel;