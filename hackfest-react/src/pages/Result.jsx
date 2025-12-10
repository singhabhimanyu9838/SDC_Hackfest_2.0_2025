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
          {/* <span className="highlight">Results will be released after the competition rounds are completed.</span> */}
        </p>

        <div className="results-image-section">
   <h2 className="result-heading">🏆 Results</h2>

  <div className="results-image-grid">
    <div className="result-image-card">
      <img src="\assets\result3.jpg" alt="Result Page 1" />
    </div>

    <div className="result-image-card">
      <img src="\assets\result5.jpg" alt="Result Page 2" />
    </div>
  </div>
</div>

<p className="stay-tuned">
  📌 The final leaderboard is displayed above.
</p>


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
