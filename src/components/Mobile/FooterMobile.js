import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FooterMobile() {

  useEffect(() => {    
    const footerMobileHead = document.querySelectorAll("#say-anim");
    const footerMobileLinks = document.querySelectorAll("#say-anim-links");
    
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mobile-footer",
          start: "top 85%",
        }
      });

      tl.fromTo(footerMobileHead, {
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
          stagger: 0.2,
        }).from(footerMobileLinks, {
          opacity: 0,
          y: 100,
          duration: 0.7,
          delay: -0.3,
          stagger: 0.2,
        });
        });
    return () => ctx.revert();
  });

  return (
    <div>
      <div className="contact mobile-footer">
        <div className="contact-content">
          <div className="contact-content-heading">
          <span id="say-anim" >Let's bring your</span>
            <span id="say-anim"
                className="contact-content-heading-sub" 
                >
             ideas to life!
            </span>
          </div>
          <div className="contact-content-mail">
            <div className="contact-content-mail-title" id="say-anim-links">mail us at</div>
            <div className="contact-content-mail-desc" id="say-anim-links">
              <a href="mailto:hi@weareenigma.com">hi@weareenigma.com</a>
              <div className="contact-content-mail-desc-underline" />
            </div>
          </div>
          <div className="contact-content-call">
            <div className="contact-content-call-title" id="say-anim-links">
              even better call us
            </div>
            <div className="contact-content-call-desc" id="say-anim-links">
              <a href="tel:+91 8178 026 136" style={{ letterSpacing: "1.3px" }}>
                <span>+91</span> 8178 026 136
              </a>
            </div>
            <div className="contact-content-call-desc" id="say-anim-links"> 
              <a href="tel:+91 7303 644 520">
                <span>+91</span> 7303 644 520
              </a>
            </div>
          </div>
          <div className="contact-content-socials">
            <div className="contact-content-socials-row">
              <div className="contact-content-socials-icon" id="say-anim-links">
                <span>Facebook</span>
              </div>
              <div className="contact-content-socials-icon" id="say-anim-links">
                <span>Instagram</span>
              </div>
              <div className="contact-content-socials-icon" id="say-anim-links">
                <span>Youtube</span>
              </div>
            </div>
            <div className="contact-content-socials-row">
              <div className="contact-content-socials-icon" id="say-anim-links">
                <span>LinkedIn</span>
              </div>
              <div className="contact-content-socials-icon" id="say-anim-links">
                <span>Twitter</span>
              </div>
              <div className="contact-content-socials-icon" id="say-anim-links">
                <span>Behance</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-mobile">
            <div className="footer-hr" />
            <div className="footer-copyright">
              <div className="footer-copyright-label" id="say-anim-links">
                © 2023 Enigma Digital Consulting, LLP. All Rights Reserved. All
                Wrongs Reversed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
