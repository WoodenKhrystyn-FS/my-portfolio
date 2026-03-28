import React from "react";
import "./Projects.css";

const projectList = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "Responsive portfolio  with dynamic components, smooth navigation and modern UI design.",
    tech: ["React", "CSS", "Vite"],
    image: "../public/assets/portfolio-screenshot.png",
    github: "https://github.com/...",
    live: "#",
  },
  {
    id: "snake",
    title: "Snake Game",
    description: "Classic snake game with dynamic speed and score tracking.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "../public/assets/snake.png",
    github: "https://github.com/...",
  },
  {
    id: "nails",
    title: "Nail Booking System",
    description:
      "Full-stack booking app with scheduling and service management.",
    tech: ["React", "Node", "MongoDB"],
    image: "../public/assets/nails.png",
    github: "https://github.com/...",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">A selection of my recent work:</p>
      <div className="project-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {Array.isArray(project.tech) &&
                  project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>

              <div className="project-links">
                {project.live && (
                  <a href={project.live} className="btn btn-primary">
                    Live
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
