import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import { missionVision } from "../../../constants/aboutData";

const MissionVision = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <SectionHeading
          title="Mission & Vision"
          subtitle="Everything we do is driven by our passion for helping students build successful careers."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {missionVision.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
};

export default MissionVision;