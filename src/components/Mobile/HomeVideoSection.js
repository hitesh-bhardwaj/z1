import React, { useEffect } from "react";
import Link from "next/link";
import LazyVideo from "./LazyVideo";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeVideoSection() {

  if (globalThis.innerWidth<1023) {

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".video-section-mobile",
          start: "top 85%",
          end: "bottom center",
          scrub: true,
          markers: false,
        },
      });
      tl.from(".para-anim-mobile", {
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
      });
    });
    return () => ctx.revert();
  }, []);
}

  return (
    <>
      <div className="video-section-mobile">
        <div className="video-content-box">
          <p className="para-anim-mobile">
              Empowered by Neuromarketing Principles,
              our services open endless opportunities
              For each brand we partner with.
              Let's amplify your potential! 
            <span className="emoji-dark">🚀</span>
          </p>
          <div className="para-anim-mobile">
            <Link href="/get-in-touch" className="en-link-under">
              <span>Say, Hello! </span><div className="emoji-dark wave">👋</div>
            </Link>
          </div>
        </div>

        <div className="video-box">
          <LazyVideo
            src="/assets/reels/hero.webm"
            title="official reel video"
          />
        </div>
      </div>
    </>
  );
}
