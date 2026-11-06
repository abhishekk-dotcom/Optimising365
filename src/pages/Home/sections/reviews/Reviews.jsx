
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Reviews.css";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Aarav Mehta",
    company: "Lamosé Infra LLP",
    role: "Real Estate Builder",
    initials: "LI",
    color: "#d7c18a",
    rating: 5,
    text: "Great experience working with the team! Creative ideas, effective strategies, and excellent results. Highly recommend.",
  },
  {
    name: "Priya Sharma",
    company: "Mednex",
    role: "Healthcare Brand",
    initials: "MN",
    color: "#64b5a8",
    rating: 5,
    text: "The team understands premium design aesthetics very well. The work feels polished, thoughtful, and aligned with our vision.",
  },
  {
    name: "Shivam Kapoor",
    company: "Legends 90",
    role: "Founder",
    initials: "L90",
    color: "#222222",
    rating: 5,
    text: "A smooth and positive experience. The team was responsive, detail-oriented, and focused on building a strong brand presence.",
  },
  {
    name: "Ananya Verma",
    company: "Nova Studio",
    role: "Creative Director",
    initials: "NS",
    color: "#b17bd1",
    rating: 5,
    text: "The design direction brought our ideas to life. Communication was clear, and the final experience felt cohesive and modern.",
  },
  {
    name: "Rohan Malhotra",
    company: "Urban Nest",
    role: "Property Consultant",
    initials: "UN",
    color: "#d6a15c",
    rating: 5,
    text: "Our new digital presence looks professional and communicates our services much more clearly. A great collaborative experience.",
  },
  {
    name: "Meera Joshi",
    company: "Bloom Wellness",
    role: "Business Owner",
    initials: "BW",
    color: "#7eaa83",
    rating: 5,
    text: "The attention to detail and consistency across the design made the entire project feel well considered.",
  },
  {
    name: "Kabir Singh",
    company: "PixelCraft",
    role: "Founder",
    initials: "PC",
    color: "#688bd0",
    rating: 5,
    text: "A creative team with a clear process. The visual direction gave our brand a more confident and consistent identity.",
  },
  {
    name: "Ishita Rao",
    company: "The Good Table",
    role: "Marketing Lead",
    initials: "GT",
    color: "#db8a76",
    rating: 5,
    text: "The team listened to our requirements and translated them into a clean, engaging digital experience.",
  },
  {
    name: "Aditya Khanna",
    company: "NextWave Tech",
    role: "Technology Founder",
    initials: "NW",
    color: "#6573bd",
    rating: 5,
    text: "We appreciated the thoughtful execution, regular communication, and focus on the details that matter.",
  },
  {
    name: "Sana Ali",
    company: "Aura Living",
    role: "Brand Manager",
    initials: "AL",
    color: "#c17eaa",
    rating: 5,
    text: "The creative direction helped us establish a more consistent look across our digital touchpoints.",
  },
  {
    name: "Vikram Sethi",
    company: "Apex Ventures",
    role: "Director",
    initials: "AV",
    color: "#5d9caa",
    rating: 5,
    text: "A well-organized process, thoughtful ideas, and a strong focus on delivering work that fits the brief.",
  },
  {
    name: "Nisha Gupta",
    company: "Craft & Co.",
    role: "Business Owner",
    initials: "CC",
    color: "#bf9a55",
    rating: 5,
    text: "The finished design feels polished and easy to navigate. We valued the team's creative input throughout.",
  },
];

const GAP = 24;

