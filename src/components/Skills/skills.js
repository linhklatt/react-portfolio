import React from "react";
import "./skill.css";
import UIDesign from "../../assets/images/icon2.png";
import WebDesign from "../../assets/images/icon3.png";
import AppDesign from "../../assets/images/icon4.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> What I do </span>
      <span className="skillDesc">
        Write your skills here. What you do?Write your skills here. What you
        do?Write your skills here. What you do?Write your skills here. What you
        do?
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is demo text,you can write your own content here.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>This is demo text,you can write your own content here.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is demo text,you can write your own content here.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
