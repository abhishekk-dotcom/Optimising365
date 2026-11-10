
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./OurWorkHero.css";

export default function OurWorkHero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("work-hero-visible");
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleVideoHover = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleVideoLeave = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="our-work-hero" ref={sectionRef}>
      <div className="work-hero-bg-shape" />

      <div className="work-hero-container">
        {/* LEFT CONTENT */}
        <div className="work-hero-content">
          <span className="work-hero-eyebrow">
            <span className="work-eyebrow-dot" />
            OUR CREATIVE PORTFOLIO
          </span>

          <h1 className="work-hero-title">
            <span className="work-title-accent">OUR</span>
            <span className="work-title-second">WORK<span className="work-title-dot">.</span></span>
          </h1>

          <div className="work-hero-description">
            <p>
              Welcome to Optimising365. We empower digital
              publishers, app developers, and media owners
              to maximise their revenue potential through
              our diverse monetisation solutions.
            </p>
          </div>

          <div className="work-hero-actions">
            <Link to="/case-studies" className="work-hero-button">
              <span>Explore Our Projects</span>
              <span className="work-button-arrow">↗</span>
            </Link>

            <span className="work-hero-caption">
              Creative thinking. Measurable results.
            </span>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div
          className="work-hero-visual"
          onMouseEnter={handleVideoHover}
          onMouseLeave={handleVideoLeave}>
          <div className="work-video-frame">
            <video
              ref={videoRef}
              className="work-hero-video"
              src="/videos/partners/firstVideo.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"/>

            <div className="work-video-overlay" />

            <div className="work-video-label">
              <span className="work-video-live-dot" />
              SELECTED PROJECTS
            </div>

            <div className="work-video-bottom">
              <span>STRATEGY / DESIGN / PERFORMANCE</span>
              {/* <span>01 — 04</span> */}
            </div>
          </div>

         

          <div className="work-visual-orbit" />
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="work-hero-footer">
        <span>OPTIMISING365 — OUR WORK</span>
        <span>STRATEGY. CREATIVITY. PERFORMANCE.</span>
      </div>

      <div className="work-hero-decoration" />
    </section>
  );
}
