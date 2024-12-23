import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import styles from "@/styles/dmtca.module.css";
import Link from "next/link";
import { NextSeo } from "next-seo";

import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import Image from "next/image";
import ProjectSlider from "../components/CaseStudies/ProjectSlider";
import PageLoader from "../components/pageLoader";
import Head from "next/head";
import ProjectNextBox from "../components/CaseStudies/ProjectNextBox";
import ProjectLazyVideo from "../components/CaseStudies/ProjectLazyVideo";

gsap.registerPlugin(ScrollTrigger);

gsap.config({
  nullTargetWarn: false,
});

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

export default function dmtca() {

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
        delay: 3.5,
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
        delay: 3.5,
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
        delay: 4,
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
        start: "-150 top",
      },
    });
    tl.fromTo(
      "#line",
      { opacity: 0, scale: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
      }
    );
  });

  return (
    <>

            <NextSeo
              title="DMTCA - Branding, Web Design & Development Case Study | Enigma"
              description="Witness the digital rebranding journey & website transformation of a leading West African digital marketing agency with Enigma."
              openGraph={{
                url: "https://weareenigma.com/dmtca-digital-branding-case-study",
                title: "DMTCA - Branding, Web Design & Development Case Study | Enigma",
                description:
                  "Witness the digital rebranding journey & website transformation of a leading West African digital marketing agency with Enigma.",
                  images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/portfolio-dmtca.png",
                    width: 1200,
                    height: 630,
                    alt: "DMTCA Casestudy Feature Image",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
              }}
            
              additionalMetaTags={[
                {
                  name: "twitter:title",
                  content: "DMTCA - Branding, Web Design & Development Case Study | Enigma"
                },
                {
                  name: "twitter:description",
                  content: "Witness the digital rebranding journey & website transformation of a leading West African digital marketing agency with Enigma."
                },
                {
                  name: "twitter:image",
                  content: "https://weareenigma.com/assets/featured-images/portfolio-dmtca.png"
                },
              ]}
            />

      <Head>
        <link rel="canonical" href="https://weareenigma.com/dmtca-digital-branding-case-study" />
        <link rel="alternate" href="https://weareenigma.com/dmtca-digital-branding-case-study" hreflang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntityOfPage":{
                  "@type": "WebPage",
                  "@id": "https://weareenigma.com/dmtca-digital-branding-case-study"
                },
                "name": "DMTCA - Branding, Web Design & Development Case Study | Enigma",
                "description": "Witness the digital rebranding journey & website transformation of a leading West African digital marketing agency with Enigma.",
                "datePublished": "2023-01-01T12:00:00+05:30",
                "dateModified": "2023-11-17T12:00:00+05:30",
                "publisher": {
                  "@type": "Organization",
                  "name": "Enigma Digital",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://weareenigma.com/assets/header-logo/enigma-en-logo.svg"
                  }
                }
              }
            ),
          }}
        />
      </Head>

      <SmoothScroll />

      <Cursor isGelly={true} />

      <PageLoader text="DMTCA Case Study" />

      <main>
        
        <Header />

        <div className={styles.Main}>
 {/*Section 1  */}
 <section
            className={styles.HeroSection}>
            <div className={styles.mainSubSection}>
              <div className={styles.HeroLeftBox} data-jelly>
                <div
                  id="patroSub"
                  data-cursor-size="60px"
                  data-cursor-color="#00855A"
                  data-cursor-text="Visit!"
                >
                  <Link href="https://dmtca.agency/" 
                        target="_blank" 
                        className={styles.Link}>
                        <button aria-label="link button">
                        dmtca.agency
                    <span className={styles.linkSvg}>
                      <Image
                        width={20}
                        height={20}
                        src="/assets/casestudies/Vector.svg"
                        alt="Svg"
                        id="case-study-arrow"
                      />
                    </span>
                    </button>
                  </Link>
                </div>
                <h1 id="patro">
                    DMTCA: The <br />Digital Vanguard
                </h1>
              </div>
              <div className={styles.HeroRightBox}>
                <p className={styles.work} id="patroSub">
                  AGENCY
                </p>
                <p className={styles.year} id="patroSub">
                  2020
                </p>
              </div>
            </div>
          </section>

          {/* ====================== Parallax Image Second =========================== */}
          <section className={styles.imageSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <img
                  src="/assets/casestudies/dmtca/dmtca-casestudy-image-1.webp"
                  alt="DMTCA Casestudy Image 1"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#00855A"
                  data-cursor-text="DMTCA"
                />
              </div>
            </div>
          </section>
          {/* ====================== Parallax Image Second  END ====================== */}

          {/* ====================== Third Section ============================ */}
          <section className={styles.thirdSection}>
            <div className={styles.thirdSectionContent}>
              <div className={styles.thirdSectionLeftBox}>
                <h2 className={styles.h3} data-jelly>THE CLIENT</h2>
              </div>
              <div className={styles.thirdSectionRightBox}>
                <div className={styles.paraTop}>
                  <p className={styles.h4} data-jelly>
                     DMTCA, a trailblazing digital marketing agency in the West Africa region, stands tall in the vast digital landscape, known for its unparalleled strategies and groundbreaking solutions. As the digital realm continues to evolve, DMTCA sought a brand identity and digital footprint that mirrors its prowess and showcases its illustrious portfolio.
                  </p>
                </div>

                <div className={styles.buttonBox}>
                  <h3 data-cursor-size="30px" data-cursor-exclusion>
                    Branding
                  </h3>
                  <h3 data-cursor-size="30px" data-cursor-exclusion>
                    Web Design
                  </h3>
                </div>
              </div>
            </div>
          </section>
          {/* ====================== Third Section END ======================== */}

          {/* ====================== Parallax Image =========================== */}
          <section className={styles.imageSection}>
            <div className={styles.imageBox} id="image-container">
              <img
                src="/assets/casestudies/dmtca/dmtca-casestudy-image-2.webp"
                alt="DMTCA Casestudy Image 2"
                loading="lazy"
                className={styles.img}
                id="img"
                data-cursor-size="100px"
                data-cursor-color="#00855A"
                data-cursor-text="DMTCA"
              />
            </div>
          </section>
          {/* ====================== Parallax Image  END ====================== */}


          {/* ====================== Third Section ============================ */}

          <section className={styles.forthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h2 className={styles.h3} data-jelly>THE ASK</h2>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h4 className={styles.h4} data-jelly>
                    DMTCA, while being a powerhouse in the digital marketing realm, faced a branding conundrum. DMTCA's brand persona & digital presence needed a revamp. 
                  </h4>
                  <p data-jelly>
                    Imagine having a compass that doesn't point north; that's how their previous branding felt. Their existing identity, robust and well-established, somehow missed capturing the full spectrum of their innovative approach. It was directionally ambiguous in a world that demanded precision.
                  </p>
                  <p data-jelly>
                    Their website, while functional, was reminiscent of a classic novel in the digital age - rich in content but lacking the modern touch that would make it resonate with the contemporary audience. The branding, though recognizable, needed that extra zest, that unique touch which would make it not just seen but remembered. 
                  </p>
                  <p data-jelly>
                    The challenge was not just about enhancing their digital presence but also about refining and redefining their brand identity to truly reflect the dynamism and innovation that DMTCA embodies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ====================== Third Section END ======================== */}


          {/* ========================== The LOGO Section =========================== */}

          <section className={styles.logoSection}>
            <div className={styles.logoImageSection}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/dmtca/dmtca-casestudy-image-3.webp"
                    alt="DMTCA Casestudy Image 3"
                    loading="lazy"
                    data-cursor-color="#00855A"
                    data-cursor-text="DMTCA"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/dmtca/dmtca-casestudy-image-4.webp"
                    alt="DMTCA Casestudy Image 4"
                    loading="lazy"
                    data-cursor-color="#00855A"
                    data-cursor-text="DMTCA"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
            </div>

            <div className={styles.logoImageSectionSecond}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/dmtca/dmtca-casestudy-image-5.webp"
                    alt="DMTCA Casestudy Image 5"
                    loading="lazy"
                    data-cursor-color="#00855A"
                    data-cursor-text="DMTCA"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/dmtca/dmtca-casestudy-image-6.webp"
                    alt="DMTCA Casestudy Image 6"
                    loading="lazy"
                    data-cursor-color="#00855A"
                    data-cursor-text="DMTCA"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ========================== The LOGO Section END ======================= */}


          {/* ====================== FOURTH Section ============================ */}

          <section className={styles.forthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h2 className={styles.h3} data-jelly>Our Approach</h2>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <p data-jelly>
                    Redefining a brand is like sculpting a masterpiece from marble; it requires precision, vision, and a deep understanding of the essence of the subject. We embarked on a journey to rediscover DMTCA. We delved deep into DMTCA's ethos, understanding their quirks, their strengths, and their vision. This wasn't just about a digital makeover; it was about capturing the soul of DMTCA.
                  </p>
                  <p data-jelly>
                    Through intensive workshops, brainstorming sessions, and deep dives into their past campaigns, successes, and feedback, we pieced together the mosaic that is DMTCA. The narrative was not just spun; it was woven with threads of their achievements, aspirations, and vision. We aimed to create a digital tapestry that showcased every facet of DMTCA. 
                  </p>
                  <p data-jelly>
                    For the branding, we chose elements that were symbolic of their forward-thinking approach and their roots in traditional marketing values. Colors, typography, and design elements were meticulously chosen to reflect their ethos, creating a brand identity that was both modern and timeless. 
                  </p>
                  <p data-jelly>
                    The website was transformed into an interactive digital journey, with each section, each page telling a part of the DMTCA story, drawing visitors into the world of DMTCA. We wanted visitors to not just see DMTCA's work but to experience it. The design was revamped to be sleek, modern, and interactive, turning the website into a digital journey rather than just a digital platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ====================== FOURTH Section END ============================ */}


          {/* ========================== The LOGO Section =========================== */}

          <section className={styles.logoSection}>
            <div className={styles.logoImageSection}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/dmtca/dmtca-casestudy-image-7.webp"
                    alt="DMTCA Casestudy Image 7"
                    loading="lazy"
                    data-cursor-color="#00855A"
                    data-cursor-text="DMTCA"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/dmtca/dmtca-casestudy-image-8.webp"
                    alt="DMTCA Casestudy Image 8"
                    loading="lazy"
                    data-cursor-color="#00855A"
                    data-cursor-text="DMTCA"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
            </div>

            <div className={styles.logoImageSectionSecond}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/dmtca/dmtca-casestudy-image-9.webp"
                    alt="DMTCA Casestudy Image 9"
                    loading="lazy"
                    data-cursor-color="#00855A"
                    data-cursor-text="DMTCA"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/dmtca/dmtca-casestudy-image-10.webp"
                    alt="DMTCA Casestudy Image 10"
                    loading="lazy"
                    data-cursor-color="#00855A"
                    data-cursor-text="DMTCA"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ========================== The LOGO Section END ======================= */}
          
          {/* ====================== Fonts Section ======================== */}
          <section className={styles.fontSection}>
            <div className={styles.fontHeading}>
              <h3 className={styles.h2} >Fonts</h3>
            </div>
            <div className={`${styles.dmtcafontImagebox} projectNoInvert`}>
              <img src="/assets/casestudies/dmtca/dmtca-casestudy-font-image.webp" alt="DMTCA Casestudy Fonts Image" />
            </div>
          </section>
          {/* ====================== Fonts Section END ==================== */}

          {/* ====================== COLORS Section ==================== */}

          <section className={styles.colorSection} id="colorsection">
            <div className={styles.colorHeading}>
              <h3 className={styles.h2} >Colours</h3>
            </div>
            <div className={styles.colorBox}>
              <div className={styles.colorBoxHeadingBackground}>
                <p data-speed="1.5">
                  Colour Palette
                </p>
              </div>
            </div>

            <div
              className={styles.dmtcacolorBoxesSection}
              id="dark-mode-colors-casestudy"
            >
              <ul>
                <li className={styles.dmtcacolorOne} id="line">
                  #56B7BE
                </li>
                <li className={styles.dmtcacolorTwo} id="line">
                  #4FEAB8
                </li>
                <li className={styles.dmtcacolorThree} id="line">
                  #33B5F2
                </li>
                <li className={styles.dmtcacolorFour} id="line">
                  #62CCFD
                </li>
                <li className={styles.dmtcacolorFive} id="line">
                  #4FEAB8 <br /> #62CCFD
                </li>
              </ul>
            </div>
          </section>

          {/* ====================== COLORS Section END ==================== */}

          {/* ====================== Video Section ======================== */}
          <section className={styles.videoSection}>
            <div className={styles.videoHeading}>
              <h3 className={styles.videoH2}>The DMTCA <br/> Innovative Website Design</h3>
            </div>
            <div className={styles.videoMainSection}>
              <div className={styles.videoContainer} id="video-container">
                <ProjectLazyVideo
                  srcWebm="/assets/casestudies/dmtca/dmtca.webm"
                  srcMp4="/assets/casestudies/dmtca/dmtca.mp4"
                  poster="/assets/casestudies/dmtca/dmtca-poster.webp"
                  title="dmtca-branding-casestudy-video"
                />
              </div>
            </div>
          </section>
          
          {/* ====================== Video Section END ======================== */}

          {/* ====================== Forth Section  ======================== */}

          <section className={styles.forthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h2 className={styles.h3} data-jelly>Tech Stack</h2>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <p data-jelly>
                    Our tech arsenal was chosen to mirror DMTCA's innovative approach. HTML5, CSS3, and JavaScript formed the backbone, ensuring a seamless and dynamic user experience. WordPress was used as the choice of content management platform, easing out the maintenance of the website by the DMTCA team post-delivery. The site wasn't just about looking good; it was about performing exceptionally, ensuring that DMTCA's digital presence was as impactful as their real-world operations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ====================== Forth Section  ======================== */}

          {/* ====================== Parallax Image Second =========================== */}

          <section className={styles.imageSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                  <img
                    src="/assets/casestudies/dmtca/dmtca-casestudy-image-11.webp"
                    alt="DMTCA Casestudy Image 11"
                    loading="lazy"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#00855A"
                    data-cursor-text="DMTCA"
                  />
              </div>
            </div>
          </section>

          {/* ====================== Parallax Image Second  END ====================== */}

          {/* ====================== FOURTH Section ============================ */}

          <section className={styles.forthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h2 className={styles.h3} data-jelly>THE RESULT</h2>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <p data-jelly>
                    The transformation was nothing short of spectacular. DMTCA's new digital avatar was a true reflection of their capabilities. DMTCA emerged with a brand identity that was a true reflection of their stature in the digital marketing world. The logo, the colors, the design elements - each piece of the branding puzzle fit perfectly, creating a cohesive and instantly recognizable identity. 
                  </p>
                  <p data-jelly>
                    The website, with its revamped design and enriched content, became more than just a platform; it became a destination. Visitors were not just informed; they were enthralled, taken on a journey through the world of digital marketing as seen through the eyes of DMTCA. 
                  </p>
                  <p data-jelly>
                    Feedback poured in, with clients, both old and new, lauding the fresh look and the intuitive design. The numbers spoke for themselves, with increased engagement, reduced bounce rates, and a significant uptick in inquiries and leads. The collaboration between DMTCA and Enigma wasn't just successful; it set a new benchmark in digital branding and design.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ====================== Fourth Section END ======================== */}

          {/* ====================== Parallax Image Second =========================== */}

          <section className={styles.imageSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <img
                  src="/assets/casestudies/dmtca/dmtca-casestudy-image-12.webp"
                  alt="DMTCA Casestudy Image 12"
                  loading="lazy"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#00855A"
                  data-cursor-text="DMTCA"
                />
              </div>
            </div>
          </section>

          {/* ====================== Parallax Image Second  END ====================== */}

          {/* ====================== Client Section ============================ */}


          <section className={styles.clientTestimonialSection}>
            <div className={styles.clientTestimonialSectionContent}>
              <div className={styles.clientTestimonialSectionLeftBox}>
                <h3 data-jelly>WORDS FROM THE CLIENT</h3>
              </div>
              <div className={styles.clientTestimonialSectionRightBox}>
                <div className={styles.clientTestimonialparaTop}>
                  <h4 data-jelly>
                    <span className={styles.clientTestimonialSpan2}>“</span>
                      Enigma Digital has truly outdone themselves. The new website is not just a testament to their capabilities but a reflection of their understanding of our brand. It's not just a website; it's DMTCA's digital identity. Kudos to the team!"
                  </h4>
                </div>
                <div
                  className={styles.clientTestimonialSectionBottomBox}
                  data-jelly
                >
                  <div className={styles.clientTestimonialSectionFigure}>
                    <img src="/assets/casestudies/dmtca/dmtca-client-image.webp" alt="DMTCA Client Image"/>
                  </div>
                  <div className={styles.clientTestimonialSectionFigureText}>
                    <p>
                      Ankush Chawla
                      <br />
                      <span className={styles.clientTestimonialSpan}>
                        CEO, DMTCA
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* ====================== Client Section END ======================== */}

          {/* ========================== Next Project =========================== */}
          <div className={styles.desktopSlider}>
            <ProjectSlider currentProjectLink="dmtca-digital-branding-case-study" />
          </div>

          {/* ========================== Next Project END ======================= */}


          {/* ================ Next Project Mobile ============================== */}
          
          <ProjectNextBox text={"PDTL"} link={"/pdtl-ecommerce-automation-case-study"} />

          {/* ================ Next Project Mobile ============================== */}

          {/* ======================== Footer ====================== */}
          <section className="desktop-footer">
            <Footer />
          </section>

          <section className="mobile-footer">
            <FooterMobile />
          </section>
          {/* ======================== Footer END ====================== */}
        </div>
      </main>
    </>
  );
}