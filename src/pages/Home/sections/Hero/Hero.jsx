
import { useEffect, useRef } from "react";
import gsap from "gsap";

import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);

  const scrollRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const ctx = gsap.context(() => {
      // =========================================
      // ELEMENTS
      // =========================================

      const subtitleText =
        subtitleRef.current.querySelector(".typewriter-text");

      const subtitleCursor =
        subtitleRef.current.querySelector(".typewriter-cursor");

      const phrases = [
        "Digital Marketing That\nMoves Your Brand",
        "Creative Ideas That\nDrive Growth",
        "Smart Strategies That\nDeliver Results",
        "Powerful Campaigns That\nGrow Your Business",
      ];

      subtitleText.textContent = "";

      // =========================================
      // INITIAL STATES
      // =========================================

      gsap.set(titleRef.current.children, {
        y: 90,
        opacity: 0,
      });

      gsap.set(subtitleRef.current, {
        y: 50,
        opacity: 0,
      });

      gsap.set(descriptionRef.current, {
        y: 30,
        opacity: 0,
      });

      gsap.set(videoContainerRef.current, {
        opacity: 0,
        scale: 0.94,
        clipPath: "inset(8% 8% 8% 8% round 24px)",
      });

      gsap.set(scrollRef.current, {
        opacity: 0,
      });

      gsap.set(subtitleCursor, {
        opacity: 1,
      });

      // =========================================
      // CONTINUOUS TYPEWRITER TIMELINE
      // =========================================

      const typingTimeline = gsap.timeline({
        repeat: -1,
        paused: true,
      });

      phrases.forEach((phrase) => {
        // Each phrase gets its own animation state
        const state = { chars: 0 };

        // Type characters
        typingTimeline.to(state, {
          chars: phrase.length,
          duration: phrase.length * 0.055,
          ease: "none",
          onUpdate: () => {
            subtitleText.textContent = phrase.slice(
              0,
              Math.floor(state.chars)
            );
          },
        });

        // Pause briefly after typing
        typingTimeline.to({}, {
          duration: 1.1,
        });

        // Delete characters
        typingTimeline.to(state, {
          chars: 0,
          duration: phrase.length * 0.025,
          ease: "none",
          onUpdate: () => {
            subtitleText.textContent = phrase.slice(
              0,
              Math.ceil(state.chars)
            );
          },
        });

        // Small pause before the next phrase
        typingTimeline.to({}, {
          duration: 0.25,
        });
      });

      // =========================================
      // HERO ENTRANCE ANIMATION
      // =========================================

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(titleRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
      })

        // Reveal subtitle
        .to(
          subtitleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
          },
          "-=0.35"
        )

        // Start continuous typing after subtitle appears
        .call(() => {
          typingTimeline.play(0);
        })

        // Reveal description
        .to(
          descriptionRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "+=0.1"
        )

        // Reveal video
        .to(
          videoContainerRef.current,
          {
            opacity: 1,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            duration: 1.15,
            ease: "power4.out",
          },
          "-=0.55"
        )

        // Reveal scroll indicator
        .to(
          scrollRef.current,
          {
            opacity: 1,
            duration: 0.4,
          },
          "-=0.3"
        );

      // =========================================
      // BLINKING CURSOR
      // =========================================

      gsap.to(subtitleCursor, {
        opacity: 0,
        duration: 0.45,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });

      // =========================================
      // SCROLL INDICATOR MOVEMENT
      // =========================================

      gsap.to(scrollRef.current, {
        y: 8,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // =========================================
      // SUBTLE VIDEO MOVEMENT
      // =========================================

      gsap.to(videoRef.current, {
        scale: 1.015,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, hero);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* LEFT CONTENT */}

      <div className="hero-content">
        {/* MAIN HEADING */}

        <div className="hero-title" ref={titleRef}>
          <div className="title-line">
            Turn Attention Into
          </div>

          <div className="title-line">
            Growth That
          </div>

          <div className="title-line">
            Performs.
          </div>
        </div>

        {/* CONTINUOUS TYPEWRITER SUBTITLE */}

        <div
          className="hero-subtitle"
          ref={subtitleRef}
          aria-label="Digital marketing that moves your brand"
        >
          <span
            className="typewriter-text"
            aria-hidden="true"
          />

          <span
            className="typewriter-cursor"
            aria-hidden="true"
          >
            |
          </span>
        </div>

        {/* DESCRIPTION */}

        <p
          className="hero-description"
          ref={descriptionRef}
        >
          At Optimising365, we combine creativity,
          technology, and data to build digital
          marketing strategies that attract audiences,
          strengthen brands, and deliver measurable
          growth.
        </p>

        {/* BRAND LINE */}

        <div className="hero-founder">
          <span>Built for brands ready to grow</span>
          <strong>Optimising365</strong>
        </div>
      </div>

      {/* RIGHT SIDE VIDEO */}

      <div
        className="hero-visual"
        ref={videoContainerRef}
      >
        <div className="hero-video-box">
          <video
            ref={videoRef}
            className="hero-video"
            src="/videos/HeroSectionMain.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>

      {/* SCROLL INDICATOR */}

      <div
        className="scroll-indicator"
        ref={scrollRef}
      >
        <div className="scroll-circle">
          {/* <span>SCROLL</span>
          <span>DOWN</span>
          <b>↓</b> */}
        </div>
      </div>

      {/* DECORATIVE BOTTOM LINES */}

      <div className="bottom-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

export default Hero;