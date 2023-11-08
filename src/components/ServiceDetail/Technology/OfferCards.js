import { gsap } from "gsap";
import Image from "next/image";
import React from "react";
import styles from '@/styles/serviceDetail.module.css';

// Hover on the link
const handleHover2 = (e) => {
    gsap.to(e.target, {
      duration: 0.5,
      scale: 1.05,
      ease: "power1.inOut",
    });
  };
  
  // Hover off the link
  const handleHoverExit2 = (e) => {
    gsap.to(e.target, {
      duration: 0.5,
      scale: 1,
      ease: "power1.inOut",
    });
  };  

export default function OfferCards() {

    return (
        <>
            <div>
                <div className="service-offer-container">
                    <div className='service-offer'>
                        <div className='service-offer-top'>
                             <h2 className={`${styles['sd__approach']} our-service-anim`} id="fadeUp">
                                Our Services<span className='stroke'> Include</span>
                            </h2>
                        </div>
                    </div>
                    <div className="service-offer-section width-full flex flex-wrap">
                        <div className="service-offer-card-wrapper w-1/3 p-3 image-card-wrapper">
                            <div className="service-offer-card">
                               <div className="service-offer-card-blur"></div>
                                <div className="service-offer-card-bg shapes-10">
                                    <span className="card-shape-1 card-bg-1"></span>
                                    <span className="card-shape-1 card-bg-2"></span>
                                    <span className="card-shape-1 card-bg-3"></span>
                                </div>
                                <h3 className="text-2xl font-medium z-10">Digital Advisory and Consulting</h3>
                            </div>
                        </div>
                        <div className="service-offer-card-wrapper w-1/3 p-3">
                            <div className="service-offer-card">
                                <div className="service-offer-card-blur"></div>
                                <div className="service-offer-card-bg">
                                    <span className="card-shape-2 card-bg-1"></span>
                                    <span className="card-shape-2 card-bg-2"></span>
                                    <span className="card-shape-2 card-bg-3"></span>
                                </div>
                                <h3 className="text-2xl font-medium z-10">User Experience Development</h3>
                            </div>
                        </div>
                        <div className="service-offer-card-wrapper w-1/3 p-3">
                        <div className="service-offer-card image-card">
                            <Image src='/assets/service-detail/technology/technology4.webp' 
                                    alt='our service image'
                                    loading='lazy'
                                    fill={true}
                                    sizes="(max-width: 1200px) 100vw, 50vw"
                                    onMouseEnter={(e) => handleHover2(e)}
                                    onMouseOut={(e) => handleHoverExit2(e)}>
                                </Image>
                            </div>
                        </div>
                        <div className="service-offer-card-wrapper w-1/3 p-3">
                            <div className="service-offer-card">
                                <div className="service-offer-card-blur"></div>
                                <div className="service-offer-card-bg">
                                    <span className="card-shape-3 card-bg-1"></span>
                                    <span className="card-shape-3 card-bg-2"></span>
                                    <span className="card-shape-3 card-bg-3"></span>
                                </div>
                                <h3 className="text-2xl font-medium z-10">Brand & content strategy</h3>
                            </div>
                        </div>
                        <div className="service-offer-card-wrapper w-1/3 p-3">
                            <div className="service-offer-card image-card">
                            <Image src='/assets/service-detail/technology/technology5.webp' 
                                    alt='our service image'
                                    loading='lazy'
                                    fill={true}
                                    sizes="(max-width: 1200px) 50vw,(max-width: 776px) 100vw, 33vw"
                                    onMouseEnter={(e) => handleHover2(e)}
                                    onMouseOut={(e) => handleHoverExit2(e)}>
                                </Image>
                            </div>
                        </div>
                        <div className="service-offer-card-wrapper w-1/3 p-3">
                            <div className="service-offer-card">
                                <div className="service-offer-card-blur"></div>
                                <div className="service-offer-card-bg">
                                    <span className="card-shape-4 card-bg-1"></span>
                                    <span className="card-shape-4 card-bg-2"></span>
                                    <span className="card-shape-4 card-bg-3"></span>
                                </div>
                                <h3 className="text-2xl font-medium z-10">Personal design & customer segmentationg</h3>
                            </div>
                        </div>
                        <div className="service-offer-card-wrapper w-1/3 p-3">
                            <div className="service-offer-card">
                                <div className="service-offer-card-blur"></div>
                                <div className="service-offer-card-bg">
                                    <span className="card-shape-5 card-bg-1"></span>
                                    <span className="card-shape-5 card-bg-2"></span>
                                    <span className="card-shape-5 card-bg-3"></span>
                                </div>
                                <h3 className="text-2xl font-medium z-10">Digital Capabilities Development</h3>
                            </div>
                        </div>
                        <div className="service-offer-card-wrapper w-1/3 p-3">
                            <div className="service-offer-card">
                                <div className="service-offer-card-blur"></div>
                                <div className="service-offer-card-bg">
                                    <span className="card-shape-6 card-bg-1"></span>
                                    <span className="card-shape-6 card-bg-2"></span>
                                    <span className="card-shape-6 card-bg-3"></span>
                                </div>
                                <h3 className="text-2xl font-medium z-10">Digital Marketing & Website Performance Audit</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}