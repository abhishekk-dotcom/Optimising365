import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WorkSection.css";

gsap.registerPlugin(ScrollTrigger);

// Store your project videos in public/videos/projects/.
// Use MP4 (H.264) for the broadest browser support.
const projects = [
  {
    name: "First Project",
    year: "2025",
    type: "featured",
    video: "/videos/projects/video1.mp4",
    categories: ["Digital Marketing", "Agencies"],
    title: "A digital presence built to stand out.",
  },
  {
    name: "Second Project",
    year: "2026",
    video: "/videos/projects/video2.mp4",
    categories: ["Brand strategy", "Digital experience"],
  },
  {
    name: "Third Project",
    year: "2026",
    video: "/videos/projects/video3.mp4",
    categories: ["Digital strategy", "Technology"],
  },
  {
    name: "Forth Project",
    year: "2025",
    video: "/videos/projects/video4.mp4",
    categories: [ "Brand identity", "Finance"],
  },
  {
    name: "fifth Project",
    year: "2025",
    video: "/videos/projects/video5.mp4",
    categories: ["Campaign", "Social media", "Creative"],
  },
];

function ProjectCard({ project, index }) {
  const videoRef = useRef(null);

 const playVideo = () => {
  const video = videoRef.current;
  if (!video) return;

  video.play().catch(() => {});
};

const pauseVideo = () => {
  videoRef.current?.pause();
};

  return (
    <article
      className={`work-card ${project.type === "featured" ? "work-card--featured" : ""}`}
      data-work-card
    >
      <div className="work-card__meta">
        <span className="work-card__name"><i aria-hidden="true" />{project.name}</span>
        <span>{project.year}</span>
      </div>

      <Link
  className="work-card__visual"
  to="/contact"
  onMouseEnter={pauseVideo}
  onMouseLeave={playVideo}
  onFocus={pauseVideo}
  onBlur={playVideo}
>
  <video
    ref={videoRef}
    className="work-card__video"
    src={project.video}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  />
</Link>

      <div className="work-card__footer">
        <div className="work-card__tags">
          {project.categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <span className="work-card__number">{String(index + 1).padStart(2, "0")}</span>
      </div>
    </article>
  );
}

export default function WorkSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".work-section__eyebrow", { opacity: 0, y: 16 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: ".work-section__intro", start: "top 82%" },
      });

      gsap.fromTo(".work-section__title-line", { yPercent: 115, rotate: 2 }, {
        yPercent: 0, rotate: 0, duration: 1, stagger: 0.12, ease: "power4.out",
        scrollTrigger: { trigger: ".work-section__intro", start: "top 78%" },
      });

      gsap.fromTo(".work-section__description", { opacity: 0, y: 24 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".work-section__intro", start: "top 70%" },
      });

      gsap.fromTo("[data-work-card]", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.85, stagger: 0.13, ease: "power3.out",
        scrollTrigger: { trigger: ".work-grid", start: "top 82%" },
      });

      gsap.utils.toArray(".work-card__video").forEach((video) => {
        gsap.fromTo(video, { scale: 1.12 }, {
          scale: 1, ease: "none",
          scrollTrigger: { trigger: video, start: "top bottom", end: "bottom top", scrub: 0.7 },
        });
      });
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section className="work-section" ref={sectionRef} aria-labelledby="work-section-title">
      <div className="work-section__inner">
        <header className="work-section__intro">
          <div className="work-section__heading">
            <span className="work-section__eyebrow">OPTIMISING365 / SELECTED WORK</span>
            <h2 id="work-section-title" className="work-section__title">
              <span className="work-section__title-mask"><span className="work-section__title-line">OUR</span></span>
              <span className="work-section__title-mask work-section__title-mask--indent">
                <span className="work-section__title-line">WORK<span className="work-section__period">.</span></span>
              </span>
            </h2>
          </div>
          <p className="work-section__description">
            A selection of ideas, campaigns and digital experiences made to move brands forward.
          </p>
        </header>

        <div className="work-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        <div className="work-section__actions">
          <Link className="work-section__all" to="/portfolio">
            View all projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
