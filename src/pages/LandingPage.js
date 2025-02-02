import React, { useState } from 'react';
import { Rocket, Globe, Settings } from 'lucide-react';
import Solutions from './Solutions';
import Team from './Team';
import About from './About'
import Splash from "./images/main_logo.svg"
import videoBg from "./video/cube_catch.mp4"
import "./LandingPage.css"

function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: <Rocket className="w-12 h-12 text-blue-500" />,
      title: "Advanced Robotics",
      description: "Cutting-edge robotic solutions for complex spatial challenges."
    },
    {
      icon: <Globe className="w-12 h-12 text-green-500" />,
      title: "Global Deployment", 
      description: "Scalable technologies deployable across diverse environments."
    },
    {
      icon: <Settings className="w-12 h-12 text-purple-500" />,
      title: "Intelligent Systems",
      description: "AI-powered robotics with adaptive learning capabilities."
    }
  ];

  return (
      

    <div className="pt-24">

        <div className='video-main'>
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            
            <div className='content'>
                <img src={Splash} alt="Logo"/>
            </div>
        </div>

        <div>
            <section id='solutions'>
                <Solutions />
            </section>

            <section id='about'>
                <About />
            </section>

            <section id='team'>
                <Team />
            </section> 
        </div>
    </div>

  );
}

export default LandingPage;