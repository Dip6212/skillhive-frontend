import Container from "../../ui/Container/Container";
import ContactForm from "./ContactForm";

const ContactFormSection = () => {
  return (
    <section className="bg-[#050505] py-24">
      <Container>
        <div
          className="
            mx-auto
            max-w-3xl
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-900
            p-10
            shadow-[0_25px_60px_rgba(0,0,0,0.45)]
          "
        >
          <span
            className="
              inline-block
              rounded-full
              border
              border-yellow-400/20
              bg-yellow-400/10
              px-4
              py-2
              text-sm
              font-semibold
              text-yellow-400
            "
          >
            Free Career Guidance
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Book a Free Counselling Session
          </h2>

          <p className="mt-4 leading-8 text-zinc-400">
            Fill in your details and our career experts will contact you shortly
            to help you choose the right course and career path.
          </p>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactFormSection;