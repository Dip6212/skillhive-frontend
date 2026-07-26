import SectionReveal from "@/components/ui/sectionReveal/SectionReveal";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import InfiniteSlider from "./InfiniteSlider";

const StaffingPartners = () => {
  return (
    <SectionReveal>
    <section className="bg-white py-24">

      <Container>

        <SectionHeading
          title="Trusted Staffing Partners"
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