import React from "react";
import "./Skills.css";

function Skills() {
  const skillsList = [
    "Frontend Development: HTML, CSS, JavaScript, React",
    "Backend Development: Node.js, Express, REST APIs",
    "Database Management: MongoDB, MySQL",
    "Version Control: Git, GitHub",
    "Other Tools: Webpack, Babel, npm",
  ];

  return (
    <div className="skills-page">
      <section id="skills" className="skills-section">
        <div className="skills-card">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-description">
            <strong>
              <div className="skills-grid">
                <ul className="skills-list">
                  {skillsList.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
