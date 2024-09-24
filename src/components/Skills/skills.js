import React from "react";
import "./skill.css";
import UIDesign from "../../assets/images/icon2.png";
import WebDesign from "../../assets/images/icon3.png";
import AppDesign from "../../assets/images/icon4.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> My Skills </span>
      <span className="skillDesc">
        I'm all about bringing ideas to life, whether through design or code.
        Check out some of the skills I've picked up along the way.
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Programming Languages</h2>
            <p>JavaScript, HTML, CSS, C++</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frameworks & Libraries</h2>
            <p>React, jQuery, Node.js, Bootstrap, Tailwind</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Database Management</h2>
            <p>MongoDB, MySQL</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Development Tools</h2>
            <p> Git, Visual Studio Code, VS Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
