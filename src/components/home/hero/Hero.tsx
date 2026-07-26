import { useNavigate } from "react-router-dom";

import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import SectionReveal from "@/components/ui/sectionReveal/SectionReveal";

import { useHero } from "@/hooks/useHero";

const stats = [
  {
    value: "5000+",
    label: "Students Trained",
  },
  {
    value: "1200+",
    label: "Successful Placements",
  },
  {
    value: "100+",
    label: "Hiring Partners",
  },
  {
    value: "4.9★",
    label: "Student Rating",
  },
];

const Hero = () => {
  const navigate = useNavigate();

  const {
    data: hero,
    isLoading,
    isError,
  } = useHero();

  if (isLoading) {
    return (
      <section className="py-40 text-center">
        <h2 className="text-2xl font-semibold">
          Loading...
        </h2>
      </section>
    );
  }

  if (isError || !hero) {
    return (
      <section className="py-40 text-center">
        <h2 className="text-2xl font-semibold text-red-600">
          Failed to load hero section.
        </h2>
      </section>
    );
  }

  return (
    <SectionReveal>
      <section
        className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-24 lg:py-32"
        style={
          hero.backgroundImage?.fileUrl
            ? {
                backgroundImage: `url(${hero.backgroundImage.fileUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

        <Container>
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                🚀 Industry Ready Training
              </span>

              <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                {hero.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                {hero.subtitle}
              </p>

              {hero.description && (
                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
                  {hero.description}
                </p>
              )}

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() =>
                    navigate(hero.primaryButtonLink || "/courses")
                  }
                >
                  {hero.primaryButtonText}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    navigate(hero.secondaryButtonLink || "/contact")
                  }
                >
                  {hero.secondaryButtonText}
                </Button>
              </div>

              <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <h2 className="text-3xl font-bold text-blue-700">
                      {stat.value}
                    </h2>

                    <p className="mt-2 text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative">
              <img
                src={hero.heroImage?.fileUrl || "/hero.png"}
                alt={hero.title}
                className="mx-auto w-full max-w-2xl"
              />

              <div className="absolute left-0 top-10 rounded-xl bg-white px-5 py-3 shadow-xl">
                Java
              </div>

              <div className="absolute right-0 top-24 rounded-xl bg-white px-5 py-3 shadow-xl">
                React
              </div>

              <div className="absolute left-10 bottom-16 rounded-xl bg-white px-5 py-3 shadow-xl">
                AWS
              </div>

              <div className="absolute right-10 bottom-4 rounded-xl bg-white px-5 py-3 shadow-xl">
                AI
              </div>
            </div>
          </div>
        </Container>
      </section>
    </SectionReveal>
  );
};

export default Hero;