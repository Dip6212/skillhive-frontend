import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import SectionReveal from "@/components/ui/sectionReveal/SectionReveal";

import TestimonialCard from "./TestimonialCard";

import { useTestimonials } from "@/hooks/useTestimonials";

const Testimonials = () => {
  const {
    data: testimonials,
    isLoading,
    isError,
  } = useTestimonials();

  return (
    <SectionReveal>
      <section className="relative overflow-hidden py-28">

        {/* Background Glow */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-yellow-400/5 blur-[170px]" />

          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-yellow-500/5 blur-[150px]" />

        </div>

        <Container>

          <SectionHeading
            title="Student Success Stories"
            subtitle="Hear from our learners who transformed their careers through our industry-focused training programs."
          />

          {isLoading && (
            <div className="mt-16 text-center text-zinc-400">
              Loading testimonials...
            </div>
          )}

          {isError && (
            <div className="mt-16 text-center text-red-500">
              Failed to load testimonials.
            </div>
          )}

          {!isLoading &&
            !isError &&
            testimonials &&
            testimonials.length === 0 && (
              <div className="mt-16 text-center text-zinc-400">
                No testimonials found.
              </div>
            )}

          {!isLoading &&
            !isError &&
            testimonials &&
            testimonials.length > 0 && (
              <div className="relative mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}

              </div>
            )}

        </Container>

      </section>
    </SectionReveal>
  );
};

export default Testimonials;