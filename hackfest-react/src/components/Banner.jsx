import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner-parallax">
      <div className="video-container">
        <video autoPlay muted loop playsInline id="background-video">
          {/* add this video into public/assets/videos if you have it */}
          <source src="/assets/videos/pirate_back.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="home_container" id="home-section">
        <div className="tagline-wrapper">
          <h2 className="tagline-typewriter">
            Rec Banda Ultimate Tech Showdown
          </h2>
        </div>

        <div className="home_date-container">
          <div className="banner-video-overlay" style={{ marginTop: "5rem" }}>
            <img
              src="/assets/img/new_assets/hacktag.png"
              className="hackcbs_landing"
              alt="Hackfest 2.0"
            />
          </div>

          <p style={{ textAlign: "center", marginTop: "30px" }}>
            <img
              src="/assets/img/new_assets/bannner_date.png"
              alt="10th-11th December"
              width="400"
              height="80"
            />
          </p>
        </div>

        <div className="home_button-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.namespace.world/events/c547d445-fa63-4eff-bda6-80a6404254fe"
          >
            <button className="button-register banner-button-style">
              <i className="fa-solid fa-up-right-from-square" />
              &nbsp;Apply for Hackathon
            </button>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <button
              className="button-discord banner-button-style"
              onClick={() => (window.location.href = "/register")}
            >
              {/* <i className="fa-solid fa-terminal" />
<i className="fa-solid fa-bug" />
<i className="fa-solid fa-laptop-code" /> */}
              <i className="fa-solid fa-code" />
              &nbsp;Codeathon
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
