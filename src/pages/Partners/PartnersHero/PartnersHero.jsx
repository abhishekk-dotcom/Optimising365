
import "./PartnersHero.css";

const partnerProjects = [
  {
    name: "Media Network",
    category: "Media Partners",
    image:
      "./images/partners/partnerHero/Adjust1.png",
  },
  {
    name: "Technology Alliance",
    category: "Technology Partners",
    image:
      "./images/partners/partnerHero/Adjust2.png",
  },
  {
    name: "Creative Agency",
    category: "Agency Partners",
    image:
      "./images/partners/partnerHero/Adjust3.png",
  },
  {
    name: "Growth Network",
    category: "Strategic Partners",
    image:
      "./images/partners/partnerHero/Appsflyer1.png",
  },
  {
    name: "Digital Innovation",
    category: "Technology Partners",
    image:
      "./images/partners/partnerHero/Appsflyer2.png",
  },
  {
    name: "Creative Collaboration",
    category: "Agency Partners",
    image:
      "./images/partners/partnerHero/Appsflyer3.webp",
  },
  {
    name: "Media Campaign",
    category: "Media Partners",
    image:
      "./images/partners/partnerHero/Apptrove.jpg",
  },
  {
    name: "Media Campaign",
    category: "Media Partners",
    image:
      "./images/partners/partnerHero/Apptrove1.png",
  },
  {
    name: "Media Campaign",
    category: "Media Partners",
    image:
      "./images/partners/partnerHero/Apptrove2.jpg",
  },
  {
    name: "Media Campaign",
    category: "Media Partners",
    image:
      "./images/partners/partnerHero/Apptrove3.png",
  },
  {
    name: "Media Campaign",
    category: "Media Partners",
    image:
      "./images/partners/partnerHero/Branch.jpg",
  },
  {
    name: "Media Campaign",
    category: "Media Partners",
    image:
      "./images/partners/partnerHero/Branch2.png",
  },
  {
    name: "Media Campaign",
    category: "Media Partners",
    image:
      "./images/partners/partnerHero/branch3.png",
  },
  {
    name: "Media Campaign",
    category: "Media Partners",
    image:
      "./images/partners/partnerHero/singular.png",
  },
  {
    name: "Media Campaign",
    category: "Media Partners",
    image:
      "./images/partners/partnerHero/Singular2.png",
  },
  {
    name: "Media Campaign",
    category: "Media Partners",
    image:
      "./images/partners/partnerHero/Singular3.jpeg",
  },
  {
    name: "Media Campaign",
    category: "Media Partners",
    image:
      "./images/partners/partnerHero/Singular4.png",
  },
];

const partnerColumns = [
  [
    partnerProjects[0],
    partnerProjects[1],
    partnerProjects[2],
    partnerProjects[3],
  ],
  [
    partnerProjects[3],
    partnerProjects[4],
    partnerProjects[5],
    partnerProjects[0],
  ],
  [
    partnerProjects[2],
    partnerProjects[5],
    partnerProjects[6],
    partnerProjects[1],
  ],
];

function PartnerCard({ partner }) {
  return (
    <article className="partner-project-card">
      <div className="partner-project-image">
        <img
          src={partner.image}
          alt={partner.name}
          loading="lazy"
        />
        <span className="partner-image-overlay">↗</span>
      </div>

      <div className="partner-project-info">
        <div>
          <h3>{partner.name}</h3>
          <span>{partner.category}</span>
        </div>

        <span className="partner-project-arrow">↗</span>
      </div>
    </article>
  );
}

export default function PartnersHero() {
  return (
    <section className="partners-hero">
      <div className="partners-hero-inner">

        <div className="partners-hero-content">
          <span className="partners-eyebrow">
            OUR NETWORK / PARTNERSHIPS
          </span>

          <h1>
            Strong partners,
            <br />
            <span>shared</span>
            <br />
            <span>ambitions.</span>
          </h1>

          <p>
            Great partnerships create greater possibilities.
            We collaborate with media networks, technology
            innovators, creative agencies, and strategic
            partners to build meaningful digital experiences
            and accelerate business growth.
          </p>

          <a
            href="#partnership-types"
            className="partners-hero-link"
          >
            Explore partnerships <span>↗</span>
          </a>

          <div className="partners-hero-note">
            <span className="partners-note-dot" />
            Better together. Built for growth.
          </div>
        </div>

        <div className="partners-hero-gallery">
          {partnerColumns.map((column, index) => (
            <div
              className={`partners-marquee-column partner-column-${index + 1}`}
              key={index}
            >
              <div
                className="partners-marquee-track"
                style={{
                  "--duration": `${27 + index * 9}s`,
                  "--direction": index === 1 ? "reverse" : "normal",
                }}
              >
                {[...column, ...column].map((partner, cardIndex) => (
                  <PartnerCard
                    partner={partner}
                    key={`${index}-${cardIndex}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="partners-hero-bottom">
        <span>OPTIMISING365 — PARTNERSHIP NETWORK</span>
        <span>COLLABORATION. INNOVATION. GROWTH.</span>
      </div>
    </section>
  );
}
