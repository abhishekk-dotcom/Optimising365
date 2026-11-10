
import { useEffect, useRef } from "react";
import "./PartnershipProcess.css";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, capabilities, audience and partnership goals.",
    label: "UNDERSTAND",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "We identify common ground, relevant opportunities and ways to work together.",
    label: "ALIGN",
  },
  {
    number: "03",
    title: "Collaborate",
    description:
      "We bring the right people and expertise together to move shared ideas forward.",
    label: "CREATE",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We build on the relationship, learn from outcomes and explore future opportunities.",
    label: "PROGRESS",
  },
];

export default function PartnershipProcess() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".partner-process-step");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) =>
        item.classList.add("process-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("process-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="partner-process" ref={sectionRef}>
      <div className="partner-process-container">

        {/* HEADING */}

        <div className="partner-process-heading">
          <span className="process-eyebrow">OUR APPROACH</span>

          <h2>
            From connection
            <br />
            <span>to collaboration.</span>
          </h2>

          <p>
            Good partnerships are built through shared understanding,
            clear communication and consistent collaboration.
          </p>
        </div>

        {/* TIMELINE */}

        <div className="partner-process-timeline">

          <div className="partner-process-line">
            <div className="partner-process-progress" />
            <div className="process-travelling-dot" />
          </div>

          {steps.map((step, index) => (
            <article
              className="partner-process-step"
              key={step.number}
              style={{ "--step-index": index }}
            >
              <div className="process-step-number">
                <span>{step.number}</span>
                <div className="process-number-ring" />
              </div>

              <div className="process-step-content">
                <small>{step.label}</small>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              <div className="process-step-indicator">
                <span />
              </div>
            </article>
          ))}

        </div>

        <div className="process-bottom-note">
          <span className="process-bottom-dot" />
          <span>PARTNERSHIP IN MOTION</span>
          <span className="process-bottom-divider" />
          <span>DISCOVER. CONNECT. CREATE. GROW.</span>
        </div>

      </div>
    </section>
  );
}
