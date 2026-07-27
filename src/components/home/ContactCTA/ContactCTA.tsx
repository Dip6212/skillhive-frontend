import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import SectionReveal from "@/components/ui/sectionReveal/SectionReveal";
import { useSettings } from "@/hooks/useSettings";

const ContactCTA = () => {
  const navigate = useNavigate();

  const { data: settings } = useSettings();

  return (
    <SectionReveal>
      <section className="relative py-32 overflow-hidden">

        {/* Background Glow */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[180px]" />

          <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-yellow-500/5 blur-[140px]" />

          <div className="absolute right-0 top-20 h-[300px] w-[300px] rounded-full bg-yellow-300/5 blur-[120px]" />

        </div>

        <Container>

          <div
            className="
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-[40px]
            border
            border-yellow-400/20
            bg-gradient-to-br
            from-zinc-900
            via-[#111111]
            to-black
            px-8
            py-20
            text-center
            shadow-[0_0_80px_rgba(250,204,21,0.08)]
            md:px-16
          "
          >

            {/* Decorative Glow */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

            <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-yellow-500/5 blur-[120px]" />

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
              {settings?.cta_badge ?? "🚀 Start Your Career Today"}
            </span>

            {/* Heading */}

            <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">

              {settings?.cta_title ??
                "Ready To Become Job Ready?"}

            </h2>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">

              {settings?.cta_description ??
                "Join thousands of learners who transformed their careers through industry-focused training, live mentorship and guaranteed placement assistance."}

            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Button
                className="
                bg-yellow-400
                text-black
                hover:bg-yellow-300
                shadow-lg
              "
                onClick={() => navigate("/contact")}
              >
                {settings?.cta_primary_button ??
                  "Book Free Counselling"}
              </Button>

              <Button
                variant="outline"
                className="
                border-zinc-700
                bg-transparent
                text-white
                hover:border-yellow-400
                hover:bg-yellow-400/10
                hover:text-yellow-300
              "
                onClick={() => navigate("/courses")}
              >
                {settings?.cta_secondary_button ??
                  "Explore Courses"}

                <ArrowRight
                  className="ml-2"
                  size={18}
                />

              </Button>

            </div>

            {/* Bottom Stats */}

            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-zinc-800 pt-10 md:grid-cols-4">

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  5000+
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Students Trained
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  1200+
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Placements
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  100+
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Hiring Partners
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  4.9★
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Student Rating
                </p>
              </div>

            </div>

          </div>

        </Container>

      </section>
    </SectionReveal>
  );
};

export default ContactCTA;