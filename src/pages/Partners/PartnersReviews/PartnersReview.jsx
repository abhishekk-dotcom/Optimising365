
import { useCallback, useEffect, useState } from "react";
import "./PartnersReview.css";

const reviews = [
  {
    text: "Working with Optimising365 has been a great experience. Their team understood our goals and helped us create a stronger digital presence. Communication and execution were smooth throughout.",
    name: "Client Name",
    role: "Business Owner",
    company: "Brand / Company",
    date: "Client Review",
    initials: "CN",
  },
  {
    text: "The team brought fresh ideas, clear strategy and a thoughtful approach to our marketing. We appreciated their attention to detail and the way they kept everything moving.",
    name: "Client Name",
    role: "Marketing Manager",
    company: "Brand / Company",
    date: "Client Review",
    initials: "CN",
  },
  {
    text: "A creative and supportive team that takes time to understand the business. The overall collaboration was organised, professional and focused on our objectives.",
    name: "Client Name",
    role: "Founder",
    company: "Brand / Company",
    date: "Client Review",
    initials: "CN",
  },
  {
    text: "From planning to execution, the experience was straightforward and collaborative. We enjoyed working with a team that values creativity, communication and strategy.",
    name: "Client Name",
    role: "Business Director",
    company: "Brand / Company",
    date: "Client Review",
    initials: "CN",
  },
];

export default function ClientsReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState("next");

  const currentReview = reviews[activeIndex];

  const goToReview = useCallback((index, moveDirection = "next") => {
    setDirection(moveDirection);
    setActiveIndex((index + reviews.length) % reviews.length);
  }, []);

  const nextReview = useCallback(() => {
    goToReview(activeIndex + 1, "next");
  }, [activeIndex, goToReview]);

  const previousReview = useCallback(() => {
    goToReview(activeIndex - 1, "previous");
  }, [activeIndex, goToReview]);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setDirection("next");
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="clients-reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      aria-label="Client testimonials"
    >
      <div className="clients-reviews-container">

        {/* HEADER */}

        <div className="clients-reviews-heading">
          <span className="reviews-eyebrow">
            <span className="reviews-eyebrow-dot" />
            WORDS FROM OUR CLIENTS
          </span>

          <h2>
            Don't just take <span>our word.</span>
          </h2>

          <p>
            Meaningful partnerships. Honest feedback.
            Experiences that inspire us to do better.
          </p>
        </div>

        {/* TESTIMONIAL */}

        <div className="reviews-slider">

          <button
            type="button"
            className="reviews-arrow reviews-arrow-left"
            onClick={previousReview}
            aria-label="Previous review"
          >
            <span>‹</span>
          </button>

          <div
            className="reviews-content"
            key={activeIndex}
            data-direction={direction}
            aria-live="polite"
          >
            <div className="reviews-quote-mark">“</div>

            <div className="reviews-stars" aria-label="Five stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>★</span>
              ))}
            </div>

            <p className="reviews-quote">
              {currentReview.text}
            </p>

            <div className="reviews-author">
              <div className="reviews-avatar">
                {currentReview.initials}
              </div>

              <div className="reviews-author-info">
                <div className="reviews-author-name">
                  {currentReview.name}
                  <span className="reviews-verified" title="Verified client">
                    ✓
                  </span>
                </div>

                <span className="reviews-author-role">
                  {currentReview.role} · {currentReview.company}
                </span>

                <span className="reviews-date">
                  {currentReview.date}
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="reviews-arrow reviews-arrow-right"
            onClick={nextReview}
            aria-label="Next review"
          >
            <span>›</span>
          </button>

        </div>

        {/* SLIDER CONTROLS */}

        <div className="reviews-controls">
          <div className="reviews-pagination">
            {reviews.map((review, index) => (
              <button
                type="button"
                key={`${review.role}-${index}`}
                className={`reviews-dot ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => goToReview(index, index > activeIndex ? "next" : "previous")}
                aria-label={`Go to review ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
              />
            ))}
          </div>

          <span className="reviews-counter">
            {String(activeIndex + 1).padStart(2, "0")}
            <span> / </span>
            {String(reviews.length).padStart(2, "0")}
          </span>
        </div>

        {/* BOTTOM BRAND LINE */}

        <div className="reviews-bottom">
          <span>OPTIMISING365 — CLIENT EXPERIENCES</span>
          <span>TRUST. COLLABORATION. GROWTH.</span>
        </div>

      </div>
    </section>
  );
}
