import Container from "../../ui/Container/Container";
import ContactForm from "./ContactForm";


const ContactFormSection = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-lg">

          <h2 className="text-3xl font-bold">
            Book Free Counselling
          </h2>

          <p className="mt-3 text-slate-600">
            Fill in your details and our team will contact you shortly.
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