import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import SmoothScroll from "@/components/utils/SmoothScroll";
import SplitType from 'split-type';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";

import styles from '@/styles/serviceDetail.module.css';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import CursorAero from '@/components/ServiceDetail/Technology/TechnologyAero';
import NextBox from '@/components/ServiceDetail/Technology/TechnologyNext';
import OfferCards from '@/components/ServiceDetail/Technology/OfferCards';
import Modal from '../components/PopupForm/formModal';
import { NextSeo } from 'next-seo';
import ServiceBlogs from '@/components/ServiceDetail/ServiceBlogs';
import PageLoader from "@/components/pageLoader";
import Faq from '../components/ServiceDetail/Faq';

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

export default function technology() {

  const blogFaqData = [
    {
        question: "What is a SAAS platform?",
        answer: "SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality."
    },
    {
        question: "How does billing work?",
        answer: "We offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method."
    },
    {
        question: "Can I get a refund for my subscription?",
        answer: "We offers a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis."
    },
    {
        question: "How do I cancel my subscription?",
        answer: "To cancel your We subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing."
    },
    {
        question: "Can I try this platform for free?",
        answer: "We offers a free trial of its  platform for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged."
    },
    {
        question: "How do I access documentation?",
        answer: "Documentation is available on the company's website and can be accessed by logging in to your account. The documentation provides detailed information on how to use the , as well as code examples and other resources."
    },
]

if (globalThis.innerWidth>1200) {
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
      duration: 1,
      rotationX: 0,
      opacity: 1,
      translateY: 0,
      stagger: 0.2,
    }
  );
  return () => tl.kill();
}, []);
} else {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#service-anim",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 100,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3.2,
        duration: 1,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }
)};

  
  if (globalThis.innerWidth > 1200) {

// Portfolio Section Animation
  useEffect(() => {

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#servicePortfolioAnim',
          scrub: true,
          end: "top top",
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
        end: "2500 top",
        scrub: 1,
        pin: true,
        markers: false,
      },
    });
    
  tl.to("#service-port-main", {
    transform: "translateX(-66.8%)",
    ease: "power1.out",
  });
});
return () => ctx.revert();
});


// Approach Section Animation
useEffect(() => {
  let approachImages = gsap.utils.toArray(".service-image-container");
  let approachItems = gsap.utils.toArray(".text-card");

  let ctx = gsap.context(() => {
      gsap.to("#approachImgCont", {
          scrollTrigger: {
            trigger: "#section-5",
            pin: "#approachImgCont",
            pinSpacing: true,
            start: "top -10%",
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
      const elementsToAnimate = document.querySelectorAll('#fadeIn');
      let ctx = gsap.context(() => {
      elementsToAnimate.forEach(target => {
        gsap.from(target, {
          scrollTrigger: {
            trigger: target,
            start: 'top 90%',
            end: 'bottom top',
            markers: false,
          },
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: 'Power1.out',
        });
      });
    });
    return () => ctx.revert();
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
          duration: .7,
          opacity: 0,
          yPercent: 100,
          ease: "Power3.out",
          stagger: 0.01,
        });
      });
    }, []);

  return (
    <>
      <NextSeo
        title="Award-Winning Web Development and Technology Services | Enigma"
        description="Enigma offers front-end development, custom web and app development, DevOps, cloud engineering, and other technology services to build seamless digital experiences."
        canonical="https://weareenigma.com/technology-services"
        openGraph={{
          url: "https://weareenigma.com/technology-services",
          title:
            "Award-Winning Web Development and Technology Services | Enigma",
          description:
            "Enigma offers front-end development, custom web and app development, DevOps, cloud engineering, and other technology services to build seamless digital experiences.",
            images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/service-technology.png",
                    width: 1200,
                    height: 630,
                    alt: "Technology Services Feature Image",
                    type: "image/png",
                  },
                    { url: "https://weareenigma.com/assets/featured-images/service-technology.png" },
                  ],
                siteName: "Enigma Digital",
        }}
      />

    <SmoothScroll />

    <Cursor isGelly={true} />

    <PageLoader text="Technology Services" />

    <Header />

    {/* PopUp Modal Button */}
    <Modal />
    {/* End */}

    <main className={styles['main']}>
      <div className={styles['container']}>

