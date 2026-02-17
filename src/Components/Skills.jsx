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
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-description">
        I have experience in a variety of technologies and tools, including:
      </p>

      <div className="skills-grid">
        <ul className="skills-list">
          {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
