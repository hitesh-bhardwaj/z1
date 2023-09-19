'use client'

import React, { useEffect } from "react";
import Head from "next/head";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "intersection-observer";
import { NextSeo } from "next-seo";
import SplitType from "split-type";

import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import MarqueeCata from "@/components/MarqueeCata";
import SliderMarquee from "@/components/ServicePage/SliderMarquee";
import FooterMobile from "@/components/Mobile/FooterMobile";
import ServiceNextBox from "@/components/NextBoxes/ServiceNextBox";
import SecondVideoLazy from "@/components/ServicePage/SecondVideoLazy";
import FirstVideoLazy from "@/components/ServicePage/FirstVideoLazy";
import StrategySection from "@/components/ServicePage/StartegySection";
import Modal from "../components/PopupForm/formModal";

gsap.config({
  nullTargetWarn: false,
  trialWarn: false
});

gsap.registerPlugin(ScrollTrigger);
5;
// Hover on the link
// const handleHover = (e) => {
//   gsap.to(e.target, {
//     duration: 0.5,
//     scale: 1.1,
//     ease: "power1.inOut",
//   });
// };

// Hover off the link
// const handleHoverExit = (e) => {
//   gsap.to(e.target, {
//     duration: 0.5,
//     scale: 1,
//     ease: "power1.inOut",
//   });
// };

// Hover on the link
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

