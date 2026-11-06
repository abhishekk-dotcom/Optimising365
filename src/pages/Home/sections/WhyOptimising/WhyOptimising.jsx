
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiBarChart2,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";

import "./WhyOptimising.css";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    number: "",
    icon: FiTarget,
    title: "Performance Driven",
    description:
      "Every campaign is built around measurable results, smarter targeting, and meaningful business growth.",
  },
  {
    number: "",
    icon: FiLayers,
    title: "Full-Funnel Strategy",
    description:
      "Connect awareness, engagement, acquisition, and retention through one integrated growth strategy.",
  },
  {
    number: "",
    icon: FiUsers,
    title: "Audience First",
    description:
      "Reach the right people with relevant messaging, audience insights, and data-driven targeting.",
  },
  {
    number: "",
    icon: FiBarChart2,
    title: "Transparent Analytics",
    description:
      "Understand your campaign performance with clear reporting, actionable insights, and key metrics.",
  },
  {
    number: "",
    icon: FiGlobe,
    title: "Multi-Channel Expertise",
    description:
      "Bring search, social, display, mobile, and programmatic advertising together in one strategy.",
  },
  {
    number: "",
    icon: FiTrendingUp,
    title: "Built to Scale",
    description:
      "Continuously optimize campaigns, improve efficiency, and scale what works for your business.",
  },
];

export default function WhyOptimising() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".why-optimising-card");

      gsap.fromTo(
        ".why-optimising-heading",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        cards,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-optimising-grid",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".why-grid-line",
        { scaleX: 0, scaleY: 0 },
        {
          scaleX: 1,
          scaleY: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".why-optimising-grid",
            start: "top 78%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="why-optimising"
      ref={sectionRef}
      aria-labelledby="why-optimising-title"
    >
      <div className="why-optimising-glow" />

      <div className="why-optimising-container">
        <header className="why-optimising-heading">
          <span className="why-optimising-eyebrow">
            THE OPTIMISING365 ADVANTAGE
          </span>

          <h2 id="why-optimising-title">
            Why Choose{" "}
            <span className="why-gradient-text">
              Optimising365?
            </span>
          </h2>

          <p>
            More than marketing. We combine strategy, creativity,
            and performance to help ambitious brands grow.
          </p>
        </header>

        <div className="why-optimising-grid">
          <div className="why-grid-line why-grid-line-horizontal" />
          <div className="why-grid-line why-grid-line-vertical why-line-one" />
          <div className="why-grid-line why-grid-line-vertical why-line-two" />

          <span className="why-grid-diamond why-diamond-one" />
          <span className="why-grid-diamond why-diamond-two" />

          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="why-optimising-card"
                key={item.number}
              >
                <span className="why-card-number">
                  {item.number}
                </span>

                <div className="why-icon-wrap">
                  <Icon className="why-card-icon" />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="why-card-accent" />
              </article>
            );
          })}
        </div>

        <div className="why-optimising-footer">
          <span>STRATEGY THAT MOVES YOU FORWARD</span>
          <span className="why-footer-dot" />
          <span>RESULTS THAT MATTER</span>
        </div>
      </div>
    </section>
  );
}
