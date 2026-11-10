
import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OurWorkDetails.css";

gsap.registerPlugin(ScrollTrigger);

const projects = {
  "brand-experiences": {
    number: "01",
    name: "Brand Experiences",
    category: "BRANDING / DESIGN",
    client: "Creative Brand",
    year: "2026",
    services: ["Brand Strategy", "Visual Identity", "Creative Design"],
    description:
      "We create memorable brand experiences that help businesses communicate their identity, connect with audiences and stand out in competitive markets.",
    challenge:
      "The challenge was to create a distinctive visual identity that could communicate the brand's personality consistently across digital touchpoints.",
    solution:
      "We developed a clear creative direction, refined visual language and a consistent design system to make the brand experience memorable.",
    result:
      "A stronger visual identity and a more consistent brand experience across digital platforms.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=85",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1000&q=85",
    ],
    stats: [
      { value: "01", label: "Creative direction" },
      { value: "360°", label: "Brand experience" },
      { value: "100%", label: "Design focus" },
    ],
  },

  "digital-innovation": {
    number: "02",
    name: "Digital Innovation",
    category: "DIGITAL / TECHNOLOGY",
    client: "Digital Business",
    year: "2026",
    services: ["Digital Strategy", "Web Experience", "Technology"],
    description:
      "Digital experiences designed to make businesses more accessible, engaging and effective.",
    challenge:
      "The goal was to create a more intuitive digital experience that communicates complex information clearly.",
    solution:
      "We focused on user experience, structured content and modern visual design to create a better digital journey.",
    result:
      "A clearer digital experience with a stronger foundation for future growth.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=85",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1000&q=85",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&q=85",
    ],
    stats: [
      { value: "01", label: "Digital strategy" },
      { value: "UX", label: "User experience" },
      { value: "360°", label: "Digital thinking" },
    ],
  },

  "creative-campaigns": {
    number: "03",
    name: "Creative Campaigns",
    category: "CREATIVE / CAMPAIGN",
    client: "Creative Studio",
    year: "2026",
    services: ["Campaign Strategy", "Creative Direction", "Content"],
    description:
      "Creative campaigns that bring ideas to life and help brands build meaningful connections with their audiences.",
    challenge:
      "The challenge was to build a creative campaign that could communicate a clear message across multiple digital channels.",
    solution:
      "We brought together creative concepts, visual storytelling and channel-focused content to deliver a unified campaign.",
    result:
      "A consistent campaign identity designed to capture attention and strengthen brand communication.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1400&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1000&q=85",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1000&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=85",
    ],
    stats: [
      { value: "01", label: "Campaign concept" },
      { value: "360°", label: "Creative execution" },
      { value: "100%", label: "Brand consistency" },
    ],
  },

  "future-crafted": {
    number: "04",
    name: "Future Crafted",
    category: "WEB / EXPERIENCE",
    client: "Modern Business",
    year: "2026",
    services: ["Web Design", "Development", "Digital Experience"],
    description:
      "Modern digital experiences that combine thoughtful design, technology and usability.",
    challenge:
      "The business needed a modern website experience that made its services easier to understand and explore.",
    solution:
      "We focused on a responsive layout, clear information architecture and a refined visual system.",
    result:
      "A modern digital presence with a more intuitive user journey.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=85",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&q=85",
    ],
    stats: [
      { value: "100%", label: "Responsive design" },
      { value: "UX", label: "User focused" },
      { value: "360°", label: "Digital experience" },
    ],
  },
};

export default function OurWorkDetails() {
  const { slug } = useParams();
  const pageRef = useRef(null);

  const project = projects[slug];

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!project || !pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".detail-reveal", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".work-detail-overview",
          start: "top 80%",
        },
      });

      gsap.utils.toArray(".detail-gallery-item").forEach((item) => {
        gsap.from(item, {
          y: 65,
          opacity: 0,
          scale: 0.96,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
          },
        });
      });

      gsap.from(".detail-stat", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".work-detail-results",
          start: "top 80%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, [slug, project]);

  if (!project) {
    return (
      <div className="work-detail-not-found">
        <span>PROJECT NOT FOUND</span>
        <h1>This project doesn't exist.</h1>
        <Link to="/OurWork">Back to our work ↗</Link>
      </div>
    );
  }

  return (
    <main className="work-detail-page" ref={pageRef}>
      {/* HERO */}
      <section className="work-detail-hero">
        <div className="detail-hero-top">
          <span>OPTIMISING365 / SELECTED WORK</span>
          <span>{project.number} — 04</span>
        </div>

        <div className="detail-hero-heading">
          <span className="detail-eyebrow">{project.category}</span>
          <h1>{project.name}<span>.</span></h1>
          <p>{project.description}</p>
        </div>

        <div className="detail-hero-image">
          <img src={project.image} alt={project.name} />
          <div className="detail-image-overlay" />
          <span className="detail-image-label">
            SELECTED PROJECT / OPTIMISING365
          </span>
          <span className="detail-image-index">{project.number}</span>
        </div>

        <div className="detail-project-meta">
          <div>
            <small>CLIENT</small>
            <span>{project.client}</span>
          </div>
          <div>
            <small>YEAR</small>
            <span>{project.year}</span>
          </div>
          <div>
            <small>INDUSTRY</small>
            <span>{project.category}</span>
          </div>
          <div>
            <small>SERVICES</small>
            <span>{project.services.join(" / ")}</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="work-detail-overview">
        <div className="detail-section-label detail-reveal">
          <span>01 / THE PROJECT</span>
        </div>

        <div className="detail-overview-content detail-reveal">
          <h2>
            Good ideas deserve
            <br />
            <span>great execution.</span>
          </h2>
          <p>{project.description}</p>
        </div>
      </section>

      {/* CHALLENGE AND SOLUTION */}
      <section className="work-detail-story">
        <div className="detail-story-card detail-reveal">
          <span>02 / THE CHALLENGE</span>
          <h2>The challenge.</h2>
          <p>{project.challenge}</p>
        </div>

        <div className="detail-story-card detail-story-dark detail-reveal">
          <span>03 / OUR APPROACH</span>
          <h2>The solution.</h2>
          <p>{project.solution}</p>
        </div>
      </section>

      {/* RESULTS */}
      <section className="work-detail-results">
        <div className="detail-results-heading">
          <span>04 / THE OUTCOME</span>
          <h2>Designed to make <span>an impact.</span></h2>
          <p>{project.result}</p>
        </div>

        <div className="detail-stats-grid">
          {project.stats.map((stat, index) => (
            <div className="detail-stat" key={index}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="work-detail-gallery">
        <div className="detail-gallery-heading">
          <span>05 / PROJECT GALLERY</span>
          <h2>A closer look.</h2>
        </div>

        <div className="detail-gallery-grid">
          {project.gallery.map((image, index) => (
            <div className="detail-gallery-item" key={image}>
              <img src={image} alt={`${project.name} gallery ${index + 1}`} />
              <span>0{index + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="work-detail-next">
        <span>HAVE A PROJECT IN MIND?</span>
        <h2>Let's make something <span>meaningful.</span></h2>
        <Link to="/contact" className="detail-contact-link">
          Start a conversation <span>↗</span>
        </Link>
        <Link to="/OurWork" className="detail-back-link">
          ← Back to all projects
        </Link>
      </section>
    </main>
  );
}
