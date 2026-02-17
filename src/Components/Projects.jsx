import React from "react";
import "./Projects.css";

const projectList = [
  {
    title: "Project 1: Personal Portfolio Website",
    description:
      "A responsive portfolio website built with React and styled-components. It showcases my skills, projects, and contact information.",
    link: "https://khrystyn-wooden.netlify.app",
    github: "https://github.com/WoodenKhrystyn-FS/my-portfolio",
  },
  {
    title: "Project 2: Snake Game",
    description:
      "A classic Snake game implemented using JavaScript, HTML, and CSS. The game features smooth controls, increasing difficulty levels, and a high score tracker.",
    link: "#projects",
    github: "https://github.com/WoodenKhrystyn-FS/Snake-Game",
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-description">
        {" "}
        Here are some of the projects I have worked on:
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
  );
}

export default Projects;
export default Projects;
