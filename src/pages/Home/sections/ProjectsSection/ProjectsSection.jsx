import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProjectsSection.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "",
    title: "Performance That Moves People",
    category: "Performance Marketing · Paid Media",
    year: "2026",
    image: "/images/projects/project_01.png",
    alt: "Performance marketing campaign creative",
    tone: "rose",
  },
  {
    id: "",
    title: "A Brand Built to Stand Out",
    category: "Brand Strategy · Creative",
    year: "2026",
    image: "/images/projects/project-02.jpg",
    alt: "Brand campaign creative displayed on a device",
    tone: "dark",
  },
  {
    id: "03",
    title: "Making Every Click Count",
    category: "Digital Strategy · Conversion",
    year: "2025",
    image: "/images/projects/project-03.jpg",
    alt: "Digital campaign visual with colorful 3D shapes",
    tone: "blue",
  },
  {
    id: "04",
    title: "Creative That Converts",
    category: "Social Media · Content Production",
    year: "2025",
    image: "/images/projects/project-04.jpg",
    alt: "Creative digital marketing campaign mockup",
    tone: "orange",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-eyebrow, .projects-heading, .projects-intro",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".projects-header", start: "top 85%", once: true },
        }
      );

      gsap.fromTo(
        ".project-card",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: { trigger: ".projects-grid", start: "top 82%", once: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-section" ref={sectionRef} aria-labelledby="projects-title">
      <div className="projects-watermark" aria-hidden="true">WORK</div>

      <div className="projects-container">
        <header className="projects-header">
          <span className="projects-eyebrow">A SELECTION OF OUR WORK</span>
          <div className="projects-heading-row">
            <h2 className="projects-heading" id="projects-title">
              Ideas into impact.<br />
              <span>Work that works.</span>
            </h2>
            <p className="projects-intro">
              Strategy, creativity and performance working together to make
              brands more visible, more relevant and more effective.
            </p>
          </div>
        </header>

        {/* SVG displacement creates the watery hover distortion. */}
        <svg className="projects-svg-filters" aria-hidden="true" focusable="false">
          <filter id="project-water-distortion">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.025"
              numOctaves="2"
              seed="8"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="7s"
                values="0.012 0.025;0.018 0.035;0.012 0.025"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G">
              <animate attributeName="scale" dur="650ms" begin="projectWater.mouseover" from="0" to="12" fill="freeze" />
              <animate attributeName="scale" dur="700ms" begin="projectWater.mouseout" from="12" to="0" fill="freeze" />
            </feDisplacementMap>
          </filter>
        </svg>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card project-${project.tone}`} key={project.id}>
              <a className="project-image-link" href="/contact" aria-label={`Discuss a project like ${project.title}`}>
                <div className="project-image-wrap">
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.opacity = "0";
                      event.currentTarget.parentElement.classList.add("project-image-missing");
                    }}
                  />
                  <div className="project-image-placeholder" aria-hidden="true">
                    <span>OPTIMISING<span className="placeholder-365">365</span></span>
                    <small>{project.category}</small>
                  </div>
                  <span className="project-image-shine" aria-hidden="true" />
                  <span className="project-open" aria-hidden="true">↗</span>
                </div>
              </a>

              <div className="project-meta">
                <div>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
                <span className="project-year">/ {project.year}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <p>Have a goal in mind? Let’s make it happen.</p>
          <a className="projects-cta" href="/contact">Start a project <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
