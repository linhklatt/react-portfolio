import React from "react";

const projects = [
  {
    title: "Project 1",
    description:
      "Weather DashBoard Application can show you the current and the next 5 days forecast weather for multiple cities. By input your desire city in the search box, you can see the weather pops up after you hit the search button. The dashboard will show you the Date, Temp, Wind, and Humidity of the city that you choose.",
    link: "https://linhklatt.github.io/weather-dashboard/",
  },
  {
    title: "Project 2",
    description:
      "A website that displays a map with hidden gems placed using markers. The user can select the marker and view and image, the address, and the 3 most recent reviews for the location. User wil also be able to submit their own hidden gems on the submit page.",
    link: "https://eddygoto.github.io/Project-1-Travel-Site/",
  },
  {
    title: "Project 3",
    description:
      "Introducing an epic browser-based fighting game that immerses players in a fantasy world where they can choose to be a powerful Warrior, a skilled Archer, or a masterful Mage. Each class has its own unique characteristics, strengths, and weaknesses, allowing players to customize their gameplay experience and compete against other characters in real-time battles. With stunning graphics, smooth animations, and challenging AI opponents, this game will keep players coming back for more action-packed adventure.",
    link: "https://dbfighterz.herokuapp.com/",
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
