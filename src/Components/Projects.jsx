import React from "react";
import "./Projects.css";

const projectList = [
  {
    title: "Project 1: Personal Portfolio Website",
    description:
      "A responsive portfolio website built with React and styled-components. It showcases my skills, projects, and contact information.",
    link: "#projects",
    github: "https://github.com/WoodenKhrystyn-FS",
  },
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
          {/* <h3>Project 1: Personal Portfolio Website</h3>
          <p>
            {" "}
            A responsive portfolio website built with React and
            styled-components. It showcases my skills, projects, and contact
            information.
          </p> */}
          <a href={projectList[0].link}>Projects</a>
        </div>
      </div>
    </section>
  );
}
