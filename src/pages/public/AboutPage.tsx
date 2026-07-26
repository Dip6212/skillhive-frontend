import AboutHero from "../../components/about/AboutHero/AboutHero";
import AboutStory from "../../components/about/AboutStory/AboutStory";
import MissionVision from "../../components/about/MissionVision/MissionVision";
import WhyChooseUs from "../../components/about/WhyChooseUs/WhyChooseUs";
import CompanyStats from "../../components/about/CompanyStats/CompanyStats";
import Mentors from "../../components/about/Mentors/Mentors";
import ContactCTA from "../../components/home/ContactCTA/ContactCTA";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <WhyChooseUs />
      <CompanyStats />
      {/* <Mentors /> */}
      <ContactCTA />
    </>
  );
};

export default AboutPage;