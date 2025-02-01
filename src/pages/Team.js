import React from 'react';
import Riley from './images/headshots/riley.jpg';
import Adeel from './images/headshots/adeel.jpg';
import Sohil from './images/headshots/sohil.jpeg';
import Aaron from './images/headshots/aaron.png';
import './Team.css'; // CSS file for styling

function Team() {
  return (
    <div className="container mx-auto pt-24 text-center">
      <h1 className="text-4xl font-bold mb-8">Meet the team</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        
      </p>
      <div className="team-section">

           <div className="team-member">
                <img src={Aaron} alt="Team Member" />
                <h3>Aaron Borger</h3>
                <p>Founding Engineer & CEO</p>
            </div>
            <div className="team-member">
                <img src={Adeel} alt="Team Member" />
                <h3>Adeel Qureshi</h3>
                <p>Founding Engineer</p>
            </div>
            <div className="team-member">
                <img src={Sohil} alt="Team Member" />
                <h3>Sohil Pokharna</h3>
                <p>Founding Engineer</p>
            </div>
            <div className="team-member">
                <img src={Riley} alt="Team Member" />
                <h3>Riley Mark</h3>
                <p>Founding Engineer</p>
            </div>
</div>
    </div>
  );
}

export default Team;