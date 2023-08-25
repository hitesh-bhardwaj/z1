import Head from "next/head";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import styles from "@/styles/gcm.module.css";
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

export default function gcm() {
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
      }).to(".loader-wrap-heading h1", {
        delay: 0.5,
        y: -200,
        skewY: 10,
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
        start: "-250 top",
      },
    });
    tl.fromTo(
      "#line",
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
      }
    );
  });

  return (
    <>

            <NextSeo
              title="Garden City Mall | Case Study"
              description="DMTCA case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client."
              canonical="https://www.weareenigma.com/gcm"
              openGraph={{
                url: "https://www.weareenigma.com/gcm",
                title: "DMTCA case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client.",
                description:
                  "Generated by create next app",
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
                siteName: "https://www.weareenigma.com/gcm",
              }}
            />

      <Head>
        <title>Garden City Mall | Case Study</title>
        <meta name="description" content="DMTCA case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client." />
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
              Garden <span className="loader-font">City</span> Mall
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
                  data-cursor-color="#E73354"
                  data-cursor-text="Visit!"
                >
                  <Link
                    href="https://grandmall.netlify.app/"
                    target="_blank"
                    className={styles.Link}
                  >
                    <button className={styles.linkButton}>
                      gardencitymall.com
                    </button>
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
                  Revolutionizing the <br /> Shopping Mall Experience
                </h1>
              </div>
              <div className={styles.HeroRightBox}>
                <h1 className={styles.work} id="patroSub">
                  RETAIL
                </h1>
                <h1 className={styles.year} id="patroSub">
                  2022
                </h1>
              </div>
            </div>
          </div>

          {/* ====================== Parallax Image Second =========================== */}

          <div className={styles.imageSecondSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <img
                  src="/assets/casestudies/gcm/img1.webp"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#EF9C34"
                  data-cursor-text="GCM"
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
                <h1 data-jelly>The Client</h1>
              </div>
              <div className={styles.thirdSectionRightBox}>
                <div className={styles.paraTop}>
                  <h1 data-jelly>
                    In the bustling heart of Lagos, Nigeria's capital city, a
                    new, state-of-the-art shopping mall was under construction,
                    poised to become the go-to destination for retail, dining,
                    and entertainment experiences. As the mall's physical
                    structure began to take shape, its developers recognized the
                    need for an equally captivating online presence that would
                    showcase the mall's unique offerings, attract potential
                    tenants and visitors, and generate buzz within the
                    community.
                  </h1>
                </div>

                <div className={styles.buttonBox}>
                  <h1 data-cursor-size="30px" data-cursor-exclusion>
                    Web Design
                  </h1>
                  <h1 data-cursor-size="30px" data-cursor-exclusion>
                    Development
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* ====================== Third Section END ======================== */}

          <div className="space-large desktop"></div>
          <div className="space-large desktop"></div>

          {/* ====================== Parallax Image =========================== */}

          <div className={styles.imageSecondSection}>
            <div className={styles.imageBox} id="image-container">
              <figure className={styles.figure}>
                <img
                  src="/assets/casestudies/gcm/img2.webp"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#EBA17D"
                  data-cursor-text="GCM"
                />
              </figure>
            </div>
          </div>

          {/* ====================== Parallax Image  END ====================== */}

          {/* <div className="space-large desktop"></div> */}

          {/* ====================== Third Section ============================ */}

          <div className={styles.patronumForthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h1 data-jelly>THE ASK</h1>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h1 data-jelly>
                    The developers and promoters of Garden City mall enlisted
                    Enigma's team to create a visually stunning and highly
                    interactive website that would not only promote the mall but
                    also provide a seamless and engaging user experience,
                    capturing the essence of the mall's modern architecture and
                    vibrant atmosphere.
                  </h1>
                  <h5 data-jelly>
                    They also wanted to implement a content management system
                    (CMS) that would enable the mall's management team to easily
                    update and manage website content as the construction
                    progresses through different stages and, ensure the website
                    was optimized for search engines, mobile devices, and fast
                    load times to provide a seamless and enjoyable user
                    experience.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* ====================== Third Section END ======================== */}

          <div className="space-large desktop"></div>

          {/* ========================== The LOGO Section =========================== */}

          <div className={styles.logoSection}>
            <div className={styles.logoImageSection}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/gcm/web1.webp"
                    alt="Logo"
                    data-cursor-color="#A4A4CD"
                    data-cursor-text="GCM"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/gcm/web2.webp"
                    alt="Logo"
                    data-cursor-color="#FFC09F"
                    data-cursor-text="GCM"
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
                  <img
                    src="/assets/casestudies/gcm/web3.webp"
                    alt="Logo"
                    data-cursor-color="#F8E890"
                    data-cursor-text="GCM"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/gcm/web4.webp"
                    alt="Logo"
                    data-cursor-color="#ADF8B5"
                    data-cursor-text="GCM"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ========================== The LOGO Section END ======================= */}

          {/* <div className="space-large desktop"></div> */}
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

          <div className={styles.ipad}></div>

          {/* ====================== FOURTH Section ============================ */}

          <div className={styles.patronumForthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h1 data-jelly>Our Approach</h1>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h1 data-jelly>
                    We embraced the challenge of creating a one-of-a-kind
                    digital experience for Garden City Mall by adopting an
                    innovative and forward-thinking approach. The key pillars of
                    our approach focused on:
                  </h1>
                  <h5 data-jelly>
                    Conducting thorough research to understand the local market,
                    target audience, and competitive landscape, in order to
                    develop a website that would resonate with users and stand
                    out from the competition
                  </h5>
                  <h5 data-jelly>
                    Collaborating closely with the mall's management and design
                    teams to ensure the website's visual language and content
                    aligned with the mall's brand identity and objectives.
                  </h5>
                  <h5 data-jelly>
                    Employing a user-centric design philosophy, prioritizing
                    usability and engagement to create an immersive online
                    experience that would encourage users to explore the mall's
                    offerings and visit the physical location.
                  </h5>
                  <h5 data-jelly>
                    Utilizing cutting-edge web technologies and frameworks to
                    develop a responsive, high-performance website that would
                    deliver a seamless experience across all devices and
                    platforms.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="space-large desktop"></div> */}
          <div className="space-large desktop"></div>

          {/* ========================== The LOGO Section =========================== */}

          <div className={styles.logoSection}>
            <div className={styles.logoImageSection}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/gcm/web5.webp"
                    alt="Logo"
                    data-cursor-color="#323B44"
                    data-cursor-text="GCM"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/gcm/web6.webp"
                    alt="Logo"
                    data-cursor-color="#FF9870"
                    data-cursor-text="GCM"
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
                  <img
                    src="/assets/casestudies/gcm/web7.png"
                    alt="Logo"
                    data-cursor-color="#EF96B6"
                    data-cursor-text="GCM"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/gcm/web8.webp"
                    alt="Logo"
                    data-cursor-color="#E5BBA2"
                    data-cursor-text="GCM"
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

          <div className={styles.ipad}></div>

          {/* ====================== Fonts Section ======================== */}

          <div className={styles.fontSection}>
            <div className={styles.fontHeading}>
              <h1>Fonts</h1>
            </div>
            <div className={styles.gcmfontImagebox}>
              <img
                src="/assets/casestudies/gcm/font1.png"
                alt="Fonts"
                id="fonts-dark-casestudy"
              />
              <img
                src="/assets/casestudies/gcm/font2.png"
                alt="Fonts"
                id="fonts-dark-casestudy"
              />
            </div>
          </div>

          {/* ====================== Fonts Section END ==================== */}

          {/* ====================== COLORS Section ==================== */}

          <div className={styles.colorSection} id="colorsection">
            <div className={styles.colorHeading}>
              <h1>COLORS</h1>
            </div>
            <div className={styles.colorBox}>
              <div className={styles.colorBoxHeadingBackground}>
                <h2 data-speed="1.5">Colour Palette</h2>
              </div>
            </div>

            <div className={styles.colorBoxesSection}>
              <img src="/assets/casestudies/gcm/color-2.png" alt="color" />
            </div>
          </div>

          {/* ====================== COLORS Section END ==================== */}

          <div className="space-large desktop"></div>

          {/* ====================== Forth Section ======================== */}

          <div className={styles.videoHeading}>
            <h1>The Garden City Mall</h1>
          </div>
          <div className={styles.videoForthSection}>
            <div className={styles.videoContainer} id="video-container">
              <video
                src="/assets/casestudies/gcm/gcm.webm"
                autoPlay
                loop
                muted
              />
            </div>
          </div>

          {/* ====================== Forth Section END ======================== */}

          {/* ====================== Forth Section  ======================== */}

          <div className={styles.patronumForthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h1 data-jelly>TECH STACK</h1>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h5 data-jelly>
                    To bring the Lagos mall's website to life, Enigma employed a
                    powerful technology stack, featuring Next.js, a popular
                    React-based framework, and GSAP (GreenSock Animation
                    Platform). This technology stack was selected as Next JS
                    allowed us to build a highly performant, server-rendered
                    React application that provided an exceptional user
                    experience while ensuring fast load times and optimal search
                    engine optimization.
                  </h5>
                  <h5 data-jelly>
                    The component-based architecture of Next.js allowed for
                    efficient development and easy maintenance, as well as the
                    ability to create reusable, modular components that could be
                    seamlessly integrated throughout the site during the
                    development process. GSAP, a high-performance animation
                    library, facilitated the creation of smooth, visually
                    stunning animations that showcased GCM's offerings and
                    features in a captivating and immersive manner.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* ====================== Forth Section  ======================== */}

          <div className="space-large desktop"></div>

          {/* ====================== Parallax Image Second =========================== */}

          <div className={styles.imageSecondSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <figure className={styles.figure}>
                  <img
                    src="/assets/casestudies/gcm/img3.webp"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#00232E"
                    data-cursor-text="GCM"
                  />
                </figure>
              </div>
            </div>
          </div>

          {/* ====================== Parallax Image Second  END ====================== */}

          {/* ====================== FOURTH Section ============================ */}

          <div className={styles.patronumForthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h1 data-jelly>THE RESULT</h1>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h1 data-jelly>
                    The final product was a visually stunning, highly engaging,
                    and user-friendly website that not only generated excitement
                    for the upcoming mall launch but also served as an
                    invaluable resource for visitors and prospective tenants
                    alike. Key achievements of the project included:
                  </h1>
                  <h5 data-jelly>
                    A substantial boost in brand recognition and anticipation
                    for the mall's opening, thanks in part to the website's
                    striking visual appeal and the successful communication of
                    the mall's unique selling propositions
                  </h5>
                  <h5 data-jelly>
                    Positive feedback from prospective tenants and partners, who
                    praised the website's user-centric design, wealth of
                    information, and seamless inquiry submission process
                  </h5>
                  <h5 data-jelly>
                    A marked improvement in search engine rankings and
                    visibility, owing to the optimized site architecture, fast
                    loading times, and mobile-friendly design
                  </h5>
                  <h5 data-jelly>
                    In conclusion, Enigma's innovative approach to design,
                    coupled with a deep understanding of the Lagos shopping
                    mall's brand identity and strategic objectives, resulted in
                    a groundbreaking website that captivated users and set the
                    stage for the mall's highly anticipated launch. The success
                    of this project not only highlights the power of creative
                    collaboration but also underscores the importance of
                    embracing cutting-edge technology and design principles to
                    create truly unforgettable digital experiences.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* ====================== Fourth Section END ======================== */}

          <div className="space-large desktop"></div>

          {/* ====================== Parallax Image Second =========================== */}

          <div className={styles.imageSecondSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <figure className={styles.figure}>
                  <img
                    src="/assets/casestudies/gcm/img4.webp"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#00232E"
                    data-cursor-text="GCM"
                  />
                </figure>
              </div>
            </div>
          </div>

          {/* ====================== Parallax Image Second  END ====================== */}

          {/* ====================== Client Section ============================ */}

          <div className="space-large desktop"></div>

          <div className={styles.patronumForthSection}>
            <div className={styles.clientTestimonialSectionContent}>
              <div className={styles.clientTestimonialSectionLeftBox}>
                <h1 data-jelly>WORDS FROM THE CLIENT</h1>
              </div>
              <div className={styles.clientTestimonialSectionRightBox}>
                <div className={styles.clientTestimonialparaTop}>
                  <h1 data-jelly>
                    <span className={styles.clientTestimonialSpan2}>“</span>
                    Enigma exceeded our expectations in every way, delivering a
                    website that truly captures the essence of our brand and
                    sets the stage for our grand opening. Their unparalleled
                    creativity, technical expertise, and dedication to
                    excellence have positioned our shopping mall as the premier
                    retail destination in Lagos. We couldn't be more thrilled
                    with the results and look forward to a continued partnership
                    with Enigma as we take our digital presence to even greater
                    heights.
                  </h1>
                </div>
                <div
                  className={styles.clientTestimonialSectionBottomBox}
                  data-jelly
                >
                  <div className={styles.clientTestimonialSectionFigure}>
                    <img src="/assets/casestudies/gcm/gcmclient.png"></img>
                  </div>
                  <div className={styles.clientTestimonialSectionFigureText}>
                    <h5>
                      Chinara Musa
                      <br />
                      <span className={styles.clientTestimonialSpan}>
                        Managing Director & Chief Promoter
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
                <Link href="/pdtl">
                  <h1>PDTL</h1>
                </Link>
              </div>
            </div>
          </div>

          {/* ================ Next Project Mobile ============================== */}

          <div className={styles.mobile}></div>

          {/* ======================== Footer ====================== */}
          <div className="desktop-footer" id={styles.ipad}>
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
