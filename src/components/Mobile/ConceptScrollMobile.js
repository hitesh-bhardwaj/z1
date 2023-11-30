import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ConceptScrollMobile() {

  if (globalThis.innerWidth<1023) {

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mobile-concept",
          start: "top top",
          end: "2000 top",
          pin: true,
          scrub: true,
          // markers: true,
        },
      });

      tl.from(".en-bg", {
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      }).from(
        ".mobli-cont_content p",
        {
          opacity: 0,
          duration: 1,
          stagger: 1,
          delay: 1,
          ease: "power1.out",
        },
      ).to(
        ".mobli-cont_content p",
        {
          opacity: 0,
          duration: 1,
          stagger: 0,
          delay: 2,
          ease: "power1.out",
        },
      ).from(
        ".lapi-content .word",
        {
          opacity: 0,
          scale: 1.2,
          duration: 3,
          delay: 2,
          ease: "power1.out",
        },
      );
    });
    return () => ctx.revert();
  });
} 


//   // Concept Conversion Mobile
//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".mobile-concept",
//           start: "top top",
//           end: "bottom top",
//           markers: true,
//           pin: true,
//           scrub: true,
//         },
//       });

//       tl.from(
//         ".en-cicle ",
//         {
//           opacity: 1,
//           duration: 2,
//           ease: "power1.inOut",
//         },
//       );

//       tl.to(
//         ".mobli-cont",
//         { opacity: 1, duration: 5, ease: "power1.inOut" },
//       );
//       tl.to(
//         ".mobli-cont",
//         { display: "block", ease: "power1.inOut" },
//       );
//       tl.from(
//         ".en-cicle ",
//         {
//           opacity: 1,
//           duration: 2,
//           ease: "power1.inOut",
//         },
//       );
//       tl.to(
//         ".en-bg ",
//         { duration: 2, ease: "power1.inOut", scale: 0.7, opacity: 1 },
//       );
//       tl.to(
//         ".en-bg ",
//         { duration: 2, ease: "power1.inOut", scale: 1.2 },
//       );

//       tl.to(
//         ".mobli-cont_content",
//         {
//           opacity: 1,
//           duration: 2,
//           ease: "power1.inOut",
//         },
//       );

//       tl.to(
//         ".mobli-cont_content",
//         {
//           display: "block",
//           ease: "power1.inOut",
//         },
//       );
//       tl.to(
//         ".from",
//         {
//           opacity: 1,
//           duration: 2,
//           ease: "power1.inOut",
//         },
//       );
//       tl.to(
//         ".concept",
//         {
//           opacity: 1,
//           duration: 2,
//           ease: "power1.inOut",
//         },
//       );
//       tl.to(
//         ".to",
//         {
//           opacity: 1,
//           duration: 2,
//           ease: "power1.inOut",
//         },
//       );
//       tl.to(
//         ".conversion",
//         {
//           opacity: 1,
//           duration: 2,
//           ease: "power1.inOut",
//         },
//       );
//       tl.to(
//         ".mobli-cont_content",
//         {
//           scale: 2.5,
//           duration: 3,
//           ease: "power2.out",
//           opacity: 0,
//         },
//       );
//       tl.to(
//         ".mobli-cont_content p",
//         {
//           opacity: 1,
//           duration: 5,
//           ease: "power1.inOut",
//           stagger: 0.5,
//           delay: 2,
//         },
//       );
//       tl.to(
//         ".mobli-cont_content p",
//         { opacity: 0, duration: 2, ease: "power1.inOut" },
//       );

//       tl.to(
//         ".lapi-content p ",
//         {
//           opacity: 1,
//           duration: 5,
//           ease: "power1.inOut",
//           stagger: 0.3,
//           y: -50,
//         },
//       );
//     });
//     return () => ctx.revert();
//   });


  return (
    <>
      <div className="mobile-concept">
        <div className="mobli-cont mobl">
          <img loading="lazy" className="en-bg" src="/assets/mobile/concept/lights.webp" alt="mobile concept scroll light image" title="mobile concept scroll light image"/>
          <img loading="lazy" className="en-circle" src="/assets/mobile/concept/motion-circle.webp" alt="mobile concept scroll circle image" title="mobile concept scroll circle image"/>
          <div className="mobli-cont_content">
            <p className="from">From </p>
            <p className="concept">Concept </p>{" "}
            <p className="to">To </p> 
            <p className="conversion">Conversion</p>
          </div>
          <div className="lapi-content">
            <p className="word">We're Changing The Face of Web</p>
          </div>
        </div>
      </div>
    </>
  );
}
