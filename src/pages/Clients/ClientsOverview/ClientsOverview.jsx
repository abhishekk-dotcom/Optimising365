
import { useEffect, useRef } from "react";
import "./ClientsOverview.css";

const clientLogos = [
  {
    name: "Oberoi Hotels & Resorts",
    image: "/images/clients/1XBET.png",
  },
  {
    name: "Nexus Select Malls",
    image: "/images/clients/Bingoplus.png",
  },
  {
    name: "DLF Shopping Malls",
    image: "/images/clients/Boylesports.png",
  },
  {
    name: "Nexus Elante",
    image: "/images/clients/Digido.webp",
  },
  {
    name: "Vegas",
    image: "/images/clients/Fanatics.png",
  },
  {
    name: "Mad Over Donuts",
    image: "/images/clients/Floatme.png",
  },
  {
    name: "Nexus Centre City",
    image: "/images/clients/gcash.webp",
  },
  {
    name: "Government of India",
    image: "/images/clients/homecredit.jpg",
  },
  {
    name: "Nexus Whitefield",
    image: "/images/clients/Kraken.png",
  },
  {
    name: "Pacific",
    image: "/images/clients/Lalamove.png",
  },
  {
    name: "PPZ",
    image: "/images/clients/moneyman.webp",
  },
  {
    name: "Nexus",
    image: "/images/clients/Nova.png",
  },
  {
    name: "Nexus",
    image: "/images/clients/Reelshorts.png",
  },
  {
    name: "Nexus",
    image: "/images/clients/Saily.png",
  },
  {
    name: "Nexus",
    image: "/images/clients/shopee.jpg",
  },
  {
    name: "Nexus",
    image: "/images/clients/Underdog.png",
  },
  {
    name: "Nexus",
    image: "/images/clients/Waves.png",
  },
  {
    name: "Nexus",
    image: "/images/clients/Westernunion.png",
  },
  {
    name: "Nexus",
    image: "/images/clients/zaimer.jpg",
  },
  {
    name: "Nexus",
    image: "/images/clients/Snoop.png",
  },


];

function ClientLogoCard({ client, index }) {
  return (
    <article
      className="overview-logo-card"
      style={{ "--card-delay": `${(index % 4) * 100}ms` }}
    >
      <div className="overview-logo-inner">
        <img
          src={client.image}
          alt={`${client.name} logo`}
          className="overview-logo-image"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.nextElementSibling.style.display = "flex";
          }}
        />

        <div className="overview-logo-fallback">
          {client.name}
        </div>
      </div>

      <span className="overview-card-number">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="overview-card-arrow">↗</span>
    </article>
  );
}

export default function ClientsOverview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".overview-logo-card");

    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="clients-overview"
      ref={sectionRef}
      id="clients-overview"
    >
      <div className="clients-overview-container">

        {/* SECTION HEADER */}

        <div className="clients-overview-header">
          <div className="clients-overview-heading">
            <span className="clients-overview-eyebrow">
              <span className="overview-eyebrow-dot" />
              OUR CLIENTS
            </span>

            <h2>
              Brands that <span>trust us.</span>
            </h2>

            <p>
              We work with ambitious businesses and established
              brands to create meaningful digital experiences,
              stronger connections and measurable growth.
            </p>
          </div>

          <div className="clients-overview-count">
            <span className="overview-count-number">
              {String(clientLogos.length).padStart(2, "0")}
            </span>
            <span className="overview-count-label">
              FEATURED CLIENTS
            </span>
          </div>
        </div>

        {/* CLIENT LOGO GRID */}

        <div className="clients-overview-grid">
          {clientLogos.map((client, index) => (
            <ClientLogoCard
              client={client}
              index={index}
              key={client.name}
            />
          ))}
        </div>

        {/* BOTTOM LABEL */}

        <div className="clients-overview-footer">
          <span>OPTIMISING365 — OUR CLIENT NETWORK</span>
          <span>BUILT ON TRUST. DRIVEN BY RESULTS.</span>
        </div>

      </div>
    </section>
  );
}
