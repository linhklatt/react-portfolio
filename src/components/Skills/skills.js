import React from "react";
import "./skill.css";
import javaScript from "../../assets/images/JS.svg";
import cpp from "../../assets/images/c++.png";
import html from "../../assets/images/html5.png";
import css from "../../assets/images/css3.png";
import git from "../../assets/images/git.svg";
import react from "../../assets/images/react.png";
import jQuery from "../../assets/images/jquery.svg";
import mongoDB from "../../assets/images/mongoDB.svg";
import nodejs from "../../assets/images/node-js.svg";
import bootstrap from "../../assets/images/bootstrap.svg";
import mySQL from "../../assets/images/mySQL.svg";
import vsCode from "../../assets/images/vs-code.svg";
import vsStudio from "../../assets/images/visual-studio.svg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> My Skills </span>

      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarLang">
            <img src={javaScript} alt="Language" className="skillBarImg" />
            <img src={cpp} alt="Language" className="skillBarImg" />
            <img src={html} alt="Language" className="skillBarImg" />
            <img src={css} alt="Language" className="skillBarImg" />
          </div>

          <div className="skillBarLib">
            <img src={react} alt="Library" className="skillBarImg" />
            <img src={jQuery} alt="Library" className="skillBarImg" />
            <img src={nodejs} alt="Library" className="skillBarImg" />
            <img src={bootstrap} alt="Library" className="skillBarImg" />
          </div>

          <div className="skillBarTool">
            <img src={git} alt="Tool" className="skillBarImg" />
            <img src={vsCode} alt="Tool" className="skillBarImg" />
            <img src={vsStudio} alt="Tool" className="skillBarImg" />
          </div>
          <div className="skillBarBD">
            <img src={mongoDB} alt="DB" className="skillBarImg" />
            <img src={mySQL} alt="DB" className="skillBarImg" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
