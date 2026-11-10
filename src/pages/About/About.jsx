

import { useCallback, useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./About.css";
import Footer from "../../components/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import AboutSteps from "./sections/AboutSteps/AboutSteps";



gsap.registerPlugin(ScrollTrigger);



const campaignImages = [

  "/images/about/campaign-1.png",

  "/images/about/campaign-1.png",

  "/images/about/campaign-1.png",

  "/images/about/campaign-1.png",

  "/images/about/campaign-1.png",

];



const cards = [
  {
    n: "01",
    title: "Who we are",
    headline: "Creative minds. Measurable impact.",
    text: "Optimising365 brings strategy, creativity, media, and technology together to help ambitious brands grow.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&fm=png",
    alt: "Creative team collaborating",
  },
  {
    n: "02",
    title: "What we do",
    headline: "From attention to action.",
    text: "From digital strategy and paid media to creative campaigns, audience insights, and performance optimisation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&fm=png",
    alt: "Digital marketing analytics",
  },
  {
    n: "03",
    title: "How we work",
    headline: "Clear thinking. Open collaboration.",
    text: "We work as an extension of your team: set shared goals, test ideas, learn from data, and keep improving.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&fm=png",
    alt: "Business team planning",
  },
];



const values = [

  [

    "01",

    "Performance with purpose",

    "Every campaign starts with a clear objective and a way to measure progress.",

  ],

  [

    "02",

    "Creative that connects",

    "We pair strong ideas with audience insight to make brands easier to notice and remember.",

  ],

  [

    "03",

    "Partnership, not hand-offs",

    "We share context, communicate openly, and solve challenges together.",

  ],

  [

    "04",

    "Always improving",

    "We learn from results, adapt quickly, and make the next decision smarter.",

  ],

];





function CampaignCollage() {

  const [hoverImages, setHoverImages] = useState([]);

  const imageIndex = useRef(0);

  const imageId = useRef(0);

  const lastSpawn = useRef(0);

  const hideTimers = useRef(new Map());



  const spawnImage = useCallback((x, y) => {

    const now = Date.now();

    if (now - lastSpawn.current < 170) return;



    lastSpawn.current = now;



    const id = ++imageId.current;

    const image =

      campaignImages[imageIndex.current % campaignImages.length];



    imageIndex.current += 1;



    setHoverImages((previous) => [

      ...previous.slice(-4),

      {

        id,

        image,

        x,

        y,

        rotation: Math.random() * 16 - 8,

        width: 125 + Math.random() * 90,

      },

    ]);



    const timer = window.setTimeout(() => {

  setHoverImages((previous) =>

    previous.filter((item) => item.id !== id)

  );



  hideTimers.current.delete(id);

}, 1500);



hideTimers.current.set(id, timer);

  }, []);



  useEffect(() => {
    // Attach the image trail only to the About Hero, never the whole page.
    const hero = document.querySelector(".about-hero");
    if (!hero) return;

    const handlePointerMove = (event) => {
      spawnImage(event.clientX, event.clientY);
    };

    hero.addEventListener("pointermove", handlePointerMove);

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hideTimers.current.forEach((timer) => clearTimeout(timer));
      hideTimers.current.clear();
    };
  }, [spawnImage]);



  return (

    <>

      <div className="fullscreen-gradient" aria-hidden="true">

        <div className="fullscreen-gradient__glow" />

        <div className="fullscreen-gradient__orbit fullscreen-gradient__orbit--one" />

        <div className="fullscreen-gradient__orbit fullscreen-gradient__orbit--two" />

        <span className="fullscreen-gradient__spark fullscreen-gradient__spark--one">

          

        </span>

        <span className="fullscreen-gradient__spark fullscreen-gradient__spark--two">

          

        </span>



        {hoverImages.map((item) => (

          <img

            key={item.id}

            src={item.image}

            alt=""

            className="gradient-image-trail"

            style={{

              left: `${item.x}px`,

              top: `${item.y}px`,

              width: `${item.width}px`,

              "--trail-rotation": `${item.rotation}deg`,

            }}

            onError={(event) => {

  event.currentTarget.style.display = "none";

}}

          />

        ))}

      </div>

    </>

  );

}



