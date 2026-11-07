
import Footer from "../../components/Footer/Footer";
import ClientsCollaboration from "./ClientsCollaboration/ClientsCollaboration";
import ClientsHero from "./CLientsHero/ClientsHero";
import ClientsOverview from "./ClientsOverview/ClientsOverview";
import ClientsReviews from "./ClientsReviews/ClientsReview";
import OurExpertise from "./OurExpertise/OurExpertise";

export default function Clients() {
  return (
    <>
      <ClientsHero />
      <OurExpertise />
      <ClientsCollaboration />
      <ClientsOverview />
      <ClientsReviews />
      <Footer />
    </>
  );
}