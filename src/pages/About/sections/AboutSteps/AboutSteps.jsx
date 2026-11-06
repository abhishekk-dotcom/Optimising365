import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutSteps.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    label: "STEP 01",
    title: "Discover & Understand",
    description:
      "We learn about your business, audience, challenges, and goals to understand what growth means for your brand.",
    accent: "#d5e54b",
    tag: "RESEARCH",
  },
  {
    number: "02",
    label: "STEP 02",
    title: "Build the Strategy",
    description:
      "We turn insights into a clear digital marketing strategy built around the right channels, message, and measurable objectives.",
    accent: "#b9a4f5",
    tag: "STRATEGY",
  },
  {
    number: "03",
    label: "STEP 03",
    title: "Create & Launch",
    description:
      "From creative content to campaigns, we bring your strategy to life and launch experiences designed to connect with your audience.",
    accent: "#ff9d78",
    tag: "EXECUTION",
  },
  {
    number: "04",
    label: "STEP 04",
    title: "Optimise & Grow",
    description:
      "We track performance, learn from the data, and continuously improve your campaigns to support sustainable business growth.",
    accent: "#8dd8d0",
    tag: "GROWTH",
  },
];

export default function AboutSteps() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || !cards.length) return;

    const ctx = gsap.context(() => {
      // Initial card stack
      gsap.set(cards, {
        autoAlpha: 0,
        y: 90,
        rotate: 3,
        scale: 0.94,
        transformOrigin: "center center",
      });

      gsap.set(cards[0], {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        scale: 1,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${steps.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const nextStep = Math.min(
              steps.length - 1,
              Math.floor(self.progress * steps.length)
            );

            setActiveStep(nextStep);
          },
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        const previousCard = cards[index - 1];

        timeline
          .to(
            previousCard,
            {
              y: -55,
              scale: 0.9,
              rotate: -4,
              autoAlpha: 0,
              duration: 1,
              ease: "power2.inOut",
            },
            index - 1
          )
          .fromTo(
            card,
            {
              y: 100,
              scale: 0.94,
              rotate: 4,
              autoAlpha: 0,
            },
            {
              y: 0,
              scale: 1,
              rotate: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power2.out",
            },
            index - 1
          );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-steps" ref={sectionRef}>
      <div className="about-steps__inner">
        {/* Fixed left side */}
        <div className="about-steps__left">
          <p className="about-steps__eyebrow">
            OPTIMISING365 / OUR PROCESS
          </p>

          <h2>
            STEP
            <span className="about-steps__current">
              {steps[activeStep].number}
            </span>
          </h2>

          <p className="about-steps__intro">
            A thoughtful process.
            <br />
            Meaningful digital growth.
          </p>

          <div className="about-steps__progress">
            <span
              className="about-steps__progress-bar"
              style={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          <p className="about-steps__count">
            {steps[activeStep].label} — 04
          </p>
        </div>

        {/* Animated right-side cards */}
        <div className="about-steps__right">
          <div className="about-steps__card-stack">
            {steps.map((step, index) => (
              <article
                className="about-steps__card"
                key={step.number}
                ref={(element) => (cardsRef.current[index] = element)}
                style={{ "--step-accent": step.accent }}
              >
                <div className="about-steps__card-top">
                  <span className="about-steps__tag">{step.tag}</span>
                  <span className="about-steps__number">{step.number}</span>
                </div>

                <div className="about-steps__card-bottom">
                  <div>
                    <p className="about-steps__card-label">{step.label}</p>
                    <h3>{step.title}</h3>
                  </div>

                  <p className="about-steps__card-description">
                    {step.description}
                  </p>
                </div>

                <div className="about-steps__card-decoration">
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            ))}
          </div>

          <div className="about-steps__scroll-hint">
            <span>SCROLL TO EXPLORE</span>
            <span className="about-steps__scroll-arrow">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}