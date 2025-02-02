import React, { useState } from 'react';
import { Rocket, Globe, Settings } from 'lucide-react';
import Solutions from './Solutions';
import Team from './Team';
import About from './About'
import Splash from "./images/main_logo.svg"
import VideoBackground from './VideoBackground';
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
      
      <VideoBackground className="content" videoSrc={videoBg}>
    <div className="pt-24">
            <img src={Splash} alt="Logo"/>
      <section className="container mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">

        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
        </p>

        <div className="flex justify-center space-x-6">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
            Explore Solutions
          </button>
          <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>

      <section id='solutions'>
        <Solutions />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='team'>
        <Team />
      </section>

    {/* ai generated floaty boxy thingys */}
        {/* <section className="container mx-auto mt-24 grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard  
            key={index} 
            {...feature} 
            isActive={activeFeature === index}
            onMouseEnter={() => setActiveFeature(index)}
            onMouseLeave={() => setActiveFeature(null)}
          />
        ))}
      </section> */}

    </div>
    </VideoBackground>

  );
}

export default LandingPage;