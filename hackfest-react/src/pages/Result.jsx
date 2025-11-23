import React from "react";
import "./Result.css";

const Result = () => {
  return (
    <section className="result-section">
      <div className="result-overlay"></div>

      <div className="result-container" data-aos="fade-up">
        <h1 className="result-title">🏴‍☠️ HackFest 2.0 Results</h1>

        <p className="result-tagline">
          The battle has been fierce… the tides are rising…  
          <br />
          <span className="highlight">Results will be released after the competition rounds are completed.</span>
        </p>

        <div className="result-coming-card">
          <h2>⚓ Results Coming Soon...</h2>
          <p>Stay tuned, brave hackers.</p>
          <p>The leaderboard will be published right here once the judging is completed.</p>
        </div>

        <p className="stay-tuned">⏳ Keep your swords sharp — final rankings will arrive shortly!</p>

        <button
          className="back-home-btn"
          onClick={() => (window.location.href = "/")}
        >
          ⬅ Back to Home
        </button>
      </div>
    </section>
  );
};

export default Result;
