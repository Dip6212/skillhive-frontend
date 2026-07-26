import CourseFilters from "@/components/course/CourseFilters/CourseFilters";
import CourseGrid from "@/components/course/CourseGrid/CourseGrid";
import CourseHero from "@/components/course/CourseHero/CourseHero";
import SearchBar from "@/components/course/SearchBar/SearchBar";


const CoursesPage = () => {
  return (
    <>
      <CourseHero />
      <SearchBar />
      <CourseFilters />
      <CourseGrid />
    </>
  );
};

export default CoursesPage;