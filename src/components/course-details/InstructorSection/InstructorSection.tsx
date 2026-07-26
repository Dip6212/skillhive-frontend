import { useParams } from "react-router-dom";

import Container from "../../ui/Container/Container";

import { instructors } from "../../../constants/instructors";

const InstructorSection = () => {
  const { slug } = useParams();

  const instructor = instructors.find(
    (item) => item.slug === slug
  );

  if (!instructor) return null;

  return (
    <section className="bg-slate-50 py-24">

      <Container>

        <h2 className="text-center text-4xl font-bold">
          Meet Your Mentor
        </h2>

        <div className="mx-auto mt-16 max-w-5xl rounded-3xl bg-white p-10 shadow-lg">

          <div className="grid items-center gap-10 md:grid-cols-3">

            <img
              src={instructor.image}
              alt={instructor.name}
              className="mx-auto h-60 w-60 rounded-full object-cover"
            />

            <div className="md:col-span-2">

              <h3 className="text-3xl font-bold">
                {instructor.name}
              </h3>

              <p className="mt-2 text-blue-600">
                {instructor.designation}
              </p>

              <p className="mt-2 text-slate-500">
                {instructor.experience}
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                {instructor.bio}
              </p>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default InstructorSection;