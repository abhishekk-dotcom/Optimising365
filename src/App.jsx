
import { useState, useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Clients from "./pages/Clients/Clients";
import Partners from "./pages/Partners/PartnersTemp";
import OurWork from "./pages/OurWork/OurWork";
import OurWorkDetails from "./pages/OurWork/OurWorkDetails/OurWorkDetails";
import CaseStudy from "./pages/CaseStudy/CaseStudy";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    setShowLoader(false);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (document.readyState !== "complete") {
        setShowLoader(true);
      }
    }, 500);

    const handleWindowLoad = () => {
      window.clearTimeout(timer);
      setIsLoading(false);
      setShowLoader(false);
    };

    window.addEventListener("load", handleWindowLoad, {
      once: true,
    });

    if (document.readyState === "complete") {
      window.clearTimeout(timer);
      setIsLoading(false);
      setShowLoader(false);
    }

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <SmoothScroll />
      <Navbar />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/CaseStudy" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
          {/* Our Work listing */}
<Route path="/OurWork" element={<OurWork />} />

{/* Case Studies listing */}
<Route path="/CaseStudy" element={<OurWork />} />



{/* Existing individual Our Work details */}
<Route
  path="/OurWork/:slug"
  element={<OurWorkDetails />}
/>

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div
                style={{
                  padding: "100px 20px",
                  textAlign: "center",
                }}
              >
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
              </div>
            }
          />
        </Routes>
      </main>

      {isLoading && showLoader && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
    </>
  );
}

export default App;
