import React from "react";
import "./Skills.css";

function Skills() {
  const skillsList = {
    frontend: [
      "🌐 HTML5",
      "🎨 CSS3",
      "🟨 JavaScript",
      "⚛ React",
      "Vite",
      "TypeScript",
    ],

    backend: ["🟩 Node.js", "Express", "REST APIs", "JWT Authentication"],
    database: ["🍃 MongoDB", "MySQL"],
    design: [
      "Responsive Design",
      "UI/UX Design",
      "Wireframing",
      "Accessibility",
    ],
    tools: ["🐙 Git", "GitHub", "Docker", "Netlify", "Figma"],
    learning: ["AWS, Advanced TypeScript"],
  };

  const skillsTitles = {
    frontend: "🎨 Frontend",
    backend: "⚙️ Backend",
    database: "🗄️ Databases",
    design: " 🎨 Design",
    tools: "🛠️ Tools",
    learning: "🌱 Currently Learning",
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-title">Tech Stack</h2>
        <p className="skills-description">
          These are the technologies and tools I use to build, design and deploy
          modernresponsive web applications with a focus on performance,
          accessiblity and user experience.
        </p>

        <div className="skills-grid">
          {Object.entries(skillsList).map(([category, items]) => (
            <div key={category} className="skill-card">
              <h3>{skillsTitles[category]}</h3>

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
      </div>
    </section>
  );
}

export default Skills;
