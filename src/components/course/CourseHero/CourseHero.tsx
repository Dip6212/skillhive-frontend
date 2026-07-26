import Container from "../../ui/Container/Container";

const CourseHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-24">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <h1 className="text-5xl font-bold text-white">
            Our Career Programs
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Industry-ready training programs designed to help you become
            job-ready with practical projects, mentorship and placement
            assistance.
          </p>

        </div>

      </Container>

    </section>
  );
};

export default CourseHero;