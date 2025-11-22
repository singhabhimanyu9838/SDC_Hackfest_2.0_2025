import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header>
      <div id="lgx-header" className="lgx-header">
        <div className="lgx-header-position lgx-header-position-white lgx-header-position-fixed">
          <div className="lgx-container-fluid">
            <nav className="navbar navbar-default lgx-navbar">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div className="lgx-logo">
                  <a
                    href="#home-section"
                    onClick={(e) => handleNavClick(e, "#home-section")}
                  >
                    <img
                      src="/assets/img/logo.png"
                      id="top-logo-img"
                      alt="Hackfest Logo"
                    />
                  </a>
                </div>
              </div>

              <div
                id="navbar"
                className={`navbar-collapse lgx-3 ${
                  open ? "in" : "collapse"
                }`}
              >
                <ul className="nav navbar-nav mr-auto lgx-nav mt-3">
                  <li className="nav-item">
                    <a
                      href="#about"
                      onClick={(e) => handleNavClick(e, "#about")}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#themes"
                      onClick={(e) => handleNavClick(e, "#themes")}
                    >
                      Themes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#prizes"
                      onClick={(e) => handleNavClick(e, "#prizes")}
                    >
                      Prizes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#schedule"
                      onClick={(e) => handleNavClick(e, "#schedule")}
                    >
                      Schedule
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#sponsors"
                      onClick={(e) => handleNavClick(e, "#sponsors")}
                    >
                      Sponsors
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#teams"
                      onClick={(e) => handleNavClick(e, "#teams")}
                    >
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>
                      FAQ&apos;s
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#contact"
                      onClick={(e) => handleNavClick(e, "#contact")}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
