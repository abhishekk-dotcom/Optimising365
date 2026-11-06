import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./LoadingScreen.css";

function LoadingScreen({ onComplete }) {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const ringRef = useRef(null);
  const orbRef = useRef(null);
  const progressRef = useRef(null);
  const percentRef = useRef(null);

  
useEffect(() => {
  let completed = false;
  let minimumTimer;
  let slowTimer;
  let fallbackTimer;

  const MINIMUM_DISPLAY = 350;
  const SLOW_THRESHOLD = 700;
  const MAX_WAIT = 8000;

  const ctx = gsap.context(() => {
    gsap.set(logoRef.current, {
      opacity: 0,
      y: 18,
      scale: 0.96,
    });

    gsap.set(
      [".loader-caption", ".loader-progress-wrap"],
      { opacity: 0, y: 12 }
    );

    const progress = { value: 0 };

    const finishLoader = () => {
      if (completed) return;
      completed = true;

      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.45,
        ease: "power2.inOut",
        onComplete: () => onComplete?.(),
      });
    };

    const timeline = gsap.timeline();

    timeline
      .to(logoRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: "back.out(1.5)",
      })
      .to(
        [".loader-caption", ".loader-progress-wrap"],
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .to(
        progress,
        {
          value: 90,
          duration: 1.2,
          ease: "power1.out",
          onUpdate: () => {
            const value = Math.round(progress.value);

            if (progressRef.current) {
              progressRef.current.style.width = `${value}%`;
            }

            if (percentRef.current) {
              percentRef.current.textContent = `${value}%`;
            }

            if (ringRef.current) {
              ringRef.current.style.setProperty(
                "--progress",
                `${value * 3.6}deg`
              );
            }
          },
        },
        "-=0.1"
      );

    // Decorative animations
    gsap.to(orbRef.current, {
      rotation: 360,
      duration: 3,
      repeat: -1,
      ease: "none",
    });

    gsap.to(logoRef.current, {
      scale: 1.025,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.9,
    });

    gsap.to(".loader-ring", {
      opacity: 0.6,
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Wait for React's initial page render and a short grace period.
    minimumTimer = window.setTimeout(() => {
      if (document.readyState === "complete") {
        finishLoader();
      }
    }, MINIMUM_DISPLAY);

    // If initial loading is taking longer, keep the loader visible.
    slowTimer = window.setTimeout(() => {
      if (!completed) {
        gsap.to(progress, {
          value: 95,
          duration: 0.5,
          onUpdate: () => {
            const value = Math.round(progress.value);

            if (progressRef.current) {
              progressRef.current.style.width = `${value}%`;
            }

            if (percentRef.current) {
              percentRef.current.textContent = `${value}%`;
            }

            ringRef.current?.style.setProperty(
              "--progress",
              `${value * 3.6}deg`
            );
          },
        });
      }
    }, SLOW_THRESHOLD);

    // Avoid trapping users on the loading screen indefinitely.
    fallbackTimer = window.setTimeout(finishLoader, MAX_WAIT);

    if (document.readyState === "complete") {
      // The minimum timer handles the fast-loading case.
    } else {
      window.addEventListener("load", finishLoader, { once: true });
    }
  }, loaderRef);

  return () => {
    completed = true;
    window.clearTimeout(minimumTimer);
    window.clearTimeout(slowTimer);
    window.clearTimeout(fallbackTimer);
    window.removeEventListener("load", onComplete);
    ctx.revert();
  };
}, [onComplete]);


  return (
    <div className="loader-screen" ref={loaderRef}>
      <div className="loader-glow loader-glow-top" />
      <div className="loader-glow loader-glow-bottom" />

      <div className="loader-center">
        {/* Animated gradient ring */}
        <div className="loader-ring" ref={ringRef}>
          <div className="loader-ring-inner" />

          <div className="loader-orbit" ref={orbRef}>
            <span className="loader-orb" />
          </div>
        </div>

        {/* Your actual logo */}
        <div className="loader-logo-wrap" ref={logoRef}>
          <img
            src="/logo/logo1.PNG"
            alt="Optimising365"
            className="loader-logo"
          />
        </div>

        <p className="loader-caption">LOADING</p>

        <div className="loader-progress-wrap">
          <div className="loader-progress-track">
            <div
              className="loader-progress-fill"
              ref={progressRef}
            />
          </div>

          <span
            className="loader-percentage"
            ref={percentRef}
          >
            0%
          </span>
        </div>

        <p className="loader-tagline">
          Creativity. Technology. Growth.
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
