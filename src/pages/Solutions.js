import React from 'react';
import './Solutions.css'; // CSS file for styling
import videoBg from "./video/ai_catch_montage.mp4"


function Solutions() {
  return (
      
    <div className="container mx-auto pt-24 text-center">
        <div className='video-main'>
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            
            <div className='content'>
            <h1 className="text-4xl font-bold mb-8">Our Robotic Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge robotic technologies tailored to solve complex challenges across industries.
            </p>

                
            </div>
        </div>


      </div>
    
    
  );
}

export default Solutions;