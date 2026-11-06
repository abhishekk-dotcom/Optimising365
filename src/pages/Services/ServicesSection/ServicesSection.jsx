
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ServicesSection.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    highlight: "& Strategy.",
    description:
      "Build a powerful digital presence with marketing strategies designed around your business goals. We connect creativity, audience insights, and data to create meaningful growth.",
    points: [
      "Digital marketing strategy",
      "Brand positioning and awareness",
      "Audience research and targeting",
      "Campaign planning and execution",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90",
    label: "STRATEGY THAT MOVES BRANDS",
    theme: "dark",
  },
  {
    number: "02",
    title: "SEO & Organic",
    highlight: "Growth.",
    description:
      "Get discovered by the right audience. Our search engine optimization approach improves visibility, attracts relevant traffic, and builds long-term organic growth.",
    points: [
      "Technical SEO optimization",
      "Keyword research and strategy",
      "On-page and off-page SEO",
      "Organic traffic growth",
    ],
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1400&q=90",
    label: "GET FOUND. GROW ORGANICALLY.",
    theme: "light",
  },
  {
    number: "03",
    title: "Paid Media",
    highlight: "& Performance.",
    description:
      "Turn advertising investment into measurable outcomes. We plan, manage, and optimize paid campaigns to reach the right people and generate meaningful conversions.",
    points: [
      "Google Ads campaigns",
      "Meta advertising",
      "Campaign optimization",
      "Performance tracking and reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90",
    label: "EVERY CLICK WITH A PURPOSE",
    theme: "dark",
  },
  {
    number: "04",
    title: "Social Media",
    highlight: "& Content.",
    description:
      "Make your brand part of the conversation. We create engaging social content and consistent brand experiences that connect with audiences across digital platforms.",
    points: [
      "Social media management",
      "Content planning and creation",
      "Creative campaigns",
      "Community engagement",
    ],
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1400&q=90",
    label: "CREATE. CONNECT. ENGAGE.",
    theme: "light",
  },
  {
    number: "05",
    title: "Branding &",
    highlight: "Creative Campaigns.",
    description:
      "Give your business a distinctive identity. We combine creative thinking and consistent visual communication to help your brand stand out and stay memorable.",
    points: [
      "Brand identity and positioning",
      "Creative direction",
      "Campaign concepts",
      "Visual storytelling",
    ],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=90",
    label: "MAKE YOUR BRAND MEMORABLE",
    theme: "dark",
  },
];

export default function ServicesSections() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".service-panel");

      panels.forEach((panel) => {
        const image = panel.querySelector(".service-panel__image");
        const content = panel.querySelector(".service-panel__content");
        const eyebrow = panel.querySelector(".service-panel__eyebrow");
        const heading = panel.querySelector(".service-panel__heading");
        const description = panel.querySelector(
          ".service-panel__description"
        );
        const points = panel.querySelectorAll(".service-panel__point");
        const button = panel.querySelector(".service-panel__button");

        const reveal = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top 75%",
            end: "center center",
            scrub: 1,
          },
        });

        reveal.fromTo(
          image,
          {
            clipPath: "inset(12% 12% 12% 12%)",
            scale: 1.12,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            ease: "none",
          },
          0
        );

        reveal.fromTo(
          content,
          { y: 65, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: "none" },
          0
        );

        reveal.fromTo(
          eyebrow,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: "none" },
          0.08
        );

        reveal.fromTo(
          heading,
          { y: 45, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: "none" },
          0.12
        );

        reveal.fromTo(
          description,
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: "none" },
          0.2
        );

        reveal.fromTo(
          points,
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.04,
            ease: "none",
          },
          0.25
        );

        reveal.fromTo(
          button,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: "none" },
          0.35
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="services-panels-section"
      ref={sectionRef}
    >
      {services.map((service, index) => (
        <article
          className={`service-panel service-panel--${service.theme}`}
          key={service.number}
        >
          <div className="service-panel__inner">
            <div className="service-panel__content">
              <div className="service-panel__eyebrow">
                <span>{service.number}</span>
                <span>{service.label}</span>
              </div>

              <h2 className="service-panel__heading">
                {service.title}
                <br />
                <span>{service.highlight}</span>
              </h2>

              <p className="service-panel__description">
                {service.description}
              </p>

              <ul className="service-panel__points">
                {service.points.map((point, pointIndex) => (
                  <li
                    className="service-panel__point"
                    key={pointIndex}
                  >
                    <span className="service-panel__check">↗</span>
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="service-panel__button"
              >
                Let's Discuss Your Project
                <span>↗</span>
              </Link>
            </div>

            <div className="service-panel__visual">
              <div className="service-panel__image-wrap">
                <img
                  className="service-panel__image"
                  src={service.image}
                  alt={service.title + " " + service.highlight}
                  loading={index === 0 ? "eager" : "lazy"}
                />

                <div className="service-panel__image-caption">
                  <span>OPTIMISING365</span>
                  <span>{service.number} / 05</span>
                </div>
              </div>

              <div className="service-panel__visual-circle" />
            </div>
          </div>

          <div className="service-panel__bottom">
            <span>STRATEGY. CREATIVITY. PERFORMANCE.</span>
            <span>OPTIMISING365 — {service.number}</span>
          </div>
        </article>
      ))}
    </section>
  );
}
