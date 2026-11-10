import OurWorkHero from "./OurWorkHero/OurWorkHero";
import ProjectsSection from "./ProjectSection/ProjectSection";
import Footer from "../../components/Footer/Footer";
import "./OurWork.css";
export default function OurWork() {
  return (
    <div className="our-work-page">
      <OurWorkHero />
      <ProjectsSection />
      <Footer />
    </div>
  );
}