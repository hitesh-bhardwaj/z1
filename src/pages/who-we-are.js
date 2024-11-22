import React, { useEffect } from "react";
import gsap from "gsap";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import { NextSeo } from "next-seo";
import SplitType from "split-type";
import { Media } from "../components/media";
import Header from "@/components/Header/Header";
import AboutAerosol from "@/components/About/AboutAerosol";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import SliderMarquee from "@/components/ServicePage/SliderMarquee";
import VideoPlayer from "@/components/About/VideoPlayer";
import AboutNextBox from "@/components/NextBoxes/AboutNextBox";
import LogoCarousel from "@/components/About/LogoCarousel";
import NewGifSection from "@/components/About/NewGifSection";
import Modal from "@/components/PopupForm/formModal";
import PageLoader from "@/components/pageLoader";
import Head from "next/head";
import AboutHero from "../components/About/AboutHero";
import Whyus from "../components/About/Whyus";
import ClientLove from "../components/About/ClientLove";

gsap.config({
  nullTargetWarn: false,
});

export default function about() {
  useEffect(() => {
    const totalSection = document.querySelectorAll(".about-section");
    totalSection.forEach(function (elem, index) {
      const text = new SplitType(
        elem.querySelectorAll(".about-section-content")
      );
      let textwords = text.words;
      gsap.from(textwords, {
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
          markers: false,
        },
        duration: 0.8,
        opacity: 0,
        yPercent: 100,
        ease: "Power3.out",
        stagger: 0.02,
      });
    });
  }, []);

  useEffect(() => {
    const aboutLogo = document.querySelector(".header-logo");
    let ctx = gsap.context(() => {
      gsap.to(aboutLogo, {
        opacity: 0,
        delay: 7,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-header",
          start: "top -500",
          scrub: 1,
        },
      });

      tl.to(aboutLogo, {
        opacity: 1,
        duration: 10,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <NextSeo
        title="About Enigma - UI/UX Design & Digital Marketing Agency India"
        description="Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency."
        openGraph={{
          url: "https://weareenigma.com/who-we-are",
          title: "About Enigma - UI/UX Design & Digital Marketing Agency India",
          description:
            "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
          images: [
            {
              url: "https://weareenigma.com/assets/featured-images/about.png",
              width: 1200,
              height: 630,
              alt: "About Us Feature Image",
              type: "image/png",
            },
          ],
          siteName: "Enigma Digital",
        }}
        additionalMetaTags={[
          {
            name: "twitter:title",
            content:
              "About Enigma - UI/UX Design & Digital Marketing Agency India",
          },
          {
            name: "twitter:description",
            content:
              "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
          },
          {
            name: "twitter:image",
            content: "https://weareenigma.com/assets/featured-images/about.png",
          },
        ]}
      />

      <Head>
        <link rel="canonical" href="https://weareenigma.com/who-we-are" />
        <link
          rel="alternate"
          href="https://weareenigma.com/who-we-are"
          hreflang="x-default"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://weareenigma.com/who-we-are",
              },
              name: "About",
              description:
                "Enigma is a team of creators, discoverers, 	dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
              datePublished: "2023-01-01T12:00:00+05:30",
              dateModified: "2023-11-17T12:00:00+05:30",
              publisher: {
                "@type": "Organization",
                name: "Enigma Digital",
                logo: {
                  "@type": "ImageObject",
                  url: "https://weareenigma.com/assets/header-logo/enigma-en-logo.svg",
                },
              },
            }),
          }}
        />
      </Head>

     
      <PageLoader text="Who We Are" />
      <div className="about-header">
        <Header />
      </div>

      {/* PopUp Modal Button */}
      <Modal />
      <main>
        <AboutHero />
        <section
          data-cursor-color="#000"
          data-cursor-size="0px"
          className="aero-about p-200"
        >
          <AboutAerosol />
        </section>

        {/* Second Section END */}

        {/* Reel Section */}

        <section className="reel-section-about">
          <div className="reel-section-box">
            <VideoPlayer />
          </div>
        </section>

        {/* Reel Section END */}
        <Whyus />

        {/* =============== Horizontal Section ================== */}
        <section className="pin-about">
          <NewGifSection />
        </section>
        {/* =============== Slider Marquee ================== */}
        <SliderMarquee />

        <ClientLove />

        <section className="p-200">
          <LogoCarousel />
        </section>

        {/* Next Page Button */}
        <div className="m-150">
          <AboutNextBox />
        </div>

        {/* ======================== Footer ====================== */}
        <Media at="desktop">
          <div className="desktop-footer">
            <Footer />
          </div>
        </Media>
        <Media lessThan="desktop">
          <div className="mobile-footer">
            <FooterMobile />
          </div>
        </Media>
        {/* ======================== Footer END ====================== */}
      </main>
         <Cursor isGelly={true} />
    </>
  );
}
