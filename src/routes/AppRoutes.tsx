import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import HomePage from "../pages/public/HomePage";
import AboutPage from "../pages/public/AboutPage";
import ContactPage from "../pages/public/ContactPage";
import CoursesPage from "../pages/public/CoursesPage";
import CourseDetailsPage from "../pages/public/CourseDetailsPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;