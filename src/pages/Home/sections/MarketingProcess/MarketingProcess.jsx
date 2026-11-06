
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiTarget,
  FiBarChart2,
  FiSmartphone,
  FiEdit3,
  FiSearch,
  FiMail,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";

import "./MarketingProcess.css";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    // number: "01",
    title: "Digital Advertising",
    short: "Reach your ideal audience across multiple digital channels.",
    badge: "Popular",
    icon: FiTarget,
    details: [
      "Paid Social Advertising",
      "Search Engine Marketing",
      "Programmatic Buying",
      "Retargeting Campaigns",
    ],
    link: "/services/digital-marketing",
  },
  {
    // number: "02",
    title: "AI-Powered Analytics",
    short: "Turn campaign data into smarter decisions and measurable growth.",
    badge: "Trending",
    icon: FiBarChart2,
    details: [
      "Predictive Analytics",
      "ROI Optimization",
      "Real-Time Insights",
      "Custom Dashboards",
    ],
    link: "/services/performance-marketing",
  },
  {
    // number: "03",
    title: "Mobile Advertising",
    short: "Engage users on mobile devices through relevant experiences.",
    badge: "Growth",
    icon: FiSmartphone,
    details: [
      "App User Acquisition",
      "Mobile Display Ads",
      "In-App Campaigns",
      "Conversion Tracking",
    ],
    link: "/services/mobile-marketing",
  },
  {
    // number: "04",
    title: "Content Marketing",
    short: "Create compelling content that builds trust and drives engagement.",
    badge: "Creative",
    icon: FiEdit3,
    details: [
      "Content Strategy",
      "Creative Campaigns",
      "Brand Storytelling",
      "Content Distribution",
    ],
    link: "/services/content-marketing",
  },
  {
    // number: "05",
    title: "SEO Optimization",
    short: "Improve search visibility and attract valuable organic traffic.",
    badge: "Organic",
    icon: FiSearch,
    details: [
      "Technical SEO",
      "Keyword Research",
      "On-Page Optimization",
      "Performance Reporting",
    ],
    link: "/services/seo",
  },
  {
    // number: "06",
    title: "Email Marketing",
    short: "Convert leads into loyal customers with targeted communication.",
    badge: "Retention",
    icon: FiMail,
    details: [
      "Email Campaigns",
      "Audience Segmentation",
      "Marketing Automation",
      "Conversion Optimization",
    ],
    link: "/services/email-marketing",
  },
];

function ProcessCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="mp-card">
      <div className="mp-card-inner">
        {/* Front of the card */}
        <div className="mp-card-face mp-card-front">
          <span className="mp-card-number">{item.number}</span>

          <span className={`mp-card-badge badge-${item.number}`}>
            {item.badge}
          </span>

          <div className="mp-icon-orbit">
            <Icon className="mp-card-icon" />
          </div>

          <h3>{item.title}</h3>
          <p>{item.short}</p>

          <span className="mp-card-hint">
            Explore service <FiArrowUpRight />
          </span>
        </div>

        {/* Back of the card */}
        <div className="mp-card-face mp-card-back">
          <span className="mp-back-label">
            WHAT WE DO
          </span>

          <h3>{item.title}</h3>

          <ul>
            {item.details.map((detail) => (
              <li key={detail}>
                <FiCheck />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <Link className="mp-learn-more" to={item.link}>
            Learn More <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function MarketingProcess() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(".mp-heading");
      const cards = gsap.utils.toArray(".mp-card");

      gsap.fromTo(
        heading,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
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
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.querySelector(".mp-grid"),
            start: "top 88%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="marketing-process" ref={sectionRef}>
      <div className="mp-glow mp-glow-one" />
      <div className="mp-glow mp-glow-two" />
      <div className="mp-grid-pattern" />

      <div className="mp-container">
        <header className="mp-heading">
          <span className="mp-eyebrow">
            THE OPTIMISING365 PROCESS
          </span>

          <h2>
            Smarter Marketing.
            <br />
            <span>Stronger Growth.</span>
          </h2>

          <p>
            Discover the strategies, technology, and creativity
            we use to turn marketing opportunities into measurable
            business results.
          </p>
        </header>

        <div className="mp-grid">
          {processSteps.map((item) => (
            <ProcessCard key={item.number} item={item} />
          ))}
        </div>

        <div className="mp-bottom">
          <span className="mp-bottom-dot" />
          <p>Plan smarter. Execute better. Grow faster.</p>

          <Link to="/contact" className="mp-contact-link">
            Start a Project <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
