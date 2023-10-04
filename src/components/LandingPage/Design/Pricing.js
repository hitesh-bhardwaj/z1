import React, { useEffect } from "react";
import styles from "@/styles/designLanding.module.css";
import Image from "next/image";
import gsap from "gsap";

export default function Pricing() {

    return(
        <>
            <div className="w-full mb-20">
                <div className="desk-sm:my-24 mt-24 mb-14 desk-sm:w-[85%] w-full px-[5%] mx-auto">
                    <h2 className={styles.heading1}>
                        Transparent<span className={styles.reinventTextGradient}> Pricing
                        </span> 
                    </h2>
                    <p className={styles.para1}>
                        Choose a plan that’s right for you
                    </p>
                </div>
                <div className={`${styles.pricingTable} w-full relative pb-[10vw]`}>
                    <div className="w-full bg-[#F3F3F3] h-[50%] absolute bottom-0 left-0">
                    </div>
                    <div className="desk-sm:w-[85%] w-full px-[5%] desk-sm:px-[0] relative m-auto z-index-1 desk-sm:flex flex-col flex justify-center items-center gap-8">
                        <div className="desk-sm:w-1/3 w-full bg-gray-900 px-12 py-20 text-white/75 rounded-2xl shadow-xl relative overflow-hidden hover:text-white transition-all hover:shadow-3xl hover:bg-gray-800 duration-300">
                            <div className="mb-10">
                                <h5 className="text-3xl mb-2 font-medium">Monthly</h5>
                                <p className="text-lg pl-2 font-body-2 w-5/6">Add as many design requests to your board as you'd like.</p>
                            </div>
                            <div className="mb-10">
                                <h5 className="font-body-2 text-3xl mb-2">$2,999/m</h5>
                                <p className="font-body-2 text-lg pl-2">Pause or cancel anytime</p>
                            </div>
                            <div className="mb-16">
                                <h5 className="font-body-2 text-xl mb-2">What's included:</h5>
                                <ul className="pl-5 list-disc font-body-2">
                                    <li className="text-lg my-3">Unlimited request</li>
                                    <li className="text-lg my-3">Unlimited brands</li>
                                    <li className="text-lg my-3">Unlimited users</li>
                                    <li className="text-lg my-3">Unlimited stock photos via Shutterstock</li>
                                    <li className="text-lg my-3">Pause or cancel anytime</li>
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

                        <div className="desk-sm:w-1/3 w-full bg-gray-900 px-12 py-20 text-white/75 rounded-2xl shadow-xl relative overflow-hidden hover:text-white transition-all hover:shadow-3xl hover:bg-gray-800 duration-300">
                            <div className="mb-10">
                                <h5 className="text-3xl mb-2 font-medium">Quaterly</h5>
                                <p className="text-lg pl-2 font-body-2 w-5/6">Add as many design requests to your board as you'd like.</p>
                            </div>
                            <div className="mb-10">
                                <h5 className="font-body-2 text-3xl mb-2">$2,999/m</h5>
                                <p className="font-body-2 text-lg pl-2">Pause or cancel anytime</p>
                            </div>
                            <div className="mb-16">
                                <h5 className="font-body-2 text-xl mb-2">What's included:</h5>
                                <ul className="pl-5 list-disc font-body-2">
                                    <li className="text-lg my-3">Unlimited request</li>
                                    <li className="text-lg my-3">Unlimited brands</li>
                                    <li className="text-lg my-3">Unlimited users</li>
                                    <li className="text-lg my-3">Unlimited stock photos via Shutterstock</li>
                                    <li className="text-lg my-3">Pause or cancel anytime</li>
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

                        <div className="desk-sm:w-1/3 bg-[#2545FF] w-full px-12 py-20 text-white/75 rounded-2xl shadow-xl relative overflow-hidden hover:text-white transition-all hover:shadow-3xl hover:bg-blue-600 duration-300">
                            <div className="text-white font-body-2 bg-white/20 rounded-md tracking-wide absolute top-0 right-0 p-2 text-lg">Recommended</div>
                            <div className="mb-10">
                                <h5 className="text-3xl mb-2 font-medium text-white">Yearly</h5>
                                <p className="text-lg pl-2 font-body-2 w-5/6">Add as many design requests to your board as you'd like.</p>
                            </div>
                            <div className="mb-10">
                                <h5 className="font-body-2 text-3xl mb-2">$2,999/m</h5>
                                <p className="font-body-2 text-lg pl-2">Pause or cancel anytime</p>
                            </div>
                            <div className="mb-16">
                                <h5 className="font-body-2 text-xl mb-2">What's included:</h5>
                                <ul className="pl-5 list-disc font-body-2">
                                    <li className="text-lg my-3">Unlimited request</li>
                                    <li className="text-lg my-3">Unlimited brands</li>
                                    <li className="text-lg my-3">Unlimited users</li>
                                    <li className="text-lg my-3">Unlimited stock photos via Shutterstock</li>
                                    <li className="text-lg my-3">Pause or cancel anytime</li>
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