import React, { useEffect } from "react";
import styles from "@/styles/designLanding.module.css";
import Image from "next/image";
import gsap from "gsap";

export default function Section2() {

    return(
        <>
            <div className={styles.reinvent}>
                <div className={styles.reinventContainer}>
                    <div className={styles.reinventLeft}>
                        <h2 className={styles.heading1}>
                            We didn’t reinvent the wheel, 
                            <span className={styles.reinventTextGradient}> just design</span>
                        </h2>
                        <p className={styles.para1}>
                            Design as you know it is out the door. Design as you want it just arrived.
                        </p>
                    </div>
                    <div className={styles.reinventRight}>
                        <div className={styles.reinventItems}>
                            <div className={styles.reinventItem}>
                                <Image
                                    width={800}
                                    height={800}
                                    loading="lazy"
                                    src="/assets/landing-page/design/section2_1.webp"
                                    alt="hero image" />
                                <div className={styles.reinventRightText}>
                                    <h3>
                                        01
                                    </h3>
                                    <p>
                                        Subscribe to a plan & request as many designs as you'd like.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.reinventItem}>
                                <Image
                                    width={800}
                                    height={800}
                                    loading="lazy"
                                    src="/assets/landing-page/design/section2_2.webp"
                                    alt="hero image" />
                                <div className={styles.reinventRightText}>
                                    <h3>
                                        02
                                    </h3>
                                    <p>
                                        Receive your design within a few business days on average, Monday to Friday.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.reinventItem}>
                                <Image
                                    width={800}
                                    height={800}
                                    loading="lazy"
                                    src="/assets/landing-page/design/section2_3.webp"
                                    alt="hero image" />
                                <div className={styles.reinventRightText}>
                                    <h3>
                                        03
                                    </h3>
                                    <p>
                                        We'll revise the designs until you're 100% satisfied.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}