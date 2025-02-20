import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import "./NavigationBar.css"; // Custom CSS
import { Container } from "react-bootstrap";

export default function NavigationBar() {
  const location = useLocation();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Track active section when scrolling
    Events.scrollEvent.register("end", (to) => setActive(to));
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo" style={{ marginLeft: "1rem" }}>
        <Link to="/">Rafael Techie Co.</Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul
        className={`nav-links ${menuOpen ? "open" : ""}`}
        style={{ marginRight: "1rem" }}
      >
        <li>
          {location.pathname === "/" ? (
            <ScrollLink
              to="home"
              smooth={true}
              offset={-50}
              duration={500}
              className={active === "home" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </ScrollLink>
          ) : (
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <ScrollLink
              to="about"
              smooth={true}
              offset={-50}
              duration={500}
              className={active === "about" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </ScrollLink>
          ) : (
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <ScrollLink
              to="skills"
              smooth={true}
              offset={-50}
              duration={500}
              className={active === "skills" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </ScrollLink>
          ) : (
            <Link to="/skills" onClick={() => setMenuOpen(false)}>
              Skills
            </Link>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-50}
              duration={500}
              className={active === "projects" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </ScrollLink>
          ) : (
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-50}
              duration={500}
              className={active === "contact" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </ScrollLink>
          ) : (
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
