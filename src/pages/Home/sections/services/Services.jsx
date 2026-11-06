import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    // number: "01",
    title: ["Digital marketing", "& strategy"],
    tags: ["Marketing strategy", "Audience research", "Growth planning"],
    description:
      "Turn business goals into a focused digital marketing plan. We connect the right channels, audience insights, and creative messaging to build awareness and generate measurable growth.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=90",
    imageAlt: "Digital marketing strategy and campaign planning",
    link: "/services/digital-marketing",
  },
  {
    // number: "02",
    title: ["SEO & organic", "growth"],
    tags: ["Technical SEO", "Content strategy", "Keyword research"],
    description:
      "Help the right customers discover your business. Our search and content strategies improve visibility, attract relevant organic traffic, and build long-term search performance.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1600&q=90",
    imageAlt: "Search engine optimization and organic growth",
    link: "/services/seo",
  },
  {
    // number: "03",
    title: ["Paid media", "& performance"],
    tags: ["Google Ads", "Paid social", "Conversion tracking"],
    description:
      "Make every campaign more accountable. We plan, launch, and optimize paid advertising around clear objectives, relevant audiences, and performance data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=90",
    imageAlt: "Paid media advertising and performance analytics",
    link: "/services/performance-marketing",
  },
  {
    // number: "04",
    title: ["Social media", "& content"],
    tags: ["Social strategy", "Creative content", "Community growth"],
    description:
      "Build a consistent brand presence with content people want to engage with. We combine platform-specific creative, thoughtful publishing, and ongoing analysis to grow your audience.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1600&q=90",
    imageAlt: "Social media marketing and content creation",
    link: "/services/social-media-marketing",
  },
];

