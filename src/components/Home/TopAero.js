import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TopHomeParticles from "./TopAeroParticles";

gsap.registerPlugin(ScrollTrigger);

export default function Aerosol() {
  useEffect(() => {
    document.body.addEventListener("mousemove", (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set(".c-cursor", {
        x: mouseX,
        y: mouseY,
      });

      gsap.to(".shape-10", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(()=>{

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".top-aero-hover",
          start: "-200 top",
        },
      });
  
      const demoHeader = document.querySelectorAll(".top-aero-demo p");
  
      // Header
      tl.from(
        demoHeader,
        {
          opacity: 0,
          yPercent: 320,
          skewY: 30,
          duration: 3,
          ease: "expo.out",
        },
        
      );
    })
    return ()=>ctx.revert();
  },[]);

  return (
    <>
      <div className="top-aero-hover">
        <div className="text-container top-aero-demo">
          <p className="aero-desk-1 w-[70%] tablet:w-full">
            we make cool things
            that do great business
          </p>
          <TopHomeParticles />
        </div>

        <div className="aerosol-main">
          <div className="shapes">
            <div className="shape-10 shape-1"></div>
            <div className="shape-10 shape-2"></div>
            <div className="shape-10 shape-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
