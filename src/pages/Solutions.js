import React from 'react';
import './Solutions.css'; // CSS file for styling
import videoBg from "../assets/video/ai_catch_montage.mp4"


function Solutions() {
    return (

        <div className="solutions-container">
            <div className="solutions-background">
                <div className="solutions-content">
                    <h1>Our Robotic Solutions</h1>
                    <p>
                        Cutting-edge robotic technologies tailored to solve complex challenges across industries.
                    </p>

                    {/* <div className='video-main'>
                    <div className="overlay"></div>
                    <video src={videoBg} autoPlay loop muted />
                </div> */}

                    <p>
                        Coming soon! Demo footage here!
                    </p>

                </div>
            </div>
        </div>


    );
}

export default Solutions;