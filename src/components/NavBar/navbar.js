import "./navbar.css";
import logo from "../../assets/images/logo.png";

import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo */}

        <img src={logo} alt="Logo" className="logo" />

        {/* Hamburger button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered Links */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Button (aligned to the right) */}
        <button
          className="btn btn-primary contact-btn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
