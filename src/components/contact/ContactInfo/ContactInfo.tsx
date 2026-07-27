import Container from "../../ui/Container/Container";
import { contactInfo } from "../../../constants/contactData";

const ContactInfo = () => {
  return (
    <section className="bg-[#050505] py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-900
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-yellow-400/40
                  hover:shadow-[0_20px_45px_rgba(250,204,21,0.12)]
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-yellow-400/10
                    text-yellow-400
                    transition-all
                    duration-300
                    group-hover:bg-yellow-400
                    group-hover:text-black
                    group-hover:scale-110
                  "
                >
                  <Icon size={28} />
                </div>

                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-yellow-300
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
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