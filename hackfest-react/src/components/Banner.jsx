import React from "react";

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
        <div className="home_date-container">
          <div className="banner-video-overlay" style={{ marginTop: "5rem" }}>
            <img
              src="/assets/img/new_assets/WhatsApp_Image_2025-04-03_at_22.32.21_0297acc1-removebg-preview.png"
              className="hackcbs_landing"
              alt="Hackfest 2.0"
            />
          </div>

          <p style={{ textAlign: "center", marginTop: "30px" }}>
            <img
              src="/assets/img/new_assets/bannner_date.png"
              alt="9th-10th December"
              width="400"
              height="80"
            />
          </p>
        </div>

        <div className="home_button-container">
          <a
            target="_blank"
            rel="noreferrer"
            href=""
          >
            <button className="button-register banner-button-style">
              <i className="fa-solid fa-up-right-from-square" />
              &nbsp;Apply for Hackathon
            </button>
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
           <button
  className="button-discord banner-button-style"
  onClick={() => (window.location.href = "/register")}
>
  <i className="fa-brands fa-discord" />
  &nbsp;Codeathon
</button>


          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
