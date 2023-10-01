import React, { useEffect } from "react";
import styles from "@/styles/designLanding.module.css";
import Image from "next/image";
import gsap from "gsap";

export default function RecentWork() {

    return(
        <>
            <div className={styles.work}>
                <div className={styles.workTopBox}>
                    <h2 className={styles.heading1}>
                        Recent<span className={styles.reinventTextGradient}> Work
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
                    <div className={styles.workTesti}>
                        <div className={styles.workTestiContainer}>
                            
                        </div>
                    </div>
                    
                </div>
            </>
        );
    };