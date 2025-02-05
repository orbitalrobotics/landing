import React from 'react';
import Riley from '../assets/images/headshots/riley.jpg';
import Adeel from '../assets/images/headshots/adeel.jpg';
import Sohil from '../assets/images/headshots/sohil.jpeg';
import Aaron from '../assets/images/headshots/aaron.png';
import './Team.css'; // CSS file for styling

function Team() {
  return (
    <div className="team-container">
      <div className='team-background'>
        <div className="team-content">
          <h1>Meet the team</h1>
          <p></p>
          <section className="team-section">

            <div className="team-member">
              <img src={Aaron} alt="Team Member" />
              <h3>Aaron Borger</h3>
              <p>Founding Engineer & CEO</p>
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
            <div className="team-member">
              <img src={Adeel} alt="Team Member" />
              <h3>Adeel Qureshi</h3>
              <p>Founding Engineer</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Team;