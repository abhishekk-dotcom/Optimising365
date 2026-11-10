
import { useEffect, useRef } from "react";
import "./PartnershipTypes.css";

const types = [
  {
    number: "01",
    title: "Media Partners",
    description:
      "Collaborate on media opportunities, audience reach and advertising experiences that connect brands with the right people.",
    tag: "MEDIA & REACH",
    icon: "◉",
    visual: "media",
    video: "/videos/partners/firstVideo.mp4",
  },
  {
    number: "02",
    title: "Technology Partners",
    description:
      "Work together on digital capabilities, technology solutions and smarter ways to create value.",
    tag: "TECH & INNOVATION",
    icon: "⌘",
    visual: "technology",
    video: "/videos/partners/secondVideo.mp4",
  },
  {
    number: "03",
    title: "Agency Partners",
    description:
      "Combine creative thinking, specialist expertise and execution to deliver stronger campaigns.",
    tag: "CREATIVE COLLABORATION",
    icon: "✳",
    visual: "agency",
    video: "/videos/partners/thirdVideo.mp4",
  },
  {
    number: "04",
    title: "Strategic Partners",
    description:
      "Build long-term relationships around shared goals, business opportunities and sustainable growth.",
    tag: "STRATEGY & GROWTH",
    icon: "↗",
    visual: "strategy",
    video: "/videos/partners/fifthVideo.mp4",
  },
];

export default function PartnershipTypes() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".partnership-type-card");

    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("type-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("type-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const pauseVideo = (event) => {
    const video = event.currentTarget.querySelector("video");
    if (video) video.pause();
  };

  const resumeVideo = (event) => {
    const video = event.currentTarget.querySelector("video");

    if (video) {
      video.play().catch(() => {
        // Playback can be blocked by browser autoplay policies.
      });
    }
  };

  return (
    <section
      className="partnership-types"
      id="partnership-types"
      ref={sectionRef}
    >
      <div className="partnership-types-container">

        <div className="partnership-types-heading">
          <span>WAYS TO PARTNER</span>

          <h2>
            Find your place
            <br />
            <span>in our network.</span>
          </h2>

          <p>
            Different capabilities. Complementary strengths.
            Shared opportunities to make an impact.
          </p>
        </div>

        <div className="partnership-types-grid">
          {types.map((type) => (
            <article
              className={`partnership-type-card type-${type.visual}`}
              key={type.number}
              onMouseEnter={pauseVideo}
              onMouseLeave={resumeVideo}
              onFocus={pauseVideo}
              onBlur={resumeVideo}
              tabIndex={0}
            >
              {/* VIDEO BACKGROUND */}

              <div className="type-card-video">
                <video
                  src={type.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />

                <div className="type-video-overlay" />
              </div>

              {/* CARD TOP */}

              <div className="type-card-top">
                <span>{type.number}</span>
                <span className="type-card-icon">{type.icon}</span>
              </div>

              {/* ANIMATED GRAPHIC */}

              <div className="type-card-graphic" aria-hidden="true">
                <div className="type-graphic-circle" />
                <div className="type-graphic-ring" />
                <div className="type-graphic-center">
                  {type.icon}
                </div>
              </div>

              {/* CARD CONTENT */}

              <div className="type-card-content">
                <small>{type.tag}</small>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </div>

              {/* CARD BOTTOM */}

              <div className="type-card-bottom">
                <span>EXPLORE PARTNERSHIP</span>
                <span>↗</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
