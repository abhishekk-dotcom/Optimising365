
import PartnersHero from "./PartnersHero/PartnersHero";
import PartnersEcosystem from "./PartnersEcosystem/PartnersEcosystem";
import PartnersOverview from "./PartnersOverview/PartnersOverview";
import PartnershipTypes from "./PartnershipTypes/PartnershipTypes";
import PartnershipProcess from "./PartnershipProcess/PartnershipProcess";
import PartnersCTA from "./PartnersCTA/PartnersCTA";
import PartnersReviews from "./PartnersReviews/PartnersReview";
import Footer from "../../components/Footer/Footer";

import "./Partners.css";

export default function Partners() {
  return (
    <div className="partners-page">
      <PartnersHero />
      <PartnersEcosystem />
      <PartnersOverview />
      <PartnershipTypes />
      <PartnershipProcess />
      <PartnersCTA />
      <PartnersReviews />
      <Footer />
    </div>
  );
}
