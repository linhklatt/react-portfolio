import React from "react";
import "./intro.css";
import bg from "../../assets/images/linhImg.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section
      id="intro"
      className="container-fluid d-flex align-items-center justify-content-between"
    >
      <div className="row w-100 align-items-center">
        <div className="introContent col-md-6">
          <h1 className="hello">Hello, </h1>
          <h1 className="introText">
            I'm <span className="introName">Linh Klatt</span> <br />
          </h1>
          <p className="introPara">
            Aspiring Full-Stack Developer | Software Engineering Student <br />
            Passionate about Web Technologies and Innovative Solutions
          </p>
          <Link to="resume" smooth={true} duration={500}>
            <button className="btn btn-primary">Download Resume</button>
          </Link>
        </div>

        <div className="col-md-6 d-none d-md-flex justify-content-end">
          <img src={bg} alt="Profile" className="bg img-fluid profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