export default function services() {
  // Hero Section Animation
  useEffect(() => {
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
    return () => tl.kill();
  }, []);

  // Mobile Video Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#mobile-vid",
      {
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3.2,
        duration: 1.3,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

  // Video Reveal Animation
  useEffect(() => {
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
    return () => tl.kill();
  }, []);

  // Parallax Image
  // useEffect(() => {
  //   gsap.utils.toArray(".image-container").forEach(function (container) {
  //     let image = container.querySelector("img");

  //     gsap.to(image, {
  //       y: () => image.offsetHeight - container.offsetHeight,
  //       ease: "none",
  //       startAt: { y: "-25%" },
  //       scrollTrigger: {
  //         trigger: container,
  //         scrub: true,
  //         pin: false,
  //         markers: false,
  //         invalidateOnRefresh: true,
  //       },
  //       y: "25%",
  //       ease: "none",
  //     });
  //   });
  // });

  //   Rotate SVG on Scroll
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

  // Page Transitions
  useEffect(() => {
    const loaderBars = document.querySelectorAll("#loaderbars");
    const tl = gsap.timeline();

    let ctx = gsap.context(() => {

      tl.from(".loader-wrap-heading h1", {
        delay: 0.5,
        y: 200,
        skewY: 10,
        duration: 1,
      }).to(".loader-wrap-heading h1", {
        delay: 0.5,
        y: -200,
        skewY: 10,
        duration: 1,
      }).to(loaderBars, {
        height: 0,
        duration: 0.6,
        delay: -0.5,
        ease: "power2.easeIn",
        stagger: 0.1,
      }).to("#loader", {
        y: "-1500",
        opacity: 0,
        ease: "power2.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  // Video Transition on Scroll
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

  // Text Reveal Animation Top to Center
  useEffect(() => {
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
    return () => tl.kill();
  }, []);

  // Text Reveal Animation For Each
  // useEffect(() => {
  //   const totalSection = document.querySelectorAll(".strategy-box-anim");
  //   totalSection.forEach(function (elem, index) {
  //     const text = new SplitType(elem.querySelectorAll(".ser-text-head-anim"));
  //     let textwords = text.words;
  //     gsap.from(textwords, {
  //       scrollTrigger: {
  //         trigger: elem,
  //         start: "top 85%",
  //         markers: false,
  //       },
  //       duration: 0.5,
  //       opacity: 0,
  //       yPercent: 100,
  //       ease: "Power3.out",
  //       stagger: 0.02,
  //     });
  //   });
  // });

  // Text Reveal Animation For Each
  useEffect(() => {
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
        // stagger: 0.2,
      });
    });
  });

  // Line Animate
  useEffect(() => {
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

  // Strategy Image Animate
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-box-image",
        start: "top 85%",
      },
    });
    tl.fromTo(
      ".anim-img-service",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 1,
      }
    );
  });

  console.clear();

  return (
    <>
      <NextSeo
        title=" Enigma Digital | Services | Expert UI/UX, Development & Marketing"
        description="Experience top-tier UI/UX design, front-end development, and organic marketing services with Enigma Digital, enhancing your online presence and business growth."
        canonical="https://www.weareenigma.com/services"
        openGraph={{
          url: "https://www.weareenigma.com/services",
          title:
            " Enigma Digital | Services | Expert UI/UX, Development & Marketing",
          description:
            "Experience top-tier UI/UX design, front-end development, and organic marketing services with Enigma Digital, enhancing your online presence and business growth.",
          images: [
            {
              url: "",
              width: 400,
              height: 600,
              alt: "Enigma Image",
              type: "image/png",
            },
            { url: "" },
          ],
          siteName: "https://www.weareenigma.com/services",
        }}
      />

      <Head>
        <title>
          Enigma Digital | Services | Expert UI/UX, Development & Marketing
        </title>
        <meta
          name="description"
          content="Experience top-tier UI/UX design, front-end development, and organic marketing services with Enigma Digital, enhancing your online presence and business growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0">          
        </meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      <div className="loader-wrap" id="loader" style={{ zIndex: 999 }}>
      <div className='mainLoaderBg'>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
          </div>

        <div className="loader-wrap-heading">
          <span>
            <h1>What We Do</h1>
          </span>
        </div>
      </div>

      <SmoothScroll />

      <Cursor isGelly={true} />

      <div>
        <Header />
      </div>

{/* PopUp Modal Button */}
<Modal />
{/* End */}

      <main>
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


        {/* =================== Second Image Section ========================= */}
        <div
          className="service-second-image-section"
          id="service-second-section"
        >
          <div className="" id="opacity"></div>
        </div>

        <div className="mobile-video-service-section">
          <div className="video-service-mobile" id="mobile-vid">
          <FirstVideoLazy className="vid"
                      src="/assets/services/service-1.webm"
                      title="Service Video"
                    />
          </div>
        </div>

        {/* =================== Services and Capabilities Section ========================= */}

        <section>
          <StrategySection />
        </section>

        {/* =================== Services and Capabilities Section END ========================= */}

        {/* =================== Bottom Image Section ========================= */}
        <section className="service-second-image-section">
          <div className="image-container-en"
               data-cursor-text="Works"
               data-cursor-size="100px"
               data-cursor-color="#bcd15e"
               onMouseEnter={(f) => handleHoverSecond(f)}
                      onMouseOut={(f) => handleHoverExitSecond(f)}>
          <SecondVideoLazy
                      src="/assets/services/service-2.webm"
                      title="Mac Enigma Video"
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
        </section>
        {/* =================== Bottom Image Section END ========================= */}

        {/* ===================== How we Work ==================== */}
        <section className="main-how">
          <div className="how-we-work">
            <div className="first-heading-box">
              <h1 className="sub-first-heading line-anim">
                <span className="span">
                  This is <span className="sub-first-highlight"> how</span>
                </span>
              </h1>
              <h1 className="sub-second-heading line-anim">
                <span className="span">we work</span>
              </h1>
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
        </section>
        {/* ===================== How we Work END ====================  */}


        {/* ==================== Slider Marquee ==================== */}
        <section className="m-150">
          <SliderMarquee />
        </section>
        {/* ==================== Slider Marquee END ==================== */}


        {/* ======================== Marquee ====================== */}
        <section className="service-marquee">
          <MarqueeCata />
        </section>
        {/* ======================== Marquee END ====================== */}

        {/* ======================= Next Page Box ====================== */}
        <section className="m-150">
          <ServiceNextBox />
        </section>
        {/* ======================= Next Page Box END ====================== */}

        {/* ======================== Footer ====================== */}
        <section className="footer-desktop">
          <Footer />
        </section>

        <section className="mobile-footer">
          <FooterMobile />
        </section>
        {/* ======================== Footer END ====================== */}
      </main>
    </>
  );
}
