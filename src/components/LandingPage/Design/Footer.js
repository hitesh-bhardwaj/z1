import React, { useEffect } from "react";
import styles from "@/styles/designLanding.module.css";

export default function Footer() {

    return(
        <>
            <div className={styles.footer}>
                <div className={styles.footerTop}>
                    <h2 className={styles.heading1}>
                        Send your request today, <br />
                        get
                        <span className={styles.reinventTextGradient}> your designs tomorrow!
                        </span> 
                    </h2>   
                    <div className={styles.footerCta}>
                        <button className={styles.btnCta}>
                            <span className={styles.btnCtaRipple}>
                                <span></span>
                            </span>
                            <span className={styles.btnCtaTitle}>
                                <span data-text='Get Started'>Get Started</span>
                            </span>
                        </button>
                        <button className={styles.btnCta}>
                            <span className={styles.btnCtaRipple}>
                                <span></span>
                            </span>
                            <span className={styles.btnCtaTitle}>
                                <span data-text='Book a Call'>Book a Call</span>
                            </span>
                        </button>
                    </div>
                    <img 
                        src="/assets/landing-page/design/bg-gradient.png" 
                        alt="bg-gradient"
                    />
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.footerLeft}>
                        <img src="/assets/landing-page/design/enigma-logo.svg" alt="enigma logo" />
                        <p>We Make Magic<span className={styles.tradeMark}>ᵀᴹ</span></p>
                    </div>
                    <div className={styles.footerRight}>
                        <ul>
                            <li>
                                <a href="#">Latest Projects</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};