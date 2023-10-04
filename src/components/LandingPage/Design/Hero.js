import React, { useEffect } from "react";
import styles from "@/styles/designLanding.module.css";

export default function Hero() {

    return(
        <>
            <div className={styles.hero}>
                <div className={styles.backgroundImg}>
                    <img
                        src="/assets/landing-page/design/hero-img.webp"
                        alt="hero image" />
                </div>

                <div className={styles.darkBackgroundImg}>
                    <img
                        loading="lazy"
                        src="/assets/landing-page/design/dark-hero-bg.png"
                        alt="hero image" />
                </div>

                <div className={styles.heroContent}>
                    <div className={styles.heroTop}>
                        <div className={styles.heroTopEle}>
                            <h1>
                                We Provide Design
                                Subscription <span className={styles.span}>/</span>
                                <div className={styles.headContainer}>
                                    <div className={styles.headItems} id="headAnim">
                                        <span className={styles.headItem}>
                                            monthly
                                        </span>
                                        <span className={styles.headItem}>
                                            quarterly
                                        </span>
                                        <span className={styles.headItem}>
                                            yearly
                                        </span>
                                    </div>
                                </div>
                            </h1>
                        </div>
                    </div>

                    <div className={styles.heroBottom}>
                        <p>
                            Design subscriptions to scale your business.
                        </p>
                        <div>
                            <button className={styles.btnCta}>
                                <span className={styles.btnCtaRipple}>
                                    <span></span>
                                </span>
                                <span className={styles.btnCtaTitle}>
                                    <span data-text='See Plans'>See Plans</span>
                                </span>
                            </button>
                        </div>
                        <p>
                            Design you’ll <span>❤️</span>, gauranteed
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}