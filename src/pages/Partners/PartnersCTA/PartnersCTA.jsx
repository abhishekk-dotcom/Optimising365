
import { useEffect, useRef } from "react";
import "./PartnersCTA.css";

export default function PartnersCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      section.classList.add("partners-cta-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("partners-cta-visible");
          observer.disconnect();
        }
      },
      { threshold: .2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="partners-cta" ref={sectionRef}>
      <div className="partners-cta-circle" />
      <div className="partners-cta-ring" />

      <div className="partners-cta-content">
        <span className="partners-cta-eyebrow">
          LET'S CREATE SOMETHING MEANINGFUL
        </span>

        <h2>
          Good things
          <br />
          happen when
          <br />
          <span>we connect.</span>
        </h2>

        <p>
          Have an idea, an opportunity or a shared vision?
          Let's explore what we can build together.
        </p>

        <a href="/contact" className="partners-cta-button">
          Let's Partner Together
          <span>↗</span>
        </a>
      </div>

      <div className="partners-cta-bottom">
        <span>OPTIMISING365</span>
        <span>BETTER TOGETHER. STRONGER FORWARD.</span>
      </div>
    </section>
  );
}
