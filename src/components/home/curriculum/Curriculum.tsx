import { useMemo, useState } from "react";

import Button from "../../ui/Button/Button";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";

import CourseTabs from "./CourseTabs";
import CurriculumList from "./CurriculumList";

import { courseCurriculum } from "../../../constants/courseCurriculum";

import SectionReveal from "@/components/ui/sectionReveal/SectionReveal";

const Curriculum = () => {
  /*
      For now

      We only have ONE course

      Java Full Stack

      Later this will come from API
  */

  const curriculum = courseCurriculum[0];

  const [selectedPackage, setSelectedPackage] = useState(
    curriculum.packages[0].name
  );

  const selected = useMemo(() => {
    return curriculum.packages.find(
      (pkg) => pkg.name === selectedPackage
    );
  }, [selectedPackage, curriculum]);

  if (!selected) return null;

  return (
    <SectionReveal>
      <section className="bg-slate-50 py-24">

        <Container>

          <SectionHeading
            title="Course Curriculum"
            subtitle="Choose a package and explore what you'll learn."
          />

          <div className="mt-12">

            <CourseTabs
              courses={curriculum.packages.map(
                (pkg) => pkg.name
              )}
              selected={selectedPackage}
              onSelect={setSelectedPackage}
            />

          </div>

          <div className="mt-14">

            <CurriculumList
              modules={selected.modules.map(
                (module) => module.title
              )}
            />

          </div>

          <div className="mt-12 text-center">

            <Button
              size="lg"
              onClick={() =>
                window.open(curriculum.brochureUrl)
              }
            >
              Download Brochure
            </Button>

          </div>

        </Container>

      </section>
    </SectionReveal>
  );
};

export default Curriculum;