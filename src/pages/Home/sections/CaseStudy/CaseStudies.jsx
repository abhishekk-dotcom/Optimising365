import { useState } from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaSearch,
  FaUsers,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import "./CaseStudies.css";

const services = [
  {
    id: 0,
    title: "Performance Marketing",
    icon: <FaBullhorn />,
    image:
      "https://images.unsplash.com/photo-1460925895917-af********?auto=format&fit=crop&w=1600&q=90",
    description: [
      "ROI-focused paid advertising campaigns",
      "Google Ads and Meta Ads management",
      "Audience targeting and campaign optimization",
      "Lead generation and conversion growth",
    ],
  },
  {
    id: 1,
    title: "Search Engine Optimization",
    // icon: <FaSearch />,
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1600&q=90",
    description: [
      "Improve organic search visibility",
      "Keyword research and competitor analysis",
      "Technical and on-page SEO optimization",
      "Quality traffic and long-term growth",
    ],
  },
  {
    id: 2,
    title: "Social Media Marketing",
    // icon: <FaUsers />,
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1600&q=90",
    description: [
      "Build a consistent social media presence",
      "Content planning and creative campaigns",
      "Community engagement and brand awareness",
      "Platform-specific growth strategies",
    ],
  },
  {
    id: 3,
    title: "Marketing Analytics",
    // icon: <FaChartLine />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=90",
    description: [
      "Track campaign performance and conversions",
      "Measure ROI across marketing channels",
      "Identify insights and growth opportunities",
      "Data-driven campaign improvements",
    ],
  },
  {
    id: 4,
    title: "Email & Lead Marketing",
    // icon: <FaEnvelope />,
    image:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1600&q=90",
    description: [
      "Targeted email marketing campaigns",
      "Lead nurturing and audience segmentation",
      "Marketing automation workflows",
      "Improve engagement and customer retention",
    ],
  },
];

export default function CaseStudy() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="case-study-section">
      <div className="case-study-container">
        {/* Section heading */}
        <div className="case-study-heading">
          <h2>
            CASE
            <br />
            STUDIES
          </h2>

          <a href="/case-studies" className="case-study-view-all">
            VIEW MORE <span>↗</span>
          </a>
        </div>

        {/* Interactive marketing cards */}
        <div className="case-study-cards">
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <article
                key={service.id}
                className={`case-study-card ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
              >
                {/* Expanded card */}
                <div
                  className="case-study-card-expanded"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="case-study-card-overlay" />

                  <div className="case-study-card-inner">
                    <div className="case-study-icon active-icon">
                      {service.icon}
                    </div>

                    <h3>{service.title}</h3>

                    <ul>
                      {service.description.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <FaCheckCircle />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/case-studies"
                      className="case-study-card-button"
                      onClick={(event) => event.stopPropagation()}
                    >
                      VIEW MORE <span>↗</span>
                    </a>
                  </div>
                </div>

                {/* Collapsed card */}
                <button
                  type="button"
                  className="case-study-card-collapsed"
                  onClick={() => setActiveService(index)}
                  aria-expanded={isActive}
                >
                  <div className="case-study-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}