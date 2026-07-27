import Container from "../../ui/Container/Container";

const AboutStory = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            -right-32
            top-20
            h-96
            w-96
            rounded-full
            bg-yellow-400/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -left-32
            bottom-0
            h-80
            w-80
            rounded-full
            bg-yellow-500/5
            blur-[120px]
          "
        />

      </div>

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Image */}

          <div className="relative">

            <div
              className="
                absolute
                inset-0
                rounded-[32px]
                bg-yellow-400/20
                blur-3xl
                scale-95
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-zinc-800
                bg-gradient-to-br
                from-zinc-900
                to-black
                p-10
              "
            >
              <img
                src="/images/logo.png"
                alt="SkillHive"
                className="
                  mx-auto
                  w-64
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>

          </div>

          {/* Right Content */}

          <div>

            <span
              className="
                inline-flex
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
              OUR JOURNEY
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-white">

              Building Careers,
              <span className="block text-yellow-400">
                Not Just Courses.
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-400">

              SkillHive was founded with one clear mission—to bridge the gap
              between traditional education and the real expectations of the
              tech industry. We believe learning should lead directly to
              opportunity.

            </p>

            <p className="mt-6 text-lg leading-9 text-zinc-400">

              Through hands-on projects, mentorship from experienced
              professionals, interview preparation, and dedicated placement
              support, we help learners transform knowledge into successful
              careers.

            </p>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-5">

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-center">

                <h3 className="text-3xl font-bold text-yellow-400">
                  1000+
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Students
                </p>

              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-center">

                <h3 className="text-3xl font-bold text-yellow-400">
                  25+
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Industry Mentors
                </p>

              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-center">

                <h3 className="text-3xl font-bold text-yellow-400">
                  95%
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Placement Support
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default AboutStory;