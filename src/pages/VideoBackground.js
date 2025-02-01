import React from 'react';
import "./VideoBackground.css"

function VideoBackground({ videoSrc, children }) {

  return (
    <div className='video-main'>
        <div className="overlay"></div>
        <video src={videoSrc} autoPlay loop muted />
        <div className="content">
            {children}
        </div>
    </div>
  );
}

export default VideoBackground;