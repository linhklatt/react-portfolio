import "./navbar.css";
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
        <h1 className="logo">LK.</h1>

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
              <Link className="nav-link" to="intro" smooth duration={500}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="skills" smooth duration={500}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="projects" smooth duration={500}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="experience" smooth duration={500}>
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="education" smooth duration={500}>
                Education
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Button (aligned to the right) */}
        <button
          className="btn btn-primary contact-btn"
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
