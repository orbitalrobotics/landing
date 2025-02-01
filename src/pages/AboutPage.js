import React from 'react';
import './AboutPage.css'; // CSS file for styling
import './HomePage.css';
import Riley from './images/headshots/riley.jpg';
import Adeel from './images/headshots/adeel.jpg';
import Sohil from './images/headshots/sohil.jpeg';
import Aaron from './images/headshots/aaron.png';


const AboutPage = () => {

  return (
    <div className="about-section">

      {/* Company Vision Section */}
        <section class="vision-section">
            <div class="vision-intro-card">
                <h2 class="section-title">Our Vision</h2>
                <p class="section-description">
                We plan on providing a suite of tools that provide new insight into the trends of various markets which will give our users an upper hand at designing trading strategies.
                </p>
            </div>
            
            <div class="vision-card">
                <h3 class="card-heading">Screening Stock Prices for Custom Patterns</h3>
                <p class="card-description">
                Our roadmap begins with traders. Our first version of AIRS includes screening stock prices for custom patterns. 
                The patterns can occur on various timeframes and are defined by a series of open, close, high, low, and volume 
                candlesticks or a stock ticker and the start and stop time the indicates when that stock followed the desired pattern.
                </p>
            </div>
            <div class="vision-card">
                <h3 class="card-heading">High Probability Pattern Generation</h3>
                <p class="card-description">
                The next iteration of AIRS will allow our users to identify patterns in historical data and generate new patterns which have a historically high probability of occurring.
                </p>
            </div>
            <div class="vision-card">
                <h3 class="card-heading">Beyond Candlestick Patterns</h3>
                <p class="card-description">
                Our users will be able to use AIRS to detect patterns with additional market indicators such as company fundamentals, economic indicators, and text based reports. 
                In addition, our users will be able to build multi-security patterns to detect patterns where multiple securities are coupled.
                </p>
            </div>
            <div class="vision-card">
                <h3 class="card-heading">Pattern Characterization</h3>
                <p class="card-description">
                Complex patterns involving prices across varying time frames, reports, and multiple securities will be hard to describe and understand. 
                Our next version of AIRS will include tools based on physics informed machine learning and explainable AI technology to not only understand their patterns, but gain knowledge about how the market works which will allow them to make better strategies.
                </p>
            </div>
            <div class="vision-card">
                <h3 class="card-heading">Multi-modal Pattern Description</h3>
                <p class="card-description">
                Our users will be able to use additional forms of describing patterns such as natural language.
                </p>
            </div>
            <div class="vision-card">
                <h3 class="card-heading">Price Prediction and Autonomous Trading</h3>
                <p class="card-description">
                We will be developing a Price Prediction tool which identifies patterns and makes statistically accurate predictions of price movements when those patterns occur. 
                Finally, we will combine our AIRS and Price Prediction tools to develop autonomous agents which trade for our users.
                </p>
            </div>
        </section>


            
            {/* <div className='team-section'>
                <h2>Who Are We?</h2>
                <p>
                    We are a group of aerospace software engineers who are determined to make the best market anaysis tools out there. Our philosipy is simple: provide world-class tools while leaving room for intuition to detect the trends even AI can't see. So yeah, a bunch of rocket scientists trying to give experienced traders a superpower--sign me up.
                </p>
            </div> */}

      {/* </div> */}
              {/* Meet the People Section */}
              <div className="team-section">
            <h2>Founding Team</h2>
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


              {/* FAQ Section */}
        <div className="faq-section">
            <h2>Q&A</h2>
            <div className="faq">
                <h3>What is AIRS?</h3>
                <p>AIRS is a revolutionary platform designed to detect stock market trends with advanced algorithms.</p>
            </div>
            <div className="faq">
                <h3>How can I get started?</h3>
                <p>Simply sign up on our homepage and explore the features tailored to investors and analysts.</p>
            </div>
            <div className="faq">
                <h3>Is AIRS reliable?</h3>
                <p>Yes, AIRS is backed by rigorous testing and an experienced team of developers.</p>
            </div>
        </div>


            {/* Add more team members as needed */}
            
            {/* <div className='team-section'>
                <h2>Who Are We?</h2>
                <p>
                    We are a group of aerospace software engineers who are determined to make the best market anaysis tools out there. Our philosipy is simple: provide world-class tools while leaving room for intuition to detect the trends even AI can't see. So yeah, a bunch of rocket scientists trying to give experienced traders a superpower--sign me up.
                </p>
            </div> */}

      </div>
      
    </div>

  );
}

export default AboutPage;




