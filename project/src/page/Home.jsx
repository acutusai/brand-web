import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero-section/Hero";
import HeroSection from "../components/Hero-section2/Hero-section";
import Portfolio from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Mission from "../components/Mission/Mission";
import AnimateOnScroll from "../components/AnimateOnScroll";
import StoryIntro from "../components/Story/Story"
const Home = () => {
    return (
        <>
            <section 
                className="hero-section" 
                data-bgcolor="#e0e0e0" 
                data-navcolor="#555"
            >
                <div className="hero">
                    <Hero />
                </div>
            </section>
            
            <AnimateOnScroll className="hero-section2">
                <div className="hero-section">
                    <HeroSection />
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="hero-section2">
                <div className="hero-section">
                    <StoryIntro />
                </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
                <section>
                    <div className="hero">
                        <Mission />
                    </div>
                </section>
            </AnimateOnScroll>

            <AnimateOnScroll className="content-section">
                <section data-bgcolor="#aaa" data-navcolor="#999">
                    <div className="content">
                        <Portfolio />
                    </div>
                </section>
            </AnimateOnScroll>

            <AnimateOnScroll className="footer-section">
                <section data-bgcolor="#888" data-navcolor="#bbb">
                    <div className="footer">
                        <Footer />
                    </div>
                </section>
            </AnimateOnScroll>
        </>
    );
}

export default Home;
