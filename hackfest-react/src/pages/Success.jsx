// src/pages/Success.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

const Success = () => {
  return (
    <section className="success-section">

      <div className="success-card" data-aos="zoom-in">

        {/* Success Icon */}
        <div className="success-icon">🎉</div>

        {/* Title */}
        <h2 className="success-title">Registration Successful!</h2>

        {/* Message */}
        <p className="success-message">
          Congratulations! You have successfully registered for
          <span className="highlight"> Hackfest 2.0 Codeathon</span>.
        </p>

        {/* =============================
            ⭐ WhatsApp Group Join Box
        ============================== */}

          <a href="https://chat.whatsapp.com/KT21RMGAb5r9y4M6B5nr3y"
            target="_blank"
            rel="noreferrer">

              <div className="success-whatsapp-box" data-aos="fade-up">
          Join the official Codeathon WhatsApp group →{" "}
          <a 
            href="https://chat.whatsapp.com/KT21RMGAb5r9y4M6B5nr3y"
            target="_blank"
            rel="noreferrer"
          >
            Click to Join
          </a>
        </div>

            </a>

        

        <p className="success-required-text">
          ⚠️ Joining the WhatsApp group is <strong>COMPULSORY</strong> for all updates.
        </p>

        {/* =============================
              Instructions
        ============================== */}
        <div className="instructions">
          <h4>📌 Important Instructions</h4>
          <ul>
            <li>Check your email regularly for event updates.</li>
            <li>Join the WhatsApp group to receive all announcements instantly.</li>
            <li>Keep your registered phone number available during the event.</li>
            <li>Arrive on time — schedule will be shared soon.</li>
          </ul>
        </div>

        {/* Buttons */}
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