export default function Review() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const indexRef = useRef(0);
  const timerRef = useRef(null);
  const animationRef = useRef(null);
  const visibleRef = useRef(3);
  const [activeDot, setActiveDot] = useState(0);
  const [paused, setPaused] = useState(false);

  // Work out how many cards fit in the viewport.
  const getVisibleCount = useCallback(() => {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1000) return 2;
    return 3;
  }, []);

  const getStep = useCallback(() => {
    const firstCard = cardRefs.current[0];
    if (!firstCard) return 0;

    return firstCard.getBoundingClientRect().width + GAP;
  }, []);

  const moveTo = useCallback(
    (nextIndex, animate = true) => {
      const track = trackRef.current;
      if (!track) return;

      const step = getStep();
      if (!step) return;

      animationRef.current?.kill();

      indexRef.current = nextIndex;

      animationRef.current = gsap.to(track, {
        x: -(nextIndex * step),
        duration: animate ? 0.75 : 0,
        ease: "power3.inOut",
        overwrite: true,
        onComplete: () => {
          // Reset seamlessly after one full cycle.
          if (indexRef.current >= reviews.length) {
            gsap.set(track, { x: 0 });
            indexRef.current = 0;
          }

          setActiveDot(
            Math.floor(indexRef.current / visibleRef.current) %
              Math.ceil(reviews.length / visibleRef.current)
          );
        },
      });
    },
    [getStep]
  );

  const next = useCallback(() => {
    const nextIndex = indexRef.current + 1;
    moveTo(nextIndex);
  }, [moveTo]);

  const previous = useCallback(() => {
    const current = indexRef.current;

    if (current === 0) {
      // Jump to the end of the first complete cycle.
      moveTo(reviews.length, false);
      requestAnimationFrame(() => moveTo(reviews.length - 1));
      return;
    }

    moveTo(current - 1);
  }, [moveTo]);

  useEffect(() => {
    visibleRef.current = getVisibleCount();

    const ctx = gsap.context(() => {
      gsap.from(".review-heading > *", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".review-controls", {
        y: 15,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    const handleResize = () => {
      visibleRef.current = getVisibleCount();
      moveTo(0, false);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      animationRef.current?.kill();
      ctx.revert();
    };
  }, [getVisibleCount, moveTo]);

  // Automatically advance and repeat forever.
  useEffect(() => {
    if (paused) return;

    timerRef.current = window.setInterval(() => {
      next();
    }, 3500);

    return () => window.clearInterval(timerRef.current);
  }, [paused, next]);

  const repeatedReviews = [...reviews, ...reviews];

  return (
    <section className="review-section" ref={sectionRef}>
      <div className="review-container">
        <div className="review-heading">
          <span className="review-eyebrow">
            CLIENT EXPERIENCES
          </span>

          <h2>
            Good work.
            <br />
            <span>Real relationships.</span>
          </h2>

          <p>
            Every partnership starts with a conversation.
            Here is where great collaborations begin.
          </p>
        </div>

        <div
          className="review-carousel"
          ref={viewportRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
          aria-label="Client reviews carousel"
        >
          <div className="review-track" ref={trackRef}>
            {repeatedReviews.map((review, index) => (
              <article
                className="review-card"
                key={`${review.company}-${index}`}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
              >
                <div
                  className="review-stars"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {"★".repeat(review.rating)}
                </div>

                <p className="review-text">
                  “{review.text}”
                </p>

                <div className="review-divider" />

                <div className="review-author">
                  <div
                    className="review-logo"
                    style={{ "--logo-color": review.color }}
                    aria-hidden="true"
                  >
                    {review.initials}
                  </div>

                  <div className="review-author-info">
                    <h3>{review.name}</h3>
                    <p>{review.company}</p>
                    <span>{review.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="review-controls">
          <button
            className="review-arrow"
            type="button"
            onClick={previous}
            aria-label="Previous reviews"
          >
            ←
          </button>

          <div className="review-dots" aria-label="Review carousel position">
            {Array.from({
              length: Math.ceil(reviews.length / visibleRef.current),
            }).map((_, index) => (
              <button
                key={index}
                type="button"
                className={`review-dot ${
                  activeDot === index ? "active" : ""
                }`}
                aria-label={`Go to review group ${index + 1}`}
                onClick={() => {
                  moveTo(
                    Math.min(
                      index * visibleRef.current,
                      reviews.length - 1
                    )
                  );
                }}
              />
            ))}
          </div>

          <button
            className="review-arrow"
            type="button"
            onClick={next}
            aria-label="Next reviews"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
