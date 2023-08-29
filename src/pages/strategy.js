import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import SmoothScroll from "@/components/utils/SmoothScroll";
import { gsap } from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";

import styles from '@/styles/serviceDetail.module.css';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import CursorAero from '@/components/ServiceDetail/CursorAero';
import StrategyNext from '@/components/NextBoxes/StrategyNext';

gsap.registerPlugin(ScrollTrigger);

gsap.config({
    nullTargetWarn: false,
    trialWarn: false
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

export default function Strategy() {

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
        duration: 0.7,
      }).to(".loader-wrap-heading h1", {
        delay: 0.5,
        y: -200,
        skewY: 10,
        duration: 0.7,
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

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#service-anim",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3.2,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

  if (globalThis.innerWidth > 1200) {

// Portfolio Section Animation
  useEffect(() => {

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#servicePortfolioAnim',
          scrub: true,
          // start: "-110% top",
          end: "-25% top",
          ease: "none",
          markers: false,
        },
      });
      tl.fromTo( '#servicePortfolioAnim', 0.8, {
          transform: "translate3d(0px, 0px, 0px) scale(0.5, 0.5)",
          ease: "none",
        },{
          transform: "translate3d(0px, 0px, 0px) scale(1, 1)",
      });
    });
    return () => ctx.revert();
  });

// Portfolio Section Animation
    useEffect(() => {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#section-3",
            start: "top top",
            end: "bottom -100%",
            scrub: 2,
            ease: "power1.inOut",
            pin: true,
            markers: false,
          },
        });
        
      tl.to("#service-port-main", {
        duration: 10,
        x: "-58.5%",
        delay: 2,
      });
  });
  return () => ctx.revert();
});

// Approach Section Animation
    useEffect(() => {
        let approachImages = gsap.utils.toArray(".service-image-container")
        let approachImagess = gsap.utils.toArray(".service-image-container img")
        let approachItems = gsap.utils.toArray(".text-card")

        let ctx = gsap.context(() => {
            gsap.to("#approachImgCont", {
                scrollTrigger: {
                  trigger: "#section-5",
                  pin: "#approachImgCont",
                  pinSpacing: true,
                  start: "top top",
                  end: "bottom bottom",
                  markers: false
                }
              });

              if (approachItems) {
                approachItems.forEach((image, i) => {
                  
                  let tl = gsap.timeline({
                    scrollTrigger: {
                      trigger: image,
                      scrub: 1,
                      start: "top top-=600",
                      markers: false,
                    }
                  });
                  tl.to(approachImages[i], {
                    zIndex: "1",
                  })
                  tl.to(approachImages[i], {
                    opacity: 0,
                    duration: 1,
                    scale: 1.2,
                    ease: "power4.out"
                  }, "-=1")
                })
              }     
        });
        return () => ctx.revert();
    }, []);

  }

// Text Reveal Animation For Section 2
    useEffect(() => {
      const totalSection = document.querySelectorAll(
        "#section-2"
      );
      totalSection.forEach(function (elem, index) {
        const text = new SplitType(elem.querySelectorAll("#why-us-anim"));
        let textwords = text.words;
        gsap.from(textwords, {
          scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom top",
            markers: false,
          },
          duration: .5,
          opacity: 0,
          yPercent: 100,
          ease: "Power3.out",
          stagger: 0.01,
        });
      });
    }, []);

// Text Reveal Animation For Approach and Process Section
    useEffect(() => {
      const totalSection = document.querySelectorAll(
        "#section-4"
      );
      totalSection.forEach(function (elem, index) {
        const text = new SplitType(elem.querySelectorAll(".why-us-anim"));
        let textwords = text.words;
        gsap.from(textwords, {
          scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom top",
            markers: false,
          },
          duration: .5,
          opacity: 0,
          yPercent: 100,
          ease: "Power3.out",
          stagger: 0.01,
        });
      });
    }, []);

