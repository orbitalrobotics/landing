import React from 'react';
import "./VideoBackground.css"

function VideoBackground({ videoSrc, children, className }) {

  return (
    <div className='video-main'>
        <div className="overlay"></div>
        <video src={videoSrc} autoPlay loop muted />
        <div className={className}>
            {children}
        </div>
    </div>
  );
}

export default VideoBackground;