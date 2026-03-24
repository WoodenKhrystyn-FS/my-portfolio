import React from "react";
import "./Skills.css";

function Skills() {
  const skillsList = {
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    backend: ["Node.js", "Express", "REST APIs"],
    database: ["MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "Webpack", "npm"],
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-description">
        Technologies I use to build scalable and user-focused applications
      </p>

      <div className="skills-grid">
        {Object.entries(skillsList).map(([category, items]) => (
          <div key={category} className="skill-card">
            <h3>{category}</h3>

            <div className="skill-tags">
              {items.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
