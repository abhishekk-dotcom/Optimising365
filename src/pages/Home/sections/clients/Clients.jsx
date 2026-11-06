
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Clients.css";

// gsap.registerPlugin(ScrollTrigger);

// export default function Client() {
//   const sectionRef = useRef(null);
//   const leftHandRef = useRef(null);
//   const rightHandRef = useRef(null);
//   const headingRef = useRef(null);
//   const captionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const ctx = gsap.context(() => {
//       // Initial state: hands apart
//       gsap.set(leftHandRef.current, {
//         xPercent: -24,
//         rotation: -3,
//       });

//       gsap.set(rightHandRef.current, {
//         xPercent: 24,
//         rotation: 3,
//       });

//       gsap.set([headingRef.current, captionRef.current], {
//         opacity: 0,
//         y: 18,
//       });

//       // Scroll down = handshake
//       // Scroll up = reverse back to separated hands
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           end: "+=1000",
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//       });

//       tl.to(
//         leftHandRef.current,
//         {
//           xPercent: 8,
//           rotation: 0,
//           duration: 1,
//           ease: "none",
//         },
//         0
//       );

//       tl.to(
//         rightHandRef.current,
//         {
//           xPercent: -8,
//           rotation: 0,
//           duration: 1,
//           ease: "none",
//         },
//         0
//       );

//       // Reveal the message as hands approach
//       tl.to(
//         [headingRef.current, captionRef.current],
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.3,
//           stagger: 0.1,
//           ease: "none",
//         },
//         0.55
//       );

//       // Hold the handshake until the pinned section ends
//       tl.to({}, { duration: 0.25 });
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       className="client-handshake"
//       ref={sectionRef}
//       aria-label="Building partnerships through collaboration"
//     >
//       <div className="client-background-pattern" />

//       <div className="client-topline">
//         <span>OPTIMISING365</span>
//         <span>CREATIVE PARTNERSHIPS</span>
//       </div>

//       <div className="client-handshake-stage">
       
// <img
//   ref={leftHandRef}
//   className="client-hand client-hand-left"
//   src="/images/clients/leftHand.png"
//   alt=""
//   draggable={false}
//   onError={(e) =>
//     console.error("Left hand failed to load:", e.currentTarget.src)
//   }
// />

// <img
//   ref={rightHandRef}
//   className="client-hand client-hand-right"
//   src="/images/clients/rightHand.png"
//   alt=""
//   draggable={false}
//   onError={(e) =>
//     console.error("Right hand failed to load:", e.currentTarget.src)
//   }
// />


//         <div className="client-handshake-message">
//           <span className="client-eyebrow">
//             BETTER TOGETHER
//           </span>

//           <h2 ref={headingRef}>
//             Let’s build
//             <br />
//             something <span>great.</span>
//           </h2>

//           <p ref={captionRef}>
//             Strong partnerships. Bold ideas. Meaningful growth.
//           </p>
//         </div>
//       </div>

//       <div className="client-bottomline">
//         <span>YOUR VISION, OUR COLLABORATION</span>
//         <span>SCROLL TO EXPLORE ↓</span>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Clients.css";

gsap.registerPlugin(ScrollTrigger);

export default function Client() {
  const sectionRef = useRef(null);
  const leftHandRef = useRef(null);
  const rightHandRef = useRef(null);
  const headingRef = useRef(null);
  const captionRef = useRef(null);
  const eyebrowRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const leftHand = leftHandRef.current;
      const rightHand = rightHandRef.current;
      const message = [eyebrowRef.current, headingRef.current, captionRef.current];

      // Keep the copy behind the hands and reveal it before the handshake completes.
      gsap.set(leftHand, { xPercent: -5, rotation: -2, transformOrigin: "72% 50%" });
      gsap.set(rightHand, { xPercent: 5, rotation: 2, transformOrigin: "28% 50%" });
      gsap.set(message, { autoAlpha: 0, y: 14 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=850",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // The text appears first, then the two hands move inward over it.
      timeline.to(message, {
        autoAlpha: 1,
        y: 0,
        duration: 0.28,
        stagger: 0.06,
        ease: "none",
      }, 0.05);

      timeline.to(leftHand, {
        xPercent: 0,
        rotation: 0,
        duration: 0.72,
        ease: "none",
      }, 0.18);

      timeline.to(rightHand, {
        xPercent: 0,
        rotation: 0,
        duration: 0.72,
        ease: "none",
      }, 0.18);

      // Keep the completed handshake on screen for the final part of the scroll.
      timeline.to({}, { duration: 0.22 });
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="client-handshake"
      ref={sectionRef}
      aria-label="Building partnerships through collaboration"
    >
      <div className="client-background-pattern" aria-hidden="true" />

      <div className="client-topline">
        {/* <span>OPTIMISING365</span> */}
        <span>CREATIVE PARTNERSHIPS</span>
      </div>

      <div className="client-handshake-stage">
        <div className="client-handshake-message">
          <span className="client-eyebrow" ref={eyebrowRef}>BETTER TOGETHER</span>
          <h2 ref={headingRef}>
            Let’s build
            <br />
            something <span>great.</span>
          </h2>
          <p ref={captionRef}>
            Strong partnerships. Bold ideas. Meaningful growth.
          </p>
        </div>

        <img
          ref={leftHandRef}
          className="client-hand client-hand-left"
          src="/images/clients/LeftHand.png"
          alt=""
          draggable={false}
          onError={(e) => console.error("Left hand failed to load:", e.currentTarget.src)}
        />

        <img
          ref={rightHandRef}
          className="client-hand client-hand-right"
          src="/images/clients/RightHand.png"
          alt=""
          draggable={false}
          onError={(e) => console.error("Right hand failed to load:", e.currentTarget.src)}
        />
      </div>

      <div className="client-bottomline">
        <span>YOUR VISION, OUR COLLABORATION</span>
        {/* <span>SCROLL TO EXPLORE ↓</span> */}
      </div>
    </section>
  );
}
