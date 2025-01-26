import React, { useState } from 'react';
import { Rocket, Globe, Settings } from 'lucide-react';

const OrbitalRoboticsLanding = () => {
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
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold tracking-tight">Orbital Robotics</div>
          <nav className="space-x-6">
            <a href="#" className="hover:text-blue-600 transition">Solutions</a>
            <a href="#" className="hover:text-blue-600 transition">Technology</a>
            <a href="#" className="hover:text-blue-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        <section className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Redefining Robotics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Pioneering intelligent robotic systems that transform complex challenges into elegant solutions.
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

        <section className="container mx-auto mt-24 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl border transition-all duration-300 ${
                activeFeature === index 
                  ? 'border-blue-500 shadow-2xl scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-gray-100 py-12 mt-24">
        <div className="container mx-auto text-center">
          <p>© 2024 Orbital Robotics. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OrbitalRoboticsLanding;
