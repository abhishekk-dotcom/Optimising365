
import { useEffect, useRef } from "react";
import "./PartnersEcosystem.css";

const ecosystem = [
  {
    number: "01",
    name: "Media Partners",
    description:
      "Connections that help brands reach relevant audiences through meaningful media opportunities.",
    tag: "REACH",
    symbol: "◉",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=85",
  },
  {
    number: "02",
    name: "Technology Partners",
    description:
      "Technology relationships that bring smarter tools, capabilities and powerful digital experiences.",
    tag: "INNOVATION",
    symbol: "⌘",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85",
  },
  {
    number: "03",
    name: "Agency Partners",
    description:
      "Creative collaborations that bring together specialist teams, fresh ideas and excellent execution.",
    tag: "CREATIVITY",
    symbol: "✳",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=85",
  },
  {
    number: "04",
    name: "Strategic Partners",
    description:
      "Long-term relationships built around shared direction, opportunities and sustainable growth.",
    tag: "GROWTH",
    symbol: "↗",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85",
  },
];

export default function PartnersEcosystem() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".ecosystem-card");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) =>
        item.classList.add("ecosystem-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ecosystem-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="partners-ecosystem"
      ref={sectionRef}
    >
      <div className="ecosystem-container">

        <div className="ecosystem-heading">
          <span className="ecosystem-eyebrow">
            OUR PARTNER ECOSYSTEM
          </span>

          <h2>
            Different strengths.
            <br />
            <span>One shared vision.</span>
          </h2>

          <p>
            We bring together complementary expertise to build
            stronger relationships, unlock opportunities and
            create new possibilities.
          </p>
        </div>

        <div className="ecosystem-grid">
          {ecosystem.map((item, index) => (
            <article
              className="ecosystem-card"
              key={item.number}
              style={{ "--card-index": index }}
            >
              <div className="ecosystem-image-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="ecosystem-image"
                  loading="lazy"
                />

                <div className="ecosystem-image-overlay" />

                <span className="ecosystem-image-number">
                  {item.number}
                </span>

                <span className="ecosystem-image-symbol">
                  {item.symbol}
                </span>
              </div>

              <div className="ecosystem-card-content">
                <div className="ecosystem-card-top">
                  <span>{item.number}</span>
                  <span className="ecosystem-tag">
                    {item.tag}
                  </span>
                </div>

                <div className="ecosystem-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="ecosystem-card-bottom">
                  <span>Explore partnership</span>
                  <span className="ecosystem-card-arrow">↗</span>
                </div>

                <div className="ecosystem-card-line" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
