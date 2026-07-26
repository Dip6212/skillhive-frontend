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
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            title="Student Success Stories"
            subtitle="Hear from our learners who transformed their careers through our industry-focused training programs."
          />

          {isLoading && (
            <div className="mt-16 text-center text-slate-500">
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
              <div className="mt-16 text-center text-slate-500">
                No testimonials found.
              </div>
            )}

          {!isLoading &&
            !isError &&
            testimonials &&
            testimonials.length > 0 && (
              <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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