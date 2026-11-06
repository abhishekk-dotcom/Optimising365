import {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ImageReveal.css";

gsap.registerPlugin(ScrollTrigger);

function ImageReveal({
  src,
  alt = "",
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      timeline
        .fromTo(
          containerRef.current,
          {
            clipPath:
              "inset(0 100% 0 0)",
          },
          {
            clipPath:
              "inset(0 0% 0 0)",
            duration: 1.3,
            ease: "power4.inOut",
          }
        )
        .fromTo(
          imageRef.current,
          {
            scale: 1.25,
          },
          {
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          0
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="image-reveal"
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default ImageReveal;