import React, { useEffect } from "react";
import styles from "@/styles/designLanding.module.css";
import Image from "next/image";
import gsap from "gsap";

export default function Membership() {

    return(
        <>
            <div className={styles.membership}>
                <div className={styles.memberContent}>
                    <div className={styles.memberContentBox}>
                        <h2 className={styles.heading1}>
                            Membership <br/>
                            <span className={styles.reinventTextGradient}>
                                benefits
                            </span> 
                        </h2>
                        <p className={styles.para1}>
                            Design as you know it is out the door. Design as you want it just arrived.
                        </p>
                        <div className={styles.memberButton}>
                            <button className={styles.btnCta}>
                                <span className={styles.btnCtaRipple}>
                                    <span></span>
                                </span>
                                <span className={styles.btnCtaTitle}>
                                    <span data-text='See Plans'>See Plans</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <img 
                        className={styles.memberDeskImg}
                        alt="laptop image"
                        src="/assets/landing-page/design/member.png"
                    />
                    <img 
                        className={styles.memberMobImg}
                        alt="benefit image"
                        src="/assets/landing-page/design/member-benefit.png"
                    />
                </div>
            </div>
        </>
    );
}