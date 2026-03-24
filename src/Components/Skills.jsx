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
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-description"></p>
      <div className="skills-content">
        <strong>
          <ul className="skills-list">
            {skillsList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </strong>
      </div>
    </section>
  );
}

export default Skills;
