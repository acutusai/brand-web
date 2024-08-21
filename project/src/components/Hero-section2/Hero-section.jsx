import React from "react";
import "./Hero-section.css";

const HeroSection = () => {
    return (
        <>
        <div className="text-container">
            <div className="text-title">
                <h1>Welcome to Stories of Restech</h1>
            </div>
            <div className="text-content-container">
                <div className="text1">
                    <h2>Welcome to Stories of ResTech, a forum dedicated to sharing the amazing stories of
people in the Insights Industry. Inspired by the idea that each one of us in this vibrant
industry has a unique story, we engage with individuals and capture their story of how
they made foray into the research and insights world, talk about their experiences,
dreams, challenges and stories of triumphs. Through candid interview storytelling we
aim to highlight the beauty and vibrancy of this underrated industry and showcase
setback and accomplishments through each personal journey.
Each story is a window into the diFerent fabrics that make up the research and insights
world. Join us as we explore uncommon stories of common people and celebrate the
voices of those who provide the foundation for making informed, strategic decisions
that drive growth, innovation, and long-term success.</h2>
                </div>
                {/* <div className="text1">
                    <h2>These trailblazers have transformed data analysis and strategic decision-making, demonstrating the profound impact of their work. By highlighting their achievements, we aim to inspire future leaders and offer valuable insights into the advancements in the industry.

</h2>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default HeroSection;
