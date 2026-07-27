import Container from "../../ui/Container/Container";
import { companyStats } from "../../../constants/aboutData";

const CompanyStats = () => {
  return (
    <section className="bg-[#050505] py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-4">
          {companyStats.map((stat) => (
            <div
              key={stat.label}
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
              <h2
                className="
                  text-5xl
                  font-extrabold
                  text-yellow-400
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                {stat.value}
              </h2>

              <div className="mx-auto my-4 h-1 w-12 rounded-full bg-yellow-400/30" />

              <p className="text-zinc-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CompanyStats;