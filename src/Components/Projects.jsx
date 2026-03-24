import React from "react";
import "./Projects.css";

const projectList = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description: "Modern responsive portfolio showcasing projects and skills.",
    tech: "React • CSS • Vite",
    github: "https://github.com/...",
    live: "#",
  },
  {
    id: "snake",
    title: "Snake Game",
    description: "Classic snake game with dynamic speed and score tracking.",
    tech: "JavaScript • HTML • CSS",
    github: "https://github.com/...",
  },
  {
    id: "nails",
    title: "Nail Booking System",
    description:
      "Full-stack booking app with scheduling and service management.",
    tech: "React • Node • MongoDB",
    github: "https://github.com/...",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">A selection of my recent work:</p>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project=tech">{project.tech}</p>
            <div className="project-links">
              {project.live && (
                <a href={project.live} className="project-btn primary">
                  Live Demo
                </a>
              )}
              <a href={project.github} className="project-btn secondary">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
