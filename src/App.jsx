
import { useState, useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";

import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
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
      <SmoothScroll />

      <Navbar />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      {isLoading && showLoader && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
    </>
  );
}

export default App;
