import React, { useState } from "react";
import "./RegistrationForm.css";

// Use environment variable if available (best practice for VITE projects)
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://sdc-hackfest-2-0-sever.onrender.com";


const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    year: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");      // Clear previous messages
  setLoading(true);

  try {
    // Full path confirmed: [API_BASE_URL]/api/registrations
    const res = await fetch(`${API_BASE_URL}/api/registrations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    // ❌ If server returned an error (or if the status code wasn't 2xx)
    if (!res.ok) {
      // The error message is retrieved from the server's response body
      throw new Error(data.message || "Registration failed due to server error.");
    }

    // ✅ Reset form AFTER success
    setForm({
      name: "",
      email: "",
      phone: "",
      college: "",
      branch: "",
      year: "",
    });

    // ✅ Only redirect AFTER success is confirmed
    window.location.href = "/success";

  } catch (err) {
    // This error handles network issues or errors thrown by the backend
    setMessage(`❌ Error: ${err.message || "Could not connect to the server."}`);
  } finally {
    setLoading(false);
  }
};


  return (
    <section id="register" className="storm-section">
      <a href="/" className="storm-back-btn">
            🏴 Back
      </a>

      <div className="storm-overlay" />

      <div className="container storm-container">
        <div className="section_title text-center" data-aos="fade-down">
          <h3 className="storm-title">Hackfest 2.0 Registration</h3>
          <p className="storm-subtitle">
            Brave the <span>Ocean Storm</span> and secure your place on deck.
          </p>
        </div>

        {/* 70% width wrapper */}
        <div
          className="reg-center"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <div className="storm-card">
            <div className="storm-card-header">
              <h4>Embark Your Journey</h4>
              <p>
                Fill in your details to join the crew of{" "}
                <strong>Hackfest 2.0</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="storm-form">
              <div className="storm-field">
                <label className="storm-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="storm-input"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="storm-field">
                <label className="storm-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="storm-input"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="storm-field">
                <label className="storm-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="storm-input"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="storm-field">
                <label className="storm-label">College</label>
                <input
                  type="text"
                  name="college"
                  className="storm-input"
                  value={form.college}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="storm-field">
                <label className="storm-label">Branch</label>
                <select
                  name="branch"
                  className="storm-input"
                  value={form.branch}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Branch</option>
                  <option value="ME">ME</option>
                  <option value="IT">IT</option>
                  <option value="EE">EE</option>
                </select>
              </div>

              <div className="storm-field">
                <label className="storm-label">Year</label>
                <select
                  name="year"
                  className="storm-input"
                  value={form.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                </select>
              </div>

              {message && (
                <div className="storm-message" data-aos="fade-in">
                  {message}
                </div>
              )}

              <button type="submit" className="storm-btn" disabled={loading}>
                <span className="storm-btn-inner">
                  {loading ? "Submitting..." : "Join the Crew"}
                </span>
              </button>

              <p className="storm-note">
                You’ll receive further instructions on your registered email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;