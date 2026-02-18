import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="section-title">About Me...</h2>
        <p className="about-description">
          Hello! I'm <strong>Khrystyn Wooden</strong>, a Web Development student
          graduating in <strong>July 2026</strong> with a focus on JavaScript
          and React. I specialize in building dynamic, responsive web
          applications that provide clean modern designs and functionality.
        </p>
        <p className="about-description">
          I have a passion for learning new technologies and applying them toI
          solve real-world problems. My projects range from personal portfolio
          websites to interactive games, showcasing my ability to create
          engaging user experiences. I am eager to collaborate on innovative
          projects and contribute to the tech community.
        </p>
        <div className="skills-list">
          <span>
            <strong>Core Skills:</strong> JavaScript, React, HTML, CSS, Git,
            Node.js, MongoDB, Express
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
