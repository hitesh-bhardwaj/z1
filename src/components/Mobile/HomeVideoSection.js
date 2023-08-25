import React from "react";
import Link from "next/link";

export default function HomeVideoSection() {
  return (
    <>
      <div className="video-section-mobile">
        <div className="video-box">
          <video
            src="/assets/reels/hero.webm"
            autoPlay
            muted
            loop
            loading="lazy"
          ></video>
        </div>

        <div className="video-content-box">
          <h1>
              Empowered by Neuromarketing Principles,
              our services open endless opportunities
              For each brand we partner with.
              Let's amplify your potential! 
            <span className="emoji-dark">🚀</span>
          </h1>
          <div className="cb-outro-header">
            <Link href="/contact">
              Say, Hello! <span className="emoji-dark">👋</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