{/* Hero Section*/}
        <section className={`${styles['service-detail-hero']} ${styles['main-container']}`} data-cursor-size="10px" data-cursor-text="">
          <div className={`${styles['service-detail-hero-content']} ${styles['tech']}`}>
            <div className={`${styles['service-detail-hero-top']} ${styles['tech']}`}>
              <h1 className='color-primary' id='service-anim'
              data-cursor-magnetic data-cursor-background-image="/assets/gif/4.gif" data-cursor-size="300px" data-cursor-color="#000">
                Technology
              </h1>
              <p className={`${styles['hero-top-para']} ${styles['tech']}`} id='service-anim'>
                Our comprehensive range of services leverages our full expertise to boost your digital presence to celestial heights.
              </p>
            </div>
            <div>
              <h1 className={`${styles['hero-bottom']}`} id='service-anim' data-cursor-magnetic data-cursor-background-image="/assets/gif/5.gif" data-cursor-size="300px" data-cursor-color="#000">
                <span className='font-ageo'>&</span> Services
              </h1>
            </div>
          </div>
        </section>

{/* Section 2 */}
        <section className={`${styles['main-container']}`} id='section-2'>
        <div className={styles.contentContainer}>
          <div className={styles['service-detail-content']}>
            <h2 className={`${styles['m-50']} fadeIn`} data-jelly id='fadeIn'>
              <span>
                At Enigma Digital, we believe that a winning strategy isn't a rare gem—it's a well-crafted masterpiece that we create for our clients, time and again. Our strategic planning, rooted in deep insights, forms the bedrock of our operations. We blend strategic thinking, innovative ideas, broad marketing experience, and proven best practices to transform insights into actionable plans that deliver measurable results.
              </span>
            </h2>
            <p className={`${styles['m-50']} fadeIn`}
                data-jelly id='fadeIn'>
              <span>
                We begin our process by consulting with you because we believe that nobody knows your brand better than you do. We dive deep into understanding your brand, your product, your market, and your competition. This understanding forms the basis of our strategic thinking, idea generation, and campaign plans. Our meticulous planning, extensive research, and detailed understanding of your product/services and business goals enable us to create the perfect strategy. This strategy builds meaningful online experiences across multiple channels, helping your customers find what they're looking for quickly and efficiently, leading to your business's success.
              </span>
            </p>
              <a 
                href='/get-in-touch'
                className={`${styles['btn-10']}`} 
                data-cursor-size="100px"
                data-cursor-exclusion>
                <span>
                  kickstart your growth
                </span>
              </a>
          </div>
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
                data-cursor-exclusion id='fadeIn'>
                Strategy 
                <br /> 
                Portfolio
            </h2>
          </div>
          
          <div className={styles['service-portfolio-cards']}>
            <div className={styles['service-portfolio-cards-item']}
                 data-cursor-size="100px"
                 data-cursor-color="#0F1014"
                 data-cursor-text="View More" id='fadeIn'>
              <div className={styles['service-card-top']}>
                <div>
                    <Image src='/assets/service-detail/portfolio/kedarkala.webp'
                        loading='lazy'
                        alt='portfolio image'
                        width={600}
                        height={600}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                <a className={styles['btn-10']} href='#'>
                  View CaseStudy
                </a>
              </div>
              <div className={styles['service-card-bottom']}>
                <h3 className='color-primary'>
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
                 data-cursor-text="View More" id='fadeIn'>
              <div className={styles['service-card-top']}>
                <div>
                    <Image src='/assets/service-detail/portfolio/wragby.webp'
                         loading='lazy'
                         width={600}
                        height={600}
                        alt='portfolio image'
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                <a className={styles['btn-10']} href='#'>
                  View CaseStudy
                </a>
              </div>
              <div className={styles['service-card-bottom']}>
                <h3 className='color-primary'>
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
                 data-cursor-text="View More" id='fadeIn'>
              <div className={styles['service-card-top']}>
                <div>
                    <Image src='/assets/service-detail/portfolio/dharan.webp'
                        alt='portfolio image'
                        width={600}
                        height={600}
                        loading='lazy'
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                <a className={styles['btn-10']} href='#'>
                  View CaseStudy
                </a>
              </div>
              <div className={styles['service-card-bottom']}>
                <h3 className='color-primary'>
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
                 data-cursor-text="View More" id='fadeIn'>
              <div className={styles['service-card-top']}>
                <div>
                    <Image src='/assets/service-detail/portfolio/quickx.webp'
                        alt='portfolio image'
                        width={600}
                        height={600}
                        loading='lazy'
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                <a className={styles['btn-10']} href='#'>
                  View CaseStudy
                </a>
              </div>
              <div className={styles['service-card-bottom']}>
                <h3 className='color-primary'>
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
          <h3 className={`${styles['sd__approach']} why-us-anim`}>
            Our
            <br />
            <span className='stroke'>Approach</span>
          </h3>
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
                <h3 className={`${styles['sd__approach']} why-us-anim`}>
                  Our
                  <span className='stroke'> Process</span>
                </h3>
            <div className={styles['service-approach-main']}>
                <div className={styles['service-approach-left']} id='approachImgCont'>
                <div className={`${styles['service-approach-img-container']} service-image-container`}>
                    <Image src='/assets/service-detail/technology/technology1.webp' 
                        alt='approach image'
                        loading='lazy'
                        width={1000}
                        height={1000}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                <div className={`${styles['service-approach-img-container']} service-image-container`}>
                    <Image src='/assets/service-detail/technology/technology2.webp'
                        alt='approach image'
                        loading='lazy'
                        width={1000}
                        height={1000}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                <div className={`${styles['service-approach-img-container']} service-image-container`}>
                    <Image src='/assets/service-detail/technology/technology3.webp'
                        alt='approach image'
                        loading='lazy'
                        width={1000}
                        height={1000}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                </div>


                <div className={styles['service-approach-right']}>
                <div className={`${styles['service-approach-text-container']} text-card`} 
                    data-cursor-size='100px'
                    data-cursor-exclusion>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>Understanding Your Brand</h4>
                    <p>
                        We believe that understanding your brand is the first step toward creating a successful strategy. We spend time getting to know your brand, your values, and your vision. This understanding allows us to create strategies that align with your brand and help you achieve your goals.
                    </p>
                    </div>

                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>Identifying Your Target Audience</h4>
                    <p>Knowing who your customers are is crucial for creating effective strategies. We conduct thorough research to identify your target audience, understand their needs, and find out what motivates them. This knowledge allows us to create strategies that resonate with your audience and drive engagement.</p>
                    </div>
                </div>
                <div className={`${styles['service-approach-text-container']} text-card`}
                    data-cursor-size='100px'
                    data-cursor-exclusion>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>Analyzing the Competition</h4>
                    <p> Understanding your competition is key to staying ahead. We conduct a detailed analysis of your competitors to understand their strategies, strengths, and weaknesses. This analysis helps us create strategies that give you a competitive edge.</p>
                    </div>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>Creating a Unique Value Proposition</h4>
                    <p>Your unique value proposition sets you apart from your competitors. We work with you to identify and articulate your unique value proposition. This proposition forms the core of our strategy and helps us create campaigns that highlight your unique strengths.
                    </p>
                    </div>
                </div>
                <div className={`${styles['service-approach-text-container']} text-card`}
                    data-cursor-size='100px'
                    data-cursor-exclusion>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>Setting Measurable Goals</h4>
                    <p>We believe that every strategy should have clear, measurable goals. We work with you to set realistic goals for your campaigns. These goals guide our strategy and help us measure the success of our campaigns.</p>
                    </div>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>Iterative Improvement</h4>
                    <p>Digital marketing is a dynamic field. We believe in the power of iterative improvement. We continually monitor the performance of our campaigns, gather data, and use this data to refine our strategies. This approach ensures that our strategies are always optimized for maximum performance.</p>
                    </div>
                </div>
                </div>
                </div>
            </section>

{/* Section 6 */}
        <section className={`${styles['main-container']}`}>
          <OfferCards />
        </section>

        {/* faq */}
        <Faq faqData={blogFaqData} />

        {/* ================================Related Blogs==================== */}
        <ServiceBlogs category={"design"} />
        {/* ================================Related Blogs==================== */}

        {/* ======================= Next Page Box ====================== */}
        <section className={styles['m-10-15']}>
            <NextBox />
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

