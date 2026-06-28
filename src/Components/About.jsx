import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-header">
          <h2>About Me</h2>
          <p>A little about who I am and what I build.</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-description">
              Hi, I'm <strong>Khrystyn Wooden</strong>, a UX-focused Full-Stack
              Developer graduating in <strong>July 2026</strong>. I enjoy
              creating modern, responsive web applications that combine clean
              design, intuitive user experiences and scalable code.
            </p>
            <p className="about-description">
              What excites me most about software development is turning ideas
              into products that people genuinely enjoy using. Whether I'm
              designing an interface in React or building APIs with Node.js and
              MongoDB, I enjoy creating applications that are both visually
              appealing and functional.
            </p>
            <p className="about-description">
              Recently, I've been developing projects including a bakery
              website, a task management application, a JavaScript-based snake
              game and this portfolio — all of which showcase my skills in
              React, Node.js, MongoDB and modern web development practices.
            </p>
          </div>

          <div className="about-card">
            <h3>Quick Facts</h3>
            <ul>
              <li>
                <strong>Location:</strong> Indianapolis, Indiana, USA
              </li>
              <li>
                <strong>Education:</strong> Full-Stack Development Bachelor's
                Degree (Expected July 2026)
              </li>
              <li>
                <strong>Experience:</strong> 2+ years of experience in web
                development and UX design.
              </li>
              <li>
                <strong>Interests:</strong> Building responsive web
                applications, exploring new technologies, and creating intuitive
                user experiences.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
