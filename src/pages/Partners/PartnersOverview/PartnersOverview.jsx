
import { useEffect, useRef } from "react";
import "./PartnersOverview.css";

const trustedPartners = [
  {
    name: "Media Partners",
    category: "MEDIA NETWORK",
    image: "/images/partners/Adjust.png",
  },
  {
    name: "Technology Partners",
    category: "TECHNOLOGY",
    image: "/images/partners/Appsflyer.png",
  },
  {
    name: "Agency Partners",
    category: "CREATIVE NETWORK",
    image: "/images/partners/Apptrove.png",
  },
  {
    name: "Strategic Partners",
    category: "STRATEGIC ALLIANCES",
    image: "/images/partners/Branch.PNG",
  },
  
];

export default function PartnersOverview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".trusted-partner-card");

    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("partner-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("partner-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="trusted-partners-section" ref={sectionRef}>
      <div className="trusted-partners-container">

        <div className="trusted-partners-heading">
          <div className="trusted-partners-heading-content">
            <span className="trusted-partners-eyebrow">
              OUR PARTNER NETWORK
            </span>

            <h2>
              Stronger <span>together.</span>
            </h2>

            <p>
              We collaborate with trusted media, technology, agency
              and strategic partners to create new opportunities,
              deliver better experiences and drive meaningful growth.
            </p>
          </div>

          <div className="trusted-partner-count">
            <strong></strong>
            <span>FEATURED PARTNERS</span>
          </div>
        </div>

        <div className="trusted-partners-grid">
          {trustedPartners.map((partner, index) => (
            <article
              className="trusted-partner-card"
              key={`${partner.name}-${index}`}
              style={{ "--card-index": index }}
            >
              <div className="trusted-partner-card-inner">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="trusted-partner-logo"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.parentElement.classList.add(
                      "partner-logo-error"
                    );
                  }}
                />

                <div className="trusted-partner-info">
                  <span>{partner.category}</span>
                  <h3>{partner.name}</h3>
                </div>

                <span className="trusted-partner-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>

        <div className="trusted-partners-footer">
          <span>BUILT ON TRUST. POWERED BY PARTNERSHIPS.</span>
          <span>OPTIMISING365 — PARTNER ECOSYSTEM</span>
        </div>

      </div>
    </section>
  );
}
