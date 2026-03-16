import React from "react";
import "./Projects.css";

const projectList = [
  {
    title: "Project 1: Personal Portfolio Website",
    description:
      "A responsive portfolio website built with React and styled-components. It showcases my skills, projects, and contact information.",
    link: "#projects",
    github: "https://github.com/WoodenKhrystyn-FS/my-portfolio",
  },
  {
    title: "Project 2: Snake Game",
    description:
      "A classic Snake game implemented using JavaScript, HTML, and CSS. The game features smooth controls, increasing difficulty levels, and a high score tracker.",
    link: "#projects",
    github: "https://github.com/WoodenKhrystyn-FS/SnakeGame",
  },
  {
    title: "Project 3: Nail Portfolio and Booking System",
    description:
      "A responsive nail business portfolio website built React and components. This site features a local nail techinician offering nail care services with nail sets gallery, contact information, leave reviews, and luxury- styled pages with a booking system for appointments. ",
    link: "#projects",
    github: "https://github.com/WoodenKhrystyn-FS/pinkyswear-nails",
  }
];

function Projects() {
  return (
    <div>
      <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">
        {" "}
        Current projects in progress or close to completion:
      </p>
      <div className="project-grid">
        <div className="project-card">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">
                View Project
              </a>
              <a href={project.github} className="project-link">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    
  );
}

export default Projects;

