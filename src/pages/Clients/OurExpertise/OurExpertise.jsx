
import { useState } from "react";
import "./OurExpertise.css";

const expertiseData = [
  {
    number: "01",
    title: "Programmatic Display Ads",
    description:
      "Reach the right audience at the right moment with data-driven programmatic advertising. We help brands improve visibility through intelligent targeting, strategic placements and campaign optimisation.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=85",
    tags: ["Audience Targeting", "Display Campaigns", "Ad Optimisation", "Brand Awareness"],
  },
  {
    number: "02",
    title: "Connected TV Ads",
    description:
      "Bring your brand to the big screen. Connect with audiences through streaming platforms and premium video advertising experiences designed to build awareness and engagement.",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=900&q=85",
    tags: ["CTV Advertising", "Video Campaigns", "Audience Reach", "Brand Awareness"],
  },
  {
    number: "03",
    title: "Mobile Marketing",
    description:
      "Connect with your audience wherever they are. We create mobile-first advertising campaigns that reach users through relevant placements, engaging creatives and smart targeting.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=85",
    tags: ["In-App Advertising", "Mobile Campaigns", "User Acquisition", "Engagement"],
  },
  {
    number: "04",
    title: "Branding Solution",
    description:
      "Build a brand people recognise and remember. We help shape your brand identity, communication and creative direction to create a consistent experience across digital touchpoints.",
    image:
      "https://images.unsplash.com/photo-1634942536790-2536a6a7c1e8?w=900&q=85",
    tags: ["Brand Identity", "Creative Strategy", "Visual Design", "Brand Positioning"],
  },
  {
    number: "05",
    title: "Performance Marketing",
    description:
      "Turn marketing investment into measurable business outcomes. We plan, manage and optimise campaigns around meaningful performance metrics and your business goals.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85",
    tags: ["Paid Advertising", "Campaign Optimisation", "Analytics", "ROI Focus"],
  },
  {
    number: "06",
    title: "Lead Generation",
    description:
      "Attract potential customers and create more opportunities for your business. We build targeted lead generation campaigns focused on reaching relevant audiences and driving enquiries.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=85",
    tags: ["Lead Acquisition", "Audience Research", "Conversion Strategy", "Campaign Management"],
  },
];

export default function OurExpertise() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="expertise-section" id="our-expertise">
      <div className="expertise-container">

        {/* SECTION HEADER */}
        <div className="expertise-header">
          <div className="expertise-label">
            <span className="expertise-label-dot" />
            <span>WHAT WE DO</span>
          </div>

          <h2>Our Expertise<span>.</span></h2>

          <a href="/contact" className="expertise-cta">
            Get Started <span>↗</span>
          </a>
        </div>

        {/* ACCORDION */}
        <div className="expertise-list">
          {expertiseData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                className={`expertise-item ${isOpen ? "is-open" : ""}`}
                key={item.number}
              >
                <button
                  className="expertise-trigger"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`expertise-content-${index}`}
                >
                  <span className="expertise-number">
                    ({item.number})
                  </span>

                  <span className="expertise-title">
                    {item.title}
                  </span>

                  <span className="expertise-toggle">
                    <span />
                    <span />
                  </span>
                </button>

                <div
                  className="expertise-expand"
                  id={`expertise-content-${index}`}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className="expertise-details">
                    <div className="expertise-image">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                      />
                    </div>

                    <div className="expertise-description">
                      <span className="expertise-small-label">
                        EXPERTISE / {item.number}
                      </span>

                      <h3>{item.title}</h3>

                      <p>{item.description}</p>

                      <div className="expertise-tags">
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM TEXT */}
        <div className="expertise-footer">
          <span>OPTIMISING365 — OUR EXPERTISE</span>
          <span>STRATEGY. CREATIVITY. PERFORMANCE.</span>
        </div>

      </div>
    </section>
  );
}
