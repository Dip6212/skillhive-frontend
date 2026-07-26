import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";

import PlacementCard from "./PlacementCard";

import { placementSteps } from "../../../constants/placementData";
import SectionReveal from "@/components/ui/sectionReveal/SectionReveal";

const PlacementAssistance = () => {
  return (
    <SectionReveal>
    <section className="bg-slate-50 py-24">

      <Container>

        <SectionHeading
          title="Complete Placement Assistance"
          subtitle="We don't just teach. We prepare you for interviews and help you launch your career."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {placementSteps.map((step) => (
            <PlacementCard
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

export default PlacementAssistance;