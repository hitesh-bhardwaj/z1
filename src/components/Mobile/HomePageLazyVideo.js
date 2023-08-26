import React, { useRef, useEffect, useState } from 'react';

const HomePageLazyVideo = ({ src, title }) => {
  const videoRef = useRef(null);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setShouldPlay(true);
      }
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="lazy-video">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
      >
        <source src="/assets/reels/hero.webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomePageLazyVideo;
