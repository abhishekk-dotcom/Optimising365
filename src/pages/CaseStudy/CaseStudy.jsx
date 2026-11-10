
import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CaseStudy.css";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = {
  "brand-experiences": {
    number: "01",
    title: "Brand Experiences",
    category: "BRANDING / DESIGN",
    client: "Creative Brand",
    year: "2026",
    services: "Brand Strategy, Visual Identity, Creative Design",
    intro:
      "Building a memorable brand experience through strategy, creativity and purposeful design.",
    challenge:
      "Creating a distinctive brand identity that communicates the business vision and connects with the right audience.",
    solution:
      "We combined creative direction, visual storytelling and a consistent identity system to build a stronger brand experience.",
    outcome:
      "A cohesive brand experience designed to improve recognition and create meaningful audience connections.",
    hero:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1800&q=90",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=85",
    ],
  },

  "digital-innovation": {
    number: "02",
    title: "Digital Innovation",
    category: "DIGITAL / TECHNOLOGY",
    client: "Digital Business",
    year: "2026",
    services: "Digital Strategy, Web Design, Technology",
    intro:
      "Creating digital experiences that make businesses easier to discover, understand and engage with.",
    challenge:
      "The business needed a more intuitive digital presence and a clear way to communicate its services.",
    solution:
      "We developed a structured digital experience with clear content, thoughtful design and responsive layouts.",
    outcome:
      "A more consistent digital experience with a stronger foundation for future growth.",
    hero:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&q=90",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=85",
    ],
  },

  "creative-campaigns": {
    number: "03",
    title: "Creative Campaigns",
    category: "CREATIVE / CAMPAIGN",
    client: "Creative Studio",
    year: "2026",
    services: "Campaign Strategy, Creative Direction, Content",
    intro:
      "Turning creative ideas into campaigns that capture attention and communicate meaningful brand stories.",
    challenge:
      "Building a consistent campaign identity across multiple digital channels.",
    solution:
      "We brought together creative concepts, content direction and a unified visual language.",
    outcome:
      "A cohesive campaign concept designed to strengthen brand communication.",
    hero:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1800&q=90",
    images: [
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&q=85",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=85",
    ],
  },

  "future-crafted": {
    number: "04",
    title: "Future Crafted",
    category: "WEB / EXPERIENCE",
    client: "Modern Business",
    year: "2026",
    services: "Web Design, Development, Digital Experience",
    intro:
      "Designing a modern digital presence with a focus on usability, clarity and visual impact.",
    challenge:
      "Creating a website that makes services easy to explore across all devices.",
    solution:
      "We focused on responsive design, clear information architecture and a refined user experience.",
    outcome:
      "A modern website experience with a more intuitive customer journey.",
    hero:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=90",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85",
    ],
  },
  "future-crafted": {
    number: "05",
    title: "Future Crafted",
    category: "WEB / EXPERIENCE",
    client: "Modern Business",
    year: "2026",
    services: "Web Design, Development, Digital Experience",
    intro:
      "Designing a modern digital presence with a focus on usability, clarity and visual impact.",
    challenge:
      "Creating a website that makes services easy to explore across all devices.",
    solution:
      "We focused on responsive design, clear information architecture and a refined user experience.",
    outcome:
      "A modern website experience with a more intuitive customer journey.",
    hero:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=90",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85",
    ],
  },
  "future-crafted": {
    number: "06",
    title: "Future Crafted",
    category: "WEB / EXPERIENCE",
    client: "Modern Business",
    year: "2026",
    services: "Web Design, Development, Digital Experience",
    intro:
      "Designing a modern digital presence with a focus on usability, clarity and visual impact.",
    challenge:
      "Creating a website that makes services easy to explore across all devices.",
    solution:
      "We focused on responsive design, clear information architecture and a refined user experience.",
    outcome:
      "A modern website experience with a more intuitive customer journey.",
    hero:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=90",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85",
    ],
  },
  "future-crafted": {
    number: "07",
    title: "Future Crafted",
    category: "WEB / EXPERIENCE",
    client: "Modern Business",
    year: "2026",
    services: "Web Design, Development, Digital Experience",
    intro:
      "Designing a modern digital presence with a focus on usability, clarity and visual impact.",
    challenge:
      "Creating a website that makes services easy to explore across all devices.",
    solution:
      "We focused on responsive design, clear information architecture and a refined user experience.",
    outcome:
      "A modern website experience with a more intuitive customer journey.",
    hero:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=90",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85",
    ],
  },
  "future-crafted": {
    number: "08",
    title: "Future Crafted",
    category: "WEB / EXPERIENCE",
    client: "Modern Business",
    year: "2026",
    services: "Web Design, Development, Digital Experience",
    intro:
      "Designing a modern digital presence with a focus on usability, clarity and visual impact.",
    challenge:
      "Creating a website that makes services easy to explore across all devices.",
    solution:
      "We focused on responsive design, clear information architecture and a refined user experience.",
    outcome:
      "A modern website experience with a more intuitive customer journey.",
    hero:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=90",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85",
    ],
  },
  "future-crafted": {
    number: "09",
    title: "Future Crafted",
    category: "WEB / EXPERIENCE",
    client: "Modern Business",
    year: "2026",
    services: "Web Design, Development, Digital Experience",
    intro:
      "Designing a modern digital presence with a focus on usability, clarity and visual impact.",
    challenge:
      "Creating a website that makes services easy to explore across all devices.",
    solution:
      "We focused on responsive design, clear information architecture and a refined user experience.",
    outcome:
      "A modern website experience with a more intuitive customer journey.",
    hero:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=90",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85",
    ],
  },
  "future-crafted": {
    number: "10",
    title: "Future Crafted",
    category: "WEB / EXPERIENCE",
    client: "Modern Business",
    year: "2026",
    services: "Web Design, Development, Digital Experience",
    intro:
      "Designing a modern digital presence with a focus on usability, clarity and visual impact.",
    challenge:
      "Creating a website that makes services easy to explore across all devices.",
    solution:
      "We focused on responsive design, clear information architecture and a refined user experience.",
    outcome:
      "A modern website experience with a more intuitive customer journey.",
    hero:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=90",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85",
    ],
  },
  "future-crafted": {
    number: "11",
    title: "Future Crafted",
    category: "WEB / EXPERIENCE",
    client: "Modern Business",
    year: "2026",
    services: "Web Design, Development, Digital Experience",
    intro:
      "Designing a modern digital presence with a focus on usability, clarity and visual impact.",
    challenge:
      "Creating a website that makes services easy to explore across all devices.",
    solution:
      "We focused on responsive design, clear information architecture and a refined user experience.",
    outcome:
      "A modern website experience with a more intuitive customer journey.",
    hero:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=90",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85",
    ],
  },
};

