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

        <div className="result-coming-card pdf-viewer">
  <h2>Qualified Teams</h2>
  <iframe
    src="public\assets\ROUND 1 RESULT.pdf"
    title="Results PDF"
    width="100%"
    height="600px"
    style={{ border: "none", borderRadius: "10px" }}
  ></iframe>
</div>

<p className="stay-tuned">
  📌 The final leaderboard has been uploaded as a PDF above.
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
