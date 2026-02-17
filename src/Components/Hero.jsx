import React from "react";
import "./Hero.css";

function Hero({ kvlogo }) {
  return (
    <section className="hero">
      <div className="hero-logo">
        <img src={kvlogo} alt="Khrystyn Wooden" className="profile-image" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Turning Complex Ideas Into Scalable Applications
        </h1>

        <h2 className="hero-subtitle">
          Full-Stack Web & Mobile Developer | UX-Driven. Backend-Strong
        </h2>

        <p className="hero-description">
          Web Development student graduating in July 2026. I build and design
          responsive, accessible, and user-friendly web applications powered by
          scalable APIs using React, Node.js, MongoDB and React Native. Focused
          on clean architectures, efficient code, and seamless user experiences.
          Always eager to learn new technologies and collaborate on innovative
          projects.
        </p>

        <p className="hero-technologies">
          React ~ Vite ~ Node.js ~ MongoDB ~ Modern JavaScript ~ RESTful APIs ~
          React Native
        </p>
      </div>

      <p className="currently-building">
        <span>
          Currently building a personal portfolio website to showcase my
          projects and skills, and to share my journey as a developer. Also
          working on a React Native app for Full Sail University's Mobile
          Development course.
        </span>
      </p>

      <div className="hero-links">
        <a href="https://github.com/WoodenKhrystyn-FS">GitHub Profile</a>
        <a href="https://www.linkedin.com/in/khrystyn-wooden-b23212176/">
          LinkedIn Profile
        </a>
        <a href="mailto:kvwooden@student.fullsail.edu">
          kvwooden@student.fullsail.edu
        </a>
      </div>
    </section>
  );
}

export default Hero;