// Our Service Section Animation
    useEffect(() => {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#section-6",
            start: "top 80%",
            end: "bottom top",           
            markers: false,
          },
        });
        tl.from(".our-service-anim", {
            y: "100",
            opacity: "0",
            duration: 0.5,
            ease: 'power3.Out',
        });
        tl.from("#serviceOfferBottom > div", {
          y: 50,
          opacity: "0",
          duration: 0.7,
          stagger: 0.2,
          ease: 'power3.Out',
          delay: -0.5,
      });
      });
      return () => ctx.revert();
    });

  return (
    <>
        <Head>
        <title>
          Enigma Digital | Services | Expert UI/UX, Development & Marketing
        </title>
        <meta
          name="description"
          content="Experience top-tier UI/UX design, front-end development, and organic marketing services with Enigma Digital, enhancing your online presence and business growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        ></meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      {/*Page Loader*/}
      <div className="loader-wrap" id="loader" style={{ zIndex: 999 }}>
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
        </svg>

        <div className="loader-wrap-heading">
          <span>
            <h1>Strategy and Planning</h1>
          </span>
        </div>
      </div>
      {/*Page Loader*/}

    <SmoothScroll />

    <Cursor isGelly={true} />

    <div>
        <Header />
    </div>

    <main className={styles['main']}>
      <div className={styles['container']}>

{/* Hero Section*/}
        <section className={`${styles['service-detail-hero']} ${styles['main-container']}`} data-cursor-size="10px" data-cursor-text="">
          <div className={styles['service-detail-hero-content']}>
            <div className={styles['service-detail-hero-top']}>
              <h1 className='color-primary' id='service-anim'
              data-cursor-magnetic data-cursor-background-image="/assets/gif/4.gif" data-cursor-size="300px" data-cursor-color="#000">
                Strategy
              </h1>
              <p className={`${styles['hero-top-para']}`} id='service-anim'>
                Our comprehensive range of services leverages our full expertise to boost your digital presence to celestial heights.
              </p>
            </div>
            <div>
              <h1 className={`${styles['hero-bottom']}`} id='service-anim' data-cursor-magnetic data-cursor-background-image="/assets/gif/5.gif" data-cursor-size="300px" data-cursor-color="#000">
                & Planning
              </h1>
            </div>
          </div>
        </section>

{/* Section 2 */}
        <section className={`${styles['main-container']} ${styles['mb-10']}`} id='section-2'>
          <div className={styles['service-detail-content']}>
            <h4 className={`${styles['m-50']}`} id='why-us-anim' data-jelly>
              <span>
                At Enigma Digital, we believe that a winning strategy isn't a rare gem—it's a well-crafted masterpiece that we create for our clients, time and again. Our strategic planning, rooted in deep insights, forms the bedrock of our operations. We blend strategic thinking, innovative ideas, broad marketing experience, and proven best practices to transform insights into actionable plans that deliver measurable results.
              </span>
            </h4>
            <p className={`${styles['m-50']}`}
                id='why-us-anim'
                data-jelly>
              <span>
                We begin our process by consulting with you because we believe that nobody knows your brand better than you do. We dive deep into understanding your brand, your product, your market, and your competition. This understanding forms the basis of our strategic thinking, idea generation, and campaign plans. Our meticulous planning, extensive research, and detailed understanding of your product/services and business goals enable us to create the perfect strategy. This strategy builds meaningful online experiences across multiple channels, helping your customers find what they're looking for quickly and efficiently, leading to your business's success.
              </span>
            </p>
            <span className={`${styles['btn-10']}`} 
                  data-cursor-size="100px"
                  data-cursor-exclusion>
              kickstart your growth
            </span>
          </div>
        </section>

{/* Aerosol */}
        <section className="topHeightAero" 
                 data-cursor-size='0'
                 data-cursor-text=""
                 >
          <CursorAero />
        </section>

{/* Section 3 Portfolio */}
    <section className={`${styles['service-portfolio']} ${styles['main-container']}`} 
        id='section-3'>
      <div id='servicePortfolioAnim' 
       className={styles['service-anim-portfolio']}>
        <div className={styles['service-portfolio-main']} id='service-port-main'>
          <div className={styles['service-portfolio-title']}>
            <h2 data-cursor-size="300px"
                data-cursor-exclusion>
                Strategy 
                <br /> 
                Portfolio
            </h2>
          </div>
          <div className={styles['service-portfolio-cards']}>
            <div className={styles['service-portfolio-cards-item']}
                 data-cursor-size="100px"
                 data-cursor-color="#0F1014"
                 data-cursor-text="View More">
              <div className={styles['service-card-top']}>
                <div>
                    <img src='/assets/service-detail/portfolio-1.webp'
                        loading='lazy'
                        alt='portfolio image'
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </img>
                </div>
                <a className={styles['btn-10']} href='#'>
                  View CaseStudy
                </a>
              </div>
              <div className={styles['service-card-bottom']}>
                <h3>
                  Kedarkala
                </h3>
                <p>
                  Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.
                </p>
              </div>
            </div>

            <div className={styles['service-portfolio-cards-item']}
                 data-cursor-size="100px"
                 data-cursor-color="#E30B25"
                 data-cursor-text="View More">
              <div className={styles['service-card-top']}>
                <div>
                    <img src='/assets/service-detail/portfolio-2.webp'
                         loading='lazy'
                        alt='portfolio image'
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </img>
                </div>
                <a className={styles['btn-10']} href='#'>
                  View CaseStudy
                </a>
              </div>
              <div className={styles['service-card-bottom']}>
                <h3>
                  Wragby
                </h3>
                <p>
                  Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.
                </p>
              </div>
            </div>

            <div className={styles['service-portfolio-cards-item']}
                 data-cursor-size="100px"
                 data-cursor-color="#FF8395"
                 data-cursor-text="View More">
              <div className={styles['service-card-top']}>
                <div>
                    <img src='/assets/service-detail/portfolio-3.webp'
                        alt='portfolio image'
                        loading='lazy'
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </img>
                </div>
                <a className={styles['btn-10']} href='#'>
                  View CaseStudy
                </a>
              </div>
              <div className={styles['service-card-bottom']}>
                <h3>
                  Dharan
                </h3>
                <p>
                  Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.
                </p>
              </div>
            </div>

            <div className={styles['service-portfolio-cards-item']}
                 data-cursor-size="100px"
                 data-cursor-color="#0D0A29"
                 data-cursor-text="View More">
              <div className={styles['service-card-top']}>
                <div>
                    <img src='/assets/service-detail/portfolio-4.webp'
                        alt='portfolio image'
                        loading='lazy'
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </img>
                </div>
                <a className={styles['btn-10']} href='#'>
                  View CaseStudy
                </a>
              </div>
              <div className={styles['service-card-bottom']}>
                <h3>
                  QuickX
                </h3>
                <p>
                  Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* Section 4 Approach and Process */}
    <section className={`${styles['main-container']} ${styles['mb-10']}`} id='section-4'>
      <div className={styles['service-detail-process']}>
        <div className={styles['service-detail-process-left']}>
          <h2 className='why-us-anim'>
            Approach and
            <br />
            <span className='stroke'>Process</span>
          </h2>
        </div>
        <div className={styles['service-detail-process-right']}>
          <h4 className='why-us-anim' data-jelly>
            <span>
              At Enigma Digital, we believe that the journey to digital success is a strategic one, meticulously charted and navigated with precision. Our approach is not just about creating strategies; it's about crafting success stories. We understand that each brand is unique, each with its own story to tell and milestones to achieve. We believe that a strategy is not a static blueprint but a dynamic roadmap, one that evolves with changing market dynamics, customer behaviors, and brand goals.
            </span>
          </h4>
          <p className={`${styles['m-50']} why-us-anim`} data-jelly>
            <span>
              We begin by immersing ourselves in your brand, absorbing its ethos, understanding its vision, and aligning ourselves with its goals. We delve into the intricate details, the nuances that make your brand unique, and the aspirations that drive it forward. This deep understanding enables us to create strategies that are not just aligned with your brand but are an extension of it.
            </span>
          </p>
        </div>
      </div>
    </section>

