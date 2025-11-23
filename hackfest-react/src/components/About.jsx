import React from "react";

const About = () => {
  return (
    <section className="pb100 pt100" id="about">
      <div className="about-container container">
        <div className="row align-items-center">

          {/* LEFT SIDE TEXT */}
          <div
            className="col-lg-7 col-md-12"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="section_title">
              <h3 className="title-dark">About the event</h3>
            </div>

            <div id="about-div">
              <p>
                Embarking on the next chapter of an exhilarating legacy, we
                present <b>hackfest 2.0</b>! This ultimate blend of coders,
                innovators, designers, and tech-connoisseurs is a celebration of
                expertise and creativity that promises an unparalleled
                experience. Get ready to embark on an exciting journey,
                overcoming challenges with innovative solutions!
              </p>

              <p>
                The event is a mega-fest of hackers racing against time for
                intensive development. This edition promises to redefine the
                boundaries of what is possible in hacking, where grandeur meets
                innovation.
              </p>

              <p>
                <b>Venue</b> - Rajkiya Engineering College, Banda
              </p>
              <p>
                <b>Dates</b> - 9-10 December 2025
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div
            className="col-lg-5 col-md-12 text-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src="/assets/img/new_assets/ship.png"
              alt="Event Ship"
              className="img-fluid medium-ship"
            />
          </div>
        </div>

        {/* STATS */}
        <div className="container stat_icons">
          <div className="row justify-content-center stats-row text-center">

            <div className="col-lg-2 col-6 stats">
              <lord-icon
                src="https://cdn.lordicon.com/dxjqoygy.json"
                trigger="loop"
                colors="primary:#45b6b6,secondary:#45b6b6"
                style={{ width: "80px", height: "80px" }}
              />
              <div className="counting">100+</div>
              <h5 className="clr-dark">Registrations</h5>
            </div>

            <div className="col-lg-2 col-6 stats">
              <lord-icon
                src="https://cdn.lordicon.com/nobciafz.json"
                trigger="loop"
                colors="primary:#45b6b6,secondary:#45b6b6"
                style={{ width: "80px", height: "80px" }}
              />
              <div className="counting">325+</div>
              <h5 className="clr-dark">Attendees</h5>
            </div>

            <div className="col-lg-2 col-6 stats">
              <lord-icon
                src="https://cdn.lordicon.com/jjjmlddk.json"
                trigger="loop"
                colors="primary:#45b6b6,secondary:#45b6b6"
                style={{ width: "80px", height: "80px" }}
              />
              <div className="counting">1</div>
              <h5 className="clr-dark">Colleges</h5>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
