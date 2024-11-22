import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import Link from "next/link";

gsap.config({
    nullTargetWarn: false,
    trialWarn: false
  });
  
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


  const StrategyBox = ({
    href,
    title,
    description,
    imageUrl,
    cursorText,
    cursorSize,
    cursorColor,
    reverse = false,
    handleHover,
    handleHoverExit,
  }) => {
    return (
      <div className={`strategy-box strategy-box-anim ${reverse ? "flex-reverse" : ""}`}>
        <div
          className="left-strategy-box"
          data-cursor-text={cursorText}
          data-cursor-size={cursorSize}
          data-cursor-color={cursorColor}
        >
          <Link href={href}>
            <h2 className="ser-text-head-anim">{title}</h2>
            <p data-jelly className="ser-text-head-anim">
              <span>{description}</span>
            </p>
          </Link>
        </div>
        <div className="right-strategy-box">
          <div className="image-container service-box-image">
            <Image
              src={imageUrl}
              width={500}
              height={1000}
              alt={`${title} image`}
              onMouseEnter={handleHover}
              onMouseOut={handleHoverExit}
              className="anim-img-service"
            />
          </div>
        </div>
      </div>
    );
  };
  

export default function StrategySection() {

  // Parallax Image
  useEffect(() => {
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
          invalidateOnRefresh: true,
        },
        y: "25%",
        ease: "none",
      });
    });
  });

    // Text Reveal Animation For Each
    useEffect(() => {
        const totalSection = document.querySelectorAll(".strategy-box-anim");
        totalSection.forEach(function (elem, index) {
          const text = new SplitType(elem.querySelectorAll(".ser-text-head-anim"));
          let textwords = text.words;
          gsap.from(textwords, {
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
              markers: false,
            },
            duration: 0.5,
            opacity: 0,
            yPercent: 100,
            ease: "Power3.out",
            stagger: 0.02,
          });
        });
      });
 

    return(
        <>
        <section id="strategy">
        <div className="services">
      {/* Intro Section */}
      <div className="service-cap-section strategy-box-anim">
        <div className="left-box" data-jelly>
          <p className="sub-text ser-text-head-anim">
            <span>
              Here's how we help you
              <br /> grow.
            </span>
          </p>
        </div>
        <div className="right-box">
          <div className="right-sub-content strategy-box-anim">
            <p className="service-right-head ser-text-head-anim">Our Capabilities</p>
            <p data-jelly className="ser-text-head-anim">
              <span>
                We create evergreen brands that are highly effective at boosting revenue, increasing brand equity, and improving ROI. Our big picture approach powers your entire business, not just the marketing department.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Strategy Boxes */}
      <StrategyBox
        href="/strategy-and-planning-services"
        title="Strategy"
        description="Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital Capabilities Development, Persona Design & Customer Segmentation, Competitive Analysis & Industry Insights, Brand & Content Strategy, Digital Marketing and Website Performance Audit."
        imageUrl="/assets/services/strategy.webp"
        cursorText="Know More!"
        cursorSize="110px"
        cursorColor="#2b8c87"
        handleHover={handleHover}
        handleHoverExit={handleHoverExit}
      />
      <StrategyBox
        href="/ui-ux-design-services"
        title="UI/UX Design"
        description="User Interface Design, User Experience Design, Responsive Web Design, Mobile App Design, Digital Interface Design, Design Systems Creation, Experience Mapping, User Flow Mapping, Wireframing & Prototyping, Illustrations & Animations, Visual Designs, and UI Kits."
        imageUrl="/assets/services/ui-ux.webp"
        cursorText="Know More!"
        cursorSize="110px"
        cursorColor="#000"
        reverse
        handleHover={handleHover}
        handleHoverExit={handleHoverExit}
      />
      <StrategyBox
        href="/technology-services"
        title="Technology"
        description="Front-End Development, Native & Hybrid Mobile Application Development, Progressive Web Applications, Database Design & Management, Cloud Infrastructure Services, Testing & Automation. TECH STACK - HTML, CSS, Sass, Less, JavaScript, jQuery, GSAP, Vue, React, React Native, Ionic, Flutter, NodeJS, Spring, JAVA, Grails, Hibernate, MySQL, PostgreSQL, Oracle, Mongo, AWS and Google Cloud."
        imageUrl="/assets/services/technology.webp"
        cursorText="Know More!"
        cursorSize="110px"
        cursorColor="#fcc63d"
        handleHover={handleHover}
        handleHoverExit={handleHoverExit}
      />
      <StrategyBox
        href="/organic-digital-marketing-services"
        title="Marketing"
        description="Social Media Management, Content Creation & Curation, Search Engine Optimisation, Influencer Management, Auction Media Management, Online Reputation Management, Media Planning & Buying, Marketing Automation, Email Marketing, Conversion Rate Optimisation, Website & SEO Analysis."
        imageUrl="/assets/services/marketing.webp"
        cursorText="Know More!"
        cursorSize="110px"
        cursorColor="#000"
        reverse
        handleHover={handleHover}
        handleHoverExit={handleHoverExit}
      />
    </div>
        </section>
        </>
    )
}