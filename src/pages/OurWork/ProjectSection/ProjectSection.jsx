
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./ProjectSection.css";

const projects = [
  {
    id: 1,
    slug: "brand-experiences",
    name: "Brand Experiences",
    category: "BRANDING / DESIGN",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=85",
  },
  {
    id: 2,
    slug: "digital-innovation",
    name: "Digital Innovation",
    category: "DIGITAL / TECHNOLOGY",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
  },
  {
    id: 3,
    slug: "creative-campaigns",
    name: "Creative Campaigns",
    category: "CREATIVE / CAMPAIGN",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=85",
  },
  {
    id: 4,
    slug: "future-crafted",
    name: "Future Crafted",
    category: "WEB / EXPERIENCE",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=85",
  },
];

function ProjectCard({ project, index }) {
  return (
    <article
      className="work-project-card project-reveal"
      style={{ "--delay": `${index * 0.12}s` }}
    >
      <Link
        to={`/our-work/${project.slug}`}
        className="work-project-card-link"
        aria-label={`View ${project.name} project`}
      >
        <div className="work-project-image">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
          />

          <div className="work-project-overlay">
            <span className="work-project-view">
              VIEW PROJECT ↗
            </span>
          </div>
        </div>

        <div className="work-project-info">
          <div>
            <h3>{project.name}</h3>
            <span>{project.category}</span>
          </div>

          <span className="work-project-arrow">↗</span>
        </div>

        <div className="work-project-button">
          <span>Explore Project</span>
          <span className="project-button-icon">↗</span>
        </div>
      </Link>
    </article>
  );
}

export default function ProjectSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".project-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("project-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="our-project-section" ref={sectionRef}>
      <div className="our-project-container">

        <div className="our-project-heading project-reveal">
          <div>
            <span className="our-project-eyebrow">
              <i /> SELECTED CREATIVE WORK
            </span>

            <h2>
              Ideas into
              <br />
              <span>real impact.</span>
            </h2>

            <p>
              A selection of creative experiences, digital campaigns
              and brand projects built to make businesses stand out.
            </p>
          </div>

          <div className="project-heading-side">
            <span>01 — 04</span>
            <p>STRATEGY. CREATIVITY. PERFORMANCE.</p>
          </div>
        </div>

        {/* FEATURED VIDEO */}
        <article className="work-featured-video project-reveal">
          <div className="featured-video-frame">
            <video
              className="featured-project-video"
              src="/videos/partners/thirdVideo.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />

            <div className="featured-video-shade" />

            <div className="featured-video-top">
              <span className="video-live-dot" />
              FEATURED SHOWREEL
            </div>

            <div className="featured-video-corner">
              <span>PLAYING</span>
              <i />
            </div>

            <div className="featured-video-content">
              <span>OPTIMISING365 / CREATIVE STUDIO</span>

              <h3>
                We make
                <br />
                digital work.
              </h3>

              <div className="featured-video-bottom">
                <span>STRATEGY / DESIGN / PERFORMANCE</span>
                <span>↗</span>
              </div>
            </div>
          </div>
        </article>

        {/* PROJECT CARDS */}
        <div className="our-project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              index={index}
              key={project.id}
            />
          ))}
        </div>

        <div className="our-project-footer">
          <span>OPTIMISING365 — OUR WORK</span>
          <span>MADE WITH PURPOSE. BUILT FOR GROWTH.</span>
        </div>

      </div>
    </section>
  );
}
