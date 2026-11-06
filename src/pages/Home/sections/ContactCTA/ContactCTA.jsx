import { useState } from "react";
import "./ContactCTA.css";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect this form to your backend or email service.
    console.log("Contact form submitted:", formData);
  };

  return (
    <section className="contact-cta">
      <div className="contact-cta__container">
        {/* Contact Form */}
        <div className="contact-cta__form-card">
          <span className="contact-cta__form-eyebrow">
            Optimising365
          </span>

          <h2 className="contact-cta__form-title">Leave a reply</h2>

          <form onSubmit={handleSubmit}>
            <div className="contact-cta__field">
              <label htmlFor="contact-name">Name *</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="contact-cta__field">
              <label htmlFor="contact-email">Email *</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="contact-cta__field">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
              />
            </div>

            <button className="contact-cta__submit" type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* CTA Content */}
        <div className="contact-cta__content">
          <div className="contact-cta__intro">
            <span className="contact-cta__eyebrow">
              LET’S BUILD SOMETHING
            </span>

            <h2>
              Let’s <span>Talk</span>
            </h2>

            <p>
              Tell us about your project — whether it’s a website, SEO, or
              marketing.
            </p>
          </div>

          <div className="contact-cta__benefits">
            <div className="contact-cta__benefit">
              <span className="contact-cta__benefit-icon">↗</span>
              <h3>Quick Response</h3>
              <p>
                If you’re ready to create and collaborate, we’d love to hear
                from you.
              </p>
            </div>

            <div className="contact-cta__benefit">
              <span className="contact-cta__benefit-icon">✦</span>
              <h3>Clear Next Steps</h3>
              <p>
                We’ll understand your goals and help you move forward with a
                clear plan.
              </p>
            </div>
          </div>

          {/* Team Lead Card */}
          <div className="contact-cta__team-card">
            {/* <div className="contact-cta__team-image">
              <img
                // src="/images/team-lead.jpg"
                alt="Optimising365 team lead"
              />
            </div> */}

            <div className="contact-cta__team-info">
              <span className="contact-cta__team-label">Optimising365</span>
              <span className="contact-cta__team-company">
                
              </span>

              {/* <h3>Parvej Hossain</h3> */}

              <a href="/contact" className="contact-cta__team-button">
                Let’s Talk <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}