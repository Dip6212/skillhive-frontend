import Container from "../../ui/Container/Container";

const AboutStory = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <img
              src="/images/logo.png"
              alt="About SkillHive"
              className="rounded-3xl shadow-lg"
            />
          </div>

          <div>

            <h2 className="text-4xl font-bold text-slate-900">
              Our Story
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              SkillHive was founded with a simple mission—to bridge the gap
              between academic education and industry expectations.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Through practical projects, mentorship from experienced
              professionals, and continuous placement support, we prepare
              learners for successful careers in technology.
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutStory;