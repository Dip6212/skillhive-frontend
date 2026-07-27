import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import { missionVision } from "../../../constants/aboutData";

const MissionVision = () => {
  return (
    <section className="relative overflow-hidden bg-black py-28">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-yellow-400/10
            blur-[170px]
          "
        />

      </div>

      <Container>

        <SectionHeading
          title="Mission & Vision"
          subtitle="Everything we do is driven by our passion for helping students build successful careers."
          // className="text-center"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {missionVision.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-zinc-800
                  bg-gradient-to-br
                  from-zinc-900
                  via-[#111111]
                  to-black
                  p-10
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-yellow-500/60
                  hover:shadow-[0_25px_60px_rgba(250,204,21,0.15)]
                "
              >
                {/* Decorative Glow */}
                <div
                  className="
                    absolute
                    -right-16
                    -top-16
                    h-44
                    w-44
                    rounded-full
                    bg-yellow-400/10
                    blur-3xl
                    transition-opacity
                    duration-500
                    opacity-0
                    group-hover:opacity-100
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    z-10
                    mb-8
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-yellow-400/20
                    bg-yellow-400/10
                    text-yellow-400
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-yellow-400
                    group-hover:text-black
                  "
                >
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3
                  className="
                    relative
                    z-10
                    text-3xl
                    font-bold
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-yellow-300
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    relative
                    z-10
                    mt-6
                    leading-8
                    text-zinc-400
                  "
                >
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

export default MissionVision;