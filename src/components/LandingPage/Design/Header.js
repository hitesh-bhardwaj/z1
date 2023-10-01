import React from "react";
import styles from "@/styles/designLanding.module.css";

export default function Header() {

    return(
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerMain}>
                    <div className={styles.nav}>
                        <div className={styles.navItems}>
                            <a href="#">
                                Benefits
                            </a>
                        </div>
                        <div className={styles.navItems}>
                            <a href="#">
                                Recent Work
                            </a>
                        </div>
                        <div className={styles.navItems}>
                            <a href="#">
                                Pricing
                            </a>
                        </div>
                        <div className={styles.navItems}>
                            <a href="#">
                                FAQs
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.headerCta}>
                    <button>
                        <a href="#">
                           <span>
                                Book a call
                           </span> 
                        </a>
                    </button>
                </div>
            </header>
        </>
    )

}