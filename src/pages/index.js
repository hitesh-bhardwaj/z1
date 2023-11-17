import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import SmoothScroll from "@/components/utils/SmoothScroll";
import { NextSeo } from "next-seo";

import Header from "@/components/Header/Header";  
import HomeAero from "@/components/Home/HomeAero";
import HeroDesktop from "@/components/Home/HeroDesktop";
import Footer from "@/components/Footer";
import Category from "@/components/Home/Category";
import ConceptScrollNew from "@/components/Home/ConceptScrollNew";
import FooterMobile from "@/components/Mobile/FooterMobile";
import HeroMobile from "@/components/Mobile/HeroMobile";
import HomeVideoSection from "@/components/Mobile/HomeVideoSection";
import ConceptScrollMobile from "@/components/Mobile/ConceptScrollMobile";
import TopHomeAero from "@/components/Home/TopAero";
import Preloader from "@/components/PreLoader/PreLoader";
import HomeProject from "@/components/ProjectsSection/HomeProject";
import ProjectsHome from "@/components/Home/ProjectsHome";
import Modal from "@/components/PopupForm/formModal";
import HomeBlogs from "@/components/Home/HomeBlogs";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <NextSeo
        title="Enigma | Digital Product Design, UI/UX & Neuromarketing Agency"
        description="Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use."
        canonical="https://www.weareenigma.com/"
        openGraph={{
          url: "https://weareenigma.com/",
          title: "Enigma | Digital Product Design, UI/UX & Neuromarketing Agency",
          description:
            "Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use.",
            images: [
              {
                url: "https://weareenigma.com/assets/featured-images/index.png",
                width: 1200,
                height: 630,
                alt: "HomePage Feature Image",
                type: "image/png",
              },
            ],
            siteName: "Enigma Digital",
          }}
          additionalMetaTags={[
            {
              name: "twitter:title",
              content: "Enigma | Digital Product Design, UI/UX & Neuromarketing Agency"
            },
            {
              name: "twitter:description",
              content: "Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use."
            },
            {
              name: "twitter:image",
              content: "https://weareenigma.com/assets/featured-images/index.png"
            },
          ]}
        />

    <Head>
      <link rel="alternate" href="https://weareenigma.com/" hreflang="x-default" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Enigma Digital",
              "url": "https://weareenigma.com/",
              "image": "https://lh3.googleusercontent.com/p/AF1QipOrkTrTs3PcLHNNf0iQVVPlb4FTsUlynqO-DFjb=s680-w680-h510",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suite # 301, Tower A, Grandslam, Ithum A-40, Sector-62",
                "addressLocality": "Noida",
                "addressRegion": "UP",
                "postalCode": "201309",
                "addressCountry": "IN"
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Bhaskar Varshney"
                }
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.627458269319703",
                "longitude": " 77.37259286237833"
              },
              "telephone": "+918178026136",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "10:00",
                  "closes": "20:00"
                },
              ],
            }
          ]),
        }}
      />
    </Head>

      <Preloader />

      <SmoothScroll />

      <Cursor isGelly={true} />

      <main>
      
      <Header />

      {/*===============================Hero Section=========================*/}
          <section className="main-section"
                   data-cursor-size="10"
                   data-cursor-text="">
            <HeroMobile />
            <HeroDesktop />
          </section>

{/* PopUp Modal Button */}
<div>
  <Modal />
</div>
{/* End */}

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
      
      {/* ======================== Related Blogs ====================== */}
        <HomeBlogs />
      {/* ======================== Related Blogs ====================== */}
      
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
