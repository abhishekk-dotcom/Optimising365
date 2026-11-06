
import Hero from "./sections/Hero/Hero";
import Clients from "./sections/clients/Clients";
import ClientsShowcase from "./sections/ClientsShowcase/ClientsShowcase";
import Reviews from "./sections/reviews/Reviews";
import Services from "./sections/services/Services";
import WhyOptimising from "./sections/WhyOptimising/WhyOptimising"
import WorkSection from "./sections/WorkSection/WorkSection";
import MarketingProcess from "./sections/MarketingProcess/MarketingProcess";
import ResultsStats from './sections/ResultsStats/ResultsStats';
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import ContactCTA from "./sections/ContactCTA/ContactCTA";
// import CaseStudy from "./sections/CaseStudy/CaseStudy";
import CaseStudies from "./sections/CaseStudy/CaseStudies";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import FAQ from "../../components/FAQ/FAQ";

function Home() {
  return (
    <main className="home">
      <Hero />
      <Clients />
      
      <ClientsShowcase />
      {/* <Reviews /> */}
      <Services />
      <WhyOptimising />
      <WorkSection />
      <MarketingProcess />
      
      <ResultsStats />
      {/* <ProjectsSection /> */}
      <ContactCTA />
      {/* <CaseStudy /> */}
      <CaseStudies />
      <FAQ />
      <Footer />
    </main>
  );
}

export default Home;
