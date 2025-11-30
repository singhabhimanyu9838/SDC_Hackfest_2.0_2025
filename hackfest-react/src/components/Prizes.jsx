// src/components/Prizes.jsx
import React from "react";
import "./prize.css";
import { FaCode, FaTerminal, FaLaptopCode } from "react-icons/fa";

const Prizes = () => {
  const sparks = [...Array(50)];
  const pixels = [...Array(35)];

  return (
    <section id="prizes" className="pb100 pt100">

      {/* ---------------- HACKATHON TITLE ---------------- */}
      <div className="container">
        <div className="section_title">
          <h3 className="title-dark">Hackathon Prizes</h3>
        </div>
      </div>

      <div className="container">

        {/* ---------------- FIRST PRIZE (Hackathon) ---------------- */}
        <div className="prize-row">
          <div className="prize-card first-prize reveal-card">
            <div className="spotlight1"></div>
            <div className="outer-ring gold-ring"></div>

            <div className="prize-crown">
              <img src="/assets/img/first.png" alt="1st" />
            </div>

            <h4 className="prize-title">First Prize</h4>
            <div className="prize-amount metallic gold">₹ 8,000</div>
            <p className="prize-tagline">Worth Reward</p>
            <p className="extra-line">Medal<span className="medal-emoji">🎖️</span> & Certificate  <span className="certificate-emoji">📜</span> Included</p>


            <div className="card-visuals">
              {sparks.map((_, i) => (
                <div key={i} className="spark"></div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- SECOND PRIZE ---------------- */}
        <div className="prize-row">
          <div className="prize-card second-prize reveal-card">
            <div className="spotlight2"></div>
            <div className="outer-ring silver-ring"></div>

            <div className="prize-crown">
              <img src="/assets/img/second.png" alt="2nd" />
            </div>

            <h4 className="prize-title silver">Second Prize</h4>
            <div className="prize-amount metallic silver">₹ 6,000</div>
            <p className="prize-tagline silver-text">Worth Reward</p>
           <p className="extra-line">Medal<span className="medal-emoji">🎖️</span> & Certificate  <span className="certificate-emoji">📜</span> Included</p>


            <div className="card-visuals">
              {sparks.map((_, i) => (
                <div key={i} className="spark"></div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- THIRD PRIZE ---------------- */}
        <div className="prize-row">
          <div className="prize-card third-prize reveal-card">
            <div className="spotlight3"></div>
            <div className="outer-ring bronze-ring"></div>

            <div className="prize-crown">
              <img src="/assets/img/third.png" alt="3rd" />
            </div>

            <h4 className="prize-title bronze">Third Prize</h4>
            <div className="prize-amount metallic bronze">₹ 4,000</div>
            <p className="prize-tagline bronze-text">Worth Reward</p>
           <p className="extra-line">Medal<span className="medal-emoji">🎖️</span> & Certificate  <span className="certificate-emoji">📜</span> Included</p>

            <div className="card-visuals">
              {sparks.map((_, i) => (
                <div key={i} className="spark"></div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* ============================================================
                           CODEATHON SECTION
      ============================================================ */}

      <div className="container">
        <div className="section_title glitch-title">
          <h3 className="title-dark codeathon-glitch" data-text="[ CODEATHON ]">
            [ CODEATHON ]
          </h3>
        </div>
      </div>

      {/* ------------------------------------
                CODEATHON PRIZES (1 Row)
      ------------------------------------ */}
      <div className="container">
        <div className="codeathon-row">

          {/* ⭐ 1st Prize */}
          <div className="codeathon-card reveal-card">
            <div className="spotlight-blue1"></div>
            <div className="outer-ring blue-ring1"></div>

            {/* Floating Icons */}
            <div className="floating-icons">
              <FaCode className="float-icon" />
              <FaTerminal className="float-icon" />
              <FaLaptopCode className="float-icon" />
            </div>

            {/* Pixel Rain */}
            <div className="pixel-rain">
              {pixels.map((_, i) => (
                <div key={i} className="pixel-drop"></div>
              ))}
            </div>

            <div className="prize-crown">
              <img src="/assets/img/first.png" alt="1st" />
            </div>

            <h4 className="prize-title code-blue">First Prize</h4>
            <div className="prize-amount metallic blue1">₹ 1,000</div>
            <p className="prize-tagline code-blue-text">Worth Reward</p>
            <p className="extra-line">Medal<span className="medal-emoji">🎖️</span> & Certificate  <span className="certificate-emoji">📜</span> Included</p>
            

            <div className="card-visuals">
              {sparks.map((_, i) => (
                <div key={i} className="spark-blue"></div>
              ))}
            </div>
          </div>

          {/* ⭐ 2nd Prize */}
          <div className="codeathon-card reveal-card">
            <div className="spotlight-blue2"></div>
            <div className="outer-ring blue-ring2"></div>

            <div className="floating-icons">
              <FaCode className="float-icon" />
              <FaTerminal className="float-icon" />
            </div>

            <div className="pixel-rain">
              {pixels.map((_, i) => (
                <div key={i} className="pixel-drop"></div>
              ))}
            </div>

            <div className="prize-crown">
              <img src="/assets/img/second.png" alt="2nd" />
            </div>

            <h4 className="prize-title code-blue">Second Prize</h4>
            <div className="prize-amount metallic blue2">₹ 600</div>
            <p className="prize-tagline code-blue-text">Worth Reward</p>
           <p className="extra-line">Medal<span className="medal-emoji">🎖️</span> & Certificate  <span className="certificate-emoji">📜</span> Included</p>

            

            <div className="card-visuals">
              {sparks.map((_, i) => (
                <div key={i} className="spark-blue"></div>
              ))}
            </div>
          </div>

          {/* ⭐ 3rd Prize */}
          <div className="codeathon-card reveal-card">
            <div className="spotlight-blue3"></div>
            <div className="outer-ring blue-ring3"></div>

            <div className="floating-icons">
              <FaLaptopCode className="float-icon" />
              <FaTerminal className="float-icon" />
            </div>

            <div className="pixel-rain">
              {pixels.map((_, i) => (
                <div key={i} className="pixel-drop"></div>
              ))}
            </div>

            <div className="prize-crown">
              <img src="/assets/img/third.png" alt="3rd" />
            </div>

            <h4 className="prize-title code-blue">Third Prize</h4>
            <div className="prize-amount metallic blue3">₹ 400</div>
            <p className="prize-tagline code-blue-text">Worth Reward</p>
            <p className="extra-line">Medal<span className="medal-emoji">🎖️</span> & Certificate  <span className="certificate-emoji">📜</span> Included</p>


            <div className="card-visuals">
              {sparks.map((_, i) => (
                <div key={i} className="spark-blue"></div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Prizes;
