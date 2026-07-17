import React from "react";
import img1 from "../assets/portfolio.png";
import img2 from "../assets/snake.png";
import img4 from "../assets/TLLB.png";
import "./Projects.css";

const projectList = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "Responsive portfolio  with dynamic components, smooth navigation and modern UI design.",
    tech: ["React", "CSS", "Vite"],
    image: img1,
    github: "https://github.com/WoodenKhrystyn-FS/my-portfolio",
    live: "https://khrystynwooden.netlify.app/",
  },
  {
    id: "snake",
    title: "Snake Game",
    description: "Classic snake game with dynamic speed and score tracking.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: img2,
    github: "https://github.com/WoodenKhrystyn-FS/SnakeGame",
    live: "http://127.0.0.1:5500/index.html ",
  },

  {
    id: "tllb",
    title: "Bakery Website - (Course Project)",
    description:
      "Responsive bakery site with product showcase and contact form.",
    tech: ["React", "CSS", "Vite"],
    image: img4,
    github: "https://github.com/WoodenKhrystyn-FS/nessies-app",
    live: "https://threelittleladiesbakery.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-description">Current Projects:</p>
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
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Link
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
