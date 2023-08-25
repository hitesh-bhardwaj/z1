import Head from "next/head";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import styles from "../styles/dharan.module.css";
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

export default function dharan() {
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
      tl.to("span .dual-ring", {
        y: -200,
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
      tl.from(
        ".container h1",
        {
          y: 100,
          opacity: 0,
        },
        "-=1.5"
      );
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

  return (
    <>

            <NextSeo
              title=""
              description="Dharan case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client."
              canonical="https://www.weareenigma.com/dharan"
              openGraph={{
                url: "https://www.weareenigma.com/dharan",
                title: "Dharan | Case Study",
                description:
                  "Dharan case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client.",
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
                siteName: "https://www.weareenigma.com/dharan",
              }}
            />

      <Head>
        <title>Dharan | Case Study</title>
        <meta name="description" content="Dharan case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client." />
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
              <span className="loader-font">Dharan</span>
            </h1>
          </span>
          {/* <span className="rings">
            <div className="dual-ring"></div>
          </span> */}
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
                  data-cursor-color="#FF8395"
                  data-cursor-text="Visit!"
                >
                  <Link
                    href="https://www.dharan.co.in/"
                    target="_blank"
                    className={styles.Link}
                  >
                    <button className={styles.linkButton}>Dharan.co.in</button>
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
                  Dharan - Fashionable
                  <br /> Ecommerce Website
                </h1>
              </div>
              <div className={styles.HeroRightBox}>
                <h1 className={styles.work} id="patroSub">
                  E-COMMERCE
                </h1>
                <h1 className={styles.year} id="patroSub">
                  2020
                </h1>
              </div>
            </div>
          </div>

          {/* ====================== Parallax Image Second =========================== */}

          <div className={styles.imageSecondSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <img
                  src="/assets/casestudies/dharan/img1.webp"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#FF8395"
                  data-cursor-text="Dharan"
                />
              </div>
            </div>
          </div>

          {/* ====================== Parallax Image Second  END ====================== */}
          <div className="space-large desktop"></div>
          <div className={styles.ipad}></div>

          {/* ====================== Third Section ============================ */}

          <div className={styles.ThirdSection}>
            <div className={styles.thirdSectionContent}>
              <div className={styles.thirdSectionLeftBox}>
                <h1 data-jelly>The Client</h1>
              </div>
              <div className={styles.thirdSectionRightBox}>
                <div className={styles.paraTop}>
                  <h1 data-jelly>
                    Dharan, a renowned hand-block-printed clothing manufacturer
                    based in India, is known for its exquisite garments
                    featuring traditional designs, pastel shades, and intricate
                    craftsmanship. Despite having a loyal customer base, Dharan
                    struggled to translate its unique essence and charm into a
                    compelling online presence. The client was on the lookout
                    for a partner that would help them create a state-of-the-art
                    e-commerce website that would not only showcase Dharan's
                    magnificent products but also encapsulate the essence of
                    their brand.
                  </h1>
                </div>

                <div className={styles.buttonBox}>
                  <h1 data-cursor-size="30px" data-cursor-exclusion>
                    E-Commerce
                  </h1>
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
                  src="/assets/casestudies/dharan/img2.webp"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#FF8395"
                  data-cursor-text="Dharan"
                />
              </figure>
            </div>
          </div>

          {/* ====================== Parallax Image  END ====================== */}

          {/* ====================== Third Section ============================ */}

          <div className={styles.patronumForthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h1 data-jelly>THE ASK</h1>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h1 data-jelly>
                    Dharan's existing website was plagued by several issues,
                    including outdated design, poor navigation, and a lackluster
                    user experience.
                  </h1>
                  <h5 data-jelly>
                    The website failed to evoke the same feelings of beauty,
                    sophistication, and craftsmanship that Dharan's
                    hand-block-printed clothing offered. The team at Enigma was
                    tasked to design a website that reflects tradition,
                    craftsmanship, and quality as the key brand identifiers.
                  </h5>
                  <h5 data-jelly>
                    The key challenge was to design & develop an engaging and
                    interactive platform that highlights the unique aspects of
                    Dharan's products, such as the traditional techniques,
                    intricate designs, and pastel color palette that is used in
                    traditional hand-block-printing. Next, we had to integrate
                    an e-commerce solution that streamlines the purchasing
                    process and ensures a secure, efficient, and hassle-free
                    experience for customers.
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
                    src="/assets/casestudies/dharan/web1.webp"
                    alt="Logo"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
                    src="/assets/casestudies/dharan/web2.webp"
                    alt="Logo"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
                    src="/assets/casestudies/dharan/web3.webp"
                    alt="Logo"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/dharan/web4.webp"
                    alt="Logo"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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

          {/* ====================== FOURTH Section ============================ */}

          <div className={styles.patronumForthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h1 data-jelly>Our Approach</h1>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h5 data-jelly>
                    To address these challenges, Enigma adopted a groundbreaking
                    approach, which involved a meticulous blend of art and
                    technology, resulting in a website that was both visually
                    captivating and highly functional. Our team immersed
                    themselves in Dharan's history, design philosophy, and hand
                    block printing techniques to gain a comprehensive
                    understanding of the brand. This deep dive laid the
                    foundation for a website design that would effectively
                    embody Dharan's unique aesthetic.
                  </h5>
                  <h5 data-jelly>
                    We then prioritized user experience, creating an intuitive
                    site layout that would guide visitors through the shopping
                    process with ease. The site was designed with a focus on
                    product discovery, enticing visitors to explore Dharan's
                    stunning collection. To create an engaging and immersive
                    experience, we integrated storytelling elements throughout
                    the website, sharing the history of Dharan's craftsmanship
                    and the journey behind each unique garment.
                  </h5>
                  <h5 data-jelly>
                    Lastly, we drew inspiration from Dharan's clothing designs
                    and prints and incorporated pastel color schemes reflecting
                    the traditional hues used in Indian block printing and
                    intricate patterns throughout the website, evoking the
                    beauty and craftsmanship of the garments themselves.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="space-large desktop"></div>

          {/* ========================== The LOGO Section =========================== */}

          <div className={styles.logoSection}>
            <div className={styles.logoImageSection}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/dharan/web5.webp"
                    alt="Logo"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
                    src="/assets/casestudies/dharan/web6.webp"
                    alt="Logo"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
                    src="/assets/casestudies/dharan/web7.webp"
                    alt="Logo"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <img
                    src="/assets/casestudies/dharan/web8.webp"
                    alt="Logo"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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

          {/* ====================== Fonts Section ======================== */}

          <div className={styles.fontSection}>
            <div className={styles.fontHeading}>
              <h1>Fonts</h1>
            </div>
            <div className={styles.fontImagebox}>
              <img src="/assets/casestudies/dharan/font.png" alt="Fonts" />
            </div>
          </div>

          {/* ====================== Fonts Section END ==================== */}

          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>

          <div className={styles.ipad}></div>
          <div className={styles.ipad}></div>
          <div className={styles.ipad}></div>
          <div className={styles.ipad}></div>
          <div className={styles.ipad}></div>
          <div className={styles.ipad}></div>
          <div className={styles.ipad}></div>
          <div className={styles.ipad}></div>

          {/* ====================== COLORS Section ==================== */}

          <div className={styles.colorSection} id="colorsection">
            <div className={styles.colorHeading}>
              <h1>COLORS</h1>
            </div>
            <div className={styles.colorMainBox}>
              <div className={styles.colorBox}>
                <div className={styles.colorBoxHeadingBackground}>
                  <h2 data-speed="1.3">
                    Colour <span className={styles.palette}>Palette</span>
                  </h2>
                </div>
              </div>

              <div
                className={styles.colorBoxesSection}
                id="dark-mode-colors-casestudy"
              >
                <ul>
                  <li className={styles.colorOne} id="line">
                    #EB298E
                  </li>
                  <li className={styles.colorTwo} id="line">
                    #48484B
                  </li>
                </ul>
              </div>
              <div className={styles.mobileImg}>
                <img
                  src="/assets/casestudies/dharan/mobile-lady.webp"
                  alt="Mobile"
                />
              </div>
            </div>
          </div>

          {/* ====================== COLORS Section END ==================== */}

          <div className="space-large desktop"></div>
          <div className={styles.mobile}></div>
          <div className={styles.mobile}></div>

          {/* ====================== Forth Section ======================== */}

          <div className={styles.videoHeading}>
            <h1>Dharan - Sustainable Faishon</h1>
          </div>
          <div className={styles.videoForthSection}>
            <div className={styles.videoContainer} id="video-container">
              <video
                src="/assets/casestudies/dharan/dharan.webm"
                autoPlay
                loop
                muted
              />
            </div>
          </div>

          {/* ====================== Forth Section END ======================== */}

          {/* <div className="space-large desktop"></div> */}

          {/* ====================== Forth Section  ======================== */}

          <div className={styles.patronumForthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h1 data-jelly>Tech Stack</h1>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h1 data-jelly>
                    HTML, CSS, JS, jQuery, GSAP, and Woo-Commerce
                  </h1>
                  <h5 data-jelly>
                    Our decision to choose WooCommerce over other e-commerce
                    platforms including Shopify and Magento was driven by
                    several factors, including:
                  </h5>
                  <h5 data-jelly>
                    <strong>Seamless integration with WordPress: </strong>As
                    Dharan's team was already familiar with wordpress and they
                    wanted their new website to be built on WordPress,
                    WooCommerce offered seamless integration and a unified
                    experience, enabling the team to manage both the website and
                    e-commerce functionalities effortlessly.
                  </h5>
                  <h5 data-jelly>
                    <strong>Cost-effectiveness: </strong>WooCommerce, being an
                    open-source platform, is more cost-effective than Shopify
                    and Magento, especially for small to medium-sized businesses
                    like Dharan. This allowed Dharan to focus on other aspects
                    of their business without having to worry about hefty
                    platform fees.
                  </h5>
                  <h5 data-jelly>
                    <strong>Flexibility and Customizability: </strong>
                    WooCommerce provides a high degree of flexibility and
                    customization options compared to Shopify and Magento. This
                    was essential for Dharan, as it allowed Enigma to create a
                    truly unique and tailor-made e-commerce experience that
                    aligned with the brand's aesthetics and requirements.
                  </h5>
                  <h5 data-jelly>
                    <strong>Extensive Plugin Ecosystem: </strong>WooCommerce
                    boasts an extensive plugin ecosystem that can be leveraged
                    to add additional functionality and features to the
                    e-commerce platform. This enabled Enigma to easily integrate
                    various tools and plugins to enhance the shopping experience
                    and streamline operations for Dharan.
                  </h5>
                  <h5 data-jelly>
                    <strong>Scalability: </strong>WooCommerce offered a scalable
                    solution that could grow alongside Dharan's business. As the
                    brand expands its product range and customer base, the
                    WooCommerce platform can be easily adapted to accommodate
                    this growth, ensuring a consistent and reliable e-commerce
                    experience.
                  </h5>
                  <h5 data-jelly>
                    By leveraging this powerful technology stack, Enigma was
                    able to create a visually captivating, highly engaging, and
                    user-friendly e-commerce website that not only showcased
                    Dharan's exquisite hand block-printed clothing but also
                    encapsulated the essence of the brand.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={styles.websiteDesignSection}>
            <div className={styles.leftBox}>
              <h1>Technology Stack</h1>
            </div>
            <div className={styles.rightBox}>
              <h1 data-jelly>
              Enigma opted for a classic combo: HTML, CSS, JS, jQuery, and WordPress. This dynamic quintet of technologies provided a flexible, battle-tested foundation for Wragby's digital fortress that could withstand the test of time. HTML and CSS laid the groundwork for visual appeal, while JavaScript and jQuery injected interactivity and flair, and WordPress offered a user-friendly content management system for Wragby's ever-evolving content needs.
              </h1>
            </div>
          </div> */}

          {/* ====================== Forth Section END  ======================== */}

          <div className="space-large desktop"></div>

          {/* ====================== Parallax Image Second =========================== */}

          <div className={styles.imageSecondSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <figure className={styles.figure}>
                  <img
                    src="/assets/casestudies/dharan/img3.webp"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
                  <h5 data-jelly>
                    The end result was a visually stunning, highly engaging, and
                    user-friendly e-commerce website that not only showcased
                    Dharan's exquisite hand-block-printed clothing but also
                    encapsulated the essence of the brand. Key achievements of
                    the project included:
                  </h5>
                  <h5 data-jelly>
                    A dramatic increase in online sales, attributable to the
                    improved user experience, intuitive navigation, and
                    captivating visual design.
                  </h5>
                  <h5 data-jelly>
                    Enhanced brand recognition and credibility, as the new
                    website effectively communicated Dharan's unique value
                    proposition and commitment to quality and craftsmanship
                  </h5>
                  <h5 data-jelly>
                    An increase in organic search traffic, driven by the
                    website's mobile-first design, optimized performance, and
                    adherence to SEO best practices.
                  </h5>
                  <h5 data-jelly>
                    As Dharan continues to grow and expand its reach, the
                    lessons learned from this project will serve as a guiding
                    light, informing future digital initiatives and ensuring
                    that the brand's commitment to quality, tradition, and
                    craftsmanship remains at the forefront of their online
                    presence.
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
                    src="/assets/casestudies/dharan/img4.webp"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
                    Dharan's collaboration with Enigma has been nothing short of
                    transformative. The team at Enigma not only created a
                    stunning e-commerce website that perfectly embodies our
                    brand but also exceeded our expectations in terms of
                    customer engagement and sales growth. The new website is
                    truly a reflection of the beauty, craftsmanship, and
                    tradition that define our hand block-printed clothing. We
                    couldn't be more thrilled with the results and look forward
                    to a continued partnership with Enigma as we take our
                    digital presence to even greater heights.
                  </h1>
                </div>
                <div
                  className={styles.clientTestimonialSectionBottomBox}
                  data-jelly
                >
                  <div className={styles.clientTestimonialSectionFigure}>
                    <img src="/assets/casestudies/dharan/dharanclient.png"></img>
                  </div>
                  <div className={styles.clientTestimonialSectionFigureText}>
                    <h5>
                      Dhananjey Singh
                      <br />
                      <span className={styles.clientTestimonialSpan}>
                        Founder and Creative Director, Dharan
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
                <Link href="/certvault">
                  <h1>Certvault</h1>
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