export default function CaseStudy() {
  const pageRef = useRef(null);

  const studies = Object.entries(caseStudies);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(".case-list-hero > *", {
        y: 45,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.utils.toArray(".case-list-card").forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="case-study-page" ref={pageRef}>

      <section className="case-list-hero">
        <span className="case-eyebrow">
          OPTIMISING365 / OUR WORK
        </span>

        <h1>
          Ideas into impact.
          <br />
          <span>Stories into success.</span>
        </h1>

        <p>
          Explore our selected projects, creative thinking,
          digital experiences and brand transformations.
        </p>
      </section>

      <section className="case-list-grid">
        {studies.map(([slug, study]) => (
          <article className="case-list-card" key={slug}>
            <div className="case-list-image">
              <img src={study.hero} alt={study.title} />

              <span className="case-list-number">
                {study.number}
              </span>
            </div>

            <div className="case-list-info">
              <div>
                <span className="case-eyebrow">
                  {study.category}
                </span>

                <h2>{study.title}</h2>

                <p>{study.intro}</p>
              </div>

              <span className="case-list-arrow">
                ↗
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="case-next">
        <span>HAVE SOMETHING IN MIND?</span>

        <h2>
          Let's create
          <br />
          something <span>great.</span>
        </h2>

        <Link to="/contact" className="case-cta">
          Start a project <span>↗</span>
        </Link>
      </section>

    </main>
  );
}