import React from "react";
import "./intro.css";
import bg from "../../assets/images/linhImg.png";
import btnImg from "../../assets/images/contact.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm
          <span className="introName"> Linh </span> <br />
          Software Developer
        </span>
        <p className="introPara"> WRITE YOUR INTRO HERE</p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};
export default Intro;
