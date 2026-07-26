import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";

import JourneyCard from "./JourneyCard";

import { journeySteps } from "../../../constants/journeyData";
import SectionReveal from "@/components/ui/sectionReveal/SectionReveal";

const LearningJourney = () => {
  return (
    <SectionReveal>
    <section className="bg-white py-24">

      <Container>

        <SectionHeading
          title="Your Learning Journey"
          subtitle="A structured roadmap that helps you become industry-ready and confident for placements."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {journeySteps.map((step) => (
            <JourneyCard
              key={step.id}
              step={step}
            />
          ))}

        </div>

      </Container>

    </section>
    </SectionReveal>
  );
};

export default LearningJourney;