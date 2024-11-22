import gsap from 'gsap';
import React, { useEffect } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger)
const HowWeWork = () => {
    useEffect(() => {
        let ctx = gsap.context(() => {
          const totalSection = document.querySelectorAll(".top-box");
          totalSection.forEach(function (elem, index) {
            const text = new SplitType(elem.querySelectorAll(".box-anim-gsap"));
            let textwords = text.words;
            gsap.from(textwords, {
              scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                // end: "bottom top",
                markers: false,
              },
              duration: 0.5,
              opacity: 0,
              yPercent: 100,
              ease: "Power3.out",
            });
          });
        });
        return () => ctx.revert();
      });
    // Line Animate
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".top-box",
          start: "top 70%",
        },
      });
      tl.fromTo(
        ".line-animation",
        { opacity: 0, width: "0" },
        {
          width: "90%",
          opacity: 1,
          duration: 0.8,
          stagger: 0.5,
        }
      );
    });
    return () => ctx.revert();
  });
    
    useEffect(() => {
        let ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".main-how",
              start: "top 85%",
            },
          });
    
          // Header
          tl.fromTo(
            ".line-anim .span",
            0.8,
            {
              y: 350,
              ease: "none",
              skewY: -20,
            },
            {
              y: 0,
              skewY: 0,
              stagger: 0.4,
            }
          );
        });
        return () => ctx.revert();
      }, []);
  return (
    <section id="how-we-work">
        <div className="main-how">
          <div className="how-we-work">
            <div className="first-heading-box">
              <div className="sub-first-heading line-anim">
                <span className="span">
                  This is <span className="sub-first-highlight"> how</span>
                </span>
              </div>
              <div className="sub-second-heading line-anim">
                <span className="span">we work</span>
              </div>
            </div>
          </div>

          {/* Boxes How we Work */}

          {/* 1 */}

          <div className="top-box">
            <div
              className="line-animation"
              style={{
                width: "0%",
                height: "1px",
                background: "#a2a2a2",
              }}
            ></div>
            <div
              className="first-box-how box-anim-gsap"
              data-cursor-color="#fcba03"
              data-cursor-size="120px"
              data-cursor-text="Define"
            >
              <div className="box-we">
                <h4 className="disabled-work">Define</h4>
              </div>
              <div className="box-we-para">
                <p>
                  <span>
                    Develop a thorough understanding of the project, audience,
                    and objectives to formulate a strategy.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="top-box">
            <div
              className="line-animation"
              style={{
                width: "0%",
                height: "1px",
                background: "#a2a2a2",
              }}
            ></div>
            <div
              className="first-box-how box-anim-gsap"
              data-cursor-size="120px"
              data-cursor-color="#00ffdd"
              data-cursor-text="Design"
            >
              <div className="box-we">
                <h4 className="disabled-work">Design</h4>
              </div>
              <div className="box-we-para">
                <p>
                  <span>
                    Craft a purposeful design to reflect the objectives and
                    indicate the direction for the entire project.
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* 1 END */}

          {/* 2 */}
          <div
            className="top-box"
            data-cursor-size="120px"
            data-cursor-color="#CA022C"
            data-cursor-text="Implement"
          >
            <div
              className="line-animation"
              style={{
                width: "0%",
                height: "1px",
                background: "#a2a2a2",
              }}
            ></div>
            <div className="first-box-how box-anim-gsap">
              <div className="box-we">
                <h4 className="disabled-work">Implement</h4>
              </div>
              <div className="box-we-para">
                <p>
                  <span>
                    Bring the design to life in the form of an interactive and
                    functional prototype. Review, refine and optimise.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div
            className="top-box"
            data-cursor-size="120px"
            data-cursor-color="#536cd4"
            data-cursor-text="Develop"
          >
            <div
              className="line-animation"
              style={{
                width: "0%",
                height: "1px",
                background: "#a2a2a2",
              }}
            ></div>
            <div className="box-anim-gsap develop-box-service">
              <div className="first-box-how">
                <div className="box-we flex-start-remove">
                  <h4 className="disabled-work">Develop</h4>
                </div>
                <div className="box-we-para">
                  <p>
                    <span>
                      Incorporate implementation and technical components into a
                      highly functional system, ready for review.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 2 END */}

          {/* 3 */}
          <div
            className="top-box last-box"
            data-cursor-size="120px"
            data-cursor-color="#bcd15e"
            data-cursor-text="Deliver"
          >
            <div
              className="line-animation"
              style={{
                width: "0%",
                height: "1px",
                background: "#a2a2a2",
              }}
            ></div>
            <div className="first-box-how box-anim-gsap">
              <div className="box-we">
                <h4 className="disabled-work">Deliver</h4>
              </div>
              <div className="box-we-para">
                <p>
                  <span>
                    Review, refine, test and prepare final product for delivery.
                    Launch and continue to evolve over time.
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* 3 END */}
          {/* Boxes How we Work END */}
        </div>
    </section>
  )
}

export default HowWeWork
