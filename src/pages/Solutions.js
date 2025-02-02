import React from 'react';
import './Solutions.css'; // CSS file for styling
import VideoBackground from './VideoBackground';
import videoBg from "./video/ai_catch_montage.mp4"


function Solutions() {
  return (
      
    <VideoBackground className="content" videoSrc={videoBg}>
    <div className="container mx-auto pt-24 text-center">
      <h1 className="text-4xl font-bold mb-8">Our Robotic Solutions</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Cutting-edge robotic technologies tailored to solve complex challenges across industries.
      </p>
      </div>
    </VideoBackground>
    
    
  );
}

export default Solutions;