import Container from "../../ui/Container/Container";

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center text-white">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            About SkillHive
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Empowering Careers Through Practical Learning
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            We help aspiring professionals build industry-ready skills through
            live training, real-world projects, mentorship, and dedicated
            placement assistance.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;