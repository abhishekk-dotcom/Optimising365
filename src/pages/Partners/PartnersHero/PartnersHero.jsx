
import "./PartnersHero.css";

const partnerProjects = [
  {
    name: "Media Network",
    category: "Media Partners",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=85",
  },
  {
    name: "Technology Alliance",
    category: "Technology Partners",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85",
  },
  {
    name: "Creative Agency",
    category: "Agency Partners",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=85",
  },
  {
    name: "Growth Network",
    category: "Strategic Partners",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85",
  },
  {
    name: "Digital Innovation",
    category: "Technology Partners",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85",
  },
  {
    name: "Creative Collaboration",
    category: "Agency Partners",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=85",
  },
  {
    name: "Media Campaign",
    category: "Media Partners",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=85",
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
