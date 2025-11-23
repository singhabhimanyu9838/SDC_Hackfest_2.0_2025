import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [shrink, setShrink] = useState(false);

  const sections = [
    "about",
    "themes",
    "prizes",
    "schedule",
    "sponsors",
    "teams",
    "faq",
    "contact",
    "result", // <— NEW PAGE
  ];

  // Scroll Spy + Shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShrink(true);
      else setShrink(false);

      let current = "";
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.clientHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            current = sec;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to in-page sections
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className={`glass-navbar ${shrink ? "shrink" : ""}`}>
      {/* LOGO */}
      <div className="logo-container">
        <img src="/assets/img/logo.png" alt="logo" className="navbar-logo" />
      </div>

      {/* Desktop Nav */}
      <ul className="nav-links">
        {sections.map((sec) => (
          <li key={sec}>
            {/* SPECIAL CASE — RESULT PAGE */}
            {sec === "result" ? (
              <a
                href="/result"
                className="result-link"
                style={{ cursor: "pointer" }}
              >
                Result
              </a>
            ) : (
              <a
                onClick={() => scrollTo(sec)}
                className={activeSection === sec ? "active-nav" : ""}
                style={{ cursor: "pointer" }}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="mobile-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {sections.map((sec) => (
          <li key={sec}>
            {/* SPECIAL CASE — RESULT PAGE */}
            {sec === "result" ? (
              <a href="/result">Result</a>
            ) : (
              <a
                onClick={() => scrollTo(sec)}
                className={activeSection === sec ? "active-nav" : ""}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
