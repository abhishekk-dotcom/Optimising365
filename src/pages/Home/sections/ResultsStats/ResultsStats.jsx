import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiTrendingUp,
  FiUsers,
  FiTarget,
  FiBarChart2,
} from "react-icons/fi";

import "./ResultsStats.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    // id: 1,
    value: 250,
    suffix: "+",
    label: "Campaigns Managed",
    description: "Campaigns across multiple digital channels.",
    icon: FiTarget,
  },
  {
    // id: 2,
    value: 10,
    suffix: "M+",
    label: "Audience Reach",
    description: "Potential audience reached through campaigns.",
    icon: FiUsers,
  },
  {
    // id: 3,
    value: 35,
    suffix: "%",
    label: "Conversion Growth",
    description: "Illustrative conversion improvement metric.",
    icon: FiTrendingUp,
  },
  {
    // id: 4,
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Illustrative client satisfaction score.",
    icon: FiBarChart2,
  },
];

export default function ResultsStats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(".rs-heading");
      const cards = gsap.utils.toArray(".rs-card");
      const counters = gsap.utils.toArray(".rs-counter");

      gsap.fromTo(
        heading,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.querySelector(".rs-grid"),
            start: "top 85%",
            once: true,
          },
        }
      );

      counters.forEach((counter) => {
        const target = Number(counter.dataset.value);

        const counterState = { value: 0 };

        gsap.to(counterState, {
          value: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            counter.textContent = Math.round(
              counterState.value
            ).toLocaleString("en-US");
          },
          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="results-stats"
      ref={sectionRef}
      aria-labelledby="rs-title"
    >
      <div className="rs-glow rs-glow-one" />
      <div className="rs-glow rs-glow-two" />

      <div className="rs-container">
        <header className="rs-heading">
          <span className="rs-eyebrow">
            THE IMPACT WE CREATE
          </span>

          <h2 id="rs-title">
            Numbers That Speak.
            <br />
            <span>Results That Matter.</span>
          </h2>

          <p>
            Digital marketing is more than visibility.
            It is about measurable performance, stronger
            connections, and sustainable business growth.
          </p>
        </header>

        <div className="rs-grid">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article className="rs-card" key={stat.id}>
                <div className="rs-card-top">
                  <div className="rs-icon-wrap">
                    <Icon className="rs-icon" />
                  </div>

                  <span className="rs-index">
                    {stat.id}
                  </span>
                </div>

                <div className="rs-number-line">
                  <span
                    className="rs-counter"
                    data-value={stat.value}
                  >
                    0
                  </span>

                  <span className="rs-suffix">
                    {stat.suffix}
                  </span>
                </div>

                <h3>{stat.label}</h3>

                <p>{stat.description}</p>

                {/* <div className="rs-progress">
                  <span
                    style={{
                      "--rs-progress": `${Math.min(
                        stat.value > 100 ? 100 : stat.value,
                        100
                      )}%`,
                    }}
                  />
                </div> */}
              </article>
            );
          })}
        </div>

        <div className="rs-bottom">
          <div className="rs-status">
            <span className="rs-status-dot" />
            <span>DATA-DRIVEN. PERFORMANCE-FOCUSED.</span>
          </div>

          <p>
            Every campaign has a purpose. Every result tells a story.
          </p>
        </div>
      </div>
    </section>
  );
}