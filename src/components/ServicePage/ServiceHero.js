import gsap from 'gsap';
import React, { useEffect } from 'react'


const ServiceHero = () => {
    useEffect(() => {
        let ctx = gsap.context(() => {
          const tl = gsap.timeline();
          tl.fromTo(
            "#service-anim",
            {
              rotationX: -80,
              opacity: 0,
              translateY: 300,
              transformPerspective: "1000",
              transformOrigin: "top center",
            },
            {
              delay: 3.2,
              duration: 1.3,
              rotationX: 0,
              opacity: 1,
              translateY: 0,
              stagger: 0.2,
            }
          );
    
        })
        return () => ctx.revert();
      }, []);
      useEffect(() => {
        let ctx = gsap.context(() => {
          const tl = gsap.timeline();
          tl.fromTo(
            "#grow",
            {
              height: "16vh",
              borderRadius: "10vw",
              opacity: 0,
              scale: 0,
            },
            {
              delay: 4,
              duration: 1.3,
              opacity: 1,
              scale: 1,
            }
          );
        });
        return () => ctx.revert();
      }, []);
    
      useEffect(() => {
        let ctx = gsap.context(() => {
          const growTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#grow",
              scrub: true,
              start: "-=50 center",
              end: "+=800",
              ease: "none",
              markers: false,
            },
          });
          growTl.to("#grow", {
            duration: 1,
            borderRadius: "0vw",
            height: "100vh",
            width: "90vw",
            right: "2vw",
            y: "420px",
          });
        });
        return () => ctx.revert();
      });
  return (
    <section id='service-hero'>
        <section
          className="service-hero"
          data-cursor-size="10px"
          data-cursor-text=""
        >
          <div className="service-hero-content">
            <div className="first-box-service">
              <div
                className="what-we"
                id="service-anim"
                data-cursor-magnetic
                data-cursor-background-image="/assets/gif/7.gif"
                data-cursor-size="300px"
                data-cursor-color="#000"
              >
                What
              </div>

              <div
                className="what-we"
                id="service-anim"
                data-cursor-magnetic
                data-cursor-background-image="/assets/gif/4.gif"
                data-cursor-size="300px"
                data-cursor-color="#000"
              >
                <span className="w-e">We</span>
              </div>

              <p className="para-hero" id="service-anim">
                We are a globally recognised, award-winning UI UX design studio. Our comprehensive range of services leverages our full expertise to boost your digital presence to celestial heights.
              </p>
            </div>

            <h1
              className="do"
              id="service-anim"
              data-cursor-magnetic
              data-cursor-background-image="/assets/gif/9.gif"
              data-cursor-size="300px"
              data-cursor-color="#000"
            >
              Offer
            </h1>
            <div className="second-box-service">
              <div className="image-en">
                <div className="absolute-img">
                  <video
                    poster="/assets/services/services-main-poster.webp"
                    className="vid"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    src="/assets/services/service-1.webm"
                    id="grow"
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </section>
  )
}

export default ServiceHero
