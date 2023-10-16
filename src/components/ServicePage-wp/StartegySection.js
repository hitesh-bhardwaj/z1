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
  5;
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

export default function StrategySection({ data }) {

  const services = [
    {
      header: data?.page?.servicePage?.service1H,
      paragraph: data?.page?.servicePage?.service1P,
      imageUrl: data?.page?.servicePage?.service1Img?.mediaItemUrl,
      link: '/strategy-and-planning',
      cursorColor: '#2b8c87',
    },
    {
      header: data?.page?.servicePage?.service2H,
      paragraph: data?.page?.servicePage?.service2P,
      imageUrl: data?.page?.servicePage?.service2Img?.mediaItemUrl,
      link: '/ui-ux-design',
      cursorColor: '#000',
    },
    {
      header: data?.page?.servicePage?.service3H,
      paragraph: data?.page?.servicePage?.service3P,
      imageUrl: data?.page?.servicePage?.service3Img?.mediaItemUrl,
      link: '/strategy-and-planning',
      cursorColor: '#fcc63d',
    },
    {
      header: data?.page?.servicePage?.service4H,
      paragraph: data?.page?.servicePage?.service4P,
      imageUrl: data?.page?.servicePage?.service4Img?.mediaItemUrl,
      link: '/ui-ux-design',
      cursorColor: '#000',
    }
  ]

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
      
  // Strategy Image Animate
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-box-image",
        start: "top 85%",
      },
    });
    tl.fromTo(
      ".anim-img-service",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.5,
      }
    );
  });

    return(
        <>
          <div className="service-cap-section strategy-box-anim">
            <div className="left-box" data-jelly>
              <p className="sub-text ser-text-head-anim">
                <span>
                  {data?.page?.servicePage?.section2TopPSmall}
                </span>
              </p>
            </div>
            <div className="right-box">
              <div className="right-sub-content strategy-box-anim">
                <h2 className="ser-text-head-anim">{data?.page?.servicePage?.section2TopH}</h2>
                <p data-jelly className="ser-text-head-anim">
                  <span>
                    {data?.page?.servicePage?.section2TopP}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {services.map((service, index) => (
            <div className={`strategy-box strategy-box-anim ${index % 2 !== 0 ? 'flex-reverse' : ''}`} key={index}>
              <div
                className="left-strategy-box"
                data-cursor-text="Know More!"
                data-cursor-size="110px"
                data-cursor-color={service.cursorColor}
              >
                <Link href={service.link}>
                  <h3 className="ser-text-head-anim">{service.header}</h3>
                  <p data-jelly className="ser-text-head-anim">
                    <span>{service.paragraph}</span>
                  </p>
                </Link>
              </div>

              <div className="right-strategy-box">
                <div className="image-container service-box-image">
                  <Image
                    src={service.imageUrl}
                    width={500}
                    height={1000}
                    alt="services"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    className="anim-img-service"
                  />
                </div>
              </div>
            </div>
          ))}
        </>
    )
}