import React, { useRef, useEffect, useState } from 'react';

const ConceptLazyLoadVideo = ({ src, title }) => {
  const videoLazyRef = useRef(null);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setShouldPlay(true);
      }
    });

    if (videoLazyRef.current) {
      observer.observe(videoLazyRef.current);
    }

    return () => {
      if (videoLazyRef.current) {
        observer.unobserve(videoLazyRef.current);
      }
    };
  }, []);

  return (
    <div className="lazy-video">
      <video
        ref={videoLazyRef}
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/newProject/a.webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ConceptLazyLoadVideo;
