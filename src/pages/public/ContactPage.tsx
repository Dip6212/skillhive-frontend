import ContactFaq from "@/components/contact/ContactFaq/ContactFaq";
import ContactForm from "@/components/contact/ContactForm/ContactFormSection";
import ContactHero from "@/components/contact/ContactHero/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo/ContactInfo";
import ContactMap from "@/components/contact/ContactMap/ContactMap";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactFaq />
    </>
  );
};

export default ContactPage;