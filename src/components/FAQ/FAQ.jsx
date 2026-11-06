
import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    category: "GENERAL",
    question: "What is Optimising365?",
    answer:
      "Optimising365 is a digital marketing company helping businesses build a strong online presence through creative strategies, performance marketing, SEO, social media, and digital growth solutions.",
  },
  {
    category: "GENERAL",
    question: "What services does Optimising365 provide?",
    answer:
      "We offer digital marketing strategy, SEO and organic growth, paid advertising, social media management, content creation, branding, and creative campaigns.",
  },
  {
    category: "WORKING WITH US",
    question: "How can Optimising365 help my business grow?",
    answer:
      "We understand your business goals, identify your target audience, and create a marketing strategy designed to improve visibility, attract potential customers, and support measurable growth.",
  },
  {
    category: "WORKING WITH US",
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. Our marketing solutions can be tailored to startups, small businesses, growing brands, and established companies based on their goals and requirements.",
  },
  {
    category: "DIGITAL MARKETING",
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term strategy. Results depend on your website, competition, industry, and current search visibility. Improvements can take several months, so consistent optimization is important.",
  },
  {
    category: "DIGITAL MARKETING",
    question: "Do you manage Google Ads and Meta Ads?",
    answer:
      "Yes. We can help plan, launch, manage, and optimize advertising campaigns across platforms such as Google and Meta, based on your campaign objectives.",
  },
  {
    category: "DIGITAL MARKETING",
    question: "Can you manage our social media accounts?",
    answer:
      "Yes. Our social media services include content planning, creative development, publishing support, and brand communication to help maintain a consistent online presence.",
  },
  {
    category: "PROJECT & PRICING",
    question: "How much do your digital marketing services cost?",
    answer:
      "Pricing depends on your business goals, selected services, project scope, and campaign requirements. Contact us to discuss your needs and receive a suitable proposal.",
  },
  {
    category: "PROJECT & PRICING",
    question: "How do I get started with Optimising365?",
    answer:
      "Simply contact our team through the contact page or email. Tell us about your business and goals, and we can discuss the right marketing approach for your project.",
  },
  {
    category: "PROJECT & PRICING",
    question: "Will I receive reports on campaign performance?",
    answer:
      "Reporting can be included based on your agreed service scope. We focus on useful performance insights so you can understand campaign progress and identify opportunities for improvement.",
  },
];

const categories = [
  "ALL",
  "GENERAL",
  "WORKING WITH US",
  "DIGITAL MARKETING",
  "PROJECT & PRICING",
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFAQs =
    activeCategory === "ALL"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="optimising-faq">
      <div className="faq-container">

        {/* Heading */}
        <div className="faq-header">
          <span className="faq-eyebrow">
            OPTIMISING365 / FAQ
          </span>

          <h2>
            Questions?
            <br />
            <span>We've got answers.</span>
          </h2>

          <p>
            Everything you need to know about our digital marketing
            services, process, and how we help businesses grow.
          </p>
        </div>

        {/* Categories */}
        <div className="faq-categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`faq-category ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(0);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="faq-list">
          {filteredFAQs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="faq-question-text">
                    {item.question}
                  </span>

                  <span className="faq-toggle">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className="faq-answer-wrapper"
                  aria-hidden={!isOpen}
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="faq-bottom">
          <div>
            <span>STILL HAVE QUESTIONS?</span>
            <h3>Let's talk about your next big move.</h3>
          </div>

          <a href="/contact" className="faq-contact-button">
            Contact Our Team <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
