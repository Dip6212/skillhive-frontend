import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import SectionReveal from "@/components/ui/sectionReveal/SectionReveal";
import MultiCarousel from "@/components/MultiCarousel/MultiCarousel";

import UniversityProgramCard from "./UniversityProgramCard";

import { universityPrograms } from "@/constants/universityPrograms";

const UniversityPrograms = () => {
  return (
    <SectionReveal>
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black py-24 lg:py-32">

        {/* Background Blur */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/5 blur-[180px]" />

        <Container>

          <SectionHeading
            title="University Online Programs"
            subtitle="Earn UGC-approved online degrees from India's leading universities and advance your career with flexible, industry-relevant education."
          />

          <div className="mt-16">

            <MultiCarousel>

              {universityPrograms.map((program) => (
                <UniversityProgramCard
                  key={program.id}
                  program={program}
                />
              ))}

            </MultiCarousel>

          </div>

        </Container>
      </section>
    </SectionReveal>
  );
};

export default UniversityPrograms;