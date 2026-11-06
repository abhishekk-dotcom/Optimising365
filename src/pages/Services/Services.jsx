
import ServicesHero from "./ServicesHero/ServicesHero";
import ServicesSections from "./ServicesSection/ServicesSection";

import "./Services.css";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

export default function Services() {
  return (
    <main className="services-page">
      <ServicesHero />

      <ServicesSections />
      <FAQ />
      <Footer />
    </main>
  );
}
