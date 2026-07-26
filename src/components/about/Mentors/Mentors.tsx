import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import { mentors } from "../../../constants/aboutData";

const Mentors = () => {
  return (
    <section className="bg-white py-24">

      <Container>

        <SectionHeading
          title="Meet Our Mentors"
          subtitle="Experienced professionals dedicated to helping you succeed."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="mx-auto h-36 w-36 rounded-full object-cover"
              />

              <h3 className="mt-6 text-2xl font-bold">
                {mentor.name}
              </h3>

              <p className="mt-2 text-blue-600">
                {mentor.role}
              </p>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Mentors;