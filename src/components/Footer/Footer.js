import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/footer.module.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {

  useEffect(() => {

    const footerText = document.querySelectorAll(".footer-anim-main");
    const contactBox = document.querySelectorAll(".contact-us-box");
    const footerLinks = document.querySelectorAll(".f-anim");
    const footerBottom = document.querySelector(".f__anim__copy");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        start: "top 90%",
      },
    });

    tl.fromTo(
      footerText,
      {
        rotationX: -120,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        duration: 1,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.4,
        ease: 'power2.out'
      }).fromTo(
        contactBox,
        {
          opacity: 0,
          translateX: -200,
          transformPerspective: "1000",
          transformOrigin: "top center",
        },
        {
          delay: -0.8,
          duration: 1,
          opacity: 1,
          translateX: 0,
          stagger: 0.2,
          ease: 'power2.out'
        }).fromTo(
          footerLinks,
          {
            y: 100,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            delay: -1.2,
          }).fromTo(
            footerBottom,
            {
              opacity: 0,
              y: 50,
            },
            {
              delay: -1,
              duration: 0.8,
              opacity: 1,
              y: 0,
            }
          );
  }, []);

  return (
    <>
      <footer className={`${styles.footer} dark:invert`} id="footer">
        <div className={styles.footerTop}>
          <div className={styles.footerTopContent}>
            <p>
              <span className="footer-anim-main">
                Let's bring your
              </span>
            </p>
            <p>
              <span className="footer-anim-main">
                ideas to life!
              </span>
            </p>
          </div>

          <div className={styles.footerTopRight}>
            <div className={` ${styles.contactUsBox} contact-us-box`}>
              <Image
                src="/assets/footer-main/Vector.png"
                className="footer-dark-img"
                alt="Foter contact image"
                width={200}
                height={200}
              />
            </div>
            <div className={` ${styles.contactUsBox} contact-us-box`}
              data-cursor-text="Say Hi !"
              data-cursor-color="#5d5ad6"
              data-cursor-size="100px"
            >
              <Link href="/get-in-touch">
                <button>Contact Us</button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footerSection}>
          <div className={styles.footerContent}>

            <div className={styles.leftSection}>
              <div className={`${styles.linkHead}`}>
                <h6 className="f-anim">mail us</h6>
                <div className={` ${styles.linkItem} f-anim`}>
                  <a className="en-link-under" href="mailto:hi@weareenigma.com" data-cursor-size="80px" data-cursor-exclusion>
                    <span>hi@weareenigma.com</span>
                  </a>
                </div>
              </div>
              <div className={`${styles.linkHead}`}>
                <h6 className="f-anim">even better call us</h6>
                <div className={styles.num}>
                  <div className={` ${styles.linkItem} f-anim`} data-cursor-size="80px" data-cursor-exclusion>
                    <a className="en-main-link f-anim" href="tel:+91 8178 026 136" >
                      <span data-text="+91 8178 026 136">+91 8178 026 136</span>
                    </a>
                  </div>
                  <div className={` ${styles.linkItem} f-anim`} data-cursor-size="80px" data-cursor-exclusion>
                    <a className="en-main-link f-anim" href="tel:+91 7303 644 520" >
                      <span data-text="+91 7303 644 520">+91 7303 644 520</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rightSection}>
              <div className={`${styles.linkHead}`}>
                <h6 className="f-anim">let's be friends</h6>
              </div>
              <div className={styles.socials}>
                <div className={`${styles.linkItemSocial} f-anim`} data-cursor-size="80px" data-cursor-exclusion>
                  <a className="en-main-link f-anim" target="blank" href="https://www.facebook.com/in.enigmadigital" >
                    <span data-text="Facebook">Facebook</span>
                  </a>
                </div>
                <div className={`${styles.linkItemSocial} f-anim`} data-cursor-size="80px" data-cursor-exclusion>
                  <a className="en-main-link f-anim" target="blank" href="https://www.instagram.com/enigmadigital/" >
                    <span data-text="Instagram">Instagram</span>
                  </a>
                </div>
                <div className={`${styles.linkItemSocial} f-anim`} data-cursor-size="80px" data-cursor-exclusion>
                  <a className="en-main-link f-anim" target="blank" href="https://twitter.com/_EnigmaDigital" >
                    <span data-text="Twitter">Twitter</span>
                  </a>
                </div>
                <div className={`${styles.linkItemSocial} f-anim`} data-cursor-size="80px" data-cursor-exclusion>
                  <a className="en-main-link f-anim" target="blank" href="https://in.linkedin.com/company/enigma-digital-product-design-ui-ux-neuromarketing" >
                    <span data-text="LinkedIn">LinkedIn</span>
                  </a>
                </div>
                <div className={`${styles.linkItemSocial} f-anim`} data-cursor-size="80px" data-cursor-exclusion>
                  <a className="en-main-link f-anim" target="blank" href="https://www.behance.net/enigma-digital" >
                    <span data-text="Behance">Behance</span>
                  </a>
                </div>
                <div className={`${styles.linkItemSocial} f-anim`} data-cursor-size="80px" data-cursor-exclusion>
                  <a className="en-main-link f-anim" target="blank" href="https://www.youtube.com/" >
                    <span data-text="YouTube">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyRight}>
          <span className="f__anim__copy">
            © 2023 Enigma Digital Consulting, LLP. All Rights Reserved. All Wrongs Reversed.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
