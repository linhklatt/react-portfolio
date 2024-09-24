import React from "react";
import "./projects.css";
import Project1 from "../../assets/images/project-img-1.jpg";
import Project2 from "../../assets/images/project-img-2.jpg";
import Project3 from "../../assets/images/project-img-3.jpg";

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2 className="projectsTitle">My Projects</h2>
      <p className="projectsDesc">
        A showcase of some of my best work, from websites to full-stack
        applications.
      </p>
      <div className="projectsImgs row">
        <div className="col-md-4">
          <img src={Project1} alt="project1" className="projectImg" />
        </div>
        <div className="col-md-4">
          <img src={Project2} alt="project2" className="projectImg" />
        </div>
        <div className="col-md-4">
          <img src={Project3} alt="project3" className="projectImg" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
