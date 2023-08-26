import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

function Footer() {

  useEffect(() => {

    const footerText = document.querySelectorAll("#say");
    const contactBox = document.querySelectorAll(".contact-us-box");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".en-footer-section",
        start: "top 85%",
      },
    });

    
    // Header
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
        duration: 0.8,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.4,
      }).fromTo(
        contactBox,
        {
          opacity: 0,
          translateX: -200,
          transformPerspective: "1000",
          transformOrigin: "top center",
        },
        {
          delay: -0.5,
          duration: 0.7,
          opacity: 1,
          translateX: 0,
          stagger: 0.5,
        }
      );
    return () => tl.kill();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 90%",
      },
    });

    const footerLinks = document.querySelectorAll(".footer-content .f__anim");
    const footerBottom = document.querySelector(".f__anim-two");
    // Header
    tl.fromTo(
      footerLinks,
      {
        y: 100,
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.1,
      }).fromTo(
        footerBottom,
        {
          y: 50,
          opacity: 0,
        },
        {
          delay: -0.5,
          duration: 0.8,
          opacity: 1,
          y: 0,
        }
      );
    return () => tl.kill();
  }, []);

  return (
    <>
      {/* Why Shy */}
      <footer className="footer-main">
        <div className="en-footer-section">
          <div className="en-f__content">
            <h1>
              <span className="wt-400" id="say">
                Let's bring your
              </span>
            </h1>
            <h1>
              <span className="wt-400 mr-11" id="say">
                ideas to life!
              </span>
            </h1>
          </div>
          <div className="right-en-box">
            <div className="image-box contact-us-box">
              <Image
                src="/assets/footer-main/Vector.png"
                width={250}
                height={50}
                className="footer-dark-img"
                alt="Foter contact image"
              />
            </div>
            <div
              className="contact-us-box"
              data-cursor-text="Say Hi !!"
              data-cursor-color="#5d5ad6"
              data-cursor-size="100px"
            >
              <Link href="/contact">
                <button>Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Why Shy END */}
        {/* ============= */}
        {/* Footer */}
        <div className="footer-section">
          <div className="footer-content">
            <div className="left-section">
              <div className="mail f__anim">
                <h6>mail us</h6>
                <div className="cb-outro-header">
                  <a
                    href="mailto:hi@weareenigma.com"
                    data-cursor-size="80px"
                    data-cursor-exclusion
                    className="f__anim"
                  >
                    hi@weareenigma.com
                  </a>
                </div>
              </div>
              <div className="phone f__anim">
                <h6> even better call us</h6>
                <div className="num">
                  <div
                    className="cb-menu-nav-item f__anim"
                    data-cursor-exclusion
                    data-cursor-size="80px"
                  >
                    <a href="tel:+91 8178 026 136">
                      <span data-text="+91 8178 026 136">
                        <span className="disabled">+91</span> 8178 026 136
                      </span>
                    </a>
                  </div>
                  <div
                    className="cb-menu-nav-item f__anim"
                    data-cursor-exclusion
                    data-cursor-size="80px"
                  >
                    <a href="tel:+91 7303 644 520">
                      <span data-text="+91 7303 644 520">
                        <span className="disabled">+91</span> 7303 644 520
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section">
              <h6 className="f__anim">let's be friends</h6>
              <div className="socials">
                <div className="top-socials f__anim">
                  <div
                    className="cb-menu-nav-item"
                    data-cursor-exclusion
                    data-cursor-size="80px"
                  >
                    <a
                      href="https://www.facebook.com/in.enigmadigital"
                      target="blank"
                    >
                      <span data-text="Facebook">Facebook</span>
                    </a>
                  </div>
                  <div
                    className="cb-menu-nav-item f__anim"
                    data-cursor-exclusion
                    data-cursor-size="80px"
                  >
                    <a
                      href="https://www.instagram.com/enigmadigital/"
                      target="blank"
                    >
                      <span data-text="Instagram">Instagram</span>
                    </a>
                  </div>
                  <div
                    className="cb-menu-nav-item f__anim"
                    data-cursor-exclusion
                    data-cursor-size="80px"
                  >
                    <a href="https://www.youtube.com/" target="blank">
                      <span data-text="Youtube">Youtube</span>
                    </a>
                  </div>
                </div>
                <div className="bottom-socials f__anim">
                  <div
                    className="cb-menu-nav-item"
                    data-cursor-exclusion
                    data-cursor-size="80px"
                  >
                    <a
                      href="https://in.linkedin.com/company/in-enigmadigital"
                      target="blank"
                    >
                      <span data-text="LinkedIn">LinkedIn</span>
                    </a>
                  </div>
                  <div
                    className="cb-menu-nav-item"
                    data-cursor-exclusion
                    data-cursor-size="80px"
                  >
                    <a href="https://twitter.com/_EnigmaDigital" target="blank">
                      <span data-text="Twitter">Twitter</span>
                    </a>
                  </div>
                  <div
                    className="cb-menu-nav-item"
                    data-cursor-exclusion
                    data-cursor-size="80px"
                  >
                    <a
                      href="https://www.behance.net/enigma-digital"
                      target="blank"
                    >
                      <span data-text="Behance">Behance</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="end-footer-he">
          <div className="end-footer-content">
            <div className="center f__anim-two">
              <span>
                © 2023 Enigma Digital Consulting, LLP. All Rights Reserved. All
                Wrongs Reversed.
              </span>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer END */}
    </>
  );
}

export default Footer;
