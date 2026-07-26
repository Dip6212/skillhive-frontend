import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import { whyChooseUs } from "../../../constants/aboutData";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24">
      <Container>

        <SectionHeading
          title="Why Choose SkillHive?"
          subtitle="We focus on practical learning and career outcomes."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {whyChooseUs.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
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

export default WhyChooseUs;