import React, { useEffect } from "react";
import styles from "@/styles/designLanding.module.css";
import Image from "next/image";
import gsap from "gsap";

export default function Pricing() {

    return(
        <>
            <div className={styles.pricing}>
                <div className={styles.pricingTop}>
                    <h2 className={styles.heading1}>
                        Transparent<span className={styles.reinventTextGradient}> Pricing
                        </span> 
                    </h2>
                    <p className={styles.para1}>
                        Choose a plan that’s right for you
                    </p>
                </div>
                <div className={styles.pricingTable}>
                    <div className={`w-full bg-[#F3F3F3] h-[50%] absolute bottom-0 left-0 ${styles.pricingBg} `}>
                    </div>
                    <div className={styles.darkPricingBg}>
                        <Image
                            height={1000}
                            width={1800} 
                            loading="lazy" 
                            src="/assets/landing-page/design/pricingBg.webp" 
                            alt="Pricing Bg" />
                    </div>
                    <div className={styles.priceCards}>
                        <div className={`${styles.priceCard} text-white/75 hover:text-white hover:bg-gray-800 w-1/3`}>
                            <div className="mb-10">
                                <span className={styles.h5}>Monthly</span>
                                <p>Add as many design requests to your board as you'd like.</p>
                            </div>
                            <div className="mb-10">
                                <span className={styles.priceh5}>$2,999/m</span>
                                <p>Pause or cancel anytime</p>
                            </div>
                            <div className="mb-16">
                                <span className={styles.priceh5}>What's included:</span>
                                <ul>
                                    <li>Unlimited request</li>
                                    <li>Unlimited brands</li>
                                    <li>Unlimited users</li>
                                    <li>Unlimited stock photos via Shutterstock</li>
                                    <li>Pause or cancel anytime</li>
                                </ul>
                            </div>
                            <div className="w-full text-center">
                                <button className={styles.btnCta}>
                                    <span className={styles.btnCtaRipple}>
                                        <span></span>
                                    </span>
                                    <span className={styles.btnCtaTitle}>
                                        <span data-text='Book a call'>Book a call</span>
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className={`${styles.priceCard} text-white/75 hover:text-white hover:bg-gray-800 w-1/3`}>
                            <div className="mb-10">
                                <span className={styles.h5}>Quaterly</span>
                                <p>Add as many design requests to your board as you'd like.</p>
                            </div>
                            <div className="mb-10">
                                <span className={styles.priceh5}>$2,999/m</span>
                                <p>Pause or cancel anytime</p>
                            </div>
                            <div className="mb-16">
                                <span className={styles.priceh5}>What's included:</span>
                                <ul>
                                    <li>Unlimited request</li>
                                    <li>Unlimited brands</li>
                                    <li>Unlimited users</li>
                                    <li>Unlimited stock photos via Shutterstock</li>
                                    <li>Pause or cancel anytime</li>
                                </ul>
                            </div>
                            <div className="w-full text-center">
                                <button className={styles.btnCta}>
                                    <span className={styles.btnCtaRipple}>
                                        <span></span>
                                    </span>
                                    <span className={styles.btnCtaTitle}>
                                        <span data-text='Book a call'>Book a call</span>
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className={`${styles.priceCard} text-white/80 hover:text-white hover:bg-blue-800 w-1/3`}>
                            <div className={styles.priceRecommend}>
                                Recommended
                            </div>
                            <div className="mb-10">
                                <span className={styles.h5}>Yearly</span>
                                <p>Add as many design requests to your board as you'd like.</p>
                            </div>
                            <div className="mb-10">
                                <span className={styles.priceh5}>$2,999/m</span>
                                <p>Pause or cancel anytime</p>
                            </div>
                            <div className="mb-16">
                                <span className={styles.priceh5}>What's included:</span>
                                <ul>
                                    <li>Unlimited request</li>
                                    <li>Unlimited brands</li>
                                    <li>Unlimited users</li>
                                    <li>Unlimited stock photos via Shutterstock</li>
                                    <li>Pause or cancel anytime</li>
                                </ul>
                            </div>
                            <div className="w-full text-center">
                                <button className={styles.btnCta}>
                                    <span className={styles.btnCtaRipple}>
                                        <span></span>
                                    </span>
                                    <span className={styles.btnCtaTitle}>
                                        <span data-text='Book a call'>Book a call</span>
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}