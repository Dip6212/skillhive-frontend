import Container from "../../ui/Container/Container";
import { companyStats } from "../../../constants/aboutData";

const CompanyStats = () => {
  return (
    <section className="bg-blue-700 py-20 text-white">

      <Container>

        <div className="grid gap-8 text-center md:grid-cols-4">

          {companyStats.map((stat) => (
            <div key={stat.label}>

              <h2 className="text-5xl font-bold">
                {stat.value}
              </h2>

              <p className="mt-3 text-blue-100">
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