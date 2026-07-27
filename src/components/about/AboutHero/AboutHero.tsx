import Container from "../../ui/Container/Container";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-black py-28 lg:py-36">

      {/* Background Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -left-32
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-yellow-400/10
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            right-0
            top-10
            h-[420px]
            w-[420px]
            rounded-full
            bg-yellow-500/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[320px]
            w-[320px]
            -translate-x-1/2
            rounded-full
            bg-yellow-300/5
            blur-[140px]
          "
        />

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[#050505]" />

      <Container>

        <div className="relative mx-auto max-w-5xl text-center">

          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-yellow-400/20
              bg-yellow-400/10
              px-5
              py-2
              text-sm
              font-semibold
              tracking-wide
              text-yellow-400
            "
          >
            ✨ About SkillHive
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">

            Empowering Careers Through

            <span className="block text-yellow-400">
              Practical Learning
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">

            At SkillHive, we bridge the gap between education and industry by
            providing practical training, real-world projects, expert
            mentorship, and dedicated placement support to help every learner
            build a successful career.

          </p>

          {/* Decorative Divider */}
          <div className="mx-auto mt-10 h-1 w-28 rounded-full bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500" />

        </div>

      </Container>

    </section>
  );
};

export default AboutHero;