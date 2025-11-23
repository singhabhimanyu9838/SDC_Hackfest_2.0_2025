// src/pages/Success.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

const Success = () => {
  return (
    <section className="success-section">
      <div className="success-card">
        <div className="success-icon">🎉</div>

        <h2 className="success-title">Registration Successful!</h2>

        <p className="success-message">
          Congratulations! You have successfully registered for
          <span className="highlight"> Hackfest 2.0</span>.
        </p>

        <div className="instructions">
          <h4>📌 Important Instructions</h4>
          <ul>
            <li>Check your email regularly for event updates.</li>
            <li>Connect with our social media handles for announcements.</li>
            <li>Keep your registered phone number available for verification.</li>
            <li>Be on time for the event — scheduling details will be shared soon.</li>
          </ul>
        </div>

        <div className="buttons">
          <Link to="/register" className="btn success-btn">
            Submit Another Response
          </Link>

          <Link to="/" className="btn home-btn">
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Success;
