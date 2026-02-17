import React from "react";
import kvlogo from "../assets/wooden.jpeg";
import "./Hero.css";

function Hero({ kvlogo }) {
  return (
    <section className="hero">
      <div className="hero-logo">
        <img src={kvlogo} alt="Wooden" className="hero-logo-img"/>
       
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Turning Complex Ideas Into Scalable Applications
        </h1>

        <h2 className="hero-subtitle">
          Full-Stack Web & Mobile Developer | UX-Driven | Backend-Strong
        </h2>

        <p className="hero-description">
          Web Development student graduating in <strong>July 2026</strong>. I
          build and design responsive, accessible, and user-friendly web
          applications powered by scalable APIs using{" "}
          <strong>React, Node.js, MongoDB and React Native</strong>. Focused on
          clean architectures, efficient code, and seamless user experiences.
          Always eager to learn new technologies and collaborate on innovative
          projects.
        </p>

        <p className="hero-technologies">
          React | Vite | Node.js | MongoDB | Modern JavaScript | RESTful APIs |
          React Native
        </p>
      </div>

      <p className="currently-building">
        <span>
          Currently building : Personal Portfolio Website to showcase my
          projects and skills and an React app during my Full Sail University
          degree journey
        </span>
      </p>

      <div className="hero-links">
        <a href="https://github.com/WoodenKhrystyn-FS" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        <a href="https://www.linkedin.com/in/khrystyn-wooden-b23212176/" target="_blank" rel="noopener noreferrer">
          LinkedIn Profile
        </a>
        <a href="mailto:khrystyn.tender@icloud.com">Email Me</a>
      </div>
    </section>
  );
}

export default Hero;
