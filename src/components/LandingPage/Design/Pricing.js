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
                    <div className="w-full bg-[#F3F3F3] h-[50%] absolute bottom-0 left-0">
                    </div>
                    <div className={styles.priceCards}>
                        <div className={`${styles.priceCard} text-white/75 hover:text-white hover:bg-gray-800 w-1/3`}>
                            <div className="mb-10">
                                <h5>Monthly</h5>
                                <p>Add as many design requests to your board as you'd like.</p>
                            </div>
                            <div className="mb-10">
                                <h5 className={styles.priceh5}>$2,999/m</h5>
                                <p>Pause or cancel anytime</p>
                            </div>
                            <div className="mb-16">
                                <h5 className={styles.priceh5}>What's included:</h5>
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
                                <h5>Quaterly</h5>
                                <p>Add as many design requests to your board as you'd like.</p>
                            </div>
                            <div className="mb-10">
                                <h5 className={styles.priceh5}>$2,999/m</h5>
                                <p>Pause or cancel anytime</p>
                            </div>
                            <div className="mb-16">
                                <h5 className={styles.priceh5}>What's included:</h5>
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
                                <h5>Yearly</h5>
                                <p>Add as many design requests to your board as you'd like.</p>
                            </div>
                            <div className="mb-10">
                                <h5 className={styles.priceh5}>$2,999/m</h5>
                                <p>Pause or cancel anytime</p>
                            </div>
                            <div className="mb-16">
                                <h5 className={styles.priceh5}>What's included:</h5>
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