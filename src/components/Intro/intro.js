import React from "react";
import "./intro.css";
import bg from "../../assets/images/linhImg.png";

const Intro = () => {
  return (
    <section
      id="intro"
      className="container-fluid d-flex flex-column align-items-center justify-content-center"
    >
      {/* Wrapper for the profile image with geometric background */}
      <div className="profile-img-wrapper">
        <img
          src={bg}
          alt="Profile"
          className="bg img-fluid profile-img animate-scaleUp"
        />
      </div>

      {/* Intro content */}
      <div className="introContent text-center animate-fadeIn">
        <h1 className="hello animate-slideUp">Hello,</h1>
        <h1 className="introText animate-slideUp">
          I'm <span className="introName">Linh Klatt</span>
        </h1>
        <p className="introPara animate-fadeIn">
          Aspiring Full-Stack Developer | Software Engineering Student <br />
          Passionate about Web Technologies and Innovative Solutions
        </p>
        <a href="/Resume.pdf" download className="btn w-30 animate-slideUp">
          Resume
        </a>
      </div>
    </section>
  );
};

export default Intro;