{/* Section 5 Img And Cards */}
    <section className={`${styles['main-container']} ${styles['service-approach']}`} id='section-5'>
      <div className={styles['service-approach-main']}>
        <div className={styles['service-approach-left']} id='approachImgCont'>
          <div className={`${styles['service-approach-img-container']} service-image-container`}>
            <img src='/assets/service-detail/approach-1.webp' 
                 alt='approach image'
                 loading='lazy'
                 onMouseEnter={(e) => handleHover(e)}
                 onMouseOut={(e) => handleHoverExit(e)}>
            </img>
          </div>
          <div className={`${styles['service-approach-img-container']} service-image-container`}>
            <img src='/assets/service-detail/approach-2.webp'
                 alt='approach image'
                 loading='lazy'
                 onMouseEnter={(e) => handleHover(e)}
                 onMouseOut={(e) => handleHoverExit(e)}>
            </img>
          </div>
          <div className={`${styles['service-approach-img-container']} service-image-container`}>
            <img src='/assets/service-detail/approach-3.webp'
                 alt='approach image'
                 loading='lazy'
                 onMouseEnter={(e) => handleHover(e)}
                 onMouseOut={(e) => handleHoverExit(e)}>
            </img>
          </div>
        </div>


        <div className={styles['service-approach-right']}>
          <div className={`${styles['service-approach-text-container']} text-card`} 
               data-cursor-size='120px'
               data-cursor-exclusion>
            <div className={styles['service-approach-text-box']}>
              <h3 className='color-primary'>Understanding Your Brand</h3>
              <p>
                We believe that understanding your brand is the first step toward creating a successful strategy. We spend time getting to know your brand, your values, and your vision. This understanding allows us to create strategies that align with your brand and help you achieve your goals.
              </p>
            </div>
            <div className={styles['service-approach-text-box']}>
              <h3 className='color-primary'>Identifying Your Target Audience</h3>
              <p>Knowing who your customers are is crucial for creating effective strategies. We conduct thorough research to identify your target audience, understand their needs, and find out what motivates them. This knowledge allows us to create strategies that resonate with your audience and drive engagement.</p>
            </div>
          </div>
          <div className={`${styles['service-approach-text-container']} text-card`}
               data-cursor-size='120px'
               data-cursor-exclusion>
            <div className={styles['service-approach-text-box']}>
              <h3 className='color-primary'>Analyzing the Competition</h3>
              <p> Understanding your competition is key to staying ahead. We conduct a detailed analysis of your competitors to understand their strategies, strengths, and weaknesses. This analysis helps us create strategies that give you a competitive edge.</p>
            </div>
            <div className={styles['service-approach-text-box']}>
              <h3 className='color-primary'>Creating a Unique Value Proposition</h3>
              <p>Your unique value proposition sets you apart from your competitors. We work with you to identify and articulate your unique value proposition. This proposition forms the core of our strategy and helps us create campaigns that highlight your unique strengths.
              </p>
            </div>
          </div>
          <div className={`${styles['service-approach-text-container']} text-card`}
               data-cursor-size='120px'
               data-cursor-exclusion>
            <div className={styles['service-approach-text-box']}>
              <h3 className='color-primary'>Setting Measurable Goals</h3>
              <p>We believe that every strategy should have clear, measurable goals. We work with you to set realistic goals for your campaigns. These goals guide our strategy and help us measure the success of our campaigns.</p>
            </div>
            <div className={styles['service-approach-text-box']}>
              <h3 className='color-primary'>Iterative Improvement</h3>
              <p>Digital marketing is a dynamic field. We believe in the power of iterative improvement. We continually monitor the performance of our campaigns, gather data, and use this data to refine our strategies. This approach ensures that our strategies are always optimized for maximum performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* Section 6 */}
    <section className={`${styles['main-container']}`} id='section-6'>
      <div className={styles['service-offer']}>
        <div className={styles['service-offer-top']}>
          <h2 className='our-service-anim'>
            Our Services<span className='stroke'> Include</span>
          </h2>
        </div>
        <div className={styles['service-offer-bottom']} id='serviceOfferBottom'>
          <div className={styles['our-service-text']} data-cursor-size='120px' data-cursor-exclusion>
            <h5>Digital Advisory and Consulting</h5>
          </div>
          <div className={styles['our-service-text']} data-cursor-size='120px' data-cursor-exclusion>
            <h5>User Experience Development</h5>
          </div>
          <div className={styles['our-service-img']}>
            <img src='/assets/service-detail/our-service-1.webp' 
                 alt='our service image'
                 loading='lazy'
                 onMouseEnter={(e) => handleHover(e)}
                 onMouseOut={(e) => handleHoverExit(e)}>
            </img>
          </div>
          <div className={styles['our-service-text']} data-cursor-size='120px' data-cursor-exclusion>
            <h5>Brand & content strategy</h5>
          </div>
          <div className={styles['our-service-img']}>
            <img src='/assets/service-detail/our-service-2.webp' 
                 alt='our service image'
                 loading='lazy'
                 onMouseEnter={(e) => handleHover(e)}
                 onMouseOut={(e) => handleHoverExit(e)}>
            </img>
          </div>
          <div className={styles['our-service-text']} data-cursor-size='120px' data-cursor-exclusion>
            <h5>Personal design & customer segmentationg</h5>
          </div>
          <div className={styles['our-service-text']} data-cursor-size='120px' data-cursor-exclusion>
            <h5>Digital Capabilities Development</h5>
          </div>
          <div className={styles['our-service-text']} data-cursor-size='120px' data-cursor-exclusion>
            <h5>Digital Marketing & Website Performance Audit</h5>
          </div>
        </div>
      </div>
    </section>

        {/* ======================= Next Page Box ====================== */}
        <section className={styles['m-10-15']}>
            <StrategyNext />
        </section>
        {/* ======================= Next Page Box END ====================== */}

        {/* ======================== Footer ====================== */}
        <div className="footer-desktop">
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

