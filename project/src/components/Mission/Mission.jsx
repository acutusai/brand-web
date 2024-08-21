// src/components/Mission/Mission.js

import React from 'react';
import './Mission.css'; // Create this CSS file for styling

const Mission = () => {
    return (
        <section className="mission">
            <div className="mission-content">
                <h2 className="mission-title">Our Mission</h2>
                <p className="mission-description">
                    At Stories of Restech, our mission is to spotlight the remarkable journeys of individuals who have started their careers in market research and consumer insights. We aim to celebrate their achievements and provide inspiration through their stories of innovation, leadership, and transformation in the ever-evolving field of market research.
                </p>
                {/* <div className="mission-image">
                    <img src="/path-to-your-image.jpg" alt="Mission Illustration" />
                </div> */}
            </div>
        </section>
    );
};

export default Mission;
