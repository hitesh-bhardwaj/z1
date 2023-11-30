import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyVideo = ({ src, title, poster, type }) => {
  const [ref, inView] = useInView();
  const [hasPlayed, setHasPlayed] = useState(false);

  // When the video comes into view, set hasPlayed to true
  if (inView && !hasPlayed) {
    setHasPlayed(true);
  }

  return (
    <div className="lazy-video" ref={ref}>
        {(inView || hasPlayed) && (
          <video
            poster={poster}
            id={`${title}-video`}
            autoPlay
            loop
            muted
            src={src}
            title={title}
            type={type}
          >
            Your browser does not support the video tag.
          </video>
        )}
    </div>
  );
};

export default LazyVideo;
