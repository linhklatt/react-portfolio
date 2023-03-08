import React from "react";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis semper velit.",
    link: "https://project1.com",
  },
  {
    title: "Project 2",
    description:
      "Mauris facilisis odio eget nunc varius, vel sollicitudin lectus vehicula.",
    link: "https://project2.com",
  },
  {
    title: "Project 3",
    description:
      "Nullam tincidunt arcu vitae nisi dapibus venenatis. Sed commodo tincidunt urna, ut hendrerit est euismod vel.",
    link: "https://project3.com",
  },
];

const Portfolio = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View project</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
