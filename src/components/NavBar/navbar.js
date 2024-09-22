import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import contactImg from "../../assets/images/contact.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About Me</Link>
        <Link className="desktopMenuListItem">Skills</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="ContactImage" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};
export default Navbar;
