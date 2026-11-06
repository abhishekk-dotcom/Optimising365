import "./Hero.css";

const projectCards = [
  {
    className: "hero-project-card hero-project-card--top-left",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=85",
    title: "Data-Driven Strategy",
  },
  {
    className: "hero-project-card hero-project-card--left",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=85",
    title: "Digital Experiences",
  },
  {
    className: "hero-project-card hero-project-card--right",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=700&q=85",
    title: "Creative Campaigns",
  },
  {
    className: "hero-project-card hero-project-card--bottom-left",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=700&q=85",
    title: "Brand Storytelling",
  },
  {
    className: "hero-project-card hero-project-card--bottom-right",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=85",
    title: "Marketing Growth",
  },
];

export default function Hero() {
  return (
    <section className="optimising-hero">
      {/* Background shape */}
      <div className="optimising-hero__orb" />

      {/* Floating project cards */}
      <div className="optimising-hero__projects">
        {projectCards.map((project, index) => (
          <div className={project.className} key={index}>
            <div className="hero-project-card__image">
              <img src={project.image} alt={project.title} />
            </div>

            <p>{project.title}</p>
          </div>
        ))}
      </div>

      {/* About Optimising365 content */}
      <div className="optimising-hero__content">
        <div className="optimising-hero__badge">
          <span className="optimising-hero__badge-icon">✦</span>
          Meet Optimising365
        </div>

        <p className="optimising-hero__eyebrow">
          STRATEGY. CREATIVITY. PERFORMANCE.
        </p>

        <h1>
          We Make
          <br />
          <span>Digital Work.</span>
        </h1>

        <p className="optimising-hero__description">
          Optimising365 is a digital marketing partner helping brands connect
          with the right audience, build meaningful relationships, and turn
          ambitious goals into measurable growth.
        </p>

        <a href="/contact" className="optimising-hero__cta">
          <span>Let’s Build Something</span>
          <span className="optimising-hero__cta-arrow">↗</span>
        </a>

        <div className="optimising-hero__trust">
          <span className="optimising-hero__trust-dot" />
          Creative thinking. Measurable results.
        </div>
      </div>
    </section>
  );
}