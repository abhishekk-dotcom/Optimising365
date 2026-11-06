import {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}) {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const element = elementRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay,
          ease: "power3.out",

          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions:
              "play none none reverse",
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={className}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;