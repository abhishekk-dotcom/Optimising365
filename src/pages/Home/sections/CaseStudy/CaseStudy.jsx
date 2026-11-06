import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CaseStudy.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Digital Experiences",
    category: "Branding · Digital",
    slug: "digital-experiences",
    image:
      "https://images.unsplash.com/photo-1634942536790-253e5e7a3f4e?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "02",
    title: "Wildlife Stories",
    category: "Campaign · Creative",
    slug: "wildlife-stories",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "03",
    title: "Future in Motion",
    category: "Film · Social",
    slug: "future-in-motion",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "04",
    title: "Visual Identity",
    category: "Art Direction · Design",
    slug: "visual-identity",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1800&q=90",
  },
];

export default function Casestudy() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  useLayoutEffect(() => {
  const section = sectionRef.current;
  const stage = stageRef.current;

  if (!section || !stage) return;

  const ctx = gsap.context(() => {
    const slides = gsap.utils.toArray(".case-slide");
    const totalSlides = slides.length;

    // First image starts large and centered.
    gsap.set(slides, {
      autoAlpha: 0,
      scale: 0.82,
      y: 80,
      zIndex: 1,
    });

    gsap.set(slides[0], {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      zIndex: 2,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${totalSlides * 100}%`,
        pin: stage,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    slides.forEach((slide, index) => {
      if (index === 0) return;

      const image = slide.querySelector(".case-slide__image");
      const content = slide.querySelector(".case-slide__content");

      // Reveal next image smoothly as the user scrolls.
      tl.set(slide, { zIndex: index + 2 }, index - 1);

      tl.fromTo(
        slide,
        {
          autoAlpha: 0,
          scale: 0.82,
          y: 80,
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          ease: "power2.out",
          duration: 1,
        },
        index - 1
      );

      tl.fromTo(
        image,
        {
          scale: 1.15,
        },
        {
          scale: 1,
          ease: "none",
          duration: 1,
        },
        index - 1
      );

      if (content) {
        tl.fromTo(
          content,
          {
            y: 30,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            ease: "power2.out",
            duration: 0.5,
          },
          index - 1 + 0.25
        );
      }
    });
  }, section);

  return () => ctx.revert();
}, []);

return (
    <section className="case-study" ref={sectionRef}>
      <div className="case-study__stage" ref={stageRef}>
        <div className="case-study__top">
          <p className="case-study__eyebrow">
            <span /> SELECTED WORK
          </p>

          <p className="case-study__counter">
            SCROLL TO EXPLORE <span>↓</span>
          </p>
        </div>

        <div className="case-study__slides">
  {projects.map((project) => (
    <article className="case-slide" key={project.id}>
      <img
        src={project.image}
        alt={project.title}
        className="case-slide__image"
      />

      <div className="case-slide__overlay" />

      <div className="case-slide__content">
        <div>
          <span className="case-slide__number">
            {project.id} / {String(projects.length).padStart(2, "0")}
          </span>

          <h2>{project.title}</h2>
          <p>{project.category}</p>
        </div>

        <Link
          to={`/case-studies/${project.slug}`}
          className="case-slide__link"
          aria-label={`View ${project.title} case study`}
        >
          ↗
        </Link>
      </div>
    </article>
  ))}
</div>

        <div className="case-study__bottom">
          <span>GOOD WORK. GOOD PEOPLE.</span>

          <Link to="/case-studies" className="case-study__all">
            View all case studies <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}