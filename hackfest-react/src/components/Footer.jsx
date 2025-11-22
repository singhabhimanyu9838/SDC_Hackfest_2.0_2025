// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="lgx-footer" className="lgx-footer">
        <div className="lgx-inner-footer">
          <div className="container-fluid">
            <div className="row">
              <div className="lgx-footer-area">
                <div className="col-md-3" style={{ padding: 0 }}>
                  <div className="lgx-footer-single" style={{ textAlign: "center" }}>
                    <a href="#home-section" className="lgx-scroll">
                      <img
                        src="/assets/img/hackfest11.png"
                        width="300"
                        alt="Logo"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-md-3 address_footer">
                  <div className="lgx-footer-single">
                    <h3 className="footer-title">Venue</h3>
                    <iframe
                      title="REC Banda Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.280140224647!2d80.5411776743905!3d25.311694348639535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39834c8003a76ddf%3A0xebec11574f084a77!2sRajkiya%20Engineering%20College%2C%20Banda!5e0!3m2!1sen!2sin!4v1694601123456!5m2!1sen!2sin"
                      width="215"
                      height="150"
                      style={{
                        border: "2rem",
                        borderColor: "white",
                        borderRadius: "0.4rem",
                      }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <p style={{ color: "#45b6b6" }}>
                      <b>9-10 December 2025</b>
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Rajkiya+Engineering+College,+Banda"
                      className="lgx-scroll resource_color"
                    >
                      RAJKIYA ENGINEERING COLLEGE BANDA
                    </a>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="lgx-footer-single">
                    <h3 className="footer-title">Resources</h3>
                    <a
                      href="/assets/docs/hackCBS_proposal_7.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="resource_color"
                    >
                      Sponsorship Brochure
                    </a>

                    <h3 className="footer-title">Archives</h3>
                    <a
                      href="https://v2.hackcbs.tech11"
                      target="_blank"
                      rel="noreferrer"
                      className="resource_color"
                    >
                      Hackfest 1.0
                    </a>
                  </div>
                </div>

                <div className="col-md-1">
                  <div className="lgx-footer-single">
                    <h3 className="footer-title">Community</h3>
                    <a
                      href="http://bit.ly/hackcbs_discord"
                      target="_blank"
                      rel="noreferrer"
                      className="resource_color"
                    >
                      <i className="fab fa-discord" /> Discord
                    </a>
                    <br />
                    <a
                      href="https://t.me/joinchat/LlOuzVQ1_GSIbQ8oodUOwQ"
                      target="_blank"
                      rel="noreferrer"
                      className="resource_color"
                    >
                      <i className="fab fa-telegram" /> Telegram
                    </a>
                    <br />
                    <a
                      href="https://github.com/hackcbs"
                      target="_blank"
                      rel="noreferrer"
                      className="resource_color"
                    >
                      <i className="fab fa-github" /> Github
                    </a>
                  </div>
                </div>

                <div className="col-md-3 social" style={{ padding: "0 3vw" }}>
  <div className="lgx-footer-single">
    <h3 className="footer-title">Social Connection</h3>
    <p className="text">Follow us for latest updates:</p>

    <ul className="list-inline lgx-social-footer">

      {/* Facebook */}
      <li>
        <a href="https://www.facebook.com/hackcbs1/" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f" />
        </a>
      </li>

      {/* Twitter / X */}
      <li>
        <a href="https://www.twitter.com/hackcbs1/" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter" />
        </a>
      </li>

      {/* Instagram */}
      <li>
        <a href="https://www.instagram.com/student_developer_club/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram" />
        </a>
      </li>

      {/* LinkedIn */}
      <li>
        <a href="https://www.linkedin.com/company/student-developer-club-rec-banda/posts/?feedView=all" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in" />
        </a>
      </li>

      {/* YouTube */}
      <li>
        <a href="https://www.youtube.com/@studentdeveloperclub" target="_blank" rel="noreferrer">
          <i className="fab fa-youtube" />
        </a>
      </li>

      {/* GitHub */}
      <li>
        <a href="https://github.com/studentdeveloperclub" target="_blank" rel="noreferrer">
          <i className="fab fa-github" />
        </a>
      </li>

      {/* Discord */}
      <li>
        <a href="https://discord.com/invite/YOUR_INVITE_LINK" target="_blank" rel="noreferrer">
          <i className="fab fa-discord" />
        </a>
      </li>

      {/* WhatsApp */}
      <li>
        <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp" />
        </a>
      </li>

      {/* Telegram */}
      <li>
        <a href="https://t.me/YOUR_CHANNEL" target="_blank" rel="noreferrer">
          <i className="fab fa-telegram" />
        </a>
      </li>

      {/* Website / Globe */}
      <li>
        <a href="https://yourwebsite.com" target="_blank" rel="noreferrer">
          <i className="fas fa-globe" />
        </a>
      </li>

    </ul>
  </div>
</div>

              </div>

              {/* Footer bottom text */}
              <div className="row">
                <div className="footer-text-container">
                  <hr />
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <h5 style={{ color: "white" }}>
                      <center>
                        <a
                          href="https://github.com/ItsMuskanGoyal"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: "white",
                            textDecoration: "none",
                          }}
                        >
                          Designed with ❤️ by Team SDC
                        </a>
                      </center>
                    </h5>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </footer>
  );
};

export default Footer;
