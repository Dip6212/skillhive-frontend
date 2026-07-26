import { useParams } from "react-router-dom";

import Container from "../../ui/Container/Container";

import { courseTechnologies } from "../../../constants/courseTechnologies";

const TechnologySection = () => {
  const { slug } = useParams();

  const course = courseTechnologies.find(
    (course) => course.slug === slug
  );

  if (!course) return null;

  return (
    <section className="bg-white py-24">

      <Container>

        <h2 className="text-center text-4xl font-bold">
          Technologies You'll Learn
        </h2>

        <p className="mt-4 text-center text-slate-600">
          Master modern technologies used by leading software companies.
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-5">

          {course.technologies.map((technology) => (

            <div
              key={technology}
              className="
                rounded-full
                border
                border-blue-200
                bg-blue-50
                px-6
                py-3
                text-lg
                font-semibold
                text-blue-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-600
                hover:text-white
              "
            >
              {technology}
            </div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default TechnologySection;