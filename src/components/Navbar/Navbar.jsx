import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiChevronDown,
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when browser gets resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-container">

         
{/* ================= LOGO ================= */}

<Link
  to="/"
  className="navbar-logo"
  onClick={closeMobile}
>
  <img
    src="/logo/logo1.PNG"
    alt="Optimising365 Logo"
    className="navbar-logo-image"
    
  />
  {/* <h3>timising<span> 365</span></h3> */}
</Link>



          {/* ================= DESKTOP NAV ================= */}

          <nav className="desktop-navigation">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link gooey ${
                  isActive ? "active" : ""
                }`
              }
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link gooey ${
                  isActive ? "active" : ""
                }`
              }
            >
              ABOUT
            </NavLink>
           


            <NavLink
              to="/services"
              className={({ isActive }) =>
                `nav-link gooey ${
                  isActive ? "active" : ""
                }`
              }
            >
              SERVICES
            </NavLink>


            <NavLink
              to="/clients"
              className={({ isActive }) =>
                `nav-link gooey ${
                  isActive ? "active" : ""
                }`
              }
            >
              CLIENTS
            </NavLink>


            <NavLink
              to="/partners"
              className={({ isActive }) =>
                `nav-link gooey ${
                  isActive ? "active" : ""
                }`
              }
            >
              PARTNERS
            </NavLink>


            <NavLink
              to="/OurWork"
              className={({ isActive }) =>
                `nav-link gooey  ${
                  isActive ? "active" : ""
                }`
              }
            >
              OUR WORK 
            </NavLink>


            <NavLink
              to="/CaseStudy"
              className={({ isActive }) =>
                `nav-link gooey ${
                  isActive ? "active" : ""
                }`
              }
            >
              CASE STUDIES
            </NavLink>


            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link gooey ${
                  isActive ? "active" : ""
                }`
              }
            >
              CONTACT US
            </NavLink>


             

          </nav>


          {/* ================= RIGHT SIDE ================= */}

          <div className="navbar-actions">

            <div className="language-switcher">
              <span className="language-active">
                EN
              </span>

              <span>|</span>

              <span>
                CN
              </span>

              <span>|</span>

              <span>
                RU
              </span>
            </div>
            </div>


          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            className={`mobile-menu-button ${
              mobileOpen
                ? "menu-open"
                : ""
            }`}
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            aria-label="Toggle navigation"
          >

            {mobileOpen ? (
              <FiX />
            ) : (
              <FiMenu />
            )}

          </button>

        </div>


        {/* ================= MOBILE NAV ================= */}

        <div
          className={`mobile-navigation ${
            mobileOpen
              ? "mobile-navigation-open"
              : ""
          }`}
        >

          <div className="mobile-nav-inner">

            <NavLink
              to="/"
              onClick={closeMobile}
              className="mobile-nav-link"
            >
              <span></span>
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMobile}
              className="mobile-nav-link"
            >
              <span></span>
              ABOUT US
            </NavLink>
            
           <NavLink
              to="/services"
              onClick={closeMobile}
              className="mobile-nav-link"
            >
              <span></span>
              SERVICES
            </NavLink>


            <NavLink
              to="/clients"
              onClick={closeMobile}
              className="mobile-nav-link"
            >
              <span></span>
              CLIENTS
            </NavLink>


            <NavLink
              to="/partners"
              onClick={closeMobile}
              className="mobile-nav-link"
            >
              <span></span>
              PARTNERS
            </NavLink>


            <NavLink
              to="/work"
              onClick={closeMobile}
              className="mobile-nav-link"
            >
              <span></span>
              OUR WORK
            </NavLink>


            <NavLink
              to="/CaseStudy"
              onClick={closeMobile}
              className="mobile-nav-link"
            >
              <span></span>
              CASE STUDIES
            </NavLink>


            <NavLink
              to="/contact"
              onClick={closeMobile}
              className="mobile-nav-link"
            >
              <span></span>
              CONTACT US
            </NavLink>



            <div className="mobile-languages">
              EN <span>|</span> CN{" "}
              <span>|</span> RU
            </div>

          </div>

        </div>

      </header>
    </>
  );
}

export default Navbar;