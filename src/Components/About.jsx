import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <p className="about-description">
          <strong>Hello!</strong> I'm a Web Development student graduating{" "}
          <strong>July 2026</strong>, with a focus of JavaScript and React.
          Specializing in building dynamic, responsive web applications that
          provide clean modern designs and functionality.
        </p>
        <p className="about-description">
          I have a passion for learning new technologies and applying them to
          solve real-world problems. My projects range from personal portfolio
          websites, interactive games to applications for businesses and or
          smaller scale projects to showcase my ability to create engaging user
          experiences. I am eager to collaborate on innovative projects and
          contribute to the tech community.
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
