import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { NextSeo } from "next-seo";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";

import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";

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

export default function blogHowToDesign() {
  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#blog",
      {
        rotationX: -80,
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
    return () => tl.kill();
  }, []);

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#anim",
      {
        opacity: 0,
        translateY: 200,
      },
      {
        delay: 3.8,
        duration: 1.3,
        opacity: 1,
        stagger: 0.1,
        translateY: 0,
      }
    );
    return () => tl.kill();
  }, []);

  // Section Pinnnig
  useEffect(() => {
    let ctx = gsap.context(() => {
      let brandImageBlock = document.getElementById("main-blog-container");
      let brandImagePin = document.getElementById("left-section");
      let brandImageNotPin = document.getElementById("right-section");
      ScrollTrigger.create({
        trigger: brandImagePin,
        start: "top 10%",
        endTrigger: brandImageNotPin,
        end: "bottom 80%",
        // the nect line (with the arrow function) is 'a functional value' () =>
        // end: () => `${brandImageNotPin.offsetHeight - brandImagePin.offsetHeight}px 20%`,
        // this line ensures the functional value gets recalculated on resize
        invalidateOnRefresh: true,
        pin: brandImagePin,
        // pinSpacing: true,
        markers: false,
      });
    });
    return () => ctx.revert();
  });

   // Parallax Image
   if (globalThis.innerWidth > 776) {
    useEffect(() => {
      let ctx = gsap.context(() => {
        gsap.utils.toArray(".image-container").forEach(function (container) {
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
  }

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
  }, []);

  return (
    <>

    <NextSeo
      title="Unleashing the Power of Remote Designers: Why Outsourcing to India is
          the Winning Move"
      description="In this blog, we will explore the myriad advantages of hiring remote designers from India, debunking common misconceptions and  providing solid evidence that supports the value of outsourcing design work to the South Asian giant."
      canonical="https://www.weareenigma.com/unleashing-the-power-of-remote-designers"
      openGraph={{
        url: "https://www.weareenigma.com/unleashing-the-power-of-remote-designers",
        title: "Unleashing the Power of Remote Designers: Why Outsourcing to India is the Winning Move",
        description:
          "In this blog, we will explore the myriad advantages of hiring remote designers from India, debunking common misconceptions and  providing solid evidence that supports the value of outsourcing design work to the South Asian giant.",
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
        siteName: "https://www.weareenigma.com/unleashing-the-power-of-remote-designers",
      }}
    />    

      <Head>
        <title>
          Unleashing the Power of Remote Designers: Why Outsourcing to India is
          the Winning Move
        </title>
        <meta name="description" content="In this blog, we will explore the myriad advantages of hiring remote designers from India, debunking common misconceptions and  providing solid evidence that supports the value of outsourcing design work to the South Asian giant." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        ></meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      <div className="loader-wrap" id="loader">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
        </svg>

        <div className="loader-wrap-heading">
          <span>
            <h1>Power of Remote Designers</h1>
          </span>
        </div>
      </div>

      <SmoothScroll />

      <Cursor isGelly={true} />

      <div>
        <Header />
      </div>

      <div className="blog-detail-main-section">
        <div
          className="blog-detail-heading"
          data-cursor-size="10px"
          data-cursor-text=""
        >
          <h1 data-jelly id="blog">
            Unleashing the Power of Remote Designers: Why Outsourcing to India
            is the Winning Move
          </h1>
        </div>

        <div className="main-blog-container" id="main-blog-container">
          <div className="left-section" id="left-section">
            <div className="box-blog" id="anim">
              <h1>Posted By</h1>
              <h2>Bhaskar Varshney</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Posted on</h1>
              <h2>06/12/2022</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Share Article</h1>
              <div className="social-icons">
                <LinkedinShareButton
                  url={
                    "https://weareenigma.com/unleashing-the-power-of-remote-designers"
                  }
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/linkedin.webp"
                    alt="social-icons"
                  />
                </LinkedinShareButton>

                <FacebookShareButton
                  url={
                    "https://weareenigma.com/unleashing-the-power-of-remote-designers"
                  }
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/facebook.webp"
                    alt="social-icons"
                  />
                </FacebookShareButton>

                <TwitterShareButton
                  url={
                    "https://weareenigma.com/unleashing-the-power-of-remote-designers"
                  }
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/twitter.webp"
                    alt="social-icons"
                  />
                </TwitterShareButton>

                <WhatsappShareButton
                  url={
                    "https://weareenigma.com/unleashing-the-power-of-remote-designers"
                  }
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/whatsapp.webp"
                    alt="social-icons"
                  />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
          <div className="right-section" id="right-section">
            <h3 id="anim" className="italic-text">
              In this blog, we will explore the myriad advantages of hiring
              remote designers from India, debunking common misconceptions and
              providing solid evidence that supports the value of outsourcing
              design work to the South Asian giant. By combining compelling
              data, engaging anecdotes, and interesting insights, we will
              discuss how businesses can revolutionize their design processes
              and benefit from the immense talent pool that India offers.
            </h3>

            
            
            <p id="anim">
              The design world is rapidly evolving, and companies must adapt to
              this changing landscape to stay competitive. One way to do so is
              by leveraging the power of remote designers, specifically those
              from India. Outsourcing design work to India offers a plethora of
              advantages, making it an attractive option for businesses
              worldwide. Let's dive into the core reasons why hiring remote
              designers from India is a game-changer for your business.
              
              
            </p>
            <h3 className="bold-h" id="anim">
              Unparalleled Talent Pool and Expertise
            </h3>
            <p id="anim">
              India is a goldmine of talented and skilled designers, with its
              extensive pool of professionals having graduated from prestigious
              institutions like the National Institute of Design (NID) and the
              Indian Institutes of Technology (IIT). According to LinkedIn data,
              there are over 800,000 graphic designers in India, making it a
              treasure trove of creative minds that can deliver innovative,
              high-quality designs that captivate customers and boost brand
              recognition (LinkedIn, 2021).
            </p>
            
            <h3 className="bold-h" id="anim">
              Cost-Effectiveness – A Win-Win Situation
            </h3>
            <p id="anim">
              The cost of living in India is significantly lower than that in
              many Western countries. According to data from Numbeo, the cost of
              living in India is approximately 65% lower than in the United
              States (Numbeo, 2021). This means that businesses can tap into
              exceptional talent without breaking the bank. By outsourcing
              design work to India, companies can significantly reduce their
              overhead expenses and save up to 60% on labour costs (Economic
              Times, 2020). The cost advantage empowers businesses to reinvest
              the savings into other strategic initiatives, driving growth and
              success.
            </p>
            

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img src="/assets/blogs/blog-detail/unleash/1.jpg" alt="Img" />
              </div>
            </div>

            
            
            <h3 className="bold-h">
              Flexibility and Adaptability
            </h3>

            <p>
              Indian remote designers are known for their flexibility and
              adaptability. They can seamlessly integrate into any team,
              understand business requirements, and work across different time
              zones. According to a study by McKinsey, companies that utilize
              remote teams report a 25% increase in productivity, largely due to
              the flexibility of working hours (McKinsey, 2020). This
              adaptability makes collaboration a breeze, ensuring that projects
              are delivered on time without compromising on quality.
            </p>

            
            

            <h3 className="bold-h">
              Technological Prowess
            </h3>

            <p>
              India's thriving IT industry has fostered a tech-savvy design
              community that stays at the forefront of design trends and
              software. By hiring remote designers from India, businesses can
              take advantage of their expertise in cutting-edge design tools and
              techniques, ensuring that their projects stand out in today's
              competitive market. A study by NASSCOM revealed that India's
              IT-BPM sector generated $194 billion in revenues in 2020, with an
              annual growth rate of 2.3% (NASSCOM, 2021). This growth has led to
              the rise of a robust design community well-versed in the latest
              design technologies.
            </p>

            

            <h3 className="bold-h">
              Debunking the Communication Barrier Myth
            </h3>

            <p>
              One of the major concerns that business owners might have when
              considering outsourcing to India is the potential communication
              barrier. However, India boasts the second-largest English-speaking
              population in the world, with over 125 million speakers (World
              Bank, 2021). This makes communication with remote designers a
              non-issue. Additionally, Indian designers are accustomed to
              working with international clients, ensuring smooth collaboration
              and clear communication.
            </p>

            

            <h3 className="bold-h">
              Scalability and Growth
            </h3>

            <p>
              Outsourcing design work to India provides businesses with the
              ability to scale their design teams rapidly, catering to
              fluctuating project demands. This scalability can fuel business
              growth, as companies can quickly adjust their design resources to
              meet the evolving needs of their clients and the market. According
              to a Deloitte survey, 59% of businesses cited scalability as one
              of the main reasons for choosing to outsource (Deloitte, 2020). By
              outsourcing to India, businesses can tap into a vast talent pool
              and remain agile in the face of change.
            </p>

            

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img src="/assets/blogs/blog-detail/unleash/2.jpg" alt="Img" />
              </div>
            </div>
            
            

            <h3 className="bold-h">
              Intellectual Property Protection
            </h3>

            <p>
              Protecting intellectual property (IP) is crucial for businesses,
              and India is making strides in strengthening its IP laws and
              enforcement. The World Intellectual Property Organization (WIPO)
              ranked India 40th in the Global Innovation Index (GII) in 2021,
              highlighting its progress in IP protection (WIPO, 2021). By
              outsourcing design work to India, businesses can rest assured that
              their IP rights will be respected and safeguarded.
            </p>

            
            <h3 className="bold-h">
              Cultural Diversity and Global Outlook
            </h3>

            <p>
              India's rich cultural heritage and global outlook make its
              designers uniquely equipped to create designs that resonate with
              diverse audiences. Indian designers are exposed to a wide range of
              cultural influences, allowing them to approach design challenges
              with a fresh perspective and create innovative solutions that can
              appeal to global markets.
            </p>

            
            <h3 className="bold-h">
              Increased Collaboration and Innovation
            </h3>

            <p>
              Outsourcing design work to India can also foster increased
              collaboration and innovation within your organization. By bringing
              in fresh perspectives and ideas, remote designers from India can
              inspire your in-house team to think outside the box and drive
              innovation. A Harvard Business Review study found that companies
              that embraced remote work saw a 4.4% increase in patents filed,
              indicating a boost in innovation (Harvard Business Review, 2020).
            </p>
            
            <h3 className="bold-h">
              Improved Work-Life Balance for In-House Team Members
            </h3>

            <p>
              By outsourcing design tasks to remote designers in India,
              businesses can alleviate the workload of their in-house team
              members, providing them with a better work-life balance. This can
              lead to increased job satisfaction, higher retention rates, and a
              more positive work environment. According to a study by Buffer,
              97% of remote workers reported that they would recommend remote
              work to others, citing improved work-life balance as a key benefit
              (Buffer, 2021).
              <br />
              <br />
              In a world where staying ahead of the curve is paramount,
              outsourcing design work to India offers a myriad of benefits. From
              cost savings to access to an unparalleled talent pool, hiring
              remote designers from India is a strategic move that can
              revolutionize your design process and catalyse business growth. By
              countering common misconceptions and highlighting the advantages,
              we hope to inspire businesses to make the leap and experience the
              incredible potential of Indian remote designers.
            </p>
          </div>
        </div>
      </div>


      {/* =================== Related Articles =========================== */}

      <div className="related-articles">
        <div className="related-article-heading">
          <h1>RELATED ARTICLES</h1>
          <Link href="/blogs">
            <h4>All articles</h4>
          </Link>
        </div>

        <div className="related-box-img">
          <div className="box-img-content">
            <div className="img-box-related">
              <Link href="/the-future-of-marketing">
                <img
                  src="/assets/blogs/blog-detail/the-future-of-marketing/feature.webp"
                  alt="img"
                  data-cursor-text="Read Now"
                  data-cursor-color="#000"
                  data-cursor-size="100px"
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                />
                <h2>Marketing</h2>
              </Link>
            </div>
            <h1>
              The Future of Marketing: Why Every Marketer Should Learn
              Neuroscience and Master Neuromarketing
            </h1>
          </div>

          <div className="box-img-content">
            <div className="img-box-related">
              <Link href="/the-basics-of-seo">
                <img
                  src="/assets/blogs/blog-detail/basic-seo/feature.webp"
                  alt="img"
                  data-cursor-text="Read Now"
                  data-cursor-color="#000"
                  data-cursor-size="100px"
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                />
                <h2>Marketing</h2>
              </Link>
            </div>
            <h1>The Basics of SEO: A Comprehensive Beginner's Guide</h1>
          </div>

          <div className="box-img-content">
            <div className="img-box-related">
              <Link href="/marketing-psychology">
                <img
                  src="/assets/blogs/blog-detail/marketing-psychology/feature.webp"
                  alt="img"
                  data-cursor-text="Read Now"
                  data-cursor-color="#000"
                  data-cursor-size="100px"
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                />
                <h2>Marketing</h2>
              </Link>
            </div>
            <h1>
              Marketing Psychology: The Secret to Captivating Your Audience and
              Building Unforgettable Brands
            </h1>
          </div>
        </div>
      </div>
      {/* =================== Related Articles END =========================== */}

      {/* ======================== Footer ====================== */}
      <div className="desktop-footer">
        <Footer />
      </div>

      <div className="mobile-footer">
        <FooterMobile />
      </div>
      {/* ======================== Footer END ====================== */}
    </>
  );
}
