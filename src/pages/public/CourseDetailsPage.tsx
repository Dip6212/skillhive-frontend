import { useParams } from "react-router-dom";

import CourseHero from "@/components/course-details/CourseHero/CourseHero";
import CourseOverview from "@/components/course-details/CourseOverview/CourseOverview";
import CurriculumTabs from "@/components/course-details/CurriculumTabs/CurriculumTabs";
import FAQSection from "@/components/course-details/FAQSection/FAQSection";
import InstructorSection from "@/components/course-details/InstructorSection/InstructorSection";
import RelatedCourses from "@/components/course-details/RelatedCourses/RelatedCourses";
import StickyEnrollCard from "@/components/course-details/StickyEnrollCard/StickyEnrollCard";
import TechnologySection from "@/components/course-details/TechnologySection/TechnologySection";
import LeadCaptureModal from "@/components/shared/LeadCaptureModal/LeadCaptureModal";

import useLeadPopup from "@/hooks/useLeadPopup";
import { useCourse } from "@/hooks/useCourse";

const CourseDetailsPage = () => {
  const { slug } = useParams();

  const {
    data: course,
    isLoading,
    isError,
  } = useCourse(slug || "");

  const { open, closePopup, formSubmitted } = useLeadPopup(10000);

  if (isLoading) {
    return (
      <section className="py-32 text-center">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </section>
    );
  }

  if (isError || !course) {
    return (
      <section className="py-32 text-center">
        <h1 className="text-3xl font-bold">Course Not Found</h1>
      </section>
    );
  }

  return (
    <>
      <CourseHero course={course} />

      <CourseOverview course={course} />

      <CurriculumTabs course={course} />

      {/* We'll connect these next */}
      <TechnologySection />

      <InstructorSection />

      <StickyEnrollCard />

      <LeadCaptureModal
        open={open}
        onClose={closePopup}
        onSubmitSuccess={formSubmitted}
      />

      <RelatedCourses />

      <FAQSection />
    </>
  );
};

export default CourseDetailsPage;