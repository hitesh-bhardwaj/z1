import gsap from 'gsap';
import React, { useEffect } from 'react'
import LazyVideo from './LazyVideo';

const MobileServiceVideo = () => {
    useEffect(() => {
        let ctx = gsap.context(() => {
    
          const tl = gsap.timeline();
          tl.fromTo(
            "#mobile-vid",
            {
              opacity: 0,
              translateY: 300,
              transformPerspective: "1000",
              transformOrigin: "top center",
            },
            {
              delay: 3.2,
              duration: 1.3,
              opacity: 1,
              translateY: 0,
              stagger: 0.2,
            }
          );
        })
        return () => ctx.revert();
      }, []);
    
  return (
    <section id='mobile-service-video-section'>
         <div className="mobile-video-service-section">
          <div className="video-service-mobile" id="mobile-vid">
            <LazyVideo 
              src="/assets/services/service-1.webm"
              poster="/assets/services/services-main-poster.webp"
              type="video/webm"
              title="Service-Showcase"
              className="vid"
            />
          </div>
        </div>
      
    </section>
  )
}

export default MobileServiceVideo
