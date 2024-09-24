import React from "react";
import "./projects.css";
import Project1 from "../../assets/images/project-img-1.jpg";
import Project2 from "../../assets/images/project-img-2.jpg";
import Project3 from "../../assets/images/project-img-3.jpg";

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <h2 className="projectsTitle"> My Projects </h2>
        <span className="projectsDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <div className="projectsImgs">
          <img src={Project1} alt="project1" className="projectImg" />
          <img src={Project2} alt="project2" className="projectImg" />
          <img src={Project3} alt="project3" className="projectImg" />
        </div>
      </section>
    </div>
  );
};

export default Projects;
