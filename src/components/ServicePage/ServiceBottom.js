import React, { useEffect } from 'react'
import LazyVideo from './LazyVideo'
import Image from 'next/image'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const ServiceBottom = () => {
    const handleHoverSecond = (f) => {
        gsap.to(f.target, {
          duration: 0.5,
          scale: 1.05,
          ease: "power1.inOut",
        });
      };
      
      // Hover off the link
      const handleHoverExitSecond = (f) => {
        gsap.to(f.target, {
          duration: 0.5,
          scale: 1,
          ease: "power1.inOut",
        });
      };
    useEffect(() => {
        let ctx = gsap.context(() => {
          const dev = {};
    
          dev.interactions = {
            button: function () {
              const button = document.querySelectorAll("#rotate");
              gsap.set(button, {
                left: Math.floor(
                  Math.random() * (window.innerWidth - button.offsetWidth)
                ),
                opacity: 1,
              });
    
              var rotate = gsap
                .timeline({
                  scrollTrigger: {
                    scrub: true,
                    start: "top top",
                    end: "+=10000",
                  },
                })
                .to(button, {
                  rotation: 360 * 5,
                  duration: 1,
                  ease: "none",
                });
            },
          };
          dev.interactions.button();
        });
        return () => ctx.revert();
      }, []);
    
  return (
    <section id='service-bottom-video'>
          <div className="service-second-image-section">
          <div
            className="image-container-en"
            data-cursor-text="Works"
            data-cursor-size="100px"
            data-cursor-color="#bcd15e"
            onMouseEnter={(f) => handleHoverSecond(f)}
            onMouseOut={(f) => handleHoverExitSecond(f)}
          >
            <LazyVideo
              src="/assets/services/service-2.webm"
              poster="/assets/services/service-video-people-sitting.webp"
              type="video/webm"
              title="people-disscussion"
              className="vid"
            />
            <div className="rotate-idea-svg">
              <Image
                src="/assets/about/wemakemagic.png"
                width={200}
                height={200}
                alt="services"
                id="rotate"
              />
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default ServiceBottom
