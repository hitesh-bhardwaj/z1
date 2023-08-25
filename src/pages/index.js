import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header/Header";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import SmoothScroll from "@/components/utils/SmoothScroll";
import { NextSeo } from "next-seo";

import HomeAero from "@/components/Home/HomeAero";
import Footer from "@/components/Footer";
import Category from "@/components/Home/Category";
import ConceptScrollNew from "@/components/Home/ConceptScrollNew";
import FooterMobile from "@/components/Mobile/FooterMobile";
import HomeHero from "@/components/Mobile/HomeHero";
import HomeVideoSection from "@/components/Mobile/HomeVideoSection";
import ConceptScrollMobile from "@/components/Mobile/ConceptScrollMobile";
import TopHomeAero from "@/components/Home/TopAero";
import Link from "next/link";
import Preloader from "@/components/PreLoader/PreLoader";
import HomeProject from "@/components/ProjectsSection/HomeProject";
import ProjectsHome from "@/components/Home/ProjectsHome";

gsap.config({
  nullTargetWarn: false,
});

export default function Home() {


  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#anim",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 6,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }).fromTo(
        ".home-page-header",
        {
          y: -50,
          opacity: 0,
        },
        {
          delay: -1,
          duration: 1.3,
          opacity: 1,
          y: 0,
          stagger: 0.1
        }
      );
    return () => tl.kill();
  }, []);

  return (
    <>
      <NextSeo
        title="Enigma | Digital Product Design, UI/UX & Neuromarketing Agency"
        description="Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.weareenigma.com/",
          title: "Enigma | Digital Product Design, UI/UX & Neuromarketing Agency",
          description:
            "Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use.",
          images: [
            {
              url: "https://i.ibb.co/k0NMQw9/home.png",
              width: 400,
              height: 600,
              alt: "Enigma Image",
              type: "image/png",
            },
            { url: "https://i.ibb.co/k0NMQw9/home.png" },
          ],
          siteName: "weareenigma.com",
        }}
      />

      <Head>
        <title>Enigma | Digital Product Design, UI/UX & Neuromarketing Agency</title>
        <meta
          name="description"
          content="Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      <Preloader />

      <SmoothScroll />

      <Cursor isGelly={true} />

      <main>
        
        <section>
          <Header />
        </section>

          <section className="main-section">
            <HomeHero />

{/* Hire Us Button */}
            {/* <div className="hireus-button" id="hireus">
              <a
                href="/hireus"
                data-cursor-text="Hire Us!"
                data-cursor-size="80px"
                data-cursor-color="#5D5AD6"
              >
                <Image
                  src="/assets/hireus/icon-hireus.png"
                  alt="Icon"
                  width={70}
                  height={70}
                />
              </a>
            </div> */}

            <div className="hero-main desktop">
              <div
                className="hero-section"
              >
                <div className="first-section">
                  <div
                    className="digital"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/1.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    <span className="line hacker">digital</span>
                  </div>
                  <p className="para-hero" id="anim">
                  Harnessing the power of{" "}
                    <span className="bold-600">
                      Emotion, Design, Technology & Neuromarketing,
                    </span>
                    we create Digital Brand Experiences that propel your success in the enigmatic realm of bits & bytes.
                  </p>
                </div>

                <div className="second-section">
                  <div
                    className="experience"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/2.webp"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    experience
                  </div>

                  <div className="reel-hero">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 6.5,
                      }}
                    >
                      <video
                        src="/assets/reels/hero.webm"
                        muted
                        autoPlay
                        loop
                        preload="auto"
                        className="hero-video"
                      ></video>
                    </motion.div>
                  </div>
                </div>

                <div className="third-section">
                  <div
                    className="design"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/4.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    design
                  </div>

                  <div
                    className="agency"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/3.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    agency
                  </div>
                </div>
              </div>
            </div>

            {/* ======================== Hero Footer ====================== */}

            <div className="hero-footer">
              <div className="scroll-img home-page-header">
                <Image
                  src="/assets/hero-footer/scroll.svg"
                  width={200}
                  height={200}
                  alt="Scroll Image"
                  className="svg-dark-mode"
                ></Image>
              </div>

              <div className="content-section home-page-header">
                <div className="f-sub-content">
                  <div className="f-content-text">
                    <h6 className="f-disabled">timezone</h6>
                    <div className="f-heading">+5:30 GMT</div>
                  </div>
                </div>
                <div className="f-right">
                  <h6 className="f-disabled">location</h6>
                  <div className="f-heading">Noida - India</div>
                </div>
              </div>
            </div>
            {/* ======================== Hero Footer END ====================== */}
          </section>

      {/* ======================== Concept Scroll ====================== */}
      <section>
        <ConceptScrollNew />
      </section>

      <section>
        <ConceptScrollMobile />
      </section>
      {/* ======================== Concept Scroll END ====================== */}

      {/* ======================== Home Video Mobile ====================== */}
      <HomeVideoSection />
      {/* ======================== Home Video Mobile END  ================= */}

      {/* ======================== Home Aero ====================== */}
      <section
        data-cursor-color="#000"
        data-cursor-size="0px"
        className="topHeightAero m-150"
      >
        <TopHomeAero />
      </section>
      {/* ======================== Home Aero END ====================== */}

      {/* ======================== Projects Slide ====================== */}
      <section className="category pb-150">
        <Category />
      </section>
      {/* ======================== Projects Slide END ====================== */}

      {/* ======================== Projects Slide ====================== */}
      <section className="desktop-projects m-150">
        <HomeProject />
      </section>

      <section className="mobile-projects m-150">
        <ProjectsHome />
      </section>

      {/* ======================== Projects Slide END ====================== */}

      {/* ======================== Home Aero ====================== */}
      <section data-cursor-color="#000" data-cursor-size="0px" className="homeAeroBottom">
        <HomeAero />
      </section>
      {/* ======================== Home Aero END ====================== */}

      {/* ======================== Footer ====================== */}
      <section className="desktop-footer mt-150">
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
