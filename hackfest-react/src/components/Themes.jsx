import React from "react";
import './Themes.css'
const themes = [
  { img: "/assets/img/themes_new/Cloud.svg", label: "Cloud" },
  { img: "/assets/img/themes_new/EdTech.svg", label: "EdTech" },
  { img: "/assets/img/themes_new/AI.svg", label: "Artificial\nIntelligence" },
  { img: "/assets/img/themes_new/Fintech.svg", label: "FinTech" },
  { img: "/assets/img/themes_new/IOT.svg", label: "IOT" },
  { img: "/assets/img/themes_new/Health Care.svg", label: "Health Tech" },
  {
    img: "/assets/img/themes_new/OpenInnovation.svg",
    label: "Open\nInnovation",
  },
  { img: "/assets/img/themes_new/web.svg", label: "Web3" },
];

const Themes = () => {
  return (
    <section id="themes">
      <div className="themes-bg">
        <div className="themes-bg-cover pt100 pb100">
          <div className="container">
            <div className="section_title">
              <h3
                className="title-dark"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
              >
                Hackathon Themes
              </h3>
            </div>

            <div className="container">
              <div className="theme-links-row">
                {/* Rulebook Card */}
                <a
                  href="https://drive.google.com/file/d/1UB5Y9XsNBU5hlPdOX9YpRa-zdbdJgrG8/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="theme-link-card"
                >
                  <i className="fa-solid fa-book theme-link-icon"></i>
                  <span>Rulebook</span>
                </a>

                {/* Problem Statement Card */}
                <a
                  href="/assets/docs/Problem_Statements.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="theme-link-card"
                >
                  <i className="fa-solid fa-file-lines theme-link-icon"></i>
                  <span>Problem Statement</span>
                </a>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row lgx-gallery-area">
              {themes.map((theme, idx) => (
                <div
                  key={idx}
                  className="col-md-3 col-xs-6 col-sm-6"
                  style={{ padding: 0 }}
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="top-bottom"
                >
                  <div className="lgx-gallery-single">
                    <figure>
                      <img src={theme.img} alt={theme.label} loading="lazy" />
                      <figcaption className="lgx-figcaption">
                        <div className="lgx-hover-link">
                          <div className="lgx-vertical">
                            <p className="theme-input">
                              {theme.label.split("\n").map((line, i) => (
                                <React.Fragment key={i}>
                                  {line}
                                  {i < theme.label.split("\n").length - 1 && (
                                    <br />
                                  )}
                                </React.Fragment>
                              ))}
                            </p>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Themes;
