import Container from "../../ui/Container/Container";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center text-white">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Let's Build Your Career Together
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Have questions about our courses? Speak with our counselors and
            receive personalized guidance for your career journey.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;