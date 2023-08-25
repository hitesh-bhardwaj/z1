import Head from "next/head";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import styles from "@/styles/patra.module.css";
import Link from "next/link";
import { NextSeo } from "next-seo";

import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import WragbySlider from "@/components/CaseStudies/WragbySlider";

gsap.registerPlugin(ScrollTrigger);

// Hover on the link
const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.5,
    scale: 1.1,
    ease: "power1.inOut",
  });
};

// Hover off the link
const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.5,
    scale: 1,
    ease: "power1.inOut",
  });
};

export default function patra() {
  // Page Transitions
  useEffect(() => {
    let ctx = gsap.context(() => {
      const svg = document.getElementById("svg");
      const tl = gsap.timeline();
      const curve = "M0, 502S175, 272, 500, 272s500, 230, 500, 230V0H0Z";
      const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

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
      });
      tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
      }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
      });
      tl.to(".loader-wrap", {
        y: -1500,
      });
      tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
      });
    });
    return () => ctx.revert();
  });

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#patro",
      {
        rotationX: -50,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3.6,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
  });

  // Hero Section Sub Text Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#patroSub",
      {
        opacity: 0,
        translateY: 100,
      },
      {
        delay: 3.7,
        duration: 1.3,
        opacity: 1,
        translateY: 0,
        stagger: 0.4,
      }
    );
  });

  // Hero Section Image Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".image-anim",
      {
        opacity: 0,
        translateY: 300,
        transformOrigin: "top center",
      },
      {
        delay: 4.2,
        duration: 1.3,
        opacity: 1,
        translateY: 0,
      }
    );
  });

  // Parallax Image
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray("#image-container").forEach(function (container) {
        let image = container.querySelector("img");

        gsap.to(image, {
          y: () => image.offsetHeight - container.offsetHeight,
          ease: "none",
          startAt: { y: "-25%" },
          scrollTrigger: {
            trigger: container,
            scrub: true,
            pin: false,
            markers: false,
          },
          y: "25%",
          ease: "none",
        });
      });
    });
    return () => ctx.revert();
  });

  // Data Speed Control
  useEffect(() => {
    let ctx = gsap.context(() => {
      const color = document.querySelector("#colorsection");
      gsap.to("[data-speed]", {
        y: (i, el) =>
          -1 *
          parseFloat(el.getAttribute("data-speed")) *
          (color.offsetHeight / 3),
        ease: "none",
        scrollTrigger: {
          trigger: color,
          invalidateOnRefresh: true,
          scrub: 0,
          markers: false,
          start: "center bottom",
        },
      });
    });
    return () => ctx.revert();
  });

  // LI Animate
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#colorsection",
        start: "top top",
      },
    });
    tl.fromTo(
      "#line",
      { opacity: 0, width: "0" },
      {
        width: "100%",
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
      }
    );
  });

  return (
    <>

    <NextSeo
      title="Patra | Case Study"
      description="Patra case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client."
      canonical="https://www.weareenigma.com/patra"
      openGraph={{
        url: "https://www.weareenigma.com/patra",
        title: "Patra | Case Study",
        description:
          "Patra case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client.",
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
        siteName: "https://www.weareenigma.com/patra",
      }}
    />    

      <Head>
        <title>Patra | Case Study</title>
        <meta name="description" content="Patra case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        ></meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      <SmoothScroll />

      <div className="loader-wrap" id="loader">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
        </svg>

        <div className="loader-wrap-heading">
          <span>
            <h1>
              <span className="loader-font">Patra</span>
            </h1>
          </span>
        </div>
      </div>

      <Cursor isGelly={true} />

      <main>
        <div>
          <Header />
        </div>

        <div className={styles.Main}>
          <div
            className={styles.HeroSection}
            data-cursor-text=""
            data-cursor-size="10px"
          >
            <div className={styles.mainSubSection}>
              <div className={styles.HeroLeftBox} data-jelly>
                <div
                  id="patroSub"
                  data-cursor-size="60px"
                  data-cursor-color="#436AD6"
                  data-cursor-text="Visit!"
                >
                  <Link
                    href="https://certvault.org/"
                    target="_blank"
                    className={styles.Link}
                  >
                    <button className={styles.linkButton}>certvault.org</button>
                    <span className={styles.linkSvg}>
                      <img
                        src="/assets/casestudies/Vector.svg"
                        alt="Svg"
                        id="case-study-arrow"
                      />
                    </span>
                  </Link>
                </div>
                <h1 id="patro">
                  CertVault a cloud-based
                  <br /> certificate repository
                </h1>
              </div>
              <div className={styles.HeroRightBox}>
                <h1 className={styles.work} id="patroSub">
                  SAAS
                </h1>
                <h1 className={styles.year} id="patroSub">
                  2019-20
                </h1>
              </div>
            </div>
          </div>

          {/* ====================== Parallax Image Second =========================== */}

          <div className={styles.imageSecondSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <img
                  src="/assets/casestudies/patra/img1.png"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#436AD6"
                  data-cursor-text="Patra"
                />
              </div>
            </div>
          </div>

          {/* ====================== Parallax Image Second  END ====================== */}

          <div className="space-large desktop"></div>
          <div className={styles.ipad}></div>

          {/* ====================== Third Section ============================ */}

          <div className={styles.patronumThirdSection}>
            <div className={styles.thirdSectionContent}>
              <div className={styles.thirdSectionLeftBox}>
                <h1 data-jelly>Overview</h1>
              </div>
              <div className={styles.thirdSectionRightBox}>
                <div className={styles.paraTop}>
                  <h1 data-jelly>
                    Patronum streamlines Google Workplace™ management by
                    automating repetitive tasks such as email signature
                    management, contact sharing, and drive management.
                  </h1>
                </div>

                <div className={styles.buttonBox}>
                  <h1 data-cursor-size="30px" data-cursor-exclusion>
                    Web Design
                  </h1>
                  <h1 data-cursor-size="30px" data-cursor-exclusion>
                    Branding
                  </h1>
                  <h1 data-cursor-size="30px" data-cursor-exclusion>
                    Marketing
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* ====================== Third Section END ======================== */}

          <div className={styles.ipad}></div>
          <div className="space-large desktop"></div>

          {/* ====================== Parallax Image =========================== */}

          <div className={styles.imageSecondSection}>
            <div className={styles.imageBox} id="image-container">
              <figure className={styles.figure}>
                <img
                  src="/assets/casestudies/patra/img2.png"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#436AD6"
                  data-cursor-text="Patra"
                />
              </figure>
            </div>
          </div>

          {/* ====================== Parallax Image  END ====================== */}

          <div className="space-large desktop"></div>
          <div className={styles.mobile}></div>
          <div className={styles.ipad}></div>

          {/* ====================== Third Section ============================ */}

          <div className={styles.patronumForthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h1 data-jelly>THE ASK</h1>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h1 data-jelly>
                    As the project commenced, both teams found themselves facing
                    obstacles that tested their creativity, technical expertise,
                    and resilience.
                  </h1>
                  <h5 data-jelly className={styles.marginBottom}>
                    While Wragby's vision was as clear as a cloudless sky, the
                    challenges were as daunting as climbing Mount Everest in
                    flip-flops. The first hurdle: creating a website that
                    encapsulated Wragby's awe-inspiring ingenuity without
                    getting lost in the vortex of technical jargon. With
                    Wragby's extensive portfolio of innovative solutions, the
                    task of organizing and presenting the information in a
                    digestible format was like trying to solve a Rubik's cube
                    blindfolded.
                  </h5>
                  <h5 data-jelly className={styles.marginBottom}>
                    The second challenge: designing a user experience that even
                    your tech-averse grandma could navigate with ease. In a
                    world where attention spans rival those of goldfish, the
                    website needed to be engaging, intuitive, and snappy while
                    showcasing Wragby's complex offerings without overwhelming
                    users.
                  </h5>
                  <h5 data-jelly>
                    And lastly, developing a site that could handle the constant
                    flux of innovative content. Wragby's brilliance knows no
                    bounds, and their website needed to be a living, breathing
                    entity, capable of adapting and growing alongside the
                    company.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* ====================== Third Section END ======================== */}

          {/* <div className="space-large desktop"></div> */}
          <div className="space-large desktop"></div>

          {/* ========================== The LOGO Section =========================== */}

          <div className={styles.logoSection}>
            <div className={styles.logoImageSection}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/patra/img-m1.png"
                    alt="Logo"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
                {/* <h1>
                  The minimalist, modern branding had a playful and vibrant
                  feel.
                </h1> */}
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/patra/img-m2.png"
                    alt="Logo"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
                {/* <h1>
                  The logo, a letter "P" made of four triangles, was based on a
                  hexagonal shape with rounded corners in shades of blue.{" "}
                </h1> */}
              </div>
            </div>

            <div className={styles.logoImageSectionSecond}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/patra/img-m3.png"
                    alt="Logo"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/patra/img-m4.png"
                    alt="Logo"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ========================== The LOGO Section END ======================= */}

          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>

          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>

          {/* ====================== FOURTH Section ============================ */}

          <div className={styles.patronumForthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h1 data-jelly>Our Approach</h1>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h5 data-jelly className={styles.marginBottom}>
                    We decided to play by our own rulebook, tossing conventional
                    wisdom out the window like an old Nokia brick phone. We
                    began with a deep dive into Wragby's psyche, absorbing their
                    every quirk and vision like a sponge in the depths of the
                    ocean. This immersion allowed our team to channel Wragby's
                    innovative spirit into every aspect of the website.
                  </h5>
                  <h5 data-jelly className={styles.marginBottom}>
                    Next, we concocted a design so visually alluring, it could
                    make the Sirens of Greek mythology green with envy. The
                    design featured bold colors, futuristic layouts, and
                    interactive elements that turned the website into a digital
                    playground, inviting users to explore and discover Wragby's
                    groundbreaking solutions.
                  </h5>
                  <h5 data-jelly className={styles.marginBottom}>
                    Then we addressed the challenge of presenting complex
                    information in a digestible manner. We employed storytelling
                    techniques, weaving Wragby's technical offerings into
                    engaging narratives that humanized the company and connected
                    with users on an emotional level. This approach transformed
                    what could have been a maze of jargon into a thrilling
                    odyssey through the world of technology.
                  </h5>
                  <h5 data-jelly>
                    And finally, Enigma took a page out of Wragby's book,
                    deploying agile development methodologies to ensure the
                    website could grow and evolve with the company like a
                    chameleon on steroids. This strategy allowed the site to
                    flex and adapt to Wragby's ever-expanding portfolio of
                    innovative solutions, ensuring it remained a showcase of
                    their cutting-edge expertise.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* ====================== Fourth Section END ======================== */}

          <div className="space-large desktop"></div>

          {/* ========================== The LOGO Section =========================== */}

          <div className={styles.logoSection}>
            <div className={styles.logoImageSection}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/patra/img-m5.png"
                    alt="Logo"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
                {/* <h1>
                  The minimalist, modern branding had a playful and vibrant
                  feel.
                </h1> */}
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/patra/img-m6.png"
                    alt="Logo"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
                {/* <h1>
                  The logo, a letter "P" made of four triangles, was based on a
                  hexagonal shape with rounded corners in shades of blue.{" "}
                </h1> */}
              </div>
            </div>

            <div className={styles.logoImageSectionSecond}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/patra/img-m7.png"
                    alt="Logo"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/patra/img-m8.png"
                    alt="Logo"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ========================== The LOGO Section END ======================= */}
          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>

          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>

          {/* ====================== Fonts Section ======================== */}
          <div className={styles.fontSection}>
            <div className={styles.fontHeading}>
              <h1>Fonts</h1>
            </div>
            <div className={styles.fontImagebox}>
              <img
                src="/assets/casestudies/patronum/fonts.webp"
                alt="Fonts"
                className={styles.desktopFont}
                id="fonts-dark-casestudy"
              />
              <img
                src="/assets/casestudies/patronum/font-mobile.webp"
                alt="Fonts"
                className={styles.mobileFont}
                id="fonts-dark-casestudy"
              />
            </div>
          </div>
          {/* ====================== Fonts Section END ==================== */}

          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>

          {/* ====================== COLORS Section ==================== */}

          <div className={styles.colorSection} id="colorsection">
            <div className={styles.colorHeading}>
              <h1>COLORS</h1>
            </div>
            <div className={styles.colorBox}>
              <div className={styles.colorBoxHeadingBackground}>
                <h2 data-speed="1.5">
                  Colour <br /> Palette
                </h2>
              </div>
            </div>

            <div
              className={styles.colorBoxesSection}
              id="dark-mode-colors-casestudy"
            >
              <ul>
                <li className={styles.colorOne} id="line">
                  Hex: #436AD6
                </li>
                <li className={styles.colorTwo} id="line">
                  Hex: #00CA72
                </li>
                <li className={styles.colorThree} id="line">
                  Hex: #FFCC00
                </li>
                <li className={styles.colorFour} id="line">
                  Hex: #FB275D
                </li>
              </ul>
            </div>
          </div>

          {/* ====================== COLORS Section END ==================== */}

          <div className="space-large desktop"></div>
          <div className={styles.mobile}></div>

          {/* ====================== Fonts Section ======================== */}

          {/* <div className={styles.fontSection}>
            <div className={styles.fontHeading}>
              <h1>Fonts</h1>
            </div>
            <div className={styles.fontImagebox}>
              <img
                src="/assets/casestudies/certvault/font-typo.webp"
                alt="Fonts"
              />
            </div>
          </div> */}

          {/* ====================== Fonts Section END ==================== */}

          {/* <div className={styles.ipad}></div>
          <div className={styles.ipad}></div> */}

          {/* ====================== COLORS Section ==================== */}

          {/* <div className={styles.colorSection} id="colorsection">
            <div className={styles.colorHeading}>
              <h1>COLORS</h1>
            </div>
            <div className={styles.colorMainBox}>
              <div className={styles.colorBox}>
                <div className={styles.colorBoxHeadingBackground}>
                  <h2 data-speed="1.3">
                    Colour{" "}
                    <span className={styles.palette} id="palette">
                      Palette
                    </span>
                  </h2>
                </div>
              </div>

              <div
                className={styles.colorBoxesSection}
                id="dark-mode-colors-casestudy"
              >
                <ul>
                  <li className={styles.colorOne} id="line"></li>
                  <li className={styles.colorTwo} id="line"></li>
                  <li className={styles.colorThree} id="line"></li>
                  <li className={styles.colorFour} id="line"></li>
                  <li className={styles.colorFive} id="line"></li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* ====================== COLORS Section END ==================== */}

          {/* <div className="space-large desktop"></div>
          <div className={styles.mobile}></div> */}

          {/* ====================== Forth Section ======================== */}

          <div className={styles.videoHeading}>
            <h1>Certvault Website Design</h1>
          </div>
          <div className={styles.videoForthSection}>
            <div className={styles.videoContainer} id="video-container">
              <video
                src="/assets/casestudies/patra/patra.webm"
                autoPlay
                loop
                muted
              />
            </div>
          </div>

          {/* ====================== Forth Section END ======================== */}

          <div className="space-large desktop"></div>
          <div className={styles.ipad}></div>

          {/* ====================== Forth Section  ======================== */}

          <div className={styles.websiteDesignSection}>
            <div className={styles.leftBox}>
              <h1>Technology Stack</h1>
            </div>
            <div className={styles.rightBox}>
              <h1 data-jelly>
                Enigma opted for a classic combo: HTML, CSS, JS, jQuery, and
                WordPress. This dynamic quintet of technologies provided a
                flexible, battle-tested foundation for Wragby's digital fortress
                that could withstand the test of time. HTML and CSS laid the
                groundwork for visual appeal, while JavaScript and jQuery
                injected interactivity and flair, and WordPress offered a
                user-friendly content management system for Wragby's
                ever-evolving content needs.
              </h1>
            </div>
          </div>

          {/* ====================== Forth Section  ======================== */}

          <div className="space-large desktop"></div>
          <div className={styles.ipad}></div>

          {/* ====================== Parallax Image Second =========================== */}

          <div className={styles.imageSecondSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <figure className={styles.figure}>
                  <img
                    src="/assets/casestudies/patra/img3.png"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
                  />
                </figure>
              </div>
            </div>
          </div>

          {/* ====================== Parallax Image Second  END ====================== */}

          <div className="space-large desktop"></div>
          <div className={styles.mobile}></div>
          <div className={styles.ipad}></div>

          {/* ====================== FOURTH Section ============================ */}

          <div className={styles.patronumForthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h1 data-jelly>THE RESULT</h1>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h5 data-jelly className={styles.marginBottom}>
                    Wragby's innovative spirit now had a digital home that not
                    only reflected its essence but also attracted talent,
                    clients, and partners from across the African continent and
                    beyond. The seamless user experience had users exploring the
                    site with the enthusiasm of Indiana Jones on a treasure
                    hunt, while the engaging narratives forged emotional
                    connections that turned visitors into loyal clients.
                  </h5>
                  <h5 data-jelly>
                    The website's ability to adapt and evolve alongside Wragby's
                    growth ensured that the company's digital presence would
                    remain relevant and impressive for years to come. The
                    collaboration between Enigma Digital and Wragby Business
                    Solutions produced a website that defied convention and set
                    a new standard for digital excellence in the African
                    technology landscape.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* ====================== Fourth Section END ======================== */}

          <div className="space-large desktop"></div>
          <div className={styles.ipad}></div>

          {/* ====================== Parallax Image Second =========================== */}

          <div className={styles.imageSecondSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <figure className={styles.figure}>
                  <img
                    src="/assets/casestudies/patra/img4.png"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
                  />
                </figure>
              </div>
            </div>
          </div>

          {/* ====================== Parallax Image Second  END ====================== */}

          {/* ====================== Client Section ============================ */}

          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>
          <div className={styles.mobile}></div>
          <div className={styles.ipad}></div>

          <div className={styles.patronumForthSection}>
            <div className={styles.clientTestimonialSectionContent}>
              <div className={styles.clientTestimonialSectionLeftBox}>
                <h1 data-jelly>WORDS FROM THE CLIENT</h1>
              </div>
              <div className={styles.clientTestimonialSectionRightBox}>
                <div className={styles.clientTestimonialparaTop}>
                  <h1 data-jelly>
                    <span className={styles.clientTestimonialSpan2}>“</span>
                    Enigma Digital's mastery of web design and development is
                    truly unparalleled. Their ability to craft a website that
                    not only captured our essence but also transformed our
                    digital presence is nothing short of miraculous. We are
                    beyond thrilled with the results and can't thank the Enigma
                    team enough for their tireless dedication and creativity.
                    Our collaboration has been a game-changer for Wragby
                    Business Solutions, and we wholeheartedly recommend Enigma
                    Digital to anyone seeking a top-notch digital partner!
                  </h1>
                </div>
                <div
                  className={styles.clientTestimonialSectionBottomBox}
                  data-jelly
                >
                  <div className={styles.clientTestimonialSectionFigure}>
                    <img src="/assets/casestudies/certvault/client.webp"></img>
                  </div>
                  <div className={styles.clientTestimonialSectionFigureText}>
                    <h5>
                      Akin Banuso,
                      <br />
                      <span className={styles.clientTestimonialSpan}>
                        CEO, Wragby Business Solutions
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>

          {/* ====================== Client Section END ======================== */}

          {/* ========================== Next Project =========================== */}

          <div className={styles.desktopSlider}>
            <WragbySlider />
          </div>

          {/* ========================== Next Project END ======================= */}

          <div className={styles.mobile}></div>

          {/* ================ Next Project Mobile ============================== */}

          <div className={styles.nextUpContainer}>
            <div className={styles.nextUpContent}>
              <div className={styles.nextTitle}>
                <h1>next up</h1>
              </div>
              <div className={styles.nextProjectHeading}>
                <Link href="/quickx">
                  <h1>Quick-X</h1>
                </Link>
              </div>
            </div>
          </div>

          {/* ================ Next Project Mobile ============================== */}

          <div className={styles.mobile}></div>

          {/* ======================== Footer ====================== */}
          <div className="desktop-footer footer-desktop" id={styles.ipad}>
            <Footer />
          </div>

          <div className="mobile-footer">
            <FooterMobile />
          </div>
          {/* ======================== Footer END ====================== */}
        </div>
      </main>
    </>
  );
}
