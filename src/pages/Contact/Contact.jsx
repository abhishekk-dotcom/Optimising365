
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiInstagram,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";

import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const pageRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const intro = gsap.timeline();

      intro.from(".contact-eyebrow", {
        y: 25,
        opacity: 0,
        duration: 0.7,
      });

      intro.from(
        ".contact-hero h1 span",
        {
          y: 100,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.3"
      );

      intro.from(
        ".contact-hero-description",
        {
          y: 25,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      );

      gsap.utils.toArray(".contact-reveal").forEach((element) => {
        gsap.from(element, {
          y: 55,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.to(".contact-orbit", {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".contact-floating-dot", {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New Project Enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Service: ${formData.service}
Budget: ${formData.budget}

Message:
${formData.message}`
    );

    window.location.href =
      `mailto:hello@optimising365.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page" ref={pageRef}>

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-inner">

          <span className="contact-eyebrow">
            <span className="contact-status-dot"></span>
            LET'S CREATE SOMETHING TOGETHER
          </span>

          <h1>
            <span>Have a project</span>
            <span>
              in mind<span className="pink-dot">?</span>
            </span>
            <span className="contact-outline-text">
              Let's talk.
            </span>
          </h1>

          <p className="contact-hero-description">
            Have an idea, a challenge or an ambitious goal?
            We'd love to hear about it. Let's turn your vision
            into something meaningful.
          </p>

          <a href="#contact-form" className="contact-scroll-link">
            START A CONVERSATION
            <span><FiArrowUpRight /></span>
          </a>

          <div className="contact-orbit">
            <div className="contact-orbit-inner"></div>
            <span> <img src="/logo/logo1.PNG" alt="" /> </span>
          </div>

          <div className="contact-floating-dot"></div>
        </div>

        <div className="contact-hero-bottom">
          <span>STRATEGY / CREATIVITY / TECHNOLOGY</span>
          <span>OPTIMISING365 © 2026</span>
        </div>
      </section>

      {/* CONTACT FORM + DETAILS */}
      <section className="contact-main" id="contact-form">

        <div className="contact-left contact-reveal">
          <span className="contact-section-label">
            01 / GET IN TOUCH
          </span>

          <h2>
            Tell us about
            <br />
            your <span>next big idea.</span>
          </h2>

          <p className="contact-left-description">
            Share a little about your business and what
            you're looking to achieve. Our team will get
            back to you to discuss the next steps.
          </p>

          <div className="contact-details">

            <a href="mailto:hello@optimising365.com" className="contact-detail">
              <span className="contact-detail-icon">
                <FiMail />
              </span>
              <span>
                <small>EMAIL US</small>
                <strong>hello@optimising365.com</strong>
              </span>
              <FiArrowUpRight className="contact-detail-arrow" />
            </a>

            <a href="tel:+910000000000" className="contact-detail">
              <span className="contact-detail-icon">
                <FiPhone />
              </span>
              <span>
                <small>CALL US</small>
                <strong>Let's discuss your project</strong>
              </span>
              <FiArrowUpRight className="contact-detail-arrow" />
            </a>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <FiMapPin />
              </span>
              <span>
                <small>LOCATION</small>
                <strong>India</strong>
              </span>
            </div>

          </div>

          <div className="contact-socials">
            <span>FOLLOW OUR JOURNEY</span>

            <div>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <FiInstagram />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <FiLinkedin />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <FiFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-wrapper contact-reveal">
          <div className="contact-form-heading">
            <span className="contact-section-label">
              02 / PROJECT DETAILS
            </span>
            <h3>Let's make it happen.</h3>
            <p>Fill in the details below and tell us what you need.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="contact-input-row">
              <div className="contact-field">
                <label htmlFor="name">YOUR NAME *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">EMAIL ADDRESS *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-input-row">
              <div className="contact-field">
                <label htmlFor="company">COMPANY NAME</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="service">SERVICE REQUIRED *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Branding & Design">Branding & Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="SEO">SEO</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Performance Marketing">Performance Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="budget">PROJECT BUDGET</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select your budget</option>
                <option value="Below ₹25,000">Below ₹25,000</option>
                <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                <option value="Not decided">Not decided</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="message">TELL US ABOUT YOUR PROJECT *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your idea, goals and requirements..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              <span>Send your enquiry</span>
              <span className="contact-submit-icon">
                <FiSend />
              </span>
            </button>

            <p className="contact-form-note">
              By submitting this form, your email application
              will open with your enquiry details.
            </p>

          </form>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="contact-bottom-cta contact-reveal">
        <span>GOOD THINGS START WITH A CONVERSATION</span>

        <h2>
          Let's make
          <br />
          <span>something happen.</span>
        </h2>

        <a href="#contact-form">
          START YOUR PROJECT <FiArrowUpRight />
        </a>
      </section>

    </main>
  );
}
