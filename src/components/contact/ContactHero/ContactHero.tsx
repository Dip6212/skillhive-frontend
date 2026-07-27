import Container from "../../ui/Container/Container";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[150px]" />

        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-[120px]" />

        <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-yellow-400/5 blur-[120px]" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
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
            Contact Us
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
            Let's Build Your{" "}
            <span className="text-yellow-400">
              Career Together
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Have questions about our courses? Speak with our counselors and
            receive personalized guidance to choose the right learning path and
            accelerate your career.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;