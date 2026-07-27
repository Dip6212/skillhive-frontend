import Container from "../../ui/Container/Container";

const ContactMap = () => {
  return (
    <section className="bg-[#050505] py-24">
      <Container>
        <div className="mx-auto max-w-6xl">

          <span
            className="
              mx-auto
              block
              w-fit
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
            Our Location
          </span>

          <h2 className="mt-6 text-center text-4xl font-bold text-white">
            Find Us
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center leading-8 text-zinc-400">
            Visit our training center or schedule an appointment with our
            counselors. We're always happy to help you start your career journey.
          </p>

          <div
            className="
              mt-12
              overflow-hidden
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900
              shadow-[0_25px_60px_rgba(0,0,0,0.45)]
            "
          >
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-[500px] w-full border-0"
              loading="lazy"
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ContactMap;