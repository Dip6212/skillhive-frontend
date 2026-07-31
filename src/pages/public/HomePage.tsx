import useLeadPopup from "@/hooks/useLeadPopup";

import LeadCaptureModal from "@/components/shared/LeadCaptureModal/LeadCaptureModal";

import Hero from "@/components/home/hero/Hero";
import StaffingPartners from "@/components/home/StaffingPartners/StaffingPartners";
import CareerPrograms from "@/components/home/CareerPrograms/CareerPrograms";

import PlacementAssistance from "@/components/home/PlacementAssistance/PlacementAssistance";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import FAQ from "@/components/home/FAQ/FAQ";
import ContactCTA from "@/components/home/ContactCTA/ContactCTA";
import UniversityPrograms from "@/components/university/UniversityPrograms";

const HomePage = () => {
  const {
    open,
    closePopup,
    formSubmitted,
  } = useLeadPopup(10000);

  return (
    <>
      <Hero />

      <UniversityPrograms/>

      <StaffingPartners />

      <CareerPrograms />

      {/* <Curriculum /> */}

      <PlacementAssistance />

      <Testimonials />

      <FAQ />

      <ContactCTA />

      <LeadCaptureModal
  open={open}
  onClose={closePopup}
  onSubmitSuccess={formSubmitted}
/>
    </>
  );
};

export default HomePage;