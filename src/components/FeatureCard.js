import React from 'react';

function FeatureCard({ icon, title, description, isActive, onMouseEnter, onMouseLeave }) {
  return (
    <div 
      className={`p-6 rounded-xl border transition-all duration-300 ${
        isActive 
          ? 'border-blue-500 shadow-2xl scale-105' 
          : 'border-gray-200 hover:border-blue-300'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;