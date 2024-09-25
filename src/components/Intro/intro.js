import React from "react";
import "./intro.css";
import bg from "../../assets/images/linhImg.png";

const Intro = () => {
  return (
    <section
      id="intro"
      className="container-fluid d-flex align-items-center justify-content-between"
    >
      <div className="row w-100 align-items-center ">
        <div className="introContent col-md-6 animate-fadeIn">
          <h1 className="hello animate-slideUp ">Hello,</h1>
          <h1 className="introText animate-slideUp">
            I'm <span className="introName">Linh Klatt</span>
          </h1>
          <p className="introPara animate-fadeIn">
            Aspiring Full-Stack Developer | Software Engineering Student <br />
            Passionate about Web Technologies and Innovative Solutions
          </p>
          <a
            href="/Resume.pdf"
            download
            className="btn btn-primary animate-slideUp "
          >
            Resume
          </a>
        </div>

        {/* Wrapper for the profile image with geometric background */}
        <div className="col-md-6 d-none d-md-flex justify-content-left">
          <div className="profile-img-wrapper">
            <img
              src={bg}
              alt="Profile"
              className="bg img-fluid profile-img animate-scaleUp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
