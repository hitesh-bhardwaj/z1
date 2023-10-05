import React, { useEffect } from "react";
import styles from "@/styles/designLanding.module.css";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.offsetTop;
            gsap.to(window, {
                duration: 2,
                scrollTo: targetPosition,
                ease: "power4.inOut",
            });
          };

    return(
        <>
            <div className={styles.hero}>
                <div className={styles.backgroundImg}>
                    <Image
                        height={1000}
                        width={1000}
                        src="/assets/landing-page/design/hero-img.webp"
                        alt="hero image" />
                </div>

                <div className={styles.darkBackgroundImg}>
                    <Image
                        height={1000}
                        width={1000}
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
                            <button aria-label="Plans Cta" className={styles.btnCta}>
                                <a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')}>
                                    <span className={styles.btnCtaRipple}>
                                        <span></span>
                                    </span>
                                    <span className={styles.btnCtaTitle}>
                                        <span data-text='See Plans'>See Plans</span>
                                    </span>
                                </a>
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