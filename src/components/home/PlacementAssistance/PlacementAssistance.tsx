import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";

import PlacementCard from "./PlacementCard";

import { placementSteps } from "../../../constants/placementData";
import SectionReveal from "@/components/ui/sectionReveal/SectionReveal";

const PlacementAssistance = () => {
  return (
    <SectionReveal>
      <section className="relative overflow-hidden py-28">

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/4 top-10 h-[450px] w-[450px] rounded-full bg-yellow-400/5 blur-[150px]" />

          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-yellow-500/5 blur-[140px]" />

        </div>

        <Container>

          <SectionHeading
            title="Complete Placement Assistance"
            subtitle="We don't just teach. We prepare you for interviews and help you launch your career."
          />

          <div className="relative mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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