const principles = [
  {
    // number: "01",
    title: ["Reach", "the right people"],
    description: "Connect your brand with audiences who are most likely to care.",
  },
  {
    // number: "02",
    title: ["Create", "real engagement"],
    description: "Turn useful content and creative campaigns into meaningful action.",
  },
  {
    // number: "03",
    title: ["Measure", "what matters"],
    description: "Use clear insights to improve performance and support sustainable growth.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const panelsRef = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const panels = panelsRef.current.filter(Boolean);

      // Keep cards visible; animations should never leave the content hidden.
      gsap.set(panels, { autoAlpha: 1, clearProps: "transform" });

      gsap.fromTo(
        ".services-topbar",
        { y: -20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 85%", once: true },
        }
      );

      gsap.fromTo(
        ".services-intro-heading",
        { y: 45, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-intro",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".services-principle",
        { y: 65, autoAlpha: 0, scale: 0.96 },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-principles",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".principle-cross",
        { scale: 0, rotation: -45, autoAlpha: 0 },
        {
          scale: 1,
          rotation: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".services-principles",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".services-animated-title",
        { y: 90, scale: 0.8, autoAlpha: 0 },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".services-title-stage",
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".services-title-arrow",
        { x: 35, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-title-stage",
            start: "top 78%",
            once: true,
          },
        }
      );

      panels.forEach((panel, index) => {
        const content = panel.querySelectorAll(
          ".services-number, .services-copy h2, .services-tags, " +
            ".services-description, .services-more"
        );
        const art = panel.querySelector(".services-art");
        const image = panel.querySelector(".services-art-image");
        const label = panel.querySelector(".services-art-label");
        const footer = panel.querySelector(".services-art-footer");

        gsap.fromTo(
          content,
          { y: 25, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: panel, start: "top 75%", once: true },
          }
        );

        if (art) {
          gsap.fromTo(
            art,
            { x: 30, autoAlpha: 0 },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: { trigger: panel, start: "top 72%", once: true },
            }
          );
        }

        if (image) {
          gsap.fromTo(
            image,
            { scale: 0.92, rotation: -2 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: panel, start: "top 70%", once: true },
            }
          );
        }

        gsap.fromTo(
          [label, footer].filter(Boolean),
          { y: 12, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: panel, start: "top 70%", once: true },
          }
        );

        if (progressRef.current) {
          ScrollTrigger.create({
            trigger: panel,
            start: "top 60%",
            end: "bottom 60%",
            onEnter: () => {
              gsap.to(progressRef.current, {
                scaleX: (index + 1) / panels.length,
                duration: 0.3,
                overwrite: true,
              });
            },
            onEnterBack: () => {
              gsap.to(progressRef.current, {
                scaleX: (index + 1) / panels.length,
                duration: 0.3,
                overwrite: true,
              });
            },
          });
        }
      });

      gsap.fromTo(
        ".services-bottom",
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-bottom",
            start: "top 95%",
            once: true,
          },
        }
      );
    }, section);

    const images = section.querySelectorAll(".services-art-image img");
    const refresh = () => ScrollTrigger.refresh();

    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener("load", refresh, { once: true });
        image.addEventListener("error", refresh, { once: true });
      }
    });

    ScrollTrigger.refresh();

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", refresh);
        image.removeEventListener("error", refresh);
      });
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="services-showcase"
      ref={sectionRef}
      aria-label="Digital marketing services"
    >
      <div className="services-ambient" />

      <header className="services-topbar">
        <span className="services-brand">
          OPTIMISING<span>365</span>
        </span>
        <a className="services-contact" href="/contact">
          Grow your business <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div className="services-intro">
        <div className="services-intro-heading">
          <span className="services-eyebrow">DIGITAL MARKETING THAT MOVES YOU FORWARD</span>
          <p className="services-intro-description">
            Turn attention into action, and action into growth.
          </p>
          <p className="services-intro-support">
            We combine strategy, creativity, and performance marketing to help
            brands reach the right people, build trust, and grow with purpose.
          </p>
        </div>

        <div className="services-principles">
          {principles.map((principle, index) => (
            <div
              className="services-principle-group"
              key={principle.number}
            >
              <article className="services-principle">
                <span className="principle-number">
                  {principle.number} <span aria-hidden="true">—</span>
                </span>
                <h3>
                  {principle.title[0]}
                  <br />
                  {principle.title[1]}
                </h3>
                <p>{principle.description}</p>
              </article>

              {index < principles.length - 1 && (
                <span className="principle-cross" aria-hidden="true">
                  ×
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="services-title-stage">
        <div className="services-title-glow" />
        <h2 className="services-animated-title">
          <span>OUR</span>
          <span>SERVICES</span>
        </h2>
        <span className="services-title-arrow" aria-hidden="true">
          ↘
        </span>
      </div>

      <div className="services-main">
        <div className="services-panels">
          {services.map((service, index) => (
            <article
              className="services-panel"
              key={service.number}
              ref={(element) => {
                panelsRef.current[index] = element;
              }}
              aria-label={service.title.join(" ")}
            >
              <div className="services-copy">
                <div className="services-number">
                  <span>{service.number}</span>
                  <span className="services-number-line" />
                  <span>DIGITAL GROWTH</span>
                </div>

                <h2>
                  {service.title[0]}
                  <br />
                  {service.title[1]}
                </h2>

                <div className="services-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <p className="services-description">{service.description}</p>

                <a className="services-more" href={service.link}>
                  Explore service <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="services-art">
                <div className="services-art-label">
                  <span>GROWTH STUDIO</span>
                  {/* <span>{service.number} / 04</span> */}
                </div>

                <div className="services-art-orbit" />

                <div className="services-art-image">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                <div className="services-art-footer">
                  <span>Strategy. Reach. Results.</span>
                  {/* <span>O365®</span> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <footer className="services-bottom">
        <span>BUILT AROUND YOUR GROWTH</span>
        <div className="services-progress">
          <span ref={progressRef} />
        </div>
        <span>SCROLL TO EXPLORE ↓</span>
      </footer>
    </section>
  );
}
