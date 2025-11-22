// src/pages/Home.jsx
import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import Glimpses from "../components/Glimpses";
import Themes from "../components/Themes";
import Prizes from "../components/Prizes";
import Schedule from "../components/Schedule";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToButton";

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      <div
        className="progress-bar progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="lgx-container">
        <Navbar />
        <Banner />
        <About />
        <Glimpses />
        <Themes />
        <Prizes />
        <Schedule />
        <Sponsors />
        <Team />
        <FAQ />
        <Contact />
        <Footer />
      </div>

      <BackToTopButton />
    </div>
  );
};

export default Home;
