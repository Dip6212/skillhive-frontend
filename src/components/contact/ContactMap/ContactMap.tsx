import Container from "../../ui/Container/Container";

const ContactMap = () => {
  return (
    <section className="bg-white py-24">
      <Container>

        <h2 className="mb-8 text-center text-3xl font-bold">
          Find Us
        </h2>

        <div className="overflow-hidden rounded-3xl shadow-lg">

          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-[450px] w-full border-0"
            loading="lazy"
          />

        </div>

      </Container>
    </section>
  );
};

export default ContactMap;