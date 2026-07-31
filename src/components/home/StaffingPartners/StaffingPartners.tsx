import SectionReveal from "@/components/ui/sectionReveal/SectionReveal";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import InfiniteSlider from "./InfiniteSlider";

const StaffingPartners = () => {
  return (
    <SectionReveal>
    <section  className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black py-24 lg:py-32">
    
      <Container>

        <SectionHeading
          title="Hiring Partners for Degree Courses"
          subtitle="Our learners get opportunities with startups, MNCs and product companies."
        />

        <div className="mt-16">

          <InfiniteSlider />

        </div>

      </Container>

    </section>
    </SectionReveal>
  );
};

export default StaffingPartners;