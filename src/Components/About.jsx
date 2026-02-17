import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p>
          Hello! I'm <strong>Khrystyn Wooden</strong>, a Web Development student
          graduating in <strong>July 2026</strong>. My specialty is in
          JavaScript and React, and I am passionate about building dynamic and
          responsive web applications. I am eager to apply my skills and
          knowledge in real-world projects and contribute to innovative
          solutions in the tech industry.
        </p>
        <p className="about-description">
          I have a strong foundation in front-end development and am
          continuously learning new technologies to enhance my skill set. I am
          excited about the opportunities that lie ahead and am committed to
          growing as a developer while making meaningful contributions to the
          field of web development.
        </p>
        <div className="skills-list">
          <span>
            <strong>Skills:</strong> JavaScript, React, HTML, CSS, Git, and 
          </span>
        </div>
      </div>

    </section>
  );
}

export default About;
