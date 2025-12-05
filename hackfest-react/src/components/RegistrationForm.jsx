import React, { useState } from "react";
import "./RegistrationForm.css";

// Use environment variable if available (best practice for VITE projects)
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://sdc-hackfest-2-0-sever.onrender.com";

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
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/registrations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Registration failed due to server error."
        );
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        college: "",
        branch: "",
        year: "",
      });

      // Redirect to success page
      window.location.href = "/success";
    } catch (err) {
      setMessage(`❌ Error: ${err.message || "Could not connect to server."}`);
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

      <div className="container storm-container" data-aos="fade-up">
        {/* GFG Sponsor Banner */}
        <div className="gfg-sponsor-banner" data-aos="fade-down">
          <p className="gfg-sponsor-text">Sponsored By</p>
          <a
            href="https://www.geeksforgeeks.org/"
            target="_blank"
            rel="noreferrer"
            className="wa-join-btn"
          >
            <img
              src="/assets/img/sponsors/gfg-gg-logo.svg"
              alt="GeeksforGeeks"
              className="gfg-sponsor-logo"
            />
          </a>
        </div>

        <div className="section_title text-center" data-aos="fade-down">
          <h3 className="storm-title">
            Hackfest 2.0 <span>Codeathon</span> Registration
          </h3>
          <p className="storm-subtitle">
            Step into the world of <span>GeeksforGeeks</span> & coding
            excellence.
          </p>
        </div>

        <div
          className="reg-center"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <div className="storm-card">
            <div className="storm-card-header">
              <h4>Register Now</h4>
              <p>
                Fill in your details to secure your slot in{" "}
                <strong>Hackfest 2.0 Codeathon</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="storm-form">
              <div className="storm-field">
                <label className="storm-label">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name(e.g., Abc )"
                  className="storm-input"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="storm-field">
                <label className="storm-label"> Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email (e.g., sdc@gmail.com)"
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
                  placeholder="Enter your phone no. (e.g., 91- XXXXXXXXXX)"
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
                  placeholder="Enter your college name"
                  className="storm-input"
                  value={form.college}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="storm-field">
                <label className="storm-label">Branch</label>
                <input
                  type="text"
                  name="branch"
                  placeholder="Enter your branch (e.g., IT)"
                  className="storm-input"
                  value={form.branch}
                  onChange={handleChange}
                  required
                />
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

              {/* <div className="gfg-whatsapp-box" data-aos="zoom-in">
                <span className="wa-title">
                  Join the Official Codeathon WhatsApp Group
                </span>

                <a
                  href="https://chat.whatsapp.com/KT21RMGAb5r9y4M6B5nr3y"
                  target="_blank"
                  rel="noreferrer"
                  className="wa-join-now-btn"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  &nbsp; Join Now
                </a>
              </div> */}

              {/* <p className="gfg-required-msg">
                ⚠ Joining the WhatsApp group is <strong>COMPULSORY</strong> for
                receiving event updates.
              </p> */}

              {message && <div className="storm-message">{message}</div>}

              <button type="submit" className="storm-btn" disabled={loading}>
                <span className="storm-btn-inner">
                  {loading ? "Wait Submitting..." : "Join the Codeathon"}
                </span>
              </button>

              <p className="storm-note">
                You'll receive event details on your registered email.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* ===========================
          ⭐ FULL SCREEN LOADER
      =========================== */}
      {loading && (
        <div className="storm-loader-overlay">
          <div className="storm-loader"></div>
        </div>
      )}
    </section>
  );
};

export default RegistrationForm;
