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
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-24">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <Container>

          <div className="mx-auto max-w-5xl text-center text-white">

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              {settings?.cta_badge ?? "Start Your Career Today"}
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              {settings?.cta_title ?? "Ready To Become Job Ready?"}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              {settings?.cta_description ??
                "Join thousands of learners who transformed their careers through industry-focused training, live mentorship and placement assistance."}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Button
                className="bg-white text-blue-700 hover:bg-slate-100"
                onClick={() => navigate("/contact")}
              >
                {settings?.cta_primary_button ?? "Book Free Counselling"}
              </Button>

              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700"
                onClick={() => navigate("/courses")}
              >
                {settings?.cta_secondary_button ?? "Explore Courses"}

                <ArrowRight
                  className="ml-2"
                  size={18}
                />

              </Button>

            </div>

          </div>

        </Container>

      </section>
    </SectionReveal>
  );
};

export default ContactCTA;