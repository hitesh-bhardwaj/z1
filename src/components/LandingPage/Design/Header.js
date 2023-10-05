import React, { useEffect, useState } from "react";
import gsap from "gsap";
import  ScrollToPlugin  from 'gsap/dist/ScrollToPlugin';
import styles from "@/styles/designLanding.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollToPlugin);

export default function Header({ isDarkMode, toggleDarkMode }) {
    const [isActive, setIsActive] = useState(false);

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

    const handleClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
          "#landing-dark-img",
          { scale: 0, rotate: "-280deg" },
          { scale: 1, rotate: "0deg", duration: 0.7 }
        );
      });

    return(
        <>
            <header className={`${styles.headerContainer}`}>
                <div className={styles.headerDesktop}>
                    <div className={styles.headLogo}>
                        <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>
                            <Image
                                height={50}
                                width={50} 
                                src="/assets/landing-page/design/header-logo.svg"
                                alt="logo" />
                        </a>
                    </div>
                    <div className={styles.headerMain}>
                        <div className={styles.nav}>
                            <div className={styles.navItems}>
                                <a href="#benefit" onClick={(e) => handleSmoothScroll(e, 'benefit')}>
                                    Benefits
                                </a>
                            </div>
                            <div className={styles.navItems}>
                                <a href="#work" onClick={(e) => handleSmoothScroll(e, 'work')}>
                                    Recent Work
                                </a>
                            </div>
                            <div className={styles.navItems}>
                                <a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')}>
                                    Pricing
                                </a>
                            </div>
                            <div className={styles.navItems}>
                                <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>
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
                    <button 
                        aria-label="Dark Mode"
                        className={styles.darkToggle}
                        onClick={toggleDarkMode} 
                    >
                        <Image
                            height={20}
                            width={20} 
                            id="landing-dark-img"
                            alt="dark mode" 
                            src={isDarkMode ? '/assets/dark/sun.svg' : '/assets/dark/moon.svg'}
                        />
                    </button>
                </div>

{/* Mobile Header */}
                <div className={styles.headerMobile}>
                    <div className={styles.headerMobileContainer}>
                        <div className={styles.headLogo}>
                            <Image
                                height={50}
                                width={50} 
                                src="/assets/landing-page/design/header-logo.svg"
                                alt="logo" />
                        </div>
                        <button 
                            aria-label="Dark Mode"
                            className={styles.darkToggle}
                            onClick={toggleDarkMode} 
                        >
                            <Image
                                height={20}
                                width={20} 
                                id="landing-dark-img"
                                alt="dark mode" 
                                src={isDarkMode ? '/assets/dark/sun.svg' : '/assets/dark/moon.svg'}
                            />
                        </button>
                        <div className={styles.hamburger}>
                            <svg
                                className={`${styles.ham} ${styles.hamRotate} ${isActive ? styles.active : ''}`}
                                viewBox="0 0 100 100"
                                onClick={handleClick}
                                >
                                <path className={`${styles.line} ${styles.lineTop}`} d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                                <path className={`${styles.line} ${styles.lineMiddle}`} d="m 70,50 h -40" />
                                <path className={`${styles.line} ${styles.lineBottom}`} d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                            </svg>
                        </div>
                        <div className={`${styles.mobileNav} ${isActive ? styles.activeNav : ''}`}>
                            <img
                                className={styles.mobileNavBg}
                                src="/assets/landing-page/design/mobile-nav-bg.webp"
                                alt="nav-bg"
                                />
                            <div className={styles.mobileNavLinks}>
                                <ul className={styles.navList}>
                                    <li className={styles.navListLinks}>
                                            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>
                                                <span>Home</span>
                                            </a>
                                    </li> 
                                    <li className={styles.navListLinks}>
                                            <a href="#benefit" onClick={(e) => handleSmoothScroll(e, 'benefit')}>
                                                Benefits
                                            </a>
                                    </li> 
                                    <li className={styles.navListLinks}>
                                            <a href="#work" onClick={(e) => handleSmoothScroll(e, 'work')}>
                                                Recent Work
                                            </a>
                                    </li> 
                                    <li className={styles.navListLinks}>
                                            <a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')}>
                                                Pricing
                                            </a>
                                    </li> 
                                    <li className={styles.navListLinks}>
                                            <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>
                                                FAQs
                                            </a>
                                    </li> 
                                </ul>
                                
                                <div className={styles.navCta}>
                                    <button>
                                        <a href="#">
                                            Book a call
                                        </a>
                                    </button>
                                </div>
                                <div className={styles.navBottom}>
                                    <Image
                                        width={150}
                                        height={150} 
                                        alt="enigma trademark"
                                        src="/assets/landing-page/design/nav-bottom.webp"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </header>
        </>
    );
}