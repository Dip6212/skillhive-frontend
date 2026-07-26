import Container from "../../ui/Container/Container";
import { contactInfo } from "../../../constants/contactData";

const ContactInfo = () => {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ContactInfo;