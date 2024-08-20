import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../Style/Page.css"
import Hero from "../components/Hero-section/Hero";
import HeroSection from "../components/Hero-section2/Hero-section";
import Portfolio from "../components/Content/Content";
import Footer from "../components/Footer/Footer";


const Home = () => {
    return (
        <>
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="hero">
                <Hero/>
            </div>
            <div className="hero-section">
                <HeroSection/>
            </div>
            <div className="content">
                <Portfolio/> 
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    )
}

export default Home