export default function About() {

  const pageRef = useRef(null);



useEffect (() => {

    const page = pageRef.current;

    if (!page) return;



    const ctx = gsap.context(() => {

      const reducedMotion = window.matchMedia(

        "(prefers-reduced-motion: reduce)"

      ).matches;



      if (reducedMotion) return;



      gsap.from(".about-hero__eyebrow", {

        opacity: 0,

        y: 18,

        duration: 0.7,

        scrollTrigger: {

          trigger: ".about-hero",

          start: "top 80%",

        },

      });



      gsap.from(".about-hero__title-line", {

        yPercent: 115,

        rotate: 2,

        duration: 1,

        stagger: 0.12,

        ease: "power4.out",

        scrollTrigger: {

          trigger: ".about-hero",

          start: "top 75%",

        },

      });



      gsap.from(".about-hero__copy, .about-hero__button", {

        opacity: 0,

        y: 22,

        duration: 0.8,

        stagger: 0.12,

        ease: "power2.out",

        scrollTrigger: {

          trigger: ".about-hero",

          start: "top 72%",

        },

      });







      gsap.from(".about-team-image img", {

        scale: 1.12,

        opacity: 0.7,

        duration: 1.2,

        ease: "power2.out",

        scrollTrigger: {

          trigger: ".about-team",

          start: "top 80%",

        },

      });



      gsap.utils.toArray(".about-stack-card").forEach((card, index) => {

        gsap.from(card, {

          opacity: 0,

          y: 55,

          rotate: index % 2 === 0 ? 1 : -1,

          duration: 0.85,

          ease: "power3.out",

          scrollTrigger: {

            trigger: card,

            start: "top 86%",

          },

        });

      });



      gsap.from(".about-value-card", {

        opacity: 0,

        y: 35,

        duration: 0.7,

        stagger: 0.12,

        ease: "power3.out",

        scrollTrigger: {

          trigger: ".about-values-grid",

          start: "top 82%",

        },

      });



      gsap.from(".about-cta__content", {

        opacity: 0,

        y: 25,

        duration: 0.8,

        ease: "power2.out",

        scrollTrigger: {

          trigger: ".about-cta",

          start: "top 82%",

        },

      });



      gsap.utils.toArray(".about-value-card").forEach((card) => {

        const hover = gsap.to(card, {

          y: -7,

          duration: 0.3,

          paused: true,

          ease: "power2.out",

        });



        card.addEventListener("mouseenter", hover.play);

        card.addEventListener("mouseleave", hover.reverse);



        card._aboutHoverAnimation = hover;

      });

    }, page);



    const refresh = () => ScrollTrigger.refresh();



    window.addEventListener("load", refresh);

    const refreshTimer = window.setTimeout(refresh, 250);



    return () => {

      window.removeEventListener("load", refresh);

      window.clearTimeout(refreshTimer);



      page.querySelectorAll(".about-value-card").forEach((card) => {

        card._aboutHoverAnimation?.kill();

      });



      ctx.revert();

    };

  }, []);





return (

  

  <main className="about-page" ref={pageRef}>
    <Hero />
    
    {/* SECTION 2: COMPANY OVERVIEW — OUTSIDE THE HERO */}

    <section className="about-overview">

      <div className="about-overview__content">

        <h2 className="about-overview__title">

          Company Overview

        </h2>



        <p className="about-overview__description">
  Optimising365 is a digital marketing company focused on helping
  businesses build a strong online presence and achieve sustainable
  growth. We bring together strategy, creativity, technology, and
  data to create marketing solutions that connect brands with the
  right audience. From SEO and paid media to social media, content
  creation, and digital strategy, we focus on delivering meaningful
  experiences and measurable results. Our goal is simple: turn
  ideas into impact and help businesses grow with purpose.
</p>

      </div>



      <div className="about-overview__image">

       <img
  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&fm=png"
  alt="Creative team collaborating"
  loading="lazy"
/>

      </div>

    </section>




    {/* SECTION 3: WHO ARE WE? */}
<section className="about-video-section about-video-section--who">
  <div className="about-video-section__inner">
    <div className="about-video-section__copy">
      <span className="about-video-section__eyebrow">01 / ABOUT OPTIMISING365</span>

      <h2 className="about-video-section__title">
        WHO
        <br />
        ARE WE?
      </h2>

      <h3 className="about-video-section__headline">
        Creative minds.
        <br />
        Measurable impact.
      </h3>

      <p className="about-video-section__description">
        Optimising365 brings strategy, creativity, media, and technology
        together to help ambitious brands grow. We turn complex marketing
        challenges into clear plans and digital experiences that move
        businesses forward.
      </p>

      <Link to="/contact" className="about-video-section__button">
        View project <span>↗</span>
      </Link>
    </div>

    <div className="about-video-section__media">
      <img
  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&fm=png"
  alt="Digital marketing analytics"
  loading="lazy"
/>
    </div>
  </div>
</section>

{/* SECTION 4: WHAT WE DO? */}
<section className="about-video-section about-video-section--what">
  <div className="about-video-section__inner">
    <div className="about-video-section__copy">
      <span className="about-video-section__eyebrow">02 / WHAT WE DO</span>

      <h2 className="about-video-section__title">
        WHAT
        <br />
        WE DO?
      </h2>

      <h3 className="about-video-section__headline">
        From attention
        <br />
        to action.
      </h3>

      <p className="about-video-section__description">
        We create connected digital marketing strategies across performance
        media, SEO, social media, creative campaigns, and audience insights.
        Every activity is designed to help your brand reach the right people,
        build trust, and achieve measurable growth.
      </p>

      <Link to="/services" className="about-video-section__button">
        View services <span>↗</span>
      </Link>
    </div>

    <div className="about-video-section__media">
     <img
  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&fm=png"
  alt="Team working together"
  loading="lazy"
/>
    </div>
  </div>
</section>

    <AboutSteps />
    <Footer />

  </main>

);

}