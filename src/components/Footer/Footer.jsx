import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Clients", to: "/clients" },
  { label: "Partners", to: "/partners" },
  { label: "Our Work", to: "/OurWork" },
  { label: "Case Studies", to: "/CaseStudy" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Left side */}
        <div className="footer-left">
          <h2 className="footer-heading">
            Ideas into
            <br />
            impact.
            <br />
            Growth into
            <br />
            success.
          </h2>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="footer-social-link"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <div className="footer-contact">
            <h3>Let's Connect</h3>
            <a href="mailto:hello@optimising365.com">
              hello@optimising365.com
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="footer-right">
          <div className="footer-logo">
            <Link to="/" aria-label="Optimising365 home">
              <img
                src="/logo/whiteLogo.PNG"
                alt="Optimising365 Logo"
                className="footer-logo-image"
              />
            </Link>
          </div>

          <div className="footer-quick-links">
            <h3>Explore Optimising365</h3>

            <nav
              className="footer-link-list"
              aria-label="Footer navigation"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="footer-link-pill"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

{/* Bottom-right oversized brand typography */}
<div className="footer-brand-watermark" aria-hidden="true">
  <span className="footer-brand-name">OPTIMISING</span>
  <span className="footer-brand-number">365</span>
</div>
      {/* Footer bottom */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Optimising365..</span>
        {/* <span>Strategy. Creativity. Performance.</span> */}
      </div>
    </footer>
  );
}