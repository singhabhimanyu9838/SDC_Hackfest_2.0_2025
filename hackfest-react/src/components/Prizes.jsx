// src/components/Prizes.jsx
import React from "react";
import "./prize.css";

const Prizes = () => {
  const sparks = [...Array(50)];

  return (
    <section id="prizes" className="pb100 pt100">
      <div className="container">
        <div className="section_title">
          <h3 className="title-dark">PRIZES</h3>
        </div>
      </div>

      <div className="container">
        <div className="prize-row">

          {/* ⭐ 1st Prize */}
          <div className="prize-card first-prize reveal-card">
            <div className="spotlight1"></div>
            <div className="outer-ring gold-ring"></div>

            <div className="prize-crown">
              <img src="/assets/img/first.png" alt="1st" />
            </div>

            <h4 className="prize-title">First Prize</h4>
            <div className="prize-amount metallic gold">₹ 9,000</div>
            <p className="prize-tagline">Cash Reward</p>

            <div className="card-visuals">
              {sparks.map((_, i) => (
                <div key={i} className="spark"></div>
              ))}
            </div>
          </div>

          {/* ⭐ 2nd Prize */}
          <div className="prize-card second-prize reveal-card">
            <div className="spotlight2"></div>
            <div className="outer-ring silver-ring"></div>

            <div className="prize-crown">
              <img src="/assets/img/second.png" alt="2nd" />
            </div>

            <h4 className="prize-title silver">Second Prize</h4>
            <div className="prize-amount metallic silver">₹ 7,000</div>
            <p className="prize-tagline silver-text">Cash Reward</p>

            <div className="card-visuals">
              {sparks.map((_, i) => (
                <div key={i} className="spark"></div>
              ))}
            </div>
          </div>

          {/* ⭐ 3rd Prize */}
          <div className="prize-card third-prize reveal-card">
            <div className="spotlight3"></div>
            <div className="outer-ring bronze-ring"></div>

            <div className="prize-crown">
              <img src="/assets/img/third.png" alt="3rd" />
            </div>

            <h4 className="prize-title bronze">Third Prize</h4>
            <div className="prize-amount metallic bronze">₹ 4,000</div>
            <p className="prize-tagline bronze-text">Cash Reward</p>

            <div className="card-visuals">
              {sparks.map((_, i) => (
                <div key={i} className="spark"></div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Prizes;
