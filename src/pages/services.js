import React from "react";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { NextSeo } from "next-seo";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import MarqueeCata from "@/components/MarqueeCata";
import SliderMarquee from "@/components/ServicePage/SliderMarquee";
import FooterMobile from "@/components/Mobile/FooterMobile";
import ServiceNextBox from "@/components/NextBoxes/ServiceNextBox";
import StrategySection from "@/components/ServicePage/StartegySection";
import PageLoader from "../components/pageLoader";
import Head from "next/head";
import Modal from "../components/PopupForm/formModal";
import ServiceHero from "../components/ServicePage/ServiceHero";
import MobileServiceVideo from "../components/ServicePage/MobileServiceVideo";
import { Media } from "../components/media";
import ServiceBottom from "../components/ServicePage/ServiceBottom";
import HowWeWork from "../components/ServicePage/HowWeWork";

gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

gsap.registerPlugin(ScrollTrigger);

export default function services() {
  return (
    <>
      <NextSeo
        title="Award-Winning Web Design, UX Design & Digital Marketing Services"
        description="Enigma offers UI UX design, Web Design, Mobile App Design, Frontend Development and Organic Digital Marketing Services. See how we can help your business grow."
        openGraph={{
          url: "https://weareenigma.com/services",
          title:
            "Award-Winning Web Design, UX Design & Digital Marketing Services",
          description:
            "Enigma offers UI UX design, Web Design, Mobile App Design, Frontend Development and Organic Digital Marketing Services. See how we can help your business grow.",
          images: [
            {
              url: "https://weareenigma.com/assets/featured-images/service.png",
              width: 1200,
              height: 630,
              alt: "Services Feature Image",
              type: "image/png",
            },
          ],
          siteName: "Enigma Digital",
        }}
        additionalMetaTags={[
          {
            name: "twitter:title",
            content:
              "Award-Winning Web Design, UX Design & Digital Marketing Services",
          },
          {
            name: "twitter:description",
            content:
              "Enigma offers UI UX design, Web Design, Mobile App Design, Frontend Development and Organic Digital Marketing Services. See how we can help your business grow.",
          },
          {
            name: "twitter:image",
            content:
              "https://weareenigma.com/assets/featured-images/service.png",
          },
        ]}
      />
      <Head>
        <link rel="canonical" href="https://weareenigma.com/services" />
        <link
          rel="alternate"
          href="https://weareenigma.com/services"
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
                "@id": "https://weareenigma.com/services",
              },
              name: "Services",
              description:
                "Enigma offers UI UX design, Web Design, Mobile App Design, Frontend Development and Organic Digital Marketing Services. See how we can help your business grow.",
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "Enigma Digital",
                url: "https://weareenigma.com/",
                image:
                  "https://lh3.googleusercontent.com/p/AF1QipOrkTrTs3PcLHNNf0iQVVPlb4FTsUlynqO-DFjb=s680-w680-h510",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Suite # 301, Tower A, Grandslam, Ithum A-40, Sector-62",
                  addressLocality: "Noida",
                  addressRegion: "UP",
                  postalCode: "201309",
                  addressCountry: "IN",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  reviewCount: "14",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "28.627458269319703",
                  longitude: " 77.37259286237833",
                },
                telephone: "+918178026136",
                priceRange: "$$",
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "10:00",
                    closes: "20:00",
                  },
                ],
              },
            ]),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Service",
              serviceType: "IT services",
              provider: {
                "@type": "Organization",
                name: "Enigma Digital",
                url: "https://weareenigma.com/",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "IT services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Strategy",
                      Description:
                        "Strategic planning based on insight is the starting point of everything we do. Combining strategic thinking, wide marketing experience, insights, best practices, and sound judgment, we craft effective strategies that turn insights into measurable results.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "UI/UX Design",
                      Description:
                        "We unravel complex design challenges through meticulous user research, eanalysis, prototyping, and collaborative design with users and stakeholders.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Technology",
                      Description:
                        "A human-centred, design-led approach to product development that leverages cutting-edge technologies & agile methodology, committed to putting you on a path to success in the ever-changing technological landscape.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Marketing",
                      Description:
                        "Our marketing strategies are not just designed to create a lasting impact, bdriveengagement, foster brand loyalty, and navigate the ever-evolving digital landscape with finesse and agility.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <Cursor isGelly={true} />
      <PageLoader text={"What We Do"} />

      <Header />

      <main>
        <Modal />
        <ServiceHero />

        {/* =================== Second Image Section ========================= */}
        <div
          className="service-second-image-section"
          id="service-second-section"
        >
          <div className="" id="opacity"></div>
        </div>
        <Media lessThan="desktop">
          <MobileServiceVideo />
        </Media>
        <StrategySection />
        <ServiceBottom />
        <HowWeWork />
        <section className="m-150">
          <SliderMarquee />
        </section>
        <section className="service-marquee">
          <MarqueeCata />
        </section>
        <section className="m-150">
          <ServiceNextBox />
        </section>
        <Media at="desktop">
          <Footer />
        </Media>
        <Media lessThan="desktop">
          <FooterMobile />
        </Media>
        {/* ======================== Footer END ====================== */}
      </main>
    </>
  );
